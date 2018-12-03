﻿using System;
using System.Collections.Generic;
using System.Linq;
using Fusee.Base.Common;
using Fusee.Base.Core;
using Fusee.Engine.Common;
using Fusee.Engine.Core;
using Fusee.Math.Core;
using Fusee.Serialization;
using Fusee.Xene;
using static System.Math;
using static Fusee.Engine.Core.Input;
using static Fusee.Engine.Core.Time;

namespace Fusee.Tutorial.Core
{
    public class HierarchyInput : RenderCanvas
    {
        private SceneContainer _scene;
        private SceneRenderer _sceneRenderer;
        private float _camAngleVert = 0;
        private float _camAngleHor = 0;
        private float _camAngleVelHor, _camAngleVelVert;
        private TransformComponent _baseTransform;
        private TransformComponent _bodyTransform;
        private TransformComponent _upperArmTransform;
        private TransformComponent _foreArmTransform;
        private const float Damping = 0.8f;
        private float Rotate = 7;

            SceneContainer CreateScene()
            {
                // Initialize transform components that need to be changed inside "RenderAFrame"
                _baseTransform = new TransformComponent
                {
                    Rotation = new float3(0, 0, 0),
                    Scale = new float3(1, 1, 1),
                    Translation = new float3(0, 0, 0)
                };
                _bodyTransform = new TransformComponent
                {
                    Rotation = new float3(0, 1.2f, 0),
                    Scale = new float3(1, 1, 1),
                    Translation = new float3(0, 6, 0)
                };
                _upperArmTransform = new TransformComponent
                {
                    Rotation = new float3(0.8f, 0, 0),
                    Scale = new float3(1, 1, 1),
                    Translation = new float3(2, 4, 0)
                };
                _foreArmTransform = new TransformComponent
                {
                    Rotation = new float3(0.8f, 0, 0),
                    Scale = new float3(1, 1, 1),
                    Translation = new float3(-2, 8, 0)
                };

                    // Setup the scene graph
                    return new SceneContainer
                    {
                        Children = new List<SceneNodeContainer>
                        {
                            // GREY BASE
                            new SceneNodeContainer
                            {
                                Components = new List<SceneComponentContainer>
                                {
                                    // TRANSFROM COMPONENT
                                    _baseTransform,

                                    // MATERIAL COMPONENT
                                    new ShaderEffectComponent
                                    {
                                    Effect = SimpleMeshes.MakeShaderEffect(new float3(0.7f, 0.7f, 0.7f), new float3(0.7f, 0.7f, 0.7f), 5)
                                    },

                                    // MESH COMPONENT
                                    SimpleMeshes.CreateCuboid(new float3(10, 2, 10))
                                }
                            },
                                // RED BODY
                                new SceneNodeContainer
                                {
                                    Components = new List<SceneComponentContainer>
                                    {
                                        _bodyTransform,
                                        new ShaderEffectComponent
                                        {
                                            Effect = SimpleMeshes.MakeShaderEffect(new float3(1, 0.3f, 0.3f), new float3(0.7f, 0.7f, 0.7f), 5)
                                        },
                                        SimpleMeshes.CreateCuboid(new float3(2, 10, 2))
                                    },
                                    Children = new List<SceneNodeContainer>
                                    {
                                    // GREEN UPPER ARM
                                    new SceneNodeContainer
                                        {
                                            Components = new List<SceneComponentContainer>
                                            {
                                                _upperArmTransform,
                                            },
                                            Children = new List<SceneNodeContainer>
                                            {
                                                new SceneNodeContainer
                                                {
                                                    Components = new List<SceneComponentContainer>
                                                    {
                                                        new TransformComponent
                                                        {
                                                            Rotation = new float3(0, 0, 0),
                                                            Scale = new float3(1, 1, 1),
                                                            Translation = new float3(0, 4, 0)
                                                        },
                                                        new ShaderEffectComponent
                                                        {
                                                            Effect = SimpleMeshes.MakeShaderEffect(new float3(0.3f, 1, 0.3f), new float3(0.7f, 0.7f, 0.7f), 5)
                                                        },
                                                        SimpleMeshes.CreateCuboid(new float3(2, 10, 2))
                                                    }
                                                },
                                                    // BLUE FOREARM
                                                    new SceneNodeContainer
                                                    {
                                                    Components = new List<SceneComponentContainer>
                                                    {
                                                        _foreArmTransform,
                                                    },
                                                    Children = new List<SceneNodeContainer>
                                                    {
                                                        new SceneNodeContainer
                                                        {
                                                            Components = new List<SceneComponentContainer>
                                                            {
                                                                new TransformComponent
                                                                {
                                                                    Rotation = new float3(0, 0, 0),
                                                                    Scale = new float3(1, 1, 1),
                                                                    Translation = new float3(0, 4, 0)
                                                                },
                                                                new ShaderEffectComponent
                                                                {
                                                                    Effect = SimpleMeshes.MakeShaderEffect(new float3(0.3f, 0.3f, 1), new float3(0.7f, 0.7f, 0.7f), 5)
                                                                },
                                                                SimpleMeshes.CreateCuboid(new float3(2, 10, 2))
                                                            }
                                                        }   
                                                    }
                                                }
                                            }
                                        },
                                    }
                                }
                            }
                        };
                    }

        // Init is called on startup. 
        public override void Init()
        {
            // Set the clear color for the backbuffer to white (100% intensity in all color channels R, G, B, A).
            RC.ClearColor = new float4(0.8f, 0.9f, 0.7f, 1);

            _scene = CreateScene();

            // Create a scene renderer holding the scene above
            _sceneRenderer = new SceneRenderer(_scene);
        }

        // RenderAFrame is called once a frame
        public override void RenderAFrame()
        {
            float speed = 33; 
            // Q als Speed control
            if ( /* Keyboard.GetButton(81*/ Mouse.RightButton == true )
            speed = speed * 2; 
            float bodyRot = _bodyTransform.Rotation.y;
            bodyRot += 0.1f * Keyboard.ADAxis * DeltaTime * speed;


           
            
            _bodyTransform.Rotation = new float3(0, bodyRot, 0);
            float upperArm = _upperArmTransform.Rotation.x;
            upperArm += 0.1f * (Keyboard.WSAxis + Keyboard.UpDownAxis) * DeltaTime * speed;
            _upperArmTransform.Rotation = new float3(upperArm, 0, 0);

            float foreArm = _foreArmTransform.Rotation.x;
            foreArm += 0.1f * (Keyboard.LeftRightAxis) * DeltaTime * speed;
            _foreArmTransform.Rotation = new float3(foreArm, 0, 0);


            // Clear the backbuffer
            RC.Clear(ClearFlags.Color | ClearFlags.Depth);

             // Animate the camera angle
             if (Mouse.LeftButton == true){
            _camAngleVelVert = -Rotate * Mouse.XVel * DeltaTime * 0.0005f;
            _camAngleVelHor = -Rotate * Mouse.YVel * DeltaTime * 0.0005f;
             }
           
            var curDamp = (float)System.Math.Exp(-Damping * DeltaTime);
                    _camAngleVelVert *= curDamp;
                    _camAngleVelHor *= curDamp;

            _camAngleHor += _camAngleVelHor;
            _camAngleVert += _camAngleVelVert;
            // Setup the camera 
            RC.View = float4x4.CreateTranslation(0, -10, 50) * float4x4.CreateRotationY(_camAngleVert) * float4x4.CreateRotationX(_camAngleHor);

            // Render the scene on the current render context
            _sceneRenderer.Render(RC);

            //   float speed = 3;
            //     _bodyTransform.Rotation = new float3(0, _bodyTransform.Rotation.y + 0.03f * Mouse.XVel * Time.DeltaTime, 0);
            //       _upperArmTransform.Rotation = new float3(_upperArmTransform.Rotation.x + speed * Keyboard.UpDownAxis * DeltaTime, 0, 0);
            //         _foreArmTransform.Rotation = new float3( _foreArmTransform.Rotation.x + speed * Keyboard.LeftRightAxis * DeltaTime,0,0);

            // Swap buffers: Show the contents of the backbuffer (containing the currently rendered farame) on the front buffer.
            Present();
        }


        // Is called when the window was resized
        public override void Resize()
        {
            // Set the new rendering area to the entire new windows size
            RC.Viewport(0, 0, Width, Height);

            // Create a new projection matrix generating undistorted images on the new aspect ratio.
            var aspectRatio = Width / (float)Height;

            // 0.25*PI Rad -> 45° Opening angle along the vertical direction. Horizontal opening angle is calculated based on the aspect ratio
            // Front clipping happens at 1 (Objects nearer than 1 world unit get clipped)
            // Back clipping happens at 2000 (Anything further away from the camera than 2000 world units gets clipped, polygons will be cut)
            var projection = float4x4.CreatePerspectiveFieldOfView(M.PiOver4, aspectRatio, 1, 20000);
            RC.Projection = projection;
        }
    }
}
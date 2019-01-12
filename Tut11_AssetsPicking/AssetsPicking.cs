using System;
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
    public class AssetsPicking : RenderCanvas
    {
        private SceneContainer _scene;
        private SceneRenderer _sceneRenderer;
        private ScenePicker _scenePicker;
        private PickResult _currentPick;
    private float3 _oldColor;
        private TransformComponent _baseTransform;
        private TransformComponent _rightRearTransform;
        private TransformComponent _rightMiddleTransform;
        private TransformComponent _rightFrontTransform;
        private TransformComponent _leftFrontTransform;
        private TransformComponent _leftMiddleTransform;
        private TransformComponent _leftRearTransform;
        private TransformComponent _turretTransform;
        private TransformComponent _towerTransform;
        private float _camAngle = 0;
        

        SceneContainer CreateScene()
        {
            // Initialize transform components that need to be changed inside "RenderAFrame"
            _baseTransform = new TransformComponent
            {
                Rotation = new float3(0, 0, 0),
                Scale = new float3(1, 1, 1),
                Translation = new float3(0, 0, 0)
            };

            // Setup the scene graph
            return new SceneContainer
            {
                Children = new List<SceneNodeContainer>
                {
                    new SceneNodeContainer
                    {
                        Components = new List<SceneComponentContainer>
                        {
                            // TRANSFROM COMPONENT
                            _baseTransform,

                            // SHADER EFFECT COMPONENT
                            new ShaderEffectComponent
                            {
                                Effect = SimpleMeshes.MakeShaderEffect(new float3(0.7f, 0.7f, 0.7f), new float3(1, 1, 1), 5)
                            },

                            // MESH COMPONENT
                            // SimpleAssetsPickinges.CreateCuboid(new float3(10, 10, 10))
                            SimpleMeshes.CreateCuboid(new float3(10, 10, 10))
                        }
                    },
                }
            };
        }

        // Init is called on startup. 
        public override void Init()
        {
            // Set the clear color for the backbuffer to white (100% intensity in all color channels R, G, B, A).
            RC.ClearColor = new float4(0.8f, 0.9f, 0.7f, 1);

            _scene = AssetStorage.Get<SceneContainer>("tank.fus");
            _rightRearTransform = _scene.Children.FindNodes(node => node.Name == "WRB")?.FirstOrDefault()?.GetTransform();
            _leftRearTransform = _scene.Children.FindNodes(node => node.Name == "WLB")?.FirstOrDefault()?.GetTransform();
            _rightMiddleTransform = _scene.Children.FindNodes(node => node.Name == "WRM")?.FirstOrDefault()?.GetTransform();
            _leftMiddleTransform = _scene.Children.FindNodes(node => node.Name == "WLM")?.FirstOrDefault()?.GetTransform();
            _rightFrontTransform = _scene.Children.FindNodes(node => node.Name == "WRF")?.FirstOrDefault()?.GetTransform();
            _leftFrontTransform = _scene.Children.FindNodes(node => node.Name == "WLF")?.FirstOrDefault()?.GetTransform();
            _towerTransform = _scene.Children.FindNodes(node => node.Name == "Tower")?.FirstOrDefault()?.GetTransform();
            _turretTransform = _scene.Children.FindNodes(node => node.Name == "turret")?.FirstOrDefault()?.GetTransform();

            // Create a scene renderer holding the scene above
            _sceneRenderer = new SceneRenderer(_scene);
            _scenePicker = new ScenePicker(_scene);
        }

        // RenderAFrame is called once a frame
        public override void RenderAFrame()
        {
           // _baseTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);

            // Clear the backbuffer
            RC.Clear(ClearFlags.Color | ClearFlags.Depth);

            _camAngle = _camAngle + 20.0f * M.Pi/180.0f * (DeltaTime/2);

            // Setup the camera 
     RC.View = float4x4.CreateTranslation(0, 0, 25) * float4x4.CreateRotationY(_camAngle);

     //_rightRearTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_rightMiddleTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_rightFrontTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftRearTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftMiddleTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftFrontTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
    //_towerTransform.Rotation = new float3(0, M.MinAngle((-TimeSinceStart/2)), 0);

      if (Mouse.LeftButton)
            {
                float2 pickPosClip = Mouse.Position * new float2(2.0f / Width, -2.0f / Height) + new float2(-1, 1);
                _scenePicker.View = RC.View;
                _scenePicker.Projection = RC.Projection;

                List<PickResult> pickResults = _scenePicker.Pick(pickPosClip).ToList();
                PickResult newPick = null;
                if (pickResults.Count > 0)
                {
                    pickResults.Sort((a, b) => Sign(a.ClipPos.z - b.ClipPos.z));
                    newPick = pickResults[0];
                }

                if (newPick?.Node != _currentPick?.Node)
                {
                    if (_currentPick != null)
                    {
                        ShaderEffectComponent shaderEffectComponent = _currentPick.Node.GetComponent<ShaderEffectComponent>();
                        shaderEffectComponent.Effect.SetEffectParam("DiffuseColor", _oldColor);
                    }
                    if (newPick != null)
                    {
                        ShaderEffectComponent shaderEffectComponent = newPick.Node.GetComponent<ShaderEffectComponent>();
                        _oldColor = (float3)shaderEffectComponent.Effect.GetEffectParam("DiffuseColor");
                        shaderEffectComponent.Effect.SetEffectParam("DiffuseColor", new float3(1, 0, 1));
                    }
                    _currentPick = newPick;
                }
              
            }
               if(_currentPick?.Node.Name=="Tower"){

                    float p_RotTow = _towerTransform.Rotation.y;
                    p_RotTow = p_RotTow += 2 * DeltaTime * Keyboard.ADAxis;
                    _towerTransform.Rotation = new float3(0,p_RotTow,0);
                    }
                    else if(_currentPick?.Node.Name=="turret"){
                
                   // float turret = _turretTransform.Rotation.y;
                    //turret = turret += 2 * DeltaTime * Keyboard.WSAxis;
                    //_turretTransform.Rotation = new float3(0, turret,  0);

                    }else if(_currentPick?.Node.Name=="WRB"||_currentPick?.Node.Name=="WRM"||_currentPick?.Node.Name=="WRF"){
                
                    float one = _rightRearTransform.Rotation.y;
                    one = one += 2 * DeltaTime * Keyboard.WSAxis;
                    _rightRearTransform.Rotation = new float3(0, one, 0);
                    float two = _rightMiddleTransform.Rotation.y;
                    two = two += 2 * DeltaTime * Keyboard.WSAxis;
                    _rightMiddleTransform.Rotation = new float3(0, two, 0);
                    float three = _rightFrontTransform.Rotation.y;
                    three = three += 2 * DeltaTime * Keyboard.WSAxis;
                    _rightFrontTransform.Rotation = new float3(0, three, 0);

                    }else if(_currentPick?.Node.Name=="WLB"||_currentPick?.Node.Name=="WLM"||_currentPick?.Node.Name=="WLF"){
                    float four = _leftRearTransform.Rotation.y;
                    four = four += 2 * DeltaTime * Keyboard.WSAxis;
                    _leftRearTransform.Rotation = new float3(0, four, 0);
                    float five = _leftMiddleTransform.Rotation.y;
                    five = five += 2 * DeltaTime * Keyboard.WSAxis;
                    _leftMiddleTransform.Rotation = new float3(0, five, 0);
                    float six = _leftFrontTransform.Rotation.y;
                    six = six += 2 * DeltaTime * Keyboard.WSAxis;
                    _leftFrontTransform.Rotation = new float3(0, six, 0);
                  

            }
            // Render the scene on the current render context
            _sceneRenderer.Render(RC);

            // Swap buffers: Show the contents of the backbuffer (containing the currently rendered frame) on the front buffer.
            Present();
     
     }
        
        
        


        // Is called when the window was resized
        public override void Resize()
        {
            // Set the new rendering area to the entire new windows size
            RC.Viewport(0, 0, Width, Height);

            // Create a new projection matrix generating undistorted images on the new aspect ratio.
            var aspectRatio = Width / (float)Height;

            // 0.25*PI Rad -> 45� Opening angle along the vertical direction. Horizontal opening angle is calculated based on the aspect ratio
            // Front clipping happens at 1 (Objects nearer than 1 world unit get clipped)
            // Back clipping happens at 2000 (Anything further away from the camera than 2000 world units gets clipped, polygons will be cut)
            var projection = float4x4.CreatePerspectiveFieldOfView(M.PiOver4, aspectRatio, 1, 20000);
            RC.Projection = projection;
        }
    }
}

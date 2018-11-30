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
    public class FirstSteps : RenderCanvas
    {
        private SceneContainer _scene;
        private SceneRenderer _sceneRenderer;
        private TransformComponent _cubeTransform;
        private TransformComponent _cubeTransform2;
        private ShaderEffectComponent _cubeShader;
        private ShaderEffectComponent _cubeShader2;
        private TransformComponent _cubeTransform3;
        private ShaderEffectComponent _cubeShader3;
        private float _camAngle = 0;

    // Init is called on startup. 
    public override void Init()
    {
        // Set the clear color for the backbuffer to light green (intensities in R, G, B, A).
        RC.ClearColor = new float4(0.1f, 0f, 0f, 1.0f);
            
        // Create a scene with a cube
        // The three components: one XForm, one Shader and the Mesh

        // cube 1
        _cubeTransform = new TransformComponent {Scale = new float3(1, 1, 1), Translation = new float3(0, 0, 0), Rotation = new float3(0, 0.3f, 0.3f)};
        _cubeShader = new ShaderEffectComponent
        { 
            Effect = SimpleMeshes.MakeShaderEffect(new float3 (1, 1, 1), new float3 (1, 1, 1),  4)
        };
       var cubeMesh = SimpleMeshes.CreateCuboid(new float3(10, 10, 10));

        // cube 2
        _cubeTransform2 = new TransformComponent {Scale = new float3(0.5f, 0.5f, 0.5f), Translation = new float3(20, 0, 0), Rotation = new float3(0, 1.6f, 4)};
        _cubeShader2 = new ShaderEffectComponent
        { 
            Effect = SimpleMeshes.MakeShaderEffect(new float3 (0.5f, 1, 1), new float3 (1, 1, 1),  4)
        };
        var cubeMesh2 = SimpleMeshes.CreateCuboid(new float3(10,10,5));

        // cube 3
        _cubeTransform3 = new TransformComponent {Scale = new float3(0.5f, 0.5f, 0.5f), Translation = new float3(-20, 0, 0), Rotation = new float3(0, 1.6f, 4)};
        _cubeShader3 = new ShaderEffectComponent
        { 
            Effect = SimpleMeshes.MakeShaderEffect(new float3 (0.5f, 1, 1), new float3 (1, 1, 1),  4)
        };

        // Assemble the cube node containing the three components
        var cubeNode = new SceneNodeContainer();
            cubeNode.Components = new List<SceneComponentContainer>();
                cubeNode.Components.Add(_cubeTransform);
                cubeNode.Components.Add(_cubeShader);
                cubeNode.Components.Add(cubeMesh);
        var cubeNode2 = new SceneNodeContainer();
            cubeNode2.Components = new List<SceneComponentContainer>();
                cubeNode2.Components.Add(_cubeTransform2);
                cubeNode2.Components.Add(_cubeShader2);
                cubeNode2.Components.Add(cubeMesh2);
        var cubeNode3 = new SceneNodeContainer();
            cubeNode3.Components = new List<SceneComponentContainer>();
                cubeNode3.Components.Add(_cubeTransform3);
                cubeNode3.Components.Add(_cubeShader3);
                cubeNode3.Components.Add(cubeMesh2);
                
    // Create the scene containing the cube as the only object
    _scene = new SceneContainer();
        _scene.Children = new List<SceneNodeContainer>();
            _scene.Children.Add(cubeNode);
            _scene.Children.Add(cubeNode2);
            _scene.Children.Add(cubeNode3);

    // Create a scene renderer holding the scene above
    _sceneRenderer = new SceneRenderer(_scene);
    }

        // RenderAFrame is called once a frame
        public override void RenderAFrame()
        {
        // Clear the backbuffer
        RC.Clear(ClearFlags.Color | ClearFlags.Depth);

        // Animate the camera angle
        _camAngle = _camAngle + 45.0f * M.Pi/180.0f * DeltaTime;

        // Setup the camera 
        RC.View = float4x4.CreateTranslation(0, 0, 50) * float4x4.CreateRotationY(_camAngle);
        
        // Cube
            var i = 2;
            _cubeTransform.Rotation = new float3(TimeSinceStart*i, (i/2)*TimeSinceStart, i*TimeSinceStart) ;
            _cubeTransform2.Rotation = new float3(0, 1.6f, -i*TimeSinceStart) ;
            _cubeTransform3.Rotation = new float3(0, 1.6f, i*TimeSinceStart) ;
            _cubeTransform.Translation = new float3(0, 5 * M.Sin(3 * TimeSinceStart), 0);
            
        _sceneRenderer.Render (RC);

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

            // 0.25*PI Rad -> 45° Opening angle along the vertical direction. Horizontal opening angle is calculated based on the aspect ratio
            // Front clipping happens at 1 (Objects nearer than 1 world unit get clipped)
            // Back clipping happens at 2000 (Anything further away from the camera than 2000 world units gets clipped, polygons will be cut)
            var projection = float4x4.CreatePerspectiveFieldOfView(M.PiOver4, aspectRatio, 1, 20000);
            RC.Projection = projection;
        }
    }
}
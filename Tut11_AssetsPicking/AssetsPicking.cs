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
        private TransformComponent _chassisTransform;
        private float _camAngle = 180.0f * M.Pi/180.0f;
        private float _camAnglex = 0;
         private float _camAngleVert = 0;
        private float _camAngleHor = 0;
        private float _camAngleVelHor, _camAngleVelVert;
        private const float Damping = 0.8f;
        private float Rotate = 7;
        //cam distance
        private float _cd = 25;
        

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
            _chassisTransform = _scene.Children.FindNodes(node => node.Name == "Chassis")?.FirstOrDefault()?.GetTransform();
            _turretTransform.Rotation.x = - _turretTransform.Rotation.x;

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

           // _camAngle = _camAngle + 20.0f * M.Pi/180.0f * (DeltaTime/2);//

        // Animate the camera angle
             if (Mouse.LeftButton == true) {
            _camAngleVelVert = -Rotate * Mouse.XVel * DeltaTime * 0.0005f;
            _camAngleVelHor = -Rotate * Mouse.YVel * DeltaTime * 0.0005f;
             }
            var slowDamp = (float)System.Math.Exp(-Damping * DeltaTime);
                    _camAngleVelVert *= slowDamp;
                    _camAngleVelHor *= slowDamp;

            _camAngleHor += _camAngleVelHor;
            _camAngleVert += _camAngleVelVert;
            // Setup the camera 
            var rot =  float4x4.CreateRotationX(_camAngleHor) * float4x4.CreateRotationY(_camAngleVert);   
            var pos =float4x4.CreateTranslation(_chassisTransform.Translation.x, _chassisTransform.Translation.y, _cd);
            RC.View = pos * rot;

     //_rightRearTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_rightMiddleTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_rightFrontTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftRearTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftMiddleTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
     //_leftFrontTransform.Rotation = new float3(0, M.MinAngle(TimeSinceStart), 0);
    //_towerTransform.Rotation = new float3(0, M.MinAngle((-TimeSinceStart/2)), 0); 
     if (Keyboard.ADAxis != 0) {
        float turn = 0.02f * Keyboard.ADAxis;
        _rightFrontTransform.Rotation.x = - turn;
        _rightRearTransform.Rotation.x = turn;
        _leftFrontTransform.Rotation.x = - turn;
        _leftRearTransform.Rotation.x = turn;
        
    }
        if (Keyboard.WSAxis != 0) {
        float newYRot = _chassisTransform.Rotation.y + (Keyboard.ADAxis* 0.02f);
            _chassisTransform.Rotation = new float3(0, newYRot, 0);
            float posVel = Keyboard.WSAxis * - 0.07f;
                float3 newPos = _chassisTransform.Translation;
                newPos.x += posVel * M.Sin(newYRot);
                newPos.z += posVel * M.Cos(newYRot);
                _chassisTransform.Translation = newPos;
                
                
                if (Keyboard.WSAxis != 0) {
                
                        float one = _rightRearTransform.Rotation.y;
                        one = one += 2 * DeltaTime * Keyboard.WSAxis;
                        _rightRearTransform.Rotation = new float3(_rightRearTransform.Rotation.x, one, 0);

                        float two = _rightMiddleTransform.Rotation.y;
                        two = two += 2 * DeltaTime * Keyboard.WSAxis;
                        _rightMiddleTransform.Rotation = new float3(0, two, 0);

                        float three = _rightFrontTransform.Rotation.y;
                        three = three += 2 * DeltaTime * Keyboard.WSAxis;
                        _rightFrontTransform.Rotation = new float3(_rightFrontTransform.Rotation.x, three, 0);

                        float four = _leftRearTransform.Rotation.y;
                        four = four += 2 * DeltaTime * Keyboard.WSAxis;
                        _leftRearTransform.Rotation = new float3(_leftRearTransform.Rotation.x, four, 0);

                        float five = _leftMiddleTransform.Rotation.y;
                        five = five += 2 * DeltaTime * Keyboard.WSAxis;
                        _leftMiddleTransform.Rotation = new float3(0, five, 0);

                        float six = _leftFrontTransform.Rotation.y;
                        six = six += 2 * DeltaTime * Keyboard.WSAxis;
                        _leftFrontTransform.Rotation = new float3(_leftFrontTransform.Rotation.x, six, 0);
                                    
                       
        }
        }

        
        //_chassisTransform.Rotation.y = _chassisTransform.Rotation.y + (Keyboard.ADAxis * M.Pi/180.0f);

    //   if (Mouse.LeftButton)
    //         {
    //             float2 pickPosClip = Mouse.Position * new float2(2.0f / Width, -2.0f / Height) + new float2(-1, 1);
    //             _scenePicker.View = RC.View;
    //             _scenePicker.Projection = RC.Projection;

    //             List<PickResult> pickResults = _scenePicker.Pick(pickPosClip).ToList();
    //             PickResult newPick = null;
    //             if (pickResults.Count > 0)
    //             {
    //                 pickResults.Sort((a, b) => Sign(a.ClipPos.z - b.ClipPos.z));
    //                 newPick = pickResults[0];
    //             }

    //             if (newPick?.Node != _currentPick?.Node)
    //             {
    //                 if (_currentPick != null)
    //                 {
    //                     ShaderEffectComponent shaderEffectComponent = _currentPick.Node.GetComponent<ShaderEffectComponent>();
    //                     shaderEffectComponent.Effect.SetEffectParam("DiffuseColor", _oldColor);
    //                 }
    //                 if (newPick != null)
    //                 {
    //                     ShaderEffectComponent shaderEffectComponent = newPick.Node.GetComponent<ShaderEffectComponent>();
    //                     _oldColor = (float3)shaderEffectComponent.Effect.GetEffectParam("DiffuseColor");
    //                     shaderEffectComponent.Effect.SetEffectParam("DiffuseColor", new float3(1, 0, 1));
    //                 }
    //                 _currentPick = newPick;
    //             }
              
    //         }
    //            if(_currentPick?.Node.Name=="Tower"){

    //                 float p_RotTow = _towerTransform.Rotation.y;
    //                 p_RotTow = p_RotTow += 2 * DeltaTime * Keyboard.ADAxis;
    //                 _towerTransform.Rotation = new float3(0,p_RotTow,0);
    //                 }
    //                 else if(_currentPick?.Node.Name=="turret"){
                
    //                float turret = _turretTransform.Rotation.x;
    //                 turret = turret += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _turretTransform.Rotation = new float3(turret, 0, 0);

    //                 }else if(_currentPick?.Node.Name=="WRB"||_currentPick?.Node.Name=="WRM"||_currentPick?.Node.Name=="WRF"){
                
    //                 float one = _rightRearTransform.Rotation.y;
    //                 one = one += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _rightRearTransform.Rotation = new float3(0, one, 0);
    //                 float two = _rightMiddleTransform.Rotation.y;
    //                 two = two += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _rightMiddleTransform.Rotation = new float3(0, two, 0);
    //                 float three = _rightFrontTransform.Rotation.y;
    //                 three = three += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _rightFrontTransform.Rotation = new float3(0, three, 0);

    //                 }else if(_currentPick?.Node.Name=="WLB"||_currentPick?.Node.Name=="WLM"||_currentPick?.Node.Name=="WLF"){
    //                 float four = _leftRearTransform.Rotation.y;
    //                 four = four += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _leftRearTransform.Rotation = new float3(0, four, 0);
    //                 float five = _leftMiddleTransform.Rotation.y;
    //                 five = five += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _leftMiddleTransform.Rotation = new float3(0, five, 0);
    //                 float six = _leftFrontTransform.Rotation.y;
    //                 six = six += 2 * DeltaTime * Keyboard.WSAxis;
    //                 _leftFrontTransform.Rotation = new float3(0, six, 0);
                  

    //         }
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

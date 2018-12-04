/* Generated by JSIL v0.8.2 build 31050. See http://jsil.org/ for more information. */ 
'use strict';
var $asm25 = JSIL.DeclareAssembly("Tut09_HierarchyAndInput, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Tutorial");
JSIL.DeclareNamespace("Fusee.Tutorial.Core");
/* class Fusee.Tutorial.Core.HierarchyInput */ 

(function HierarchyInput$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderCanvas)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm0B.Fusee.Serialization.TransformComponent)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm0A.Fusee.Math.Core.float3)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm0B.Fusee.Serialization.SceneContainer)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm0F.System.Collections.Generic.List$b1.Of($asm0B.Fusee.Serialization.SceneNodeContainer))) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm0B.Fusee.Serialization.SceneNodeContainer)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm0F.System.Collections.Generic.List$b1.Of($asm0B.Fusee.Serialization.SceneComponentContainer))) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderEffectComponent)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm25.Fusee.Tutorial.Core.SimpleMeshes)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm0A.Fusee.Math.Core.float4)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm04.Fusee.Engine.Core.SceneRenderer)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm0F.System.Boolean)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm04.Fusee.Engine.Core.InputDevice)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm04.Fusee.Engine.Core.MouseDevice)) ();
  };
  var $T10 = function () {
    return ($T10 = JSIL.Memoize($asm0F.System.Single)) ();
  };
  var $T11 = function () {
    return ($T11 = JSIL.Memoize($asm04.Fusee.Engine.Core.KeyboardDevice)) ();
  };
  var $T12 = function () {
    return ($T12 = JSIL.Memoize($asm04.Fusee.Engine.Core.Time)) ();
  };
  var $T13 = function () {
    return ($T13 = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T14 = function () {
    return ($T14 = JSIL.Memoize($asm0F.System.Math)) ();
  };
  var $T15 = function () {
    return ($T15 = JSIL.Memoize($asm0A.Fusee.Math.Core.float4x4)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0A.Fusee.Math.Core.float3, [
        $asm0F.System.Single, $asm0F.System.Single, 
        $asm0F.System.Single
      ]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0F.System.Collections.Generic.List$b1.Of($asm0B.Fusee.Serialization.SceneNodeContainer), null))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0F.System.Collections.Generic.List$b1.Of($asm0B.Fusee.Serialization.SceneComponentContainer), null))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0A.Fusee.Math.Core.float4, [
        $asm0F.System.Single, $asm0F.System.Single, 
        $asm0F.System.Single, $asm0F.System.Single
      ]))) ();
  };
  var $S04 = function () {
    return ($S04 = JSIL.Memoize(new JSIL.ConstructorSignature($asm04.Fusee.Engine.Core.SceneRenderer, [$asm0B.Fusee.Serialization.SceneContainer]))) ();
  };
  var $S05 = function () {
    return ($S05 = JSIL.Memoize(new JSIL.MethodSignature($asm0A.Fusee.Math.Core.float4x4, [$asm0A.Fusee.Math.Core.float4x4, $asm0A.Fusee.Math.Core.float4x4]))) ();
  };


  function HierarchyInput__ctor () {
    this._camAngleVert = 0;
    this._camAngleHor = 0;
    this.Rotate = 7;
    this._leftClaw = -0.1;
    this._rightClaw = 0.1;
    this.speed = 33;
    this._cd = 50;
    this.z = 0;
    $T00().prototype._ctor.call(this);
  }; 

  function HierarchyInput_CreateScene () {
    var expr_07 = new ($T01())();
    expr_07.Rotation = $S00().Construct(0, 0, 0);
    expr_07.Scale = $S00().Construct(1, 1, 1);
    expr_07.Translation = $S00().Construct(0, 0, 0);
    this._baseTransform = expr_07;
    var expr_60 = new ($T01())();
    expr_60.Rotation = $S00().Construct(0, 1.2, 0);
    expr_60.Scale = $S00().Construct(1, 1, 1);
    expr_60.Translation = $S00().Construct(0, 6, 0);
    this._bodyTransform = expr_60;
    var expr_B9 = new ($T01())();
    expr_B9.Rotation = $S00().Construct(0.8, 0, 0);
    expr_B9.Scale = $S00().Construct(1, 1, 1);
    expr_B9.Translation = $S00().Construct(2, 4, 0);
    this._upperArmTransform = expr_B9;
    var expr_112 = new ($T01())();
    expr_112.Rotation = $S00().Construct(0.8, 0, 0);
    expr_112.Scale = $S00().Construct(1, 1, 1);
    expr_112.Translation = $S00().Construct(2, 8, 0);
    this._foreArmTransform = expr_112;
    var expr_16B = new ($T01())();
    expr_16B.Rotation = $S00().Construct(0, 0, this._leftClaw);
    expr_16B.Scale = $S00().Construct(0.3, 0.5, 0.5);
    expr_16B.Translation = $S00().Construct(0.75, 9, 0);
    this._clawLeftTransform = expr_16B;
    var expr_1C5 = new ($T01())();
    expr_1C5.Rotation = $S00().Construct(0, 0, this._rightClaw);
    expr_1C5.Scale = $S00().Construct(0.3, 0.5, 0.5);
    expr_1C5.Translation = $S00().Construct(-0.75, 9, 0);
    this._clawRightTransform = expr_1C5;
    var expr_21E = new ($T03())();
    var expr_224 = $S01().Construct();
    var expr_22A = new ($T05())();
    var expr_230 = $S02().Construct();
    expr_230.Add(this._baseTransform);
    var expr_243 = new ($T07())();
    expr_243.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.7, 0.7, 0.7), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_230.Add(expr_243);
    expr_230.Add($T08().CreateCuboid($S00().Construct(10, 2, 10)));
    expr_22A.Components = expr_230;
    expr_224.Add(expr_22A);
    var expr_2B3 = new ($T05())();
    var expr_2B9 = $S02().Construct();
    expr_2B9.Add(this._bodyTransform);
    var expr_2CC = new ($T07())();
    expr_2CC.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(1, 0.3, 0.3), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_2B9.Add(expr_2CC);
    expr_2B9.Add($T08().CreateCuboid($S00().Construct(2, 10, 2)));
    expr_2B3.Components = expr_2B9;
    var expr_336 = $S01().Construct();
    var expr_33C = new ($T05())();
    var expr_342 = $S02().Construct();
    expr_342.Add(this._upperArmTransform);
    expr_33C.Components = expr_342;
    var expr_35A = $S01().Construct();
    var expr_360 = new ($T05())();
    var expr_366 = $S02().Construct();
    var expr_36C = new ($T01())();
    expr_36C.Rotation = $S00().Construct(0, 0, 0);
    expr_36C.Scale = $S00().Construct(1, 1, 1);
    expr_36C.Translation = $S00().Construct(0, 4, 0);
    expr_366.Add(expr_36C);
    var expr_3C6 = new ($T07())();
    expr_3C6.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.3, 1, 0.3), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_366.Add(expr_3C6);
    expr_366.Add($T08().CreateCuboid($S00().Construct(2, 10, 2)));
    expr_360.Components = expr_366;
    expr_35A.Add(expr_360);
    var expr_436 = new ($T05())();
    var expr_43C = $S02().Construct();
    expr_43C.Add(this._foreArmTransform);
    expr_436.Components = expr_43C;
    var expr_454 = $S01().Construct();
    var expr_45A = new ($T05())();
    var expr_460 = $S02().Construct();
    var expr_466 = new ($T01())();
    expr_466.Rotation = $S00().Construct(0, 0, 0);
    expr_466.Scale = $S00().Construct(1, 1, 1);
    expr_466.Translation = $S00().Construct(0, 4, 0);
    expr_460.Add(expr_466);
    var expr_4C0 = new ($T07())();
    expr_4C0.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.3, 0.3, 1), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_460.Add(expr_4C0);
    expr_460.Add($T08().CreateCuboid($S00().Construct(2, 10, 2)));
    expr_45A.Components = expr_460;
    expr_454.Add(expr_45A);
    var expr_530 = new ($T05())();
    var expr_536 = $S02().Construct();
    expr_536.Add(this._clawLeftTransform);
    expr_530.Components = expr_536;
    var expr_54E = $S01().Construct();
    var expr_554 = new ($T05())();
    var expr_55A = $S02().Construct();
    var expr_560 = new ($T01())();
    expr_560.Rotation = $S00().Construct(0, 0, 0);
    expr_560.Scale = $S00().Construct(1, 1, 1);
    expr_560.Translation = $S00().Construct(0, 4, 0);
    expr_55A.Add(expr_560);
    var expr_5BA = new ($T07())();
    expr_5BA.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.3, 0.3, 1), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_55A.Add(expr_5BA);
    expr_55A.Add($T08().CreateCuboid($S00().Construct(2, 10, 2)));
    expr_554.Components = expr_55A;
    expr_54E.Add(expr_554);
    expr_530.Children = expr_54E;
    expr_454.Add(expr_530);
    var expr_635 = new ($T05())();
    var expr_63B = $S02().Construct();
    expr_63B.Add(this._clawRightTransform);
    expr_635.Components = expr_63B;
    var expr_653 = $S01().Construct();
    var expr_659 = new ($T05())();
    var expr_65F = $S02().Construct();
    var expr_665 = new ($T01())();
    expr_665.Rotation = $S00().Construct(0, 0, 0);
    expr_665.Scale = $S00().Construct(1, 1, 1);
    expr_665.Translation = $S00().Construct(0, 4, 0);
    expr_65F.Add(expr_665);
    var expr_6BF = new ($T07())();
    expr_6BF.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.3, 0.3, 1), $S00().Construct(0.7, 0.7, 0.7), 5);
    expr_65F.Add(expr_6BF);
    expr_65F.Add($T08().CreateCuboid($S00().Construct(2, 10, 2)));
    expr_659.Components = expr_65F;
    expr_653.Add(expr_659);
    expr_635.Children = expr_653;
    expr_454.Add(expr_635);
    expr_436.Children = expr_454;
    expr_35A.Add(expr_436);
    expr_33C.Children = expr_35A;
    expr_336.Add(expr_33C);
    expr_2B3.Children = expr_336;
    expr_224.Add(expr_2B3);
    expr_21E.Children = expr_224;
    return expr_21E;
  }; 

  function HierarchyInput_Init () {
    (this.RenderCanvas$RC$value.ClearColor = $S03().Construct(0.8, 0.9, 0.7, 1));
    this._scene = this.CreateScene();
    this._sceneRenderer = $S04().Construct(this._scene);
  }; 

  function HierarchyInput_RenderAFrame () {
    var button = $T0E().get_Keyboard().GetButton(81);
    if (button) {
      this.speed = +this.speed - 2;
    }
    var button2 = $T0E().get_Keyboard().GetButton(69);
    if (button2) {
      this.speed = +this.speed + 2;
    }
    var button3 = $T0E().get_Keyboard().GetButton(71);
    if (button3) {
      this.speed = 10;
    }
    var button4 = $T0E().get_Keyboard().GetButton(70);
    if (button4) {
      this.speed = +this.speed + 25;
    }
    if ((+this._cd >= 15) || (+this._cd <= 200)) {
      this._cd = +this._cd + (-$T0E().get_Mouse().get_WheelVel() * 0.05);
    }
    var num = +this._bodyTransform.Rotation.y;
    num += ((0.1 * +$T0E().get_Keyboard().get_ADAxis()) * +$T12().get_DeltaTime()) * +this.speed;
    this._bodyTransform.Rotation = $S00().Construct(0, num, 0);
    var num2 = +this._upperArmTransform.Rotation.x;
    num2 += ((0.1 * +$T0E().get_Keyboard().get_WSAxis()) * +$T12().get_DeltaTime()) * +this.speed;
    this._upperArmTransform.Rotation = $S00().Construct(num2, 0, 0);
    var num3 = +this._foreArmTransform.Rotation.x;
    num3 += ((0.1 * +$T0E().get_Keyboard().get_LeftRightAxis()) * +$T12().get_DeltaTime()) * +this.speed;
    this._foreArmTransform.Rotation = $S00().Construct(num3, 0, 0);
    var num4 = 0.2;
    if (+this._clawLeftTransform.Rotation.z >= 0.5) {
      num4 = 0;
    }
    this._clawLeftTransform.Rotation = $S00().Construct(0, 0, (((num4 * +$T0E().get_Keyboard().get_UpDownAxis()) * 0.015) * 33));
    this._clawRightTransform.Rotation = $S00().Construct(0, 0, (((num4 * -$T0E().get_Keyboard().get_UpDownAxis()) * 0.015) * 33));
    (this.RenderCanvas$RC$value).Clear($T13().$Flags("Color", "Depth"));
    var leftButton = $T0E().get_Mouse().get_LeftButton();
    if (leftButton) {
      this._camAngleVelVert = ((-this.Rotate * +$T0E().get_Mouse().get_XVel()) * +$T12().get_DeltaTime()) * 0.0005;
    }
    var rightButton = $T0E().get_Mouse().get_RightButton();
    if (rightButton) {
      this._camAngleVelHor = ((-this.Rotate * +$T0E().get_Mouse().get_YVel()) * +$T12().get_DeltaTime()) * 0.0005;
    }
    var num5 = Math.fround($T14().Exp(-0.8 * +$T12().get_DeltaTime()));
    this._camAngleVelVert = +this._camAngleVelVert * num5;
    this._camAngleVelHor = +this._camAngleVelHor * num5;
    this._camAngleHor = +this._camAngleHor + +this._camAngleVelHor;
    this._camAngleVert = +this._camAngleVert + +this._camAngleVelVert;
    var right = $S05().CallStatic($T15(), "op_Multiply", null, 
      $T15().CreateRotationX(this._camAngleHor).MemberwiseClone(), 
      $T15().CreateRotationY(this._camAngleVert).MemberwiseClone()
    ).MemberwiseClone();
    var left = $T15().CreateTranslation(0, -10, this._cd).MemberwiseClone();
    (this.RenderCanvas$RC$value.View = $S05().CallStatic($T15(), "op_Multiply", null, left.MemberwiseClone(), right.MemberwiseClone()).MemberwiseClone());
    (this._sceneRenderer).Render(this.RenderCanvas$RC$value);
    this.Present();
  }; 

  function HierarchyInput_Resize () {
    (this.RenderCanvas$RC$value).Viewport(
      0, 
      0, 
      this.get_Width(), 
      this.get_Height()
    );
    var aspect = +((+(this.get_Width()) / +(this.get_Height())));
    var projection = $T15().CreatePerspectiveFieldOfView(0.7853982, aspect, 1, 20000);
    (this.RenderCanvas$RC$value.Projection = projection.MemberwiseClone());
  }; 

  JSIL.MakeType({
      BaseType: $asm04.TypeRef("Fusee.Engine.Core.RenderCanvas"), 
      Name: "Fusee.Tutorial.Core.HierarchyInput", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      HierarchyInput__ctor
    );

    $.Method({Static:false, Public:false}, "CreateScene", 
      JSIL.MethodSignature.Return($asm0B.TypeRef("Fusee.Serialization.SceneContainer")), 
      HierarchyInput_CreateScene
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Init", 
      JSIL.MethodSignature.Void, 
      HierarchyInput_Init
    );

    $.Method({Static:false, Public:true , Virtual:true }, "RenderAFrame", 
      JSIL.MethodSignature.Void, 
      HierarchyInput_RenderAFrame
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Resize", 
      JSIL.MethodSignature.Void, 
      HierarchyInput_Resize
    );

    $.Field({Static:false, Public:false}, "_scene", $asm0B.TypeRef("Fusee.Serialization.SceneContainer"));

    $.Field({Static:false, Public:false}, "_sceneRenderer", $asm04.TypeRef("Fusee.Engine.Core.SceneRenderer"));

    $.Field({Static:false, Public:false}, "_camAngleVert", $.Single);

    $.Field({Static:false, Public:false}, "_camAngleHor", $.Single);

    $.Field({Static:false, Public:false}, "_camAngleVelHor", $.Single);

    $.Field({Static:false, Public:false}, "_camAngleVelVert", $.Single);

    $.Field({Static:false, Public:false}, "_baseTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_bodyTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_upperArmTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_foreArmTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_clawLeftTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_clawRightTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Constant({Static:true , Public:false}, "Damping", $.Single, 0.8);

    $.Field({Static:false, Public:false}, "Rotate", $.Single);

    $.Field({Static:false, Public:false}, "_leftClaw", $.Single);

    $.Field({Static:false, Public:false}, "_rightClaw", $.Single);

    $.Field({Static:false, Public:false}, "speed", $.Single);

    $.Field({Static:false, Public:false}, "_cd", $.Single);

    $.Field({Static:false, Public:false}, "z", $.Single);


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Tutorial.Core.SimpleMeshes */ 

(function SimpleMeshes$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm0F.System.Single)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm0F.System.Int32)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm0F.System.NotImplementedException)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm0A.Fusee.Math.Core.float3)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm0B.Fusee.Serialization.Mesh)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize(System.Array.Of($asm0A.Fusee.Math.Core.float3))) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm0F.System.UInt16)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm0A.Fusee.Math.Core.float2)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm0A.Fusee.Math.Core.AABBf)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm0B.Fusee.Serialization.MaterialComponent)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm0B.Fusee.Serialization.MatChannelContainer)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm0B.Fusee.Serialization.SpecularChannelContainer)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderCodeBuilder)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0F.System.NotImplementedException, null))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0A.Fusee.Math.Core.float3, [
        $asm0F.System.Single, $asm0F.System.Single, 
        $asm0F.System.Single
      ]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.ConstructorSignature($asm0A.Fusee.Math.Core.float2, [$asm0F.System.Single, $asm0F.System.Single]))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.MethodSignature($asm0A.Fusee.Math.Core.float3, [$asm0F.System.Single, $asm0A.Fusee.Math.Core.float3]))) ();
  };


  function SimpleMeshes_CreateCone (radius, height, segments) {
    return $thisType.CreateConeFrustum(radius, 0, height, segments);
  }; 

  function SimpleMeshes_CreateConeFrustum (radiuslower, radiusupper, height, segments) {
    throw $S00().Construct();
  }; 

  function SimpleMeshes_CreateCuboid (size) {
    var mesh = new ($T04())();
    var expr_0F = JSIL.Array.New($T03(), 24);
    var float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[0] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[1] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[2] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[3] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[4] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[5] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[6] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[7] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[8] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[9] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[10] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[11] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[12] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[13] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[14] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[15] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[16] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[17] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[18] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = 0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[19] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[20] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = 0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[21] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = 0.5 * +size.z;
    expr_0F[22] = float.MemberwiseClone();
    float = new ($T03())();
    float.x = -0.5 * +size.x;
    float.y = -0.5 * +size.y;
    float.z = -0.5 * +size.z;
    expr_0F[23] = float.MemberwiseClone();
    mesh.set_Vertices(expr_0F);
    mesh.set_Triangles(JSIL.Array.New($T06(), [0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6, 8, 10, 9, 8, 11, 10, 12, 14, 13, 12, 15, 14, 16, 18, 17, 16, 19, 18, 20, 22, 21, 20, 23, 22]));
    mesh.set_Normals(JSIL.Array.New($T03(), [$S01().Construct(0, 0, 1), $S01().Construct(0, 0, 1), $S01().Construct(0, 0, 1), $S01().Construct(0, 0, 1), $S01().Construct(1, 0, 0), $S01().Construct(1, 0, 0), $S01().Construct(1, 0, 0), $S01().Construct(1, 0, 0), $S01().Construct(0, 0, -1), $S01().Construct(0, 0, -1), $S01().Construct(0, 0, -1), $S01().Construct(0, 0, -1), $S01().Construct(-1, 0, 0), $S01().Construct(-1, 0, 0), $S01().Construct(-1, 0, 0), $S01().Construct(-1, 0, 0), $S01().Construct(0, 1, 0), $S01().Construct(0, 1, 0), $S01().Construct(0, 1, 0), $S01().Construct(0, 1, 0), $S01().Construct(0, -1, 0), $S01().Construct(0, -1, 0), $S01().Construct(0, -1, 0), $S01().Construct(0, -1, 0)]));
    mesh.set_UVs(JSIL.Array.New($T07(), [$S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0), $S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0), $S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0), $S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0), $S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0), $S02().Construct(1, 0), $S02().Construct(1, 1), $S02().Construct(0, 1), $S02().Construct(0, 0)]));
    mesh.BoundingBox = new ($T08())($S03().CallStatic($T03(), "op_Multiply", null, -0.5, size.MemberwiseClone()).MemberwiseClone(), $S03().CallStatic($T03(), "op_Multiply", null, 0.5, size.MemberwiseClone()).MemberwiseClone());
    return mesh;
  }; 

  function SimpleMeshes_CreateCylinder (radius, height, segments) {
    return $thisType.CreateConeFrustum(radius, radius, height, segments);
  }; 

  function SimpleMeshes_CreatePyramid (baselen, height) {
    throw $S00().Construct();
  }; 

  function SimpleMeshes_CreateTetrahedron (edgelen) {
    throw $S00().Construct();
  }; 

  function SimpleMeshes_CreateTorus (mainradius, segradius, segments, slices) {
    throw $S00().Construct();
  }; 

  function SimpleMeshes_MakeShaderEffect (diffuseColor, specularColor, shininess) {
    var expr_06 = new ($T09())();
    var expr_0C = new ($T0A())();
    expr_0C.Color = diffuseColor.MemberwiseClone();
    expr_06.Diffuse = expr_0C;
    var expr_1E = new ($T0B())();
    expr_1E.Color = specularColor.MemberwiseClone();
    expr_1E.Shininess = +shininess;
    expr_06.Specular = expr_1E;
    return $T0C().MakeShaderEffectFromMatComp(expr_06, null);
  }; 

  JSIL.MakeStaticClass("Fusee.Tutorial.Core.SimpleMeshes", true, [], function ($ib) {
    $ = $ib;

    $.Method({Static:true , Public:true }, "CreateCone", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [
          $.Single, $.Single, 
          $.Int32
        ]), 
      SimpleMeshes_CreateCone
    );

    $.Method({Static:true , Public:true }, "CreateConeFrustum", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [
          $.Single, $.Single, 
          $.Single, $.Int32
        ]), 
      SimpleMeshes_CreateConeFrustum
    );

    $.Method({Static:true , Public:true }, "CreateCuboid", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [$asm0A.TypeRef("Fusee.Math.Core.float3")]), 
      SimpleMeshes_CreateCuboid
    );

    $.Method({Static:true , Public:true }, "CreateCylinder", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [
          $.Single, $.Single, 
          $.Int32
        ]), 
      SimpleMeshes_CreateCylinder
    );

    $.Method({Static:true , Public:true }, "CreatePyramid", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [$.Single, $.Single]), 
      SimpleMeshes_CreatePyramid
    );

    $.Method({Static:true , Public:true }, "CreateTetrahedron", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [$.Single]), 
      SimpleMeshes_CreateTetrahedron
    );

    $.Method({Static:true , Public:true }, "CreateTorus", 
      new JSIL.MethodSignature($asm0B.TypeRef("Fusee.Serialization.Mesh"), [
          $.Single, $.Single, 
          $.Int32, $.Int32
        ]), 
      SimpleMeshes_CreateTorus
    );

    $.Method({Static:true , Public:true }, "MakeShaderEffect", 
      new JSIL.MethodSignature($asm04.TypeRef("Fusee.Engine.Core.ShaderEffect"), [
          $asm0A.TypeRef("Fusee.Math.Core.float3"), $asm0A.TypeRef("Fusee.Math.Core.float3"), 
          $.Single
        ]), 
      SimpleMeshes_MakeShaderEffect
    );


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class <PrivateImplementationDetails> */ 

(function $lPrivateImplementationDetails$g$Members () {
  var $, $thisType;

  JSIL.MakeType({
      BaseType: $asm0F.TypeRef("System.Object"), 
      Name: "<PrivateImplementationDetails>", 
      IsPublic: false, 
      IsReferenceType: true, 
    }, function ($ib) {
    $ = $ib;


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm0F.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

})();


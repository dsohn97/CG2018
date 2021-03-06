/* Generated by JSIL v0.8.2 build 31050. See http://jsil.org/ for more information. */ 
'use strict';
var $asm25 = JSIL.DeclareAssembly("Tut10_Mesh, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Tutorial");
JSIL.DeclareNamespace("Fusee.Tutorial.Core");
/* class Fusee.Tutorial.Core.MeshExample */ 

(function MeshExample$Members () {
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
    return ($T0C = JSIL.Memoize($asm0A.Fusee.Math.Core.M)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm04.Fusee.Engine.Core.Time)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm0A.Fusee.Math.Core.float4x4)) ();
  };
  var $T10 = function () {
    return ($T10 = JSIL.Memoize($asm0F.System.Math)) ();
  };
  var $T11 = function () {
    return ($T11 = JSIL.Memoize($asm0F.System.Double)) ();
  };
  var $T12 = function () {
    return ($T12 = JSIL.Memoize($asm0F.System.Single)) ();
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
    return ($S05 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Single, [$asm0F.System.Single]))) ();
  };
  var $S06 = function () {
    return ($S06 = JSIL.Memoize(new JSIL.MethodSignature($asm0A.Fusee.Math.Core.float4x4, [$asm0A.Fusee.Math.Core.float4x4, $asm0A.Fusee.Math.Core.float4x4]))) ();
  };


  function MeshExample__ctor () {
    $T00().prototype._ctor.call(this);
  }; 

  function MeshExample_CreateScene () {
    var expr_07 = new ($T01())();
    expr_07.Rotation = $S00().Construct(0, 0, 0);
    expr_07.Scale = $S00().Construct(1, 1, 1);
    expr_07.Translation = $S00().Construct(0, 0, 0);
    this._baseTransform = expr_07;
    var expr_5F = new ($T03())();
    var expr_65 = $S01().Construct();
    var expr_6B = new ($T05())();
    var expr_71 = $S02().Construct();
    expr_71.Add(this._baseTransform);
    var expr_84 = new ($T07())();
    expr_84.ShaderEffectComponent$Effect$value = $T08().MakeShaderEffect($S00().Construct(0.7, 0.7, 0.7), $S00().Construct(1, 1, 1), 5);
    expr_71.Add(expr_84);
    expr_71.Add($T08().CreateCylinder(5, 7, 15));
    expr_6B.Components = expr_71;
    expr_65.Add(expr_6B);
    expr_5F.Children = expr_65;
    return expr_5F;
  }; 

  function MeshExample_Init () {
    (this.RenderCanvas$RC$value.ClearColor = $S03().Construct(0.8, 0.9, 0.7, 1));
    this._scene = this.CreateScene();
    this._sceneRenderer = $S04().Construct(this._scene);
  }; 

  function MeshExample_RenderAFrame () {
    this._baseTransform.Rotation = $S00().Construct(0, $S05().CallStatic($T0C(), "MinAngle", null, $T0D().get_TimeSinceStart()), 0);
    (this.RenderCanvas$RC$value).Clear($T0E().$Flags("Color", "Depth"));
    (this.RenderCanvas$RC$value.View = $S06().CallStatic($T0F(), "op_Multiply", null, 
        $T0F().CreateTranslation(0, 0, 40).MemberwiseClone(), 
        $T0F().CreateRotationX(-Math.fround(Math.atan(0.375))).MemberwiseClone()
      ).MemberwiseClone());
    (this._sceneRenderer).Render(this.RenderCanvas$RC$value);
    this.Present();
  }; 

  function MeshExample_Resize () {
    (this.RenderCanvas$RC$value).Viewport(
      0, 
      0, 
      this.get_Width(), 
      this.get_Height()
    );
    var aspect = +((+(this.get_Width()) / +(this.get_Height())));
    var projection = $T0F().CreatePerspectiveFieldOfView(0.7853982, aspect, 1, 20000);
    (this.RenderCanvas$RC$value.Projection = projection.MemberwiseClone());
  }; 

  JSIL.MakeType({
      BaseType: $asm04.TypeRef("Fusee.Engine.Core.RenderCanvas"), 
      Name: "Fusee.Tutorial.Core.MeshExample", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      MeshExample__ctor
    );

    $.Method({Static:false, Public:false}, "CreateScene", 
      JSIL.MethodSignature.Return($asm0B.TypeRef("Fusee.Serialization.SceneContainer")), 
      MeshExample_CreateScene
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Init", 
      JSIL.MethodSignature.Void, 
      MeshExample_Init
    );

    $.Method({Static:false, Public:true , Virtual:true }, "RenderAFrame", 
      JSIL.MethodSignature.Void, 
      MeshExample_RenderAFrame
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Resize", 
      JSIL.MethodSignature.Void, 
      MeshExample_Resize
    );

    $.Field({Static:false, Public:false}, "_scene", $asm0B.TypeRef("Fusee.Serialization.SceneContainer"));

    $.Field({Static:false, Public:false}, "_sceneRenderer", $asm04.TypeRef("Fusee.Engine.Core.SceneRenderer"));

    $.Field({Static:false, Public:false}, "_baseTransform", $asm0B.TypeRef("Fusee.Serialization.TransformComponent"));


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
    return ($T09 = JSIL.Memoize(System.Array.Of($asm0F.System.UInt16))) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm0A.Fusee.Math.Core.M)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm0B.Fusee.Serialization.MaterialComponent)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm0B.Fusee.Serialization.MatChannelContainer)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm0B.Fusee.Serialization.SpecularChannelContainer)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderCodeBuilder)) ();
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
    var array = JSIL.Array.New($T03(), ((Math.imul(4, segments) + 2) | 0));
    var array2 = JSIL.Array.New($T03(), ((Math.imul(4, segments) + 2) | 0));
    var array3 = JSIL.Array.New($T06(), Math.imul(Math.imul(4, segments), 3));
    var num = +((6.28318548 / +segments));
    array[0] = $S01().Construct(radius, (0.5 * +height), 0);
    array2[0] = $S01().Construct(1, (0.5 * +height), 0);
    array[1] = $S01().Construct(radius, (0.5 * +height), 0);
    array2[1] = $S01().Construct(1, 0, 0);
    array[2] = $S01().Construct(radius, (-0.5 * +height), 0);
    array2[2] = $S01().Construct(1, 0, 0);
    array[3] = $S01().Construct(radius, (-0.5 * +height), 0);
    array2[3] = $S01().Construct(1, (-0.5 * +height), 0);
    array[Math.imul(4, segments)] = $S01().Construct(0, (0.5 * +height), 0);
    array2[Math.imul(4, segments)] = $S01().Construct(0, (0.5 * +height), 0);
    array[((Math.imul(4, segments) + 1) | 0)] = $S01().Construct(0, (-0.5 * +height), 0);
    array2[((Math.imul(4, segments) + 1) | 0)] = $S01().Construct(0, (-0.5 * +height), 0);

    for (var i = 1; i < (segments | 0); i = ((i + 1) | 0)) {
      array[Math.imul(4, i)] = $S01().Construct((+radius * +$T0A().Cos(+i * num)), (0.5 * +height), (+radius * +$T0A().Sin(+i * num)));
      array2[Math.imul(4, i)] = $S01().Construct($T0A().Cos(+i * num), (0.5 * +height), $T0A().Sin(+i * num));
      array[((Math.imul(4, i) + 1) | 0)] = $S01().Construct((+radius * +$T0A().Cos(+i * num)), (0.5 * +height), (+radius * +$T0A().Sin(+i * num)));
      array2[((Math.imul(4, i) + 1) | 0)] = $S01().Construct($T0A().Cos(+i * num), 0, $T0A().Sin(+i * num));
      array[((Math.imul(4, i) + 2) | 0)] = $S01().Construct((+radius * +$T0A().Cos(+i * num)), (-0.5 * +height), (+radius * +$T0A().Sin(+i * num)));
      array2[((Math.imul(4, i) + 2) | 0)] = $S01().Construct($T0A().Cos(+i * num), 0, $T0A().Sin(+i * num));
      array[((Math.imul(4, i) + 3) | 0)] = $S01().Construct((+radius * +$T0A().Cos(+i * num)), (-0.5 * +height), (+radius * +$T0A().Sin(+i * num)));
      array2[((Math.imul(4, i) + 3) | 0)] = $S01().Construct($T0A().Cos(+i * num), (-0.5 * +height), $T0A().Sin(+i * num));
      array3[Math.imul(12, ((i - 1) | 0))] = (Math.imul(4, segments) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 1) | 0)] = (Math.imul(4, ((i - 1) | 0)) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 2) | 0)] = (Math.imul(4, i) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 3) | 0)] = (((Math.imul(4, ((i - 1) | 0)) + 2) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 4) | 0)] = (((Math.imul(4, i) + 2) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 5) | 0)] = (((Math.imul(4, i) + 1) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 6) | 0)] = (((Math.imul(4, ((i - 1) | 0)) + 2) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 7) | 0)] = (((Math.imul(4, i) + 1) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 8) | 0)] = (((Math.imul(4, ((i - 1) | 0)) + 1) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 9) | 0)] = (((Math.imul(4, segments) + 1) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 10) | 0)] = (((Math.imul(4, ((i - 1) | 0)) + 3) | 0) & 0xFFFF);
      array3[((Math.imul(12, ((i - 1) | 0)) + 11) | 0)] = (((Math.imul(4, i) + 3) | 0) & 0xFFFF);
    }
    array3[((Math.imul(12, segments) - 12) | 0)] = (Math.imul(4, segments) & 0xFFFF);
    array3[((Math.imul(12, segments) - 11) | 0)] = (Math.imul(4, (((segments | 0) - 1) | 0)) & 0xFFFF);
    array3[((Math.imul(12, segments) - 10) | 0)] = 0;
    array3[((Math.imul(12, segments) - 9) | 0)] = (((Math.imul(4, (((segments | 0) - 1) | 0)) + 2) | 0) & 0xFFFF);
    array3[((Math.imul(12, segments) - 8) | 0)] = 2;
    array3[((Math.imul(12, segments) - 7) | 0)] = 1;
    array3[((Math.imul(12, segments) - 6) | 0)] = (((Math.imul(4, (((segments | 0) - 1) | 0)) + 2) | 0) & 0xFFFF);
    array3[((Math.imul(12, segments) - 5) | 0)] = 1;
    array3[((Math.imul(12, segments) - 4) | 0)] = (((Math.imul(4, (((segments | 0) - 1) | 0)) + 1) | 0) & 0xFFFF);
    array3[((Math.imul(12, segments) - 3) | 0)] = (((Math.imul(4, segments) + 1) | 0) & 0xFFFF);
    array3[((Math.imul(12, segments) - 2) | 0)] = (((Math.imul(4, (((segments | 0) - 1) | 0)) + 3) | 0) & 0xFFFF);
    array3[((Math.imul(12, segments) - 1) | 0)] = 3;
    var expr_47E = new ($T04())();
    expr_47E.set_Vertices(array);
    expr_47E.set_Normals(array2);
    expr_47E.set_Triangles(array3);
    return expr_47E;
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
    var expr_06 = new ($T0B())();
    var expr_0C = new ($T0C())();
    expr_0C.Color = diffuseColor.MemberwiseClone();
    expr_06.Diffuse = expr_0C;
    var expr_1E = new ($T0D())();
    expr_1E.Color = specularColor.MemberwiseClone();
    expr_1E.Shininess = +shininess;
    expr_06.Specular = expr_1E;
    return $T0E().MakeShaderEffectFromMatComp(expr_06, null);
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


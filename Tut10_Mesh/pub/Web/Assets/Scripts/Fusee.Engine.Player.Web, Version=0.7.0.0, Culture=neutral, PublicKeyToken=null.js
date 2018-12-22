/* Generated by JSIL v0.8.2 build 31050. See http://jsil.org/ for more information. */ 
'use strict';
var $asm08 = JSIL.DeclareAssembly("Fusee.Engine.Player.Web, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.SetEntryPoint($asm08, $asm08.TypeRef("Fusee.Engine.Player.Web.Simple"), "Main", JSIL.MethodSignature.Void);

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Engine");
JSIL.DeclareNamespace("Fusee.Engine.Player");
JSIL.DeclareNamespace("Fusee.Engine.Player.Web");
/* class Fusee.Engine.Player.Web.Simple */ 

(function Simple$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.Fusee.Base.Common.AssetDecoder)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.Fusee.Base.Common.AssetChecker)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm01.Fusee.Base.Core.IO)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm02.Fusee.Base.Imp.Web.IOImp)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm02.Fusee.Base.Imp.Web.WebAssetProvider)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm00.Fusee.Base.Common.AssetHandler)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm01.Fusee.Base.Core.Font)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm08.Fusee.Engine.Player.Web.Simple_$l$gc)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm0B.Fusee.Serialization.SceneContainer)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm01.Fusee.Base.Core.AssetStorage)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm25.Fusee.Tutorial.Core.MeshExample)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderCanvas)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm06.Fusee.Engine.Imp.Graphics.Web.RenderCanvasImp)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm06.Fusee.Engine.Imp.Graphics.Web.RenderContextImp)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm06.Fusee.Engine.Imp.Graphics.Web.RenderCanvasInputDriverImp)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Object, [$asm0F.System.String, $asm0F.System.Object]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Boolean, [$asm0F.System.String]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Object, [$asm0F.System.String, $asm0F.System.Object]))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Boolean, [$asm0F.System.String]))) ();
  };


  function Simple__ctor () {
  }; 

  function Simple_Main () {
    var arg_4D_1 = null, arg_73_1 = null, arg_BA_1 = null, arg_E0_1 = null;
    $T02().IO$IOImp$value = new ($T03())();
    var fap = new ($T04())();
    var handler = new ($T05())();
    handler.ReturnedType = $T06().__Type__;
    if ((arg_4D_1 = $T07().$l$g9__0_0) === null) {
      arg_4D_1 = $T07().$l$g9__0_0 = $T00().New($T07().$l$g9, null, new JSIL.MethodPointerInfo($asm08.Fusee.Engine.Player.Web.Simple_$l$gc, "$lMain$gb__0_0", $S00(), false, false));
    }
    handler.Decoder = arg_4D_1;
    if ((arg_73_1 = $T07().$l$g9__0_1) === null) {
      arg_73_1 = $T07().$l$g9__0_1 = $T01().New($T07().$l$g9, null, new JSIL.MethodPointerInfo($asm08.Fusee.Engine.Player.Web.Simple_$l$gc, "$lMain$gb__0_1", $S01(), false, false));
    }
    handler.Checker = arg_73_1;
    fap.RegisterTypeHandler(handler.MemberwiseClone());
    handler = new ($T05())();
    handler.ReturnedType = $T08().__Type__;
    if ((arg_BA_1 = $T07().$l$g9__0_2) === null) {
      arg_BA_1 = $T07().$l$g9__0_2 = $T00().New($T07().$l$g9, null, new JSIL.MethodPointerInfo($asm08.Fusee.Engine.Player.Web.Simple_$l$gc, "$lMain$gb__0_2", $S02(), false, false));
    }
    handler.Decoder = arg_BA_1;
    if ((arg_E0_1 = $T07().$l$g9__0_3) === null) {
      arg_E0_1 = $T07().$l$g9__0_3 = $T01().New($T07().$l$g9, null, new JSIL.MethodPointerInfo($asm08.Fusee.Engine.Player.Web.Simple_$l$gc, "$lMain$gb__0_3", $S03(), false, false));
    }
    handler.Checker = arg_E0_1;
    fap.RegisterTypeHandler(handler.MemberwiseClone());
    $T09().RegisterProvider(fap);
    var app = new ($T0A())();
    app.RenderCanvas$CanvasImplementor$value = new ($T0C())();
    app.RenderCanvas$ContextImplementor$value = new ($T0D())(app.RenderCanvas$CanvasImplementor$value);
    $T0E().AddDriverImp(new ($T0F())(app.RenderCanvas$CanvasImplementor$value));
    app.Run();
  }; 

  JSIL.MakeType({
      BaseType: $asm0F.TypeRef("System.Object"), 
      Name: "Fusee.Engine.Player.Web.Simple", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      Simple__ctor
    );

    $.Method({Static:true , Public:true }, "Main", 
      JSIL.MethodSignature.Void, 
      Simple_Main
    );


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Engine.Player.Web.Simple+<>c */ 

(function $l$gc$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm0F.System.String)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm0F.System.Object)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm0F.System.Boolean)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.Fusee.Base.Common.Path)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.Fusee.Base.Core.Font)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm02.Fusee.Base.Imp.Web.FontImp)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm0C.Fusee.Serialization.Serializer)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm04.Fusee.Engine.Core.ConvertSceneGraph)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm0B.Fusee.Serialization.SceneContainer)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm11.ProtoBuf.Meta.TypeModel)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm01.Fusee.Base.Core.IO)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm00.Fusee.Base.Common.FileMode)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature($asm0F.System.Object, [
        $asm0F.System.IO.Stream, $asm0F.System.Object, 
        $asm0F.System.Type
      ]))) ();
  };


  function $l$gc__ctor () {
  }; 

  function $l$gc_$lMain$gb__0_0 (id, storage) {
    var flag = (($T03().GetExtension(id).toLowerCase().indexOf("ttf") != -1));
    if (flag) {
      var expr_1F = new ($T04())();
      expr_1F._fontImp = new ($T05())(storage);
      var result = expr_1F;
    } else {
      result = null;
    }
    return result;
  }; 

  function $l$gc_$lMain$gb__0_1 (id) {
    return ($T03().GetExtension(id).toLowerCase().indexOf("ttf") != -1);
  }; 

  function $l$gc_$lMain$gb__0_2 (id, storage) {
    var flag = (($T03().GetExtension(id).toLowerCase().indexOf("fus") != -1));
    if (flag) {
      var ser = new ($T06())();
      var result = (new ($T07())()).Convert($T08().$As($S00().CallVirtual("Deserialize", null, ser, $T0A().StreamFromFile(JSIL.ConcatString("Assets/", id), $T0B().Open), null, $T08().__Type__)));
    } else {
      result = null;
    }
    return result;
  }; 

  function $l$gc_$lMain$gb__0_3 (id) {
    return ($T03().GetExtension(id).toLowerCase().indexOf("fus") != -1);
  }; 

  JSIL.MakeType({
      BaseType: $asm0F.TypeRef("System.Object"), 
      Name: "Fusee.Engine.Player.Web.Simple+<>c", 
      IsPublic: false, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__ctor
    );

    $.Method({Static:false, Public:false}, "$lMain$gb__0_0", 
      new JSIL.MethodSignature($.Object, [$.String, $.Object]), 
      $l$gc_$lMain$gb__0_0
    );

    $.Method({Static:false, Public:false}, "$lMain$gb__0_1", 
      new JSIL.MethodSignature($.Boolean, [$.String]), 
      $l$gc_$lMain$gb__0_1
    );

    $.Method({Static:false, Public:false}, "$lMain$gb__0_2", 
      new JSIL.MethodSignature($.Object, [$.String, $.Object]), 
      $l$gc_$lMain$gb__0_2
    );

    $.Method({Static:false, Public:false}, "$lMain$gb__0_3", 
      new JSIL.MethodSignature($.Boolean, [$.String]), 
      $l$gc_$lMain$gb__0_3
    );

    $.Field({Static:true , Public:true , ReadOnly:true }, "$l$g9", $.Type);

    $.Field({Static:true , Public:true }, "$l$g9__0_0", $asm00.TypeRef("Fusee.Base.Common.AssetDecoder"));

    $.Field({Static:true , Public:true }, "$l$g9__0_1", $asm00.TypeRef("Fusee.Base.Common.AssetChecker"));

    $.Field({Static:true , Public:true }, "$l$g9__0_2", $asm00.TypeRef("Fusee.Base.Common.AssetDecoder"));

    $.Field({Static:true , Public:true }, "$l$g9__0_3", $asm00.TypeRef("Fusee.Base.Common.AssetChecker"));


    function $l$gc__cctor () {
      $thisType.$l$g9 = new $thisType();
    }; 

    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__cctor
    );


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm0F.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

})();


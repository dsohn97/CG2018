// Generated by JSIL v0.8.2 build 31050. See http://jsil.org/ for more information. 

'use strict';
var $asm00 = JSIL.GetAssembly("Fusee.Base.Common, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm01 = JSIL.GetAssembly("Fusee.Base.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm02 = JSIL.GetAssembly("Fusee.Base.Imp.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm03 = JSIL.GetAssembly("Fusee.Engine.Common, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm04 = JSIL.GetAssembly("Fusee.Engine.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm05 = JSIL.GetAssembly("Fusee.Engine.GUI, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm06 = JSIL.GetAssembly("Fusee.Engine.Imp.Graphics.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm07 = JSIL.GetAssembly("Fusee.Engine.Player.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm08 = JSIL.GetAssembly("Fusee.Engine.Player.Web, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm09 = JSIL.GetAssembly("Fusee.Jometri, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0A = JSIL.GetAssembly("Fusee.Math.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0B = JSIL.GetAssembly("Fusee.Serialization, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0C = JSIL.GetAssembly("Fusee.SerializationSerializer, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0D = JSIL.GetAssembly("Fusee.Xene, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0E = JSIL.GetAssembly("Fusee.Xirkit, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0F = JSIL.GetAssembly("mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm10 = JSIL.GetAssembly("netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51");
var $asm11 = JSIL.GetAssembly("protobuf-net, Version=2.0.0.668, Culture=neutral, PublicKeyToken=257b51d87d2e4d67");
var $asm12 = JSIL.GetAssembly("System, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm13 = JSIL.GetAssembly("System.ComponentModel.Composition, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm14 = JSIL.GetAssembly("System.Configuration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm15 = JSIL.GetAssembly("System.Core, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm16 = JSIL.GetAssembly("System.Data.Common, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm17 = JSIL.GetAssembly("System.Diagnostics.StackTrace, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm18 = JSIL.GetAssembly("System.Diagnostics.Tracing, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm19 = JSIL.GetAssembly("System.Globalization.Extensions, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm1A = JSIL.GetAssembly("System.IO.Compression, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm1B = JSIL.GetAssembly("System.IO.Compression.FileSystem, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm1C = JSIL.GetAssembly("System.Net.Sockets, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm1D = JSIL.GetAssembly("System.Runtime.InteropServices.RuntimeInformation, Version=4.0.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm1E = JSIL.GetAssembly("System.Runtime.Serialization.Primitives, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm1F = JSIL.GetAssembly("System.Runtime.Serialization.Xml, Version=4.1.3.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm20 = JSIL.GetAssembly("System.Security.Cryptography.Algorithms, Version=4.3.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm21 = JSIL.GetAssembly("System.Security.SecureString, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm22 = JSIL.GetAssembly("System.Threading.Overlapped, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm23 = JSIL.GetAssembly("System.ValueTuple, Version=4.0.2.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51");
var $asm24 = JSIL.GetAssembly("System.Xml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm25 = JSIL.GetAssembly("Tut08_FirstSteps, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

if (typeof (contentManifest) !== "object") { JSIL.GlobalNamespace.contentManifest = {}; };
contentManifest["Fusee.Engine.Player.Web.exe"] = [    ["Script", "Tut08_FirstSteps, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 22008 }],

    ["Script", "Fusee.Engine.Player.Web, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 10124 }],
    ["Script", "mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 4348458 }],
    ["Script", "Fusee.Base.Imp.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 17171 }],
    ["Script", "Fusee.Engine.Player.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 23172 }],
    ["Script", "Fusee.Base.Common, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 156681 }],
    ["Script", "Fusee.SerializationSerializer, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 239192 }],
    ["Script", "Fusee.Base.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 51494 }],
    ["Script", "Fusee.Serialization, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 70311 }],
    ["Script", "Fusee.Engine.Imp.Graphics.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 149585 }],
    ["Script", "Fusee.Engine.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 986555 }],
    ["Script", "Fusee.Engine.Common, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 112696 }],
    ["Script", "protobuf-net, Version=2.0.0.668, Culture=neutral, PublicKeyToken=257b51d87d2e4d67.js", { "sizeBytes": 229348 }],
    ["Script", "Fusee.Math.Core, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 656774 }],
    ["Script", "netstandard, Version=2.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51.js", { "sizeBytes": 224 }],
    ["Script", "Fusee.Engine.GUI, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 109506 }],
    ["Script", "System.Core, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 176855 }],
    ["Script", "System, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 928876 }],
    ["Script", "Fusee.Xene, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 125486 }],
    ["Script", "Fusee.Jometri, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 525422 }],
    ["Script", "Fusee.Xirkit, Version=0.7.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 172745 }],
    ["Script", "System.Data.Common, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 266 }],
    ["Script", "System.Diagnostics.StackTrace, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 277 }],
    ["Script", "System.Diagnostics.Tracing, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 274 }],
    ["Script", "System.Globalization.Extensions, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 279 }],
    ["Script", "System.IO.Compression, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 269 }],
    ["Script", "System.IO.Compression.FileSystem, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 280 }],
    ["Script", "System.ComponentModel.Composition, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 670334 }],
    ["Script", "System.Net.Sockets, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 266 }],
    ["Script", "System.ValueTuple, Version=4.0.2.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51.js", { "sizeBytes": 265 }],
    ["Script", "System.Runtime.InteropServices.RuntimeInformation, Version=4.0.2.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 297 }],
    ["Script", "System.Runtime.Serialization.Xml, Version=4.1.3.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 280 }],
    ["Script", "System.Runtime.Serialization.Primitives, Version=4.2.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 287 }],
    ["Script", "System.Security.Cryptography.Algorithms, Version=4.3.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 287 }],
    ["Script", "System.Security.SecureString, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 276 }],
    ["Script", "System.Threading.Overlapped, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 275 }],
    ["Script", "System.Configuration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 308847 }],
    ["Resources", "FxResources.System.Data.Common.SR.resj", { "sizeBytes": 47062 }],
    ["Resources", "FxResources.System.Globalization.Extensions.SR.resj", { "sizeBytes": 64 }],
    ["Resources", "FxResources.System.IO.Compression.SR.resj", { "sizeBytes": 5752 }],
    ["Resources", "FxResources.System.ValueTuple.SR.resj", { "sizeBytes": 250 }],
    ["Resources", "FxResources.System.Runtime.InteropServices.RuntimeInformation.SR.resj", { "sizeBytes": 176 }],
    ["Resources", "FxResources.System.Runtime.Serialization.Primitives.SR.resj", { "sizeBytes": 117 }],
    ["ManifestResource", "System.Runtime.Serialization.Primitives.Resources.System.Runtime.Serialization.Primitives.rd.xml", { "sizeBytes": 1067, "assembly": "System.Runtime.Serialization.Primitives" }],
    ["Resources", "FxResources.System.Security.Cryptography.Algorithms.SR.resj", { "sizeBytes": 7245 }],
    ["Resources", "FxResources.System.Threading.Overlapped.SR.resj", { "sizeBytes": 630 }],
];

window.__dojoBuildBridgeCache = window.__dojoBuildBridgeCache || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block'] = window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block'] || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block']['[{"path":"whats-new-in-typescript-3-5-rc.md"}]'] = {"content":{"tag":"div","originalProperties":{},"children":[{"tag":"h2","originalProperties":{},"children":["What's new in TypeScript 3.5 RC"],"properties":{"id":"whats-new-in-typescript-35-rc","key":3},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["The latest release of ",{"tag":"a","originalProperties":{},"children":["TypeScript 3.5 RC"],"properties":{"href":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/","target":"_blank","rel":"nofollow","key":4},"type":"__VNODE_TYPE"}," is here, which means that 3.5 is right around the corner.\nYou should test your projects with it now, because they are probably broken, so fix 'em fast fool!"],"properties":{"key":5},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["A cool feature coming to 3.5 is the ",{"tag":"code","originalProperties":{},"children":["Omit"],"properties":{"key":6},"type":"__VNODE_TYPE"}," type, which isn't so much a type as it a type utility.\nIt basically let's you remove properties from a type."],"properties":{"key":7},"type":"__VNODE_TYPE"},"\n",{"tag":"pre","originalProperties":{},"children":[{"tag":"code","originalProperties":{},"children":[{"tag":"span","originalProperties":{},"children":["interface"],"properties":{"class":"token keyword","key":8},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["Point3D"],"properties":{"class":"token class-name","key":9},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["{"],"properties":{"class":"token punctuation","key":10},"type":"__VNODE_TYPE"},"\n    x",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":11},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":12},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":13},"type":"__VNODE_TYPE"},"\n    y",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":14},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":15},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":16},"type":"__VNODE_TYPE"},"\n    z",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":17},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":18},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":19},"type":"__VNODE_TYPE"},"\n",{"tag":"span","originalProperties":{},"children":["}"],"properties":{"class":"token punctuation","key":20},"type":"__VNODE_TYPE"},"\n\n",{"tag":"span","originalProperties":{},"children":["// define a narrow type without a \"z\" property"],"properties":{"class":"token comment","key":21},"type":"__VNODE_TYPE"},"\n",{"tag":"span","originalProperties":{},"children":["const"],"properties":{"class":"token keyword","key":22},"type":"__VNODE_TYPE"}," point2d",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":23},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["Omit"],"properties":{"class":"token maybe-class-name","key":24},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":["<"],"properties":{"class":"token operator","key":25},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":["Point3D"],"properties":{"class":"token maybe-class-name","key":26},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[","],"properties":{"class":"token punctuation","key":27},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["\"z\""],"properties":{"class":"token string","key":28},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[">"],"properties":{"class":"token operator","key":29},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["="],"properties":{"class":"token operator","key":30},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["{"],"properties":{"class":"token punctuation","key":31},"type":"__VNODE_TYPE"}," x",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":32},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["2"],"properties":{"class":"token number","key":33},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[","],"properties":{"class":"token punctuation","key":34},"type":"__VNODE_TYPE"}," y",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":35},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["3"],"properties":{"class":"token number","key":36},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["}"],"properties":{"class":"token punctuation","key":37},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":38},"type":"__VNODE_TYPE"},"\n"],"properties":{"class":"language-ts","key":39},"type":"__VNODE_TYPE"}],"properties":{"class":"language-ts","key":40},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["That's pretty cool fool!"],"properties":{"key":41},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["There's also some improved type inference for generic constructors, which means less typing for me when writing apps, so I can fully support that."],"properties":{"key":42},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["There's plenty more to come, but I haven't gone over all of it yet."],"properties":{"key":43},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["I'm ready for 3.5, so bring it on!"],"properties":{"key":44},"type":"__VNODE_TYPE"}],"properties":{"key":45},"type":"__VNODE_TYPE"},"meta":{"title":"What's new in TypeScript 3.5 RC","date":"2019-05-19T00:00:00.000Z","author":"Rene Rubalcava"}};
window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block'] = window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block'] || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block']['[{}]'] = [{"file":"whats-new-in-typescript-3-5-rc.md","content":"---\ntitle: What's new in TypeScript 3.5 RC\ndate: 2019-05-19\nauthor: Rene Rubalcava\n---\n\n## What's new in TypeScript 3.5 RC\n\nThe latest release of [TypeScript 3.5 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/) is here, which means that 3.5 is right around the corner.\nYou should test your projects with it now, because they are probably broken, so fix 'em fast fool!\n\n<!-- more -->\n\nA cool feature coming to 3.5 is the `Omit` type, which isn't so much a type as it a type utility.\nIt basically let's you remove properties from a type.\n\n```ts\ninterface Point3D {\n\tx: number;\n\ty: number;\n\tz: number;\n}\n\n// define a narrow type without a \"z\" property\nconst point2d: Omit<Point3D, \"z\"> = { x: 2, y: 3 };\n```\n\nThat's pretty cool fool!\n\nThere's also some improved type inference for generic constructors, which means less typing for me when writing apps, so I can fully support that.\n\nThere's plenty more to come, but I haven't gone over all of it yet.\n\nI'm ready for 3.5, so bring it on!","meta":{"title":"What's new in TypeScript 3.5 RC","date":"2019-05-19T00:00:00.000Z","author":"Rene Rubalcava"}}];
window.__dojoBuildBridgeCache = window.__dojoBuildBridgeCache || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block'] = window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block'] || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-index.block']['[{}]'] = [{"file":"whats-new-in-typescript-3-5-rc.md","content":"---\ntitle: What's new in TypeScript 3.5 RC\ndate: 2019-05-19\nauthor: Rene Rubalcava\n---\n\n## What's new in TypeScript 3.5 RC\n\nThe latest release of [TypeScript 3.5 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/) is here, which means that 3.5 is right around the corner.\nYou should test your projects with it now, because they are probably broken, so fix 'em fast fool!\n\n<!-- more -->\n\nA cool feature coming to 3.5 is the `Omit` type, which isn't so much a type as it a type utility.\nIt basically let's you remove properties from a type.\n\n```ts\ninterface Point3D {\n\tx: number;\n\ty: number;\n\tz: number;\n}\n\n// define a narrow type without a \"z\" property\nconst point2d: Omit<Point3D, \"z\"> = { x: 2, y: 3 };\n```\n\nThat's pretty cool fool!\n\nThere's also some improved type inference for generic constructors, which means less typing for me when writing apps, so I can fully support that.\n\nThere's plenty more to come, but I haven't gone over all of it yet.\n\nI'm ready for 3.5, so bring it on!","meta":{"title":"What's new in TypeScript 3.5 RC","date":"2019-05-19T00:00:00.000Z","author":"Rene Rubalcava"}}];
window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block'] = window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block'] || {};window.__dojoBuildBridgeCache['src/blocks/compile-blog-post.block']['[{"path":"whats-new-in-typescript-3-5-rc.md"}]'] = {"content":{"tag":"div","originalProperties":{},"children":[{"tag":"h2","originalProperties":{},"children":["What's new in TypeScript 3.5 RC"],"properties":{"id":"whats-new-in-typescript-35-rc","key":3},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["The latest release of ",{"tag":"a","originalProperties":{},"children":["TypeScript 3.5 RC"],"properties":{"href":"https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/","target":"_blank","rel":"nofollow","key":4},"type":"__VNODE_TYPE"}," is here, which means that 3.5 is right around the corner.\nYou should test your projects with it now, because they are probably broken, so fix 'em fast fool!"],"properties":{"key":5},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["A cool feature coming to 3.5 is the ",{"tag":"code","originalProperties":{},"children":["Omit"],"properties":{"key":6},"type":"__VNODE_TYPE"}," type, which isn't so much a type as it a type utility.\nIt basically let's you remove properties from a type."],"properties":{"key":7},"type":"__VNODE_TYPE"},"\n",{"tag":"pre","originalProperties":{},"children":[{"tag":"code","originalProperties":{},"children":[{"tag":"span","originalProperties":{},"children":["interface"],"properties":{"class":"token keyword","key":8},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["Point3D"],"properties":{"class":"token class-name","key":9},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["{"],"properties":{"class":"token punctuation","key":10},"type":"__VNODE_TYPE"},"\n    x",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":11},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":12},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":13},"type":"__VNODE_TYPE"},"\n    y",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":14},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":15},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":16},"type":"__VNODE_TYPE"},"\n    z",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":17},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["number"],"properties":{"class":"token builtin","key":18},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":19},"type":"__VNODE_TYPE"},"\n",{"tag":"span","originalProperties":{},"children":["}"],"properties":{"class":"token punctuation","key":20},"type":"__VNODE_TYPE"},"\n\n",{"tag":"span","originalProperties":{},"children":["// define a narrow type without a \"z\" property"],"properties":{"class":"token comment","key":21},"type":"__VNODE_TYPE"},"\n",{"tag":"span","originalProperties":{},"children":["const"],"properties":{"class":"token keyword","key":22},"type":"__VNODE_TYPE"}," point2d",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":23},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["Omit"],"properties":{"class":"token maybe-class-name","key":24},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":["<"],"properties":{"class":"token operator","key":25},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":["Point3D"],"properties":{"class":"token maybe-class-name","key":26},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[","],"properties":{"class":"token punctuation","key":27},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["\"z\""],"properties":{"class":"token string","key":28},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[">"],"properties":{"class":"token operator","key":29},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["="],"properties":{"class":"token operator","key":30},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["{"],"properties":{"class":"token punctuation","key":31},"type":"__VNODE_TYPE"}," x",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":32},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["2"],"properties":{"class":"token number","key":33},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[","],"properties":{"class":"token punctuation","key":34},"type":"__VNODE_TYPE"}," y",{"tag":"span","originalProperties":{},"children":[":"],"properties":{"class":"token punctuation","key":35},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["3"],"properties":{"class":"token number","key":36},"type":"__VNODE_TYPE"}," ",{"tag":"span","originalProperties":{},"children":["}"],"properties":{"class":"token punctuation","key":37},"type":"__VNODE_TYPE"},{"tag":"span","originalProperties":{},"children":[";"],"properties":{"class":"token punctuation","key":38},"type":"__VNODE_TYPE"},"\n"],"properties":{"class":"language-ts","key":39},"type":"__VNODE_TYPE"}],"properties":{"class":"language-ts","key":40},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["That's pretty cool fool!"],"properties":{"key":41},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["There's also some improved type inference for generic constructors, which means less typing for me when writing apps, so I can fully support that."],"properties":{"key":42},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["There's plenty more to come, but I haven't gone over all of it yet."],"properties":{"key":43},"type":"__VNODE_TYPE"},"\n",{"tag":"p","originalProperties":{},"children":["I'm ready for 3.5, so bring it on!"],"properties":{"key":44},"type":"__VNODE_TYPE"}],"properties":{"key":45},"type":"__VNODE_TYPE"},"meta":{"title":"What's new in TypeScript 3.5 RC","date":"2019-05-19T00:00:00.000Z","author":"Rene Rubalcava"}};
/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpbtr_site=window.dojoWebpackJsonpbtr_site||[]).push([[8],{36:function(e,t,r){e.exports={" _key":"btr-site/Content",root:"Content-m__root__1ITm5"}},38:function(e,t,r){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var o=r(20),a=r(23),i=r(25),n=r(36);let d=class extends(Object(i.b)(o.b)){render(){return Object(a.a)("article",{classes:[this.theme(n.root)]},this.children)}};d=function(e,t,r,o){var a,i=arguments.length,n=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,o);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(n=(i<3?a(n):i>3?a(t,r,n):a(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}([Object(i.d)(n)],d);t.a=d},92:function(e,t,r){e.exports={" _key":"btr-site/Blog",root:"Blog-m__root__1B0aR"}},95:function(e,t,r){"use strict";r.r(t);var o=r(20),a=r(34),i=r(24),n=r(30);var d=class extends a.a{constructor(e){super(),this._moduleMap=new n.b,this._invalidate=e.invalidate}run(e){return(...t)=>{const r=JSON.stringify(t);let o=this._moduleMap.get(e);if(o){const e=o.get(r);if(void 0!==e)return e}const a=e(...t);return a&&"function"==typeof a.then?(a.then(t=>{o||(o=new i.b,this._moduleMap.set(e,o)),o.set(r,t),this._invalidate()}),null):a}}},l=r(23),c=r(1),s=r(0),u="src/blocks/compile-blog-index.block",p=function(){var e=Array.prototype.slice.call(arguments);
/** @preserve dojoBuildBridgeCache 'src/blocks/compile-blog-index.block' **/if(Object(c.default)("build-time-render")&&s.default.__dojoBuildBridge)return s.default.__dojoBuildBridge(u,e);var t=JSON.stringify(e);return s.default.__dojoBuildBridgeCache&&s.default.__dojoBuildBridgeCache[u]&&s.default.__dojoBuildBridgeCache[u][t]?s.default.__dojoBuildBridgeCache[u][t]:void 0},f=r(35),b="src/blocks/compile-blog-post.block",_=function(){var e=Array.prototype.slice.call(arguments);
/** @preserve dojoBuildBridgeCache 'src/blocks/compile-blog-post.block' **/if(Object(c.default)("build-time-render")&&s.default.__dojoBuildBridge)return s.default.__dojoBuildBridge(b,e);var t=JSON.stringify(e);return s.default.__dojoBuildBridgeCache&&s.default.__dojoBuildBridgeCache[b]&&s.default.__dojoBuildBridgeCache[b][t]?s.default.__dojoBuildBridgeCache[b][t]:void 0},h=r(38);const j=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"});class m extends o.b{render(){let{excerpt:e=!1,path:t}=this.properties;t.includes(".md")||(t=`${t}.md`);const r=this.meta(d).run(_)({path:t});if(r){const o=j.format(new Date(r.meta.date)),a=[Object(l.a)("p",null,r.meta.author," | ",o),r.content],i=e&&Object(l.a)("p",null,Object(l.a)(f.a,{to:"blog-post",params:{path:t.replace("posts/","").replace(".md","")}},"READ MORE"));return Object(l.a)(h.a,null,Object(l.a)(f.a,{to:"blog-post",params:{path:t.replace("posts/","").replace(".md","")}},r.meta.title),a,i)}}}var g=r(92),B=r(44);r.d(t,"default",function(){return O});class O extends o.b{render(){const{standalone:e=!1}=this.properties,t=this.meta(d).run(p)({});return Object(l.a)("main",{classes:[g.root]},e?void 0:t&&t.map(e=>[Object(l.a)(m,{path:e.file,excerpt:!0}),Object(l.a)("hr",null)]),Object(l.a)(B.a,{id:"blog-post",renderer:({params:e})=>Object(l.a)(m,{path:e.path})}))}}}}]);
//# sourceMappingURL=Blog.301b187040403e29c724.bundle.js.map
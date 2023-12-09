(()=>{var e={};e.id=6499,e.ids=[6499],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},70405:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>l});var a=r(67096),s=r(16132),o=r(37284),n=r.n(o),i=r(32564),d={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["dashboard",{children:["add-company",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,46093)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\dashboard\\add-company\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,50505)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\dashboard\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5322)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,35784)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Sayem\\Techfilo Agency\\techfilo\\app\\dashboard\\add-company\\page.js"],p="/dashboard/add-company/page",u={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/add-company/page",pathname:"/dashboard/add-company",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},55562:(e,t,r)=>{Promise.resolve().then(r.bind(r,65630))},65630:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(30784),s=r(84782),o=r(52952),n=r(52451),i=r.n(n),d=r(9885),l=r(12670),c=r(10345);function Company(){let[e,t]=(0,d.useState)([]),[r]=(0,l.F_)(s.I);return console.log(e),(0,a.jsxs)("div",{children:[a.jsx("h1",{className:"font-semibold",children:"Add Company"}),(0,a.jsxs)("div",{children:[a.jsx("div",{className:"grid md:flex grid-cols-2 gap-3",children:e?.map((e,t)=>a.jsx("div",{className:"w-[150px] h-[150px]",children:a.jsx(i(),{className:"w-full h-full bg-center object-cover border rounded-lg",width:200,height:200,src:e,alt:"image"})},t))}),a.jsx("div",{className:"w-full border-dashed mt-5 p-6 flex items-center justify-center border-2 h-32 bg-neutral-100 rounded-md ",children:a.jsx(o.ZF,{onUpload:(r,a)=>{a.close(),t([...e,r?.info.secure_url])},uploadPreset:"essorybd",children:({open:e})=>{function handleOnClick(t){t.preventDefault(),e()}return a.jsx("button",{className:"button bg-blue-500 px-6 py-3 rounded-lg text-white",onClick:handleOnClick,children:"Upload an Image"})}})})]}),a.jsx("button",{onClick:()=>{try{fetch("../../api/company",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${localStorage.getItem("token")}`,email:r?.email},body:JSON.stringify({image:e})}).then(e=>e.json).then(()=>(t([]),c.default.success("Successfully saves")))}catch(e){return c.default.error(e?.message)}},className:"bg-orange-500 px-6 py-2 text-white mt-6",children:"Save"})]})}let p=Company},46093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>d});var a=r(95153);let s=(0,a.createProxy)(String.raw`D:\Sayem\Techfilo Agency\techfilo\app\dashboard\add-company\page.js`),{__esModule:o,$$typeof:n}=s,i=s.default,d=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[5253,242,9202,4407,3523,1678,6386,3004,7353,3468],()=>__webpack_exec__(70405));module.exports=r})();
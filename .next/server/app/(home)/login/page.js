(()=>{var e={};e.id=586,e.ids=[586],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},95463:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>c});var s=r(67096),o=r(16132),a=r(37284),i=r.n(a),n=r(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["(home)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,39497)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\login\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,96974)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5322)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,35784)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\login\\page.js"],d="/(home)/login/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(home)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},62781:(e,t,r)=>{Promise.resolve().then(r.bind(r,16865))},16865:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(30784),o=r(34226),a=r(9885),i=r(84782),n=r(57114);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,a.useState)(""),r=(0,n.useRouter)(),[l,c]=(0,a.useState)("");return s.jsx("div",{className:"md:px-20 px-6",children:s.jsx("div",{className:"text-black w-full h-screen flex items-center justify-center flex-col",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let s=e.target.email.value,a=e.target.password.value;(0,o.e5)(i.I,s,a).then(t=>{e.target.reset(),fetch("/api/verify-jwt",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer pKFxWfMPEfzMJ7/MJgSFJ+Wvjn0NiDXT=="},body:JSON.stringify(t?.user?.email)}).then(e=>e.json()).then(e=>{localStorage.setItem("token",e?.data)}),r.push("/")}).catch(r=>{e.target.reset(),t(r.message)})},className:"flex flex-col gap-4 border border-gray-200 bg-white shadow-md p-6 w-96",children:[s.jsx("h1",{className:"font-bold text-2xl ",children:"Admin Login"}),s.jsx("input",{required:!0,className:"border border-gray-400 p-4 placeholder-slate-700",type:"email",name:"email",id:"",placeholder:"Enter Your Email"}),s.jsx("input",{required:!0,className:"border border-gray-400 p-4 placeholder-slate-700",type:"password",name:"password",id:"",placeholder:"Enter Your Password"}),e&&s.jsx("p",{className:"text-red-500 font-semibold",children:e}),s.jsx("button",{className:"mt-3 bg-primary py-4 font-semibold text-white",children:"Login"})]})})})}},39497:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});var s=r(95153);let o=(0,s.createProxy)(String.raw`D:\Sayem\Techfilo Agency\techfilo\app\(home)\login\page.js`),{__esModule:a,$$typeof:i}=o,n=o.default,l=n},52300:(e,t,r)=>{"use strict";let{createProxy:s}=r(95153);e.exports=s("D:\\Sayem\\Techfilo Agency\\techfilo\\node_modules\\next\\dist\\client\\link.js")},24353:(e,t,r)=>{"use strict";e.exports=r(52300)}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[5253,242,9202,3004,7353,3817],()=>__webpack_exec__(95463));module.exports=r})();
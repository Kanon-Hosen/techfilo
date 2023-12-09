(()=>{var e={};e.id=4314,e.ids=[4314],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},53950:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>c});var o=r(67096),s=r(16132),i=r(37284),a=r.n(i),l=r(32564),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(t,n);let c=["",{children:["(home)",{children:["portfolio",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,79340)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\portfolio\\page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8081)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\portfolio\\layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,96974)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5322)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,35784)),"D:\\Sayem\\Techfilo Agency\\techfilo\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\Sayem\\Techfilo Agency\\techfilo\\app\\(home)\\portfolio\\page.js"],u="/(home)/portfolio/page",d={require:r,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(home)/portfolio/page",pathname:"/portfolio",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},19749:(e,t,r)=>{Promise.resolve().then(r.bind(r,19883))},35303:()=>{},19883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var o=r(30784),s=r(57702),i=r(776),a=r(52451),l=r.n(a),n=r(57114),c=r(9885);function Portfolio(){let[e,t]=(0,c.useState)("All"),{data:r,isLoading:a}=(0,i.lA)(e),p=(0,n.useRouter)();return(0,o.jsxs)("div",{className:"my-10 mt-20 md:px-10 px-6",children:[o.jsx("h1",{className:"text-center font-bold text-4xl",children:"Our work"}),(0,o.jsxs)("div",{className:"flex relative w-full items-center justify-center gap-8 mt-5 text-xl ",children:[o.jsx("p",{onClick:()=>t("All"),className:` ${"All"===e?"text-primary":"text-gray-600"} hover:text-primary text-gray-600 transition-colors cursor-pointer`,children:"All"}),o.jsx("div",{onClick:()=>t("Graphic"),className:` ${"Graphic"===e?"text-primary":"text-gray-600"} hover:text-primary text-gray-600 w-full group  transition-colors cursor-pointer`,children:"Graphic"}),(0,o.jsxs)("div",{className:"bg-white shadow p-4 group-hover:flex rounded-md  text-sm absolute top-7 left-0 hidden flex-col gap-3 z-40",children:[o.jsx("p",{className:"inline-block cursor-pointer hover:text-primary transition-colors",children:"Book Cover"}),o.jsx("p",{className:"inline-block cursor-pointer hover:text-primary transition-colors",children:"Art"}),o.jsx("p",{className:"inline-block cursor-pointer hover:text-primary transition-colors",children:"Logo"}),o.jsx("p",{className:"inline-block cursor-pointer hover:text-primary transition-colors",children:"Banner Design"})]}),o.jsx("p",{onClick:()=>t("Website"),className:` ${"Website"===e?"text-primary":"text-gray-600"} hover:text-primary text-gray-600 transition-colors cursor-pointer`,children:"Website"})]}),a?o.jsx(s.Z,{}):o.jsx("div",{className:"my-10",children:r?.data.length!==0?o.jsx("div",{className:"xl:columns-4 mb-8 mt-5 lg:columns-4 md:columns-3 space-y-2 columns-2 gap-2",children:r?.data.map((e,t)=>o.jsxs("div",{onClick:()=>p.push(`/portfolio-details/${e?.name}`),className:"overflow-hidden relative w-full h-full cursor-pointer group duration-500 transition-transform",children:[o.jsx(l(),{src:e?.image[0],alt:"image",className:"h-auto max-w-full transition-transform hover:scale-110 duration-500",width:500,height:500}),o.jsx("div",{className:"w-full translate-y-full group-hover:translate-y-0 h-full top-0 left-0 group-hover:bg-neutral-900 group-hover:bg-opacity-70 transition-transform duration-500 absolute flex items-end py-4 justify-center",children:o.jsx("p",{className:"text-gray-200 font-normal",children:e?.name})})]},t))}):o.jsx("div",{className:"flex itecm-center justify-center w-full h-[300px]",children:o.jsx("h1",{className:"font-semibold text-3xl text-gray-600",children:"No work found"})})})]})}r(9);let p=Portfolio},57702:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(30784),s=r(52451),i=r.n(s);function Loading(){return o.jsx("div",{className:"flex items-center justify-center w-full h-screen",children:(0,o.jsxs)("div",{className:"relative flex justify-center items-center",children:[o.jsx("div",{className:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"}),o.jsx(i(),{src:"https://www.svgrepo.com/show/509001/avatar-thinking-9.svg",className:"rounded-full h-28 w-28",width:100,height:100})]})})}r(9885);let a=Loading},8081:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>s});var o=r(4656);r(3542);let s={title:"Portfolio - Our All Works",description:"Portfolio page"};function PortFolioLayout({children:e}){return o.jsx("div",{className:"max-w-[1440px] mx-auto ",children:e})}let i=PortFolioLayout},79340:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});var o=r(95153);let s=(0,o.createProxy)(String.raw`D:\Sayem\Techfilo Agency\techfilo\app\(home)\portfolio\page.js`),{__esModule:i,$$typeof:a}=s,l=s.default,n=l},52300:(e,t,r)=>{"use strict";let{createProxy:o}=r(95153);e.exports=o("D:\\Sayem\\Techfilo Agency\\techfilo\\node_modules\\next\\dist\\client\\link.js")},24353:(e,t,r)=>{"use strict";e.exports=r(52300)},9:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[5253,242,9202,3004,7353,3817],()=>__webpack_exec__(53950));module.exports=r})();
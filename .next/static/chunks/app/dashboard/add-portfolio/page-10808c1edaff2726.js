(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{9911:function(e,l,s){Promise.resolve().then(s.bind(s,681))},9716:function(e,l,s){"use strict";s.d(l,{I:function(){return o}});var r=s(994),n=s(8153);let a=(0,r.ZF)({apiKey:"AIzaSyBoxo-HJXOMkFVp5FTBp6b3a9Uz_txC8Qk",authDomain:"elearning-ba6eb.firebaseapp.com",projectId:"elearning-ba6eb",storageBucket:"elearning-ba6eb.appspot.com",messagingSenderId:"48951181895",appId:"1:48951181895:web:9d56c9467e74be86c52762"}),o=(0,n.v0)(a)},681:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return page}});var r=s(7437),n=s(9716);s(4629),s(9370),s(3328),s(5975);var a=s(6978),o=s(6932),Editor_TextEditor=function(){let e=(0,o.jE)({extensions:[a.Z],editorProps:{attributes:{class:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl  p-6 w-full h-full border-2"}},content:"<p>Write Here...</p>"});return(0,r.jsx)(o.kg,{editor:e})},t=s(1412),i=s(6691),d=s.n(i),c=s(2265),u=s(5496),m=s(5925),page=()=>{let[e]=(0,u.F_)(n.I),[l,s]=(0,c.useState)([]);return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-xl font-bold drop-shadow-lg",children:"Add Portfolio Item"}),(0,r.jsx)("div",{className:"my-8",children:(0,r.jsxs)("form",{onSubmit:r=>{r.preventDefault();let n=r.target.name.value,a=r.target.category.value,o=r.target.subcategory.value,t=r.target.link.value;try{fetch("../../api/portfolio",{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token")),email:null==e?void 0:e.email},body:JSON.stringify({name:n,image:l,category:a,subcategory:o,link:t})}).then(e=>e.json()).then(e=>e.errorMessage?m.default.error(e.errorMessage):(r.target.reset(),s([]),m.default.success("Successfully added portfolio item")))}catch(e){return m.default.error(e.message)}},children:[(0,r.jsx)("div",{className:"grid md:flex grid-cols-2 gap-3",children:null==l?void 0:l.map((e,l)=>(0,r.jsx)("div",{className:"w-[150px] h-[150px]",children:(0,r.jsx)(d(),{className:"w-full h-full bg-center object-cover border rounded-lg",width:200,height:200,src:e,alt:"image"})},l))}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(t.ZF,{onUpload:(e,r)=>{r.close(),s([...l,null==e?void 0:e.info.secure_url])},uploadPreset:"essorybd",children:e=>{let{open:l}=e;function handleOnClick(e){e.preventDefault(),l()}return(0,r.jsx)("button",{className:"button bg-blue-500 px-6 py-3 rounded-lg text-white",onClick:handleOnClick,children:"Upload an Image"})}})}),(0,r.jsxs)("div",{className:"flex md:flex-row flex-col gap-10 mt-5",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,r.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Category:"}),(0,r.jsxs)("select",{name:"category",required:!0,className:"p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none",id:"",children:[(0,r.jsx)("option",{value:"Graphic",children:"Graphic"}),(0,r.jsx)("option",{value:"Website Development",children:"Website "})]})]}),(0,r.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,r.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Subcategory:"}),(0,r.jsxs)("select",{name:"subcategory",required:!0,className:"p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none",id:"",children:[(0,r.jsx)("option",{value:"Logo Design",children:"Logo Design"}),(0,r.jsx)("option",{value:"Banner Design",children:"Banner Design"}),(0,r.jsx)("option",{value:"Flyer Design",children:"Flyer Design"}),(0,r.jsx)("option",{value:"Landing Page",children:"Landing Page"}),(0,r.jsx)("option",{value:"E-commerce Website",children:"E-commerce Website"})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,r.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Name:"}),(0,r.jsx)("input",{name:"name",type:"text",required:!0,placeholder:"Name",className:"p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"})]}),(0,r.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,r.jsx)("label",{htmlFor:"",className:"font-semibold",children:"Preview Link:"}),(0,r.jsx)("input",{name:"link",type:"text",required:!0,placeholder:"Preview Link",className:"p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"})]})]})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("h1",{className:"my-6 font-semibold",children:"Project Description:"}),(0,r.jsx)(Editor_TextEditor,{})]}),(0,r.jsx)("div",{className:"w-44 bg-cyan-500 rounded-md flex items-center justify-center font-semibold text-white mt-5",children:(0,r.jsx)("button",{className:"w-full p-3",children:"Save"})})]})})]})}}},function(e){e.O(0,[153,572,413,923,216,471,750,971,472,744],function(){return e(e.s=9911)}),_N_E=e.O()}]);
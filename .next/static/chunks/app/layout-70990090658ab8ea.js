(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9572:function(e,r,t){Promise.resolve().then(t.t.bind(t,2853,23)),Promise.resolve().then(t.bind(t,5925)),Promise.resolve().then(t.bind(t,5268))},9736:function(e,r,t){"use strict";t.d(r,{BJ:function(){return a},P$:function(){return u},ky:function(){return d},lA:function(){return i},yy:function(){return n}});var o=t(3864);let n=(0,o.createApi)({reducerPath:"App",baseQuery:(0,o.fetchBaseQuery)({baseUrl:"../../api/"}),tagTypes:["portfolio","company","testimonial"],endpoints:e=>({getAllPortfolio:e.query({query:e=>({url:"portfolio?category=".concat(e),method:"GET",headers:{authorization:"Bearer 78df8g67df8df6f9df8d78f78"}}),providesTags:["portfolio"]}),getOnePortfolio:e.query({query:e=>({url:"portfolio/".concat(e),method:"GET",headers:{authorization:"Bearer 78df8g67df8df6f9df8d78f78"}}),providesTags:["portfolio"]}),getAllCompany:e.query({query:()=>({url:"company",method:"GET",headers:{authorization:"Bearer 78df8g67df8df6f9df8d78f78"}}),providesTags:"company"}),getAllTestimonails:e.query({query:()=>({url:"testimonial",method:"GET",headers:{authorization:"Bearer 78df8g67df8df6f9df8d78f78"}}),providesTags:"testimonial"})})}),{useGetAllPortfolioQuery:i,useGetAllCompanyQuery:d,useGetAllTestimonailsQuery:u,useGetOnePortfolioQuery:a}=n},5268:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Redux_ReduxRootProvider}});var o=t(7437),n=t(6555),i=t(6349),d=t(4302),u=t(9736);let a=(0,d.configureStore)({reducer:{[u.yy.reducerPath]:u.yy.reducer},middleware:e=>e().concat(u.yy.middleware)});(0,i.setupListeners)(a.dispatch);var Redux_ReduxRootProvider=function(e){let{children:r}=e;return(0,o.jsx)(n.Provider,{store:a,children:r})}},2853:function(){}},function(e){e.O(0,[107,683,971,472,744],function(){return e(e.s=9572)}),_N_E=e.O()}]);
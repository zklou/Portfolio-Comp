(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{8186:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sections/ScrollText",function(){return l(6028)}])},6028:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var r=l(5893),s=l(7294);let n=()=>{let[e,t]=(0,s.useState)({xPos:0,yPos:0}),l=e=>{t({xPos:e.clientX,yPos:e.clientY})};return(0,s.useEffect)(()=>(window.addEventListener("mousemove",l),()=>{window.removeEventListener("mousemove",l)})),e};var d=l(8238),o=e=>{let{screen:t,i:l,setCurrentImage:o,currentImage:x}=e,[i,c]=(0,d.XI)(),{xPos:a,yPos:m}=n(),[u,f]=(0,s.useState)(!1),h=(0,s.useRef)(null),b=e=>{var t;(null===(t=e[0])||void 0===t?void 0:t.isIntersecting)&&(f(!0),o(l))},v={root:null,rootMargin:"0px",threshold:.5};return(0,s.useEffect)(()=>{let e=new IntersectionObserver(b,v);return h.current&&e.observe(h.current),()=>{h.current&&e.unobserve(h.current)}},[]),(0,r.jsx)("div",{className:"overflow-hidden xl:p-20 lg:p-10 border-0 border-red-400 ".concat(u?"text-visible":"screen-text"),ref:h,children:(0,r.jsxs)("div",{className:"flex font-bold tracking-tighter border-0 border-blue-500",children:[(0,r.jsxs)("div",{className:"p-4 text-white border-0 border-green-500 xl:text-9xl font-stencil-scroll lg:text-8xl md:text-6xl sm2:text-5xl sm1:hidden md:hidden",children:[t.id,(0,r.jsx)("span",{className:"lg:text-6xl md:text-5xl sm2:text-4xl sm1:text-3xl sm1:hidden",children:"#"})]}),(0,r.jsxs)("div",{className:"flex flex-col border-0 border-softPink",children:[(0,r.jsx)("div",{className:"flex flex-col border-0 border-yellow",children:(0,r.jsxs)("div",{className:"w-4/5 m-auto font-extrabold border-0 xl:p-6 lg:p-4 border-cyan xl:text-8xl lg:text-7xl md:text-8xl md:pt-2 lg:pt-0 sm2:text-5xl sm1:text-4xl sm1:p-4 sm1:pl-0",children:[(0,r.jsx)("div",{className:"text-blue-400",children:t.heading1}),(0,r.jsx)("div",{className:"text-blue-400",children:t.heading2})]})}),(0,r.jsx)("div",{className:"w-4/5 m-auto font-light tracking-normal text-left text-white border-0 border-red-500 lg:p-8 xl:text-lg lg:text-lg md:text-lg sm1:mt-0 md:mt-8 lg:mt-0 sm1:text-xs",children:t.description})]})]})})}}},function(e){e.O(0,[238,888,774,179],function(){return e(e.s=8186)}),_N_E=e.O()}]);
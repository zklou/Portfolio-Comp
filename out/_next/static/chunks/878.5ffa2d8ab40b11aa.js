"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{878:function(e,t,s){s.r(t);var a=s(5893),l=s(7294),n=s(2642),i=s(9975),o=s(5317);n.p8.registerPlugin(i._Z),t.default=()=>{let[e,t]=(0,l.useState)(0);(0,l.useEffect)(()=>{let e=setInterval(()=>{t(a=>a<100?a+1:(clearInterval(e),t(100),s()))},25)},[]);let s=()=>{n.p8.timeline({onComplete:()=>{console.log("Completed")}}).to("#line",{width:"100%",ease:o.Au.easeInOut,duration:1.2,delay:.7}).to("#counter",{opacity:0,duration:.3}).to("#counter",{display:"none",duration:.3}).to("#line",{height:"100%",ease:o.Au.easeInOut,duration:.7,delay:.5}).to("#content",{opacity:1,width:"100%",ease:o.Au.easeInOut,duration:.7}).to("#content-lines",{display:"block",duration:.1}).to("#content-lines",{opacity:1,stagger:.15,ease:o.Au.easeInOut,duration:.6})};return(0,a.jsxs)("div",{className:"relative w-screen h-screen overflow-hidden text-black",children:[(0,a.jsxs)("div",{className:"h-full w-full bg-[#000] flex justify-center items-center absolute top-0",children:[(0,a.jsx)("div",{id:"line",className:"absolute left-0 z-20 w-0 h-[2px] bg-blue-400"}),(0,a.jsx)("div",{id:"progress-bar",className:"absolute left-0 w-0 h-[1px] transition bg-white/80 0.4 transform",style:{width:e+"%"}}),(0,a.jsxs)("div",{id:"counter",className:"absolute z-30 tracking-tighter transform font-extralight text-white/80 sm1:-translate-y-10 md:-translate-y-20 sm1:text-5xl md:text-8xl",children:[e,"%"]})]}),(0,a.jsxs)("div",{id:"content",className:"absolute top-0 left-0 w-0 h-full bg-[#000] p-auto z-20 text-white",children:[(0,a.jsx)("div",{className:"h-screen"}),(0,a.jsx)("div",{})]})]})}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{4928:function(e,s,l){var t=l(5893),a=l(5675),i=l.n(a);let n=e=>{let{children:s,className:l,size:a="md",type:n="button",loading:r,disabled:c,...o}=e;return(0,t.jsxs)("button",{type:n,className:"button bg-secondary text-primary text-base md:text-2xl rounded-full flex items-center justify-center ".concat(l," size-").concat(a," ").concat(c||r?"disabled":""),...o,disabled:r||c,children:[r&&(0,t.jsx)(i(),{src:"/img/spinner.gif",alt:"spinner",height:32,width:32}),s]})};s.Z=n},220:function(e,s,l){l.d(s,{Z:function(){return q}});var t=l(5893),a=l(9417),i=l(9603),n=l(2713),r=l(1548),c=l(5675),o=l.n(c);let x={counterButton:"h-8 w-8 inline-flex justify-center items-center mx-1"},d=e=>{var s;let{item:l}=e,{updateQuantity:c,removeItem:d,updateSelected:m}=(0,r.i)();return(0,t.jsx)("div",{className:"px-4 py-6 bg-[#F9FAFB] border-b border-b-[#D0D5DD]",children:(0,t.jsxs)("div",{className:"flex ",children:[(0,t.jsx)("label",{className:"mr-2 font-normal",children:(0,t.jsx)("input",{checked:l.isSelected,type:"checkbox",className:"w-5 h-5",style:{accentColor:"#705D36"},onChange:()=>m(l.isSelected,l)})}),(0,t.jsx)("div",{className:"mr-4",children:(0,t.jsx)("div",{className:"h-[64px] w-[80px] relative flex-shrink-0 border border-primary rounded overflow-hidden",children:(0,t.jsx)(o(),{src:"".concat(n.yA).concat(l.image),alt:"product",fill:!0,className:"object-cover"})})}),(0,t.jsxs)("div",{className:"flex-grow",children:[(0,t.jsx)("h5",{className:"mb-2 font-normal leading-6 lowercase",children:l.name}),(0,t.jsxs)("p",{className:"mb-2 text-lg font-normal",children:["$",Number(l.price).toFixed(2)," (",null==l?void 0:null===(s=l.variant)||void 0===s?void 0:s.attribute_value[0].name,")"]}),(0,t.jsxs)("ul",{className:"flex -mx-1",children:[(0,t.jsx)("li",{onClick:()=>c(!0,l),children:(0,t.jsx)("button",{className:"".concat(x.counterButton," bg-white cursor-pointer text-2xl"),type:"button",children:"+"})}),(0,t.jsx)("li",{className:"".concat(x.counterButton," bg-primary-pink text-white text-base rounded-md"),children:l.quantity}),(0,t.jsx)("li",{onClick:()=>c(!1,l),children:(0,t.jsx)("button",{className:"".concat(x.counterButton," bg-white cursor-pointer text-2xl"),type:"button",children:"-"})})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(i.G,{className:"text-xl cursor-pointer text-[#98A2B3]",icon:a.Vui,onClick:()=>d(l)})})]})})};var m=l(4928),u=l(1664),p=l.n(u);let h=e=>{let{setIsOpen:s}=e,{cart:l,isAllSelected:n,selectAll:c}=(0,r.i)();return(0,t.jsxs)("div",{className:"h-full",children:[(0,t.jsxs)("div",{className:"p-4",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-8",children:[(0,t.jsx)("h4",{children:"cart"}),(0,t.jsx)(i.G,{onClick:()=>s(!1),className:"text-2xl cursor-pointer",icon:a.g82})]}),(0,t.jsx)("div",{className:"mb-3",children:(null==l?void 0:l.length)>0&&(0,t.jsxs)("label",{className:"inline-flex items-center font-normal",children:[(0,t.jsx)("input",{checked:n,type:"checkbox",className:"w-5 h-5 mr-2",style:{accentColor:"#705D36"},onChange(){c(!n)}}),"all"]})})]}),(0,t.jsx)("div",{className:"overflow-auto",style:{height:"calc(100% - 140px)"},children:l.map(e=>(0,t.jsx)(d,{item:e},e.id))}),(null==l?void 0:l.filter(e=>e.isSelected).length)?(0,t.jsx)(p(),{href:"/checkout",className:"absolute flex justify-center w-full bottom-4",children:(0,t.jsx)(m.Z,{className:"lowercase px-10 !h-14",children:"Checkout"})}):(0,t.jsx)("div",{className:"absolute flex justify-center w-full bottom-4",children:(0,t.jsx)(m.Z,{className:"lowercase px-10 !h-14",disabled:!0,children:"Checkout"})})]})};var j=l(7294),f=l(9058),g=l(8767),b=l(588),N=l(8115),v=l(9229);let w=e=>{let{footerBg:s,text:l}=e,[a,i]=(0,j.useState)(!1);return(0,t.jsxs)("div",{className:"".concat(s),children:[(0,t.jsxs)("div",{className:"container mx-auto",children:[(0,t.jsxs)("div",{className:"py-8 text-center md:py-16",children:[(0,t.jsx)(o(),{className:"mx-auto h-auto md:h-[177px] w-[150px] md:w-[197px]",src:"/img/logo.svg",height:177,width:197,alt:"Jules"}),(0,t.jsx)("h5",{className:"mb-6 text-[29px]",children:"“Live Your Magic!”"}),(0,t.jsx)("h5",{className:"mb-2",children:"Contact: jules@julesgissler.com"}),(0,t.jsx)("p",{className:"mb-3 text-xl font-normal md:mb-6",children:"Phoenix, AZ 2017 by jules gissler “Live Your Magic”"}),(0,t.jsx)(m.Z,{className:"px-8 mx-auto md:px-16",onClick:()=>i(!0),children:"click here to sign up for jules newsletter"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center pt-4 border-t md:justify-between pb-7 md:flex-nowrap",children:[(0,t.jsx)("p",{className:"w-full mb-2 text-sm font-normal text-center md:text-left flex-grow",children:l}),(0,t.jsx)(v.Z,{className:"!inline-flex flex-grow-0 w-auto"})]})]}),(0,t.jsx)(N.Z,{isOpen:a,setIsOpen:i})]})};var k=l(9893),y=l(4778),C=l(1163);let Z={links:"text-xl xl:text-7 px-3 font-bold text-primary hover:text-[#A41265] hidden lg:block",mobileLinks:"text-2xl mb-3 lowercase"},A=[{id:1,name:"home",link:"/"},{id:2,name:"pet paintings",link:"/pet-paintings"},{id:3,name:"commissions",link:"/commissions"}],G=[{id:1,name:"illustration & collage",link:"/illustration-and-collage"},{id:2,name:"stories",link:"/stories"},{id:3,name:"shop",link:"/shop"}];var _=function(e){let{logo:s}=e,[l,r]=(0,j.useState)(!1),c=(0,C.useRouter)();return(0,t.jsxs)("div",{className:"bg-secondary-bg",children:[(0,t.jsx)("div",{className:"max-w-2xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-300 sm:px-4",children:(0,t.jsxs)("div",{className:"flex items-start justify-between px-10 py-5 bg-center bg-no-repeat sm:bg-contain header-bg",style:{backgroundImage:"url(/img/headerBg.svg)"},children:[(0,t.jsx)("ul",{className:"inline-flex items-center w-1/2 -mx-3 lg:pt-10 text-",children:A.map(e=>(0,t.jsx)("li",{className:"".concat(Z.links),children:(0,t.jsx)(p(),{className:"/"!==e.link?"/"!==c.pathname&&c.pathname.includes(e.link)?"text-[#A41265]":"":"/"===c.pathname?"text-[#A41265]":"",href:e.link,children:e.name})},e.id))}),(0,t.jsx)(o(),{className:"flex-shrink-0 w-[80px] md:w-[96px] lg:w-[150px] xl:w-[187px] h-auto lg:h-[137px] xl:h-[171px] cursor-pointer",width:187,src:"".concat(n.yA).concat(s),alt:"Jules Gissler",height:171,onClick:()=>c.push("/")}),(0,t.jsxs)("ul",{className:"inline-flex items-center justify-end w-1/2 pt-3 md:pt-5 lg:pt-10",children:[G.map(e=>(0,t.jsx)("li",{className:"".concat(Z.links),children:(0,t.jsx)(p(),{className:"/"!==e.link?"/"!==c.pathname&&c.pathname.includes(e.link)?"text-[#A41265]":"":"/"===c.pathname?"text-[#A41265]":"",href:e.link,children:e.name})},e.id)),(0,t.jsx)("li",{className:"text-primary text-lg px-3 cursor-pointer hidden lg:block",children:(0,t.jsxs)(k.v,{menuButton:(0,t.jsx)(i.G,{icon:a.xiG}),transition:!0,children:[(0,t.jsx)(y.s,{onClick:()=>c.push("/about"),className:"text-primary",children:"About"}),(0,t.jsx)(y.s,{onClick:()=>c.push("/press-links"),className:"text-primary",children:"press/links"}),(0,t.jsx)(y.s,{onClick:()=>c.push("/contact"),className:"text-primary",children:"Contact"}),(0,t.jsx)(y.s,{onClick:()=>c.push("/blog"),className:"text-primary",children:"Blog"}),(0,t.jsx)(y.s,{onClick:()=>c.push("/events"),className:"text-primary",children:"Events"})]})}),(0,t.jsx)("li",{className:"block lg:hidden pr-2",onClick:()=>r(!0),children:(0,t.jsx)(i.G,{icon:a.xiG})})]})]})}),(0,t.jsx)(f.Z,{open:l,onClose:()=>r(!1),direction:"right",children:(0,t.jsxs)("div",{className:"relative h-full px-12 py-20 overflow-auto bg-secondary-bg",children:[(0,t.jsx)(i.G,{onClick:()=>r(!1),className:"absolute text-2xl top-7 left-7",icon:a.g82}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:Z.mobileLinks,children:(0,t.jsx)(p(),{href:"/about",children:"About"})}),(0,t.jsx)("li",{className:Z.mobileLinks,children:(0,t.jsx)(p(),{href:"/press-links",children:"Press/Links"})}),(0,t.jsx)("li",{className:Z.mobileLinks,children:(0,t.jsx)(p(),{href:"/contact",children:"Contact"})}),(0,t.jsx)("li",{className:Z.mobileLinks,children:(0,t.jsx)(p(),{href:"/blog",children:"Blog"})}),(0,t.jsx)("li",{className:Z.mobileLinks,children:(0,t.jsx)(p(),{href:"/events",children:"Events"})})]})]})})]})};let S=e=>{let{children:s,footerBg:l="bg-white",cartButton:n=!1}=e,[c,o]=(0,j.useState)(!1),{cart:x}=(0,r.i)(),{data:d}=(0,g.useQuery)("global",b.G);return(0,t.jsxs)("div",{children:[(0,t.jsx)(_,{logo:null==d?void 0:d.primary_logo}),s,(0,t.jsx)(w,{footerBg:l,text:null==d?void 0:d.footer_credit,socials:null==d?void 0:d.socials}),(0,t.jsx)(f.Z,{open:c,onClose:()=>o(!1),direction:"right",size:340,children:(0,t.jsx)(h,{setIsOpen:o})}),n?(0,t.jsxs)("button",{type:"button",className:"fixed right-0 z-20 p-1 text-white transform rounded-l bg-primary top-4 lg:top-9 md:p-2",onClick:()=>o(!c),children:[(0,t.jsx)(i.G,{icon:a.yYj,className:"text-[18px] md:text-[24px]"}),(0,t.jsxs)("p",{className:"text-sm md:text-lg",children:[(null==x?void 0:x.length)||0," items"]})]}):""]})};var q=S},8115:function(e,s,l){l.d(s,{Z:function(){return g}});var t=l(5893),a=l(9417),i=l(9603),n=l(4928),r=l(7536),c=l(6501),o=l(8767),x=l(5952);let d=async e=>{let{data:s}=await x.Z.post("subscribe",e);return s.data};var m=l(9361),u=l(7598);let p=e=>{let{setIsOpen:s}=e,{register:l,handleSubmit:a,formState:{errors:i}}=(0,r.cI)(),{mutate:x,isLoading:p}=(0,o.useMutation)(d,{onSuccess(){c.Am.success("subscribed successfully!!",{position:"top-right"}),s(!1)},onError(e){e&&c.Am.error(e.response.data.message,{position:"top-right"})}}),h=e=>{x(e)};return(0,t.jsxs)("form",{className:"flex flex-wrap -mx-1 sm:flex-nowrap",onSubmit:a(h),children:[(0,t.jsxs)("div",{className:"flex pt-6",children:[(0,t.jsx)(u.Zw,{placeholder:"name",...l("name",{required:"name is required!"}),error:null==i?void 0:i.name,wrapperClassName:"w-full px-1 mb-7 sm:mb-0",imgWrapperClassName:"w-full h-[75px] mt-[-21px]"}),(0,t.jsx)(u.Zw,{placeholder:"email",type:"email",...l("email",{required:"email is required!",pattern:{value:m.HN,message:"please add a valid email address."}}),error:null==i?void 0:i.email,wrapperClassName:"w-full px-1 mb-3 sm:mb-0",imgWrapperClassName:"w-full h-[75px] mt-[-21px]"})]}),(0,t.jsx)("div",{className:"w-full px-1 sm:w-auto sm:pt-5 md:pt-3",children:(0,t.jsx)(n.Z,{size:"sm",type:"submit",className:"px-16 mx-auto block max-w-[300px] sm:max-w-none w-full sm:w-auto",loading:p,children:"submit"})})]})};var h=l(3253),j=l.n(h);let f=e=>{let{isOpen:s,setIsOpen:l}=e;return(0,t.jsx)(j(),{isOpen:s,onRequestClose:()=>l(!1),style:{overlay:{zIndex:"100"},content:{maxWidth:"800px",transform:"translate(-50%, -50%)",inset:"50% auto auto 50%",width:"100%",padding:0,background:"#edfcfe"}},children:(0,t.jsxs)("div",{className:"relative pt-10 pb-10 bg-bottom bg-no-repeat border sm:pb-30 px-9 border-primary",children:[(0,t.jsx)(i.G,{className:"absolute text-2xl cursor-pointer top-6 right-6",icon:a.YIN,onClick:()=>l(!1)}),(0,t.jsxs)("div",{className:"mb-4 text-center md:mb-10",children:[(0,t.jsx)("h4",{className:"md:mb-2",children:"join jules Newsletter"}),(0,t.jsx)("p",{className:"text-2xl",children:"see what’s happening in Jules world!"})]}),(0,t.jsx)(p,{setIsOpen:l})]})})};var g=f},9229:function(e,s,l){var t=l(5893),a=l(3024),i=l(9603),n=l(4849),r=l(8767),c=l(588);let o="h-8 w-8 bg-secondary rounded-full flex justify-center items-center",x=e=>{var s,l,x,d;let{align:m="center",className:u=""}=e,{data:p,isLoading:h}=(0,r.useQuery)("global",c.G);return h?(0,t.jsxs)("ul",{className:"flex -mx-2 justify-".concat(m," mb-2 md:mb-0"),children:[(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)(n.Z,{height:32,width:32,circle:!0})}),(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)(n.Z,{height:32,width:32,circle:!0})}),(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)(n.Z,{height:32,width:32,circle:!0})}),(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)(n.Z,{height:32,width:32,circle:!0})})]}):(0,t.jsxs)("ul",{className:"flex -mx-2 w-full justify-".concat(m," ").concat(u),children:[(null==p?void 0:null===(s=p.socials)||void 0===s?void 0:s.instagram)&&(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)("a",{href:null==p?void 0:p.socials.instagram,target:"_blank",className:o,rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:a.Zzi})})}),(null==p?void 0:null===(l=p.socials)||void 0===l?void 0:l.facebook)&&(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)("a",{href:null==p?void 0:p.socials.facebook,target:"_blank",className:o,rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:a.neY})})}),(null==p?void 0:null===(x=p.socials)||void 0===x?void 0:x.linkedin)&&(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)("a",{href:null==p?void 0:p.socials.linkedin,target:"_blank",className:o,rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:a.D9H})})}),(null==p?void 0:null===(d=p.socials)||void 0===d?void 0:d.pinterest)&&(0,t.jsx)("li",{className:"text-base px-2",children:(0,t.jsx)("a",{href:null==p?void 0:p.socials.pinterest,target:"_blank",className:o,rel:"noreferrer",children:(0,t.jsx)(i.G,{icon:a.Xs4})})})]})};s.Z=x},7598:function(e,s,l){l.d(s,{Zw:function(){return m},xk:function(){return d}});var t=l(5893),a=l(4928),i=l(7294),n=l(7536),r=l(6501),c=l(8767),o=l(1931),x=l(9361);let d={inputImageWrapper:"absolute top-[7px] lg:top-[15px] right-[11px] lg:right-[18px] left-[8px] lg:left-[12px] h-[60%] md:h-[60%] sm:h-[70%]",descriptionImageWrapper:"absolute top-[14px] lg:top-[16px] right-[12px] lg:right-[12px] left-[12px] lg:left-[14px] h-[80%] md:h-[85%] sm:h-[90%]",inputText:"bg-transparent text-primary placeholder:text-primary text-lg md:text-2xl font-normal focus:ring-0 focus:outline-none w-full h-full px-6",inputFrameSize:"w-full h-[75px] mt-[-21px]"},m=i.forwardRef((e,s)=>{let{textarea:l,type:a="text",placeholder:i,wrapperClassName:n,imgWrapperClassName:r,error:c,isPurpleErrorColor:o,...x}=e;return(0,t.jsxs)("div",{className:n||"mb-8 text-center",children:[(0,t.jsxs)("main",{className:"relative z-0",children:[(0,t.jsx)("picture",{children:(0,t.jsx)("img",{className:r||"w-full mt-[-21px]",src:l?"/img/frames/new-frame/description_box.svg":"/img/frames/new-frame/input_box.png",alt:"frame"})}),(0,t.jsx)("section",{className:l?d.descriptionImageWrapper:d.inputImageWrapper,children:(0,t.jsx)("div",{className:"w-full h-full",children:l?(0,t.jsx)("textarea",{ref:s,placeholder:i,...x,className:d.inputText}):(0,t.jsx)("input",{ref:s,type:a,placeholder:i,...x,className:d.inputText})})})]}),c&&(0,t.jsx)("p",{className:"pl-2 mt-[-5px] text-base text-left ".concat(o?"text-[#551a8b]":"text-red-500"),children:null==c?void 0:c.message})]})});m.displayName="inputWithFrame";let u=()=>{let{register:e,handleSubmit:s,reset:l,formState:{errors:i}}=(0,n.cI)(),{mutate:d,isLoading:u}=(0,c.useMutation)(o.e,{onSuccess(){r.Am.success("message sent successfully!!",{position:"top-right"}),l()},onError(e){e&&r.Am.error(null==e?void 0:e.message,{position:"top-right"})}}),p=e=>{d(e)};return(0,t.jsxs)("form",{onSubmit:s(p),children:[(0,t.jsx)(m,{placeholder:"name",...e("name",{required:"name is required"}),error:null==i?void 0:i.name,isPurpleErrorColor:!0}),(0,t.jsx)(m,{placeholder:"email",type:"email",...e("email",{required:"email is required",pattern:{value:x.HN,message:"please add a valid email address."}}),error:null==i?void 0:i.email,isPurpleErrorColor:!0}),(0,t.jsx)(m,{placeholder:"phone",...e("phone",{required:"phone is required"}),error:null==i?void 0:i.phone,isPurpleErrorColor:!0}),(0,t.jsx)(m,{textarea:!0,placeholder:"message",...e("message",{required:"message is required"}),error:null==i?void 0:i.message,style:{marginTop:"12px"},isPurpleErrorColor:!0}),(0,t.jsx)("div",{children:(0,t.jsx)(a.Z,{className:"w-full",size:"sm",type:"submit",loading:u,children:"Submit"})})]})};s.ZP=u},1931:function(e,s,l){l.d(s,{H:function(){return a},e:function(){return i}});var t=l(5952);let a=async()=>{let{data:e}=await t.Z.get("contact/info");return e.data.contact_info},i=async e=>{let{data:s}=await t.Z.post("contact/message",e);return s.data}},588:function(e,s,l){l.d(s,{G:function(){return a}});var t=l(5952);let a=async()=>{let{data:e}=await t.Z.get("global-data");return e.global_data}},9361:function(e,s,l){l.d(s,{E5:function(){return i},HN:function(){return c},Jn:function(){return n},wU:function(){return r}});var t=l(2713),a=l(8982);let i=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=new Date(e),t=l.getDate(),a=l.toLocaleString("default",{month:"long"}),i=l.getFullYear(),n=l.getHours(),r=l.getMinutes();return s?"".concat(n%12||12,":").concat(r<10?"0".concat(r):r).concat(n<12?"am":"pm",", ").concat(t," ").concat(a," ").concat(i):"".concat(t," ").concat(a," ").concat(i)},n=e=>e?"".concat(t.yA).concat(e):"",r=()=>{let e={headers:{Authorization:"Bearer ".concat((0,a.LP)())}};return e},c=/^(?=.{1,256})(?=.{1,64}@.{1,255})(?=.{1,64}@[\w\d][\w\d.-]*\.[\w\d]{2,63}$)(?!.*[\w\d._%+-]+@[\w\d.-]+\.[\w\d]{2,63}.*[\w\d._%+-]+@[\w\d.-]+\.[\w\d]{2,63}).*[^\s][\w\d.%+-]{1,63}@[\w\d][\w\d.-]*\.[\w\d]{2,63}$/i}}]);
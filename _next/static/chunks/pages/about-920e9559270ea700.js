(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return l(1287)}])},3595:function(e,s,l){"use strict";var a=l(5893),t=l(2713),i=l(7294),c=l(1755);let r=e=>{var s;let{children:l,src:r}=e,[n,x]=(0,i.useState)(!1),m=(0,i.cloneElement)(l,{onClick:()=>x(!0),className:"".concat(null==l?void 0:null===(s=l.props)||void 0===s?void 0:s.className," cursor-pointer")});return(0,a.jsxs)(a.Fragment,{children:[m,(0,a.jsx)(c.Z,{open:!!n,maxWidth:1200,onClose:()=>x(!1),width:"auto",children:(0,a.jsx)("picture",{children:(0,a.jsx)("img",{src:"".concat(t.yA).concat(r),alt:"hero",className:"mx-auto"})})})]})};s.Z=r},3441:function(e,s,l){"use strict";var a=l(5893);let t=e=>{let{children:s,img:l}=e;return(0,a.jsx)("div",{className:"relative h-full w-full bg-secondary-bg",children:s})};s.Z=t},1755:function(e,s,l){"use strict";var a=l(5893),t=l(9417),i=l(9603),c=l(3253),r=l.n(c);let n=e=>{let{open:s=!1,onClose:l,children:c,maxWidth:n,className:x="",width:m="100%"}=e;return(0,a.jsx)(r(),{isOpen:s,onRequestClose:()=>l&&l(!1),style:{overlay:{zIndex:"100"},content:{maxWidth:n?"".concat(n,"px"):"unset",transform:"translate(-50%, -50%)",inset:"50% auto auto 50%",padding:"16px",maxHeight:"100vh",background:"transparent",border:"none",outline:"none",overflow:"auto"}},className:"w-full md:w-[".concat(m,"] absolute"),children:(0,a.jsxs)("div",{className:"border rounded-md border-primary bg-white w-full ".concat(x," mx-auto relative p-4 md:p-10"),children:[(0,a.jsx)(i.G,{className:"absolute right-1 md:right-4 top-1 md:top-4 cursor-pointer z-20 text-sm md:text-xl",icon:t.YIN,onClick:()=>l&&l(!1)}),c]})})};s.Z=n},1287:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return W}});var a=l(5893),t=l(220),i=l(2713),c=l(4849);let r=e=>{let{data:s,loading:l}=e;return l?(0,a.jsxs)("div",{className:"py-16",children:[(0,a.jsx)("h2",{className:"mb-8 text-center lowercase",children:(0,a.jsx)(c.Z,{height:50})}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center max-w-6xl mx-auto -m-3",children:Object.keys([,,,]).map(e=>(0,a.jsx)("div",{className:"w-full p-3 sm:w-1/2 lg:w-1/3",children:(0,a.jsx)(c.Z,{height:200})},e))})]}):(0,a.jsx)("div",{children:s&&(0,a.jsxs)("div",{className:"py-16",children:[(0,a.jsx)("h2",{className:"mb-8 text-center lowercase",children:"A Member Of"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center max-w-6xl mx-auto -m-3",children:s.map(e=>(0,a.jsx)("div",{className:"flex items-center justify-center h-56 mx-5",children:(0,a.jsx)("picture",{className:"max-w-[280px]",children:(0,a.jsx)("img",{className:"w-full",src:"".concat(i.yA).concat(e.image_path),alt:"logo"})})},e.id))})]})})};var n=l(3595),x=l(3441),m=l(1755),d=l(4928),o=l(5675),p=l.n(o),h=l(7294),u=l(8523),j=l(7536),f=l(6501),g=l(8767),N=l(5952);let v=async()=>{let{data:e}=await N.Z.get("about");return e.data},w=async e=>{let{data:s}=await N.Z.post("illustration-for-hire",e);return s.data};var b=l(9361),y=l(7598);let _=e=>{var s,l;let{onClose:t}=e,{register:i,handleSubmit:c,reset:r,formState:{errors:n}}=(0,j.cI)(),{mutate:x,isLoading:m}=(0,g.useMutation)(w,{onSuccess(){f.Am.success("Mail sent successfuly!!",{position:"top-right"}),t(),r()},onError(e){e&&f.Am.error(null==e?void 0:e.message,{position:"top-right"})}}),[o,N]=(0,h.useState)([]),{getRootProps:v,getInputProps:_}=(0,u.uI)({accept:"image/*",onDrop(e){N(e.map(e=>Object.assign(e,{preview:URL.createObjectURL(e)})))}}),Z=e=>{let s=new FormData;s.append("name",e.name),s.append("email",e.email),o.length>0&&s.append("attachment",o[0]),x(s)};return(0,h.useEffect)(()=>{o.forEach(e=>URL.revokeObjectURL(e.preview))},[o]),(0,a.jsx)("form",{onSubmit:c(Z),className:"flex justify-center",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center max-w-[538px]",children:[(0,a.jsx)("h4",{className:"mb-8 text-center",children:"illustration for hire"}),(0,a.jsx)("p",{className:"mb-8 text-center normal-case",children:"I send occasional newsletters to let you know about shows, new original art, discounts for subscribers, or just cool things happening!"}),(0,a.jsxs)("div",{className:"-m-2 md:-m-3",children:[(0,a.jsxs)("div",{className:"mb-6 text-center",children:[(0,a.jsxs)("div",{className:"relative z-0",children:[(0,a.jsx)("picture",{children:(0,a.jsx)("img",{className:"w-full mt-[-21px]",src:"/img/frames/contact_input_box_white.png",alt:"frame"})}),(0,a.jsx)("div",{className:y.xk.inputImageWrapper,children:(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("input",{placeholder:"name",...i("name",{required:"name is required!"}),className:y.xk.inputText})})})]}),(null==n?void 0:n.name)&&(0,a.jsx)("p",{className:"pl-2 mt-[-18px] text-base text-left text-red-500",children:null==n?void 0:null===(s=n.name)||void 0===s?void 0:s.message})]}),(0,a.jsxs)("div",{className:"w-full mb-6 text-center",children:[(0,a.jsxs)("div",{className:"relative z-0",children:[(0,a.jsx)("picture",{children:(0,a.jsx)("img",{className:"w-full mt-[-21px]",src:"/img/frames/contact_input_box_white.png",alt:"frame"})}),(0,a.jsx)("div",{className:y.xk.inputImageWrapper,children:(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)("input",{placeholder:"email",type:"email",...i("email",{required:"email is required!",pattern:{value:b.HN,message:"please add a valid email address."}}),className:y.xk.inputText})})})]}),(null==n?void 0:n.email)&&(0,a.jsx)("p",{className:"pl-2 mt-[-18px] text-base text-left text-red-500",children:null==n?void 0:null===(l=n.email)||void 0===l?void 0:l.message})]}),(0,a.jsx)("div",{className:"mb-6 text-center",children:(0,a.jsxs)("div",{className:"relative z-0",children:[(0,a.jsx)("picture",{children:(0,a.jsx)("img",{className:"w-full h-[175px] mt-[-21px]",src:"/img/frames/contact_description_box_white.png",alt:"frame"})}),(0,a.jsx)("div",{className:y.xk.descriptionImageWrapper,children:(0,a.jsxs)("div",{...v({className:"dropzone"}),className:"flex flex-col items-center justify-center w-full h-full mb-6 text-center cursor-pointer",children:[(0,a.jsx)("input",{..._()}),(0,a.jsx)(p(),{src:"/img/about/box.svg",alt:"box",width:35.11,height:35.51,className:"mb-[14.25px]"}),(0,a.jsx)("p",{children:"Click or drag file to this area to upload"})]})})]})}),(0,a.jsx)("div",{className:"mb-6",children:o.length>0&&(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(p(),{src:"/img/about/box.svg",alt:"box",width:35.11,height:35.51,className:"mr-[12px]"}),(0,a.jsx)("p",{className:"mb-2",children:o[0].name})]})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(d.Z,{className:"w-full",size:"sm",type:"submit",loading:m,children:"Send"})})]})]})})};var Z=l(1664),k=l.n(Z);let I={listMiniImageWrapper:"absolute top-[30px] xs:top-[16px] sm:top-[28px] md:top-[28px] lg:top-[20px] xl:top-[28px] 2xl:top-[28px] right-[28px] xs:right-[16px] sm:right-[26px] md:right-[30px] lg:right-[20px] xl:right-[26px] 2xl:right-[30px] left-[22px] xs:left-[12px] sm:left-[20px] md:left-[22px] lg:left-[16px] xl:left-[20px] 2xl:left-[20px] bottom-[26px] xs:bottom-[14px] sm:bottom-[24px] md:bottom-[30px] lg:bottom-[18px] xl:bottom-[24px] 2xl:bottom-[28px] -z-10"},z=e=>{let{data:s,loading:l}=e,[t,r]=(0,h.useState)(!1);return l?(0,a.jsx)("div",{className:"py-16 md:py-25",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)("div",{className:"w-full mb-12 md:w-8/12 lg:w-5/12 lg:mb-0",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"max-w-[387px] w-[500px]",children:[(0,a.jsx)(c.Z,{height:300}),(0,a.jsx)(c.Z,{})]})})}),(0,a.jsxs)("div",{className:"w-full lg:w-7/12",children:[(0,a.jsx)(c.Z,{height:50,className:"inline-block mb-2"}),(0,a.jsx)(c.Z,{count:8})]})]})}):(0,a.jsxs)("div",{children:[s&&(0,a.jsx)("div",{className:"py-16 md:py-25",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center w-full mb-12 md:w-8/12 lg:w-5/12 lg:mb-0",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(c.Z,{height:300,className:"max-w-[387px]"}),(0,a.jsx)(n.Z,{src:s.image_path,children:(0,a.jsxs)("div",{className:"relative z-0 lg:mx-auto",children:[(0,a.jsx)("picture",{children:(0,a.jsx)("img",{className:"max-w-[387px] w-full",src:"/img/about/description_frame.png",alt:"frame"})}),(0,a.jsx)("div",{className:I.listMiniImageWrapper,children:(0,a.jsx)(x.Z,{src:s.image_path,children:(0,a.jsx)(p(),{src:"".concat(i.yA).concat(s.image_path),className:"object-contain",alt:"img",fill:!0})})})]})})]}),(0,a.jsx)("p",{className:"flex items-center justify-center w-full -mt-2 text-2xl text-center md:justify-start lg:justify-center",children:s.image_title})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full lg:w-7/12 md:items-start",children:[(0,a.jsx)("h2",{className:"mb-8 lowercase",children:s.title}),(0,a.jsx)("div",{className:"max-w-[775px]",children:(0,a.jsx)("p",{className:"text-2xl font-normal lowercase",children:s.description})}),(0,a.jsx)(k(),{href:"https://www.illustratorsforhire.com/featuring/jules-gissler-illustrator-for-hire",target:"_blank",className:"button bg-secondary text-primary text-base md:text-2xl rounded-full flex items-center justify-center py-[18px] h-[64px] mt-[40px] w-[230px]",children:"illustration for hire"})]})]})}),(0,a.jsx)(m.Z,{open:t,maxWidth:750,onClose:()=>r(!1),children:(0,a.jsx)(_,{onClose:()=>r(!1)})})]})},C=e=>{let{data:s,loading:l}=e;return l?(0,a.jsx)("div",{className:"py-16 md:py-25",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)("div",{className:"w-full mb-12 md:w-8/12 lg:w-5/12 lg:mb-0",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"max-w-[387px] w-[500px]",children:[(0,a.jsx)(c.Z,{height:300}),(0,a.jsx)(c.Z,{})]})})}),(0,a.jsxs)("div",{className:"w-full lg:w-7/12",children:[(0,a.jsx)(c.Z,{height:50,className:"inline-block mb-2"}),(0,a.jsx)(c.Z,{count:8})]})]})}):(0,a.jsx)("div",{children:s&&(0,a.jsx)("section",{className:"flex flex-wrap justify-center mx-auto",children:s.map(e=>(0,a.jsxs)("div",{className:"w-[438px] mx-[10px]",children:[(0,a.jsx)("picture",{className:"w-[438px] h-[505px]",children:(0,a.jsx)("img",{className:"w-[438px] h-[505px]",src:(0,b.Jn)(e.image_path)||"/img/blogs/img1.jpg",alt:"img"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"mb-[24px] leading-11 mt-[37px]",children:e.title}),(0,a.jsx)("p",{className:"mb-4 font-normal lowercase",children:e.description})]})]},e.id))})})},E=e=>{let{data:s,loading:l}=e;return l?(0,a.jsx)("div",{className:"py-16 md:py-25",children:(0,a.jsxs)("div",{className:"flex flex-wrap",children:[(0,a.jsx)("div",{className:"w-full mb-12 md:w-8/12 lg:w-5/12 lg:mb-0",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"max-w-[387px] w-[500px]",children:[(0,a.jsx)(c.Z,{height:300}),(0,a.jsx)(c.Z,{})]})})}),(0,a.jsxs)("div",{className:"w-full lg:w-7/12",children:[(0,a.jsx)(c.Z,{height:50,className:"inline-block mb-2"}),(0,a.jsx)(c.Z,{count:8})]})]})}):(0,a.jsx)("div",{className:"py-16 md:py-25",children:s&&(0,a.jsx)("section",{className:"flex flex-wrap justify-center gap-5 lg:gap-10 mx-auto w-full",children:s.map(e=>(0,a.jsxs)("div",{className:"py-4 lg:py-8",children:[(0,a.jsx)("div",{className:"max-h-[350px] h-[500px]",children:(0,a.jsx)("picture",{className:"w-full",children:(0,a.jsx)("img",{className:"h-full mx-auto",src:(0,b.Jn)(e.image_path)||"/img/blogs/img1.jpg",alt:"img"})})}),(0,a.jsx)("h4",{className:"leading-11 mt-[16px] text-center normal-case",children:e.title})]},e.id))})})},O=()=>{let{data:e,isLoading:s}=(0,g.useQuery)("aboutPage",v);return(0,a.jsx)(t.Z,{children:(0,a.jsxs)("div",{className:"container px-4 mx-auto xl:max-w-screen-xl",children:[(0,a.jsx)(z,{data:null==e?void 0:e.about_info,loading:s}),(0,a.jsx)(C,{data:null==e?void 0:e.about_second_section,loading:s}),(0,a.jsx)(E,{data:null==e?void 0:e.about_third_section,loading:s}),(0,a.jsx)(r,{data:null==e?void 0:e.about_member_of,loading:s})]})})};var W=O}},function(e){e.O(0,[976,948,61,312,890,523,220,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);
"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[321],{"./src/components/Hero Image/Hero Image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hero_Image_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeroImageWrapper=styled_components_browser_esm.Ay.div`
    background-image: url(${_ref=>{let{imageUrl}=_ref;return imageUrl}});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    filter: ${_ref2=>{let{disabled}=_ref2;return disabled?"grayscale(100%)":"none"}};
    cursor: ${_ref3=>{let{disabled}=_ref3;return disabled?"not-allowed":"auto"}};
`,HeroTitle=styled_components_browser_esm.Ay.h1`
    color: #fff;
    margin: 0;
`,HeroSubtitle=styled_components_browser_esm.Ay.h2`
    color: #fff;
    margin: 5px 0;
`,HeroButton=styled_components_browser_esm.Ay.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: ${_ref4=>{let{disabled}=_ref4;return disabled?.7:1}};

    &:hover {
        background-color: darkblue;
    }
`,HeroImage=_ref5=>{let{imageUrl,title,subtitle,text,disabled=!1,onClick}=_ref5;return(0,jsx_runtime.jsxs)(HeroImageWrapper,{imageUrl,disabled,children:[title&&(0,jsx_runtime.jsx)(HeroTitle,{children:title}),subtitle&&(0,jsx_runtime.jsx)(HeroSubtitle,{children:subtitle}),text&&(0,jsx_runtime.jsx)(HeroButton,{onClick,disabled,children:text})]})},Hero_Image=HeroImage;HeroImage.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{imageUrl:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Hero_Image_stories={title:"Components Assignment/HeroImage",component:Hero_Image},Template=args=>(0,jsx_runtime.jsx)(Hero_Image,{...args}),Default=Template.bind({});Default.args={imageUrl:"https://via.placeholder.com/1200x400",title:"Welcome to Our Website",subtitle:"Discover our amazing services",text:"Learn More"};const Disabled=Template.bind({});Disabled.args={...Default.args,disabled:!0};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <HeroImage {...args} />",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Hero-Image-Hero-Image-stories.3a929266.iframe.bundle.js.map
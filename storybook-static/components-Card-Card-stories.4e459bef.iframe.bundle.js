"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[513],{"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomCard=styled_components_browser_esm.Ay.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    max-width: ${props=>props.width||"280px"};
    opacity: ${props=>props.disabled?.4:1};
    pointer-events: ${props=>props.disabled?"none":"auto"};
    transition: opacity 0.2s ease-in-out;
`,Image=styled_components_browser_esm.Ay.img`
    width: 100%;
    border-radius: 5px;
`,Title=styled_components_browser_esm.Ay.h2`
    font-size: 1.1em;
    margin-top: 8px;
`,Content=styled_components_browser_esm.Ay.p`
    margin-top: 8px;
`,ActionButton=styled_components_browser_esm.Ay.button`
    margin-top: 18px;
    padding: 8px 18px;
    border: none;
    border-radius: 5px;
    background-color: navy;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }

    &:disabled {
        opacity: 0.5;
    }
`,Card=_ref=>{let{imageUrl,title="Example Card",content="Example Card Content",buttonText,onButtonClick,disabled=!1,...props}=_ref;return(0,jsx_runtime.jsxs)(CustomCard,{disabled,...props,children:[imageUrl&&(0,jsx_runtime.jsx)(Image,{src:imageUrl,alt:title}),title&&(0,jsx_runtime.jsx)(Title,{children:title}),content&&(0,jsx_runtime.jsx)(Content,{children:content}),buttonText&&(0,jsx_runtime.jsx)(ActionButton,{onClick:onButtonClick,disabled,children:buttonText})]})},Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{imageUrl:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Example Card"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Example Card Content"',computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:""},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Card_stories={title:"Components Assignment/Card",component:Card_Card,parameters:{}},CardTemplate=args=>(0,jsx_runtime.jsx)(Card_Card,{...args}),Default=CardTemplate.bind({});Default.args={imageUrl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me"};const Disabled=CardTemplate.bind({});Disabled.args={imageUrl:"https://via.placeholder.com/300",title:"Card Title",content:"This is a card description.",buttonText:"Click Me",disabled:!0};const __namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Card {...args} />",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Card-Card-stories.4e459bef.iframe.bundle.js.map
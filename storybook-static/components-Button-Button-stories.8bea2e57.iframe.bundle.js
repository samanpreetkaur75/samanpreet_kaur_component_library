"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonDisabled:()=>ButtonDisabled,ButtonError:()=>ButtonError,ButtonSuccess:()=>ButtonSuccess,ButtonWarning:()=>ButtonWarning,LargeButton:()=>LargeButton,PrimaryButton:()=>PrimaryButton,SmallButton:()=>SmallButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomButton=styled_components_browser_esm.Ay.button`
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${props=>"small"===props.size?"6px 12px":"medium"===props.size?"10px 24px":"16px 30px"};
    border: none;
    font-size: 1rem;
    min-width: 90px;
    cursor: pointer;
    font-family: "Arial", sans-serif;
    transition: all 0.3s ease;

    background-color: ${props=>props.primary?"#E4572E":"#343434"};
    color: #fff;

    &:hover {
        background-color: ${props=>props.primary?"#FFA07A":"#696969"};
    }

    &:focus {
        outline: 3px solid #E4572E;
        outline-offset: 2px;
    }

    &:active {
        background-color: ${props=>props.primary?"#AA381E":"#1C1C1C"};
    }

    &:disabled {
        background-color: #b0b0b0;
        color: #fff;
        cursor: not-allowed;
    }

    ${props=>props.success&&"\n        background-color: #4CAF50;\n        &:hover {\n            background-color: #45A049;\n        }\n        &:focus {\n            outline: 3px solid #4CAF50;\n            outline-offset: 2px;\n        }\n        &:active {\n            background-color: #388E3C;\n        }\n    "}

    ${props=>props.error&&"\n        background-color: #F44336;\n        &:hover {\n            background-color: #D32F2F;\n        }\n        &:focus {\n            outline: 3px solid #F44336;\n            outline-offset: 2px;\n        }\n        &:active {\n            background-color: #C62828;\n        }\n    "}

    ${props=>props.warning&&"\n        background-color: #FFEB3B;\n        &:hover {\n            background-color: #FDD835;\n        }\n        &:focus {\n            outline: 3px solid #FFEB3B;\n            outline-offset: 2px;\n        }\n        &:active {\n            background-color: #FBC02D;\n        }\n    "}
`,Button=_ref=>{let{size="medium",disabled=!1,text,handleClick,...props}=_ref;return(0,jsx_runtime.jsx)(CustomButton,{type:"button",onClick:handleClick,disabled,size,...props,"aria-disabled":!!disabled||void 0,children:text})},Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!1,tsType:{name:"string"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},handleClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},success:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},warning:{required:!1,tsType:{name:"boolean"},description:""}}};const Button_stories={title:"Components Assignment/Button",component:Button_Button,parameters:{}},ButtonTemplate=props=>(0,jsx_runtime.jsx)(Button_Button,{...props}),PrimaryButton=ButtonTemplate.bind({});PrimaryButton.args={primary:!0,size:"medium",text:"Primary Button"};const SmallButton=ButtonTemplate.bind({});SmallButton.args={primary:!0,size:"small",text:"Click Small"};const LargeButton=ButtonTemplate.bind({});LargeButton.args={primary:!0,size:"large",text:"Click Large"};const ButtonDisabled=ButtonTemplate.bind({});ButtonDisabled.args={primary:!0,size:"medium",text:"Disabled Button",disabled:!0};const ButtonSuccess=ButtonTemplate.bind({});ButtonSuccess.args={primary:!0,size:"medium",text:"Success State",success:!0};const ButtonError=ButtonTemplate.bind({});ButtonError.args={primary:!0,size:"medium",text:"Error State",error:!0};const ButtonWarning=ButtonTemplate.bind({});ButtonWarning.args={primary:!0,size:"medium",text:"Warning State",warning:!0};const __namedExportsOrder=["PrimaryButton","SmallButton","LargeButton","ButtonDisabled","ButtonSuccess","ButtonError","ButtonWarning"];PrimaryButton.parameters={...PrimaryButton.parameters,docs:{...PrimaryButton.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...PrimaryButton.parameters?.docs?.source}}},SmallButton.parameters={...SmallButton.parameters,docs:{...SmallButton.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...SmallButton.parameters?.docs?.source}}},LargeButton.parameters={...LargeButton.parameters,docs:{...LargeButton.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...LargeButton.parameters?.docs?.source}}},ButtonDisabled.parameters={...ButtonDisabled.parameters,docs:{...ButtonDisabled.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...ButtonDisabled.parameters?.docs?.source}}},ButtonSuccess.parameters={...ButtonSuccess.parameters,docs:{...ButtonSuccess.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...ButtonSuccess.parameters?.docs?.source}}},ButtonError.parameters={...ButtonError.parameters,docs:{...ButtonError.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...ButtonError.parameters?.docs?.source}}},ButtonWarning.parameters={...ButtonWarning.parameters,docs:{...ButtonWarning.parameters?.docs,source:{originalSource:"(props: JSX.IntrinsicAttributes & IButton) => <Button {...props} />",...ButtonWarning.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Button-Button-stories.8bea2e57.iframe.bundle.js.map
import{d as l}from"./react-D2T61mpp.js";import{bZ as m}from"./vendor-DvO6Ud8q.js";import{C as a,H as f}from"./styled-components-peerelvn.js";const n=f.div`
  ${({hideColumnDefault:e})=>e&&a`
      & th:nth-child(3),
      & td:nth-child(3) {
        display: none !important;
      }

      & th:nth-child(2),
      & td:nth-child(2) {
        border-right: 1px solid hsla(203, 50%, 30%, 0.15) !important;
      }
    `}
  ${({hideColumnName:e})=>e&&a`
      & th:nth-child(1),
      & td:nth-child(1) {
        display: none !important;
      }
    `}
  ${({hideHeader:e})=>e&&a`
      & thead {
        display: none !important;
      }
      && table {
        margin-block: 0px;
      }
    `}
  ${({transparent:e})=>e&&a`
      & tbody {
        filter: none !important;

        * {
          background-color: transparent !important;
        }
      }
    `}
  ${({boxShadowNone:e})=>e&&a`
      & tbody {
        filter: none !important;
      }
    `}
  ${({borderNone:e})=>e&&a`
      * {
        border: none !important;
      }
    `}
  ${({paddingNone:e})=>e&&a`
      * {
        padding: 0 !important;
      }
    `}
`,r=({hideColumnDefault:e,hideColumnName:o,hideHeader:d,transparent:t,borderNone:i,paddingNone:u,boxShadowNone:s,...p})=>l.jsxDEV(n,{hideColumnDefault:e,hideColumnName:o,hideHeader:d,transparent:t,borderNone:i,paddingNone:u,boxShadowNone:s,children:l.jsxDEV(m,{...p},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/utils/CustomArgTypes.tsx",lineNumber:107,columnNumber:5},void 0)},void 0,!1,{fileName:"/home/runner/work/dais-ui/dais-ui/packages/storybook/src/utils/CustomArgTypes.tsx",lineNumber:98,columnNumber:3},void 0);try{n.displayName="StyledDiv",n.__docgenInfo={description:"",displayName:"StyledDiv",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},hideColumnDefault:{defaultValue:null,description:"",name:"hideColumnDefault",required:!1,type:{name:"boolean"}},hideColumnName:{defaultValue:null,description:"",name:"hideColumnName",required:!1,type:{name:"boolean"}},hideHeader:{defaultValue:null,description:"",name:"hideHeader",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},boxShadowNone:{defaultValue:null,description:"",name:"boxShadowNone",required:!1,type:{name:"boolean"}},borderNone:{defaultValue:null,description:"",name:"borderNone",required:!1,type:{name:"boolean"}},paddingNone:{defaultValue:null,description:"",name:"paddingNone",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="CustomArgTypes",r.__docgenInfo={description:"",displayName:"CustomArgTypes",props:{hideColumnDefault:{defaultValue:null,description:"",name:"hideColumnDefault",required:!1,type:{name:"boolean"}},hideColumnName:{defaultValue:null,description:"",name:"hideColumnName",required:!1,type:{name:"boolean"}},hideHeader:{defaultValue:null,description:"",name:"hideHeader",required:!1,type:{name:"boolean"}},transparent:{defaultValue:null,description:"",name:"transparent",required:!1,type:{name:"boolean"}},borderNone:{defaultValue:null,description:"",name:"borderNone",required:!1,type:{name:"boolean"}},paddingNone:{defaultValue:null,description:"",name:"paddingNone",required:!1,type:{name:"boolean"}},boxShadowNone:{defaultValue:null,description:"",name:"boxShadowNone",required:!1,type:{name:"boolean"}},include:{defaultValue:null,description:"",name:"include",required:!1,type:{name:"PropDescriptor"}},exclude:{defaultValue:null,description:"",name:"exclude",required:!1,type:{name:"PropDescriptor"}},sort:{defaultValue:null,description:"",name:"sort",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"alpha"'},{value:'"requiredFirst"'}]}},of:{defaultValue:null,description:"",name:"of",required:!1,type:{name:"unknown"}}}}}catch{}export{r as C};

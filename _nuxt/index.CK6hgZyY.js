import{u as f,am as u,an as m,r as l,g as p}from"./entry.VC833E2J.js";function d(r,t){const{title:n,titleTemplate:a,...c}=r;return f({title:n,titleTemplate:a,_flatMeta:c},{...t,transform(o){const e=u({...o._flatMeta});return delete o._flatMeta,{...o,meta:e}}})}const h={size:300,foreground:"#000000",background:"#ffffff",isTransparent:!1,logo:""},g="localKey",q=m("store",()=>{const r=l("High Resolution QR Code Generator With Logo"),t=l({...h});function n(e,s){const i=p();r.value=e,f({link:[{rel:"canonical",href:`https://high-qr-code-generator.com${i.fullPath}`},{rel:"alternate",href:"https://high-qr-code-generator.com"+i.fullPath,hreflang:"en"},{rel:"alternate",href:"https://high-qr-code-generator.com"+i.fullPath,hreflang:"x-default"}],script:[{type:"application",children:`{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "${e}",
  "image": "https://high-qr-code-generator.com/qr-v1.png",
  "description": "${s}",
  "keywords": "High Resolution QR Code Generator, QR Code, QR Code Generator",
  "genre":"Utility",
  "copyrightYear": "2019",
  "url":"https://high-qr-code-generator.com/",
  "author": {
    "@type":"WebSite",
    "name":"high-qr-code-generator.com"
  },
  "publisher": {
    "@type":"Organization",
    "name":"high-qr-code-generator.com",
    "logo":"https://high-qr-code-generator.com/qr-v1.png"
  }
}`}]}),d({title:e,ogTitle:e,description:s,ogDescription:s})}function a(e){Object.assign(t.value,e),localStorage.setItem(g,JSON.stringify(t.value))}function c(){Object.assign(t.value,h),localStorage.removeItem(g)}function o(){const e=localStorage.getItem(g);e&&a(JSON.parse(e))}return{pageTitle:r,qrcodeConfig:t,init:o,setPageMeta:n,setQrcodeConfig:a,resetQrcodeConfig:c}}),y=q;export{y as u};

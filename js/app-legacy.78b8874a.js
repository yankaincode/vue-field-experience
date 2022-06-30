(function(){"use strict";var t={36509:function(t,e,a){a(28594);var n=a(49963),i=a(66252),o=a(3577);const s={class:"app-container"},l=(0,i._)("div",{class:"app-container__background-container background-container"},null,-1),r={class:"app-container__window-container window-container"},d={class:"window-container__main-container main-container"},c={class:"main-container__page-title page-title"};function u(t,e,a,u,h,p){const m=(0,i.up)("HeaderContainer"),f=(0,i.up)("FooterContainer");return(0,i.wg)(),(0,i.iD)("div",s,[l,(0,i._)("div",r,[(0,i.Wm)(m,{class:"window-container__side-container side-container",tabs:h.tabs,"current-tab":h.currentTab},null,8,["tabs","current-tab"]),(0,i._)("main",d,[(0,i._)("h1",c,(0,o.zw)(p.currentView.title),1),(0,i.Wm)(n.uT,{name:"page-toggle",mode:"out-in",type:"transition",duration:"300",appear:"appear"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[((0,i.wg)(),(0,i.j4)((0,i.LL)(p.currentView),{class:"main-container__page-content page-content"}))],1024))])),_:1})]),(0,i.Wm)(f,{class:"window-container__side-container side-container"})])])}const h={class:"header-container"},p={class:"header-container__nav-bar nav-bar"},m=["href","aria-label"];function f(t,e,a,n,s,l){return(0,i.wg)(),(0,i.iD)("header",h,[(0,i._)("nav",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tabs,(t=>((0,i.wg)(),(0,i.iD)("a",{key:t,href:t.href,class:(0,o.C_)(["nav-bar__tab-link","tab-link","link",{"tab-link--active":l.isTabActive(t.href)}]),"aria-label":l.assignTabLabel(t.href,t.title)},(0,o.zw)(t.title),11,m)))),128))])])}var b={name:"header-container",props:{tabs:{type:Array,required:!0},currentTab:{type:String,required:!0}},methods:{isTabActive(t){return t===this.currentTab},assignTabLabel(t,e){return this.isTabActive(t)?`The '${e}' page is opened`:`Open '${e}' page`}}},g=a(83744);const _=(0,g.Z)(b,[["render",f],["__scopeId","data-v-6d1491e4"]]);var v=_;const w={class:"footer-container"},y=(0,i.uE)('<div class="footer-container__svg-links-container svg-links-container" data-v-9255bf3a><svg class="svg-links-container__svg svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-v-9255bf3a><a xlink:href="https://github.com/yankaincode/vue-field-experience" target="_blank" rel="noopener" class="svg__svg-link svg-link" aria-label="View a source code of the project on GitHub" data-v-9255bf3a><rect height="100%" width="100%" fill="#ffffff" data-v-9255bf3a><title data-v-9255bf3a>A source code of the project on GitHub</title></rect><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-9255bf3a><title data-v-9255bf3a>A source code of the project on GitHub</title></path></a></svg></div><p class="footer-container__p-item p-item" data-v-9255bf3a> Coded and designed by <a href="https://github.com/yankaincode" aria-label="Yanka_InCode on GitHub" title="Yanka_InCode on GitHub" target="_blank" rel="noopener" class="link link--Yanka" data-v-9255bf3a>Yanka_InCode</a>. </p><p class="footer-container__p-item p-item" data-v-9255bf3a> Background image compilation and favicon are created by <a href="https://viola-igua.tumblr.com/" aria-label="ViolaIgua on Tumblr" title="ViolaIgua on Tumblr" target="_blank" rel="noopener" class="link link--Viola" data-v-9255bf3a>ViolaIgua</a>. </p><p class="footer-container__p-item p-item p-item--copy" data-v-9255bf3a> © 2022 - Nowadays. All rigths reserved. </p>',4),k=[y];function D(t,e,a,n,o,s){return(0,i.wg)(),(0,i.iD)("footer",w,k)}var T={name:"footer-container"};const C=(0,g.Z)(T,[["render",D],["__scopeId","data-v-9255bf3a"]]);var A=C;const E={class:"about-tab"},j=(0,i.uE)('<section class="about-tab__section section" data-v-3353f31c><h2 class="section__title title" data-v-3353f31c>Project description</h2><div class="section__content content content--article" data-v-3353f31c><p class="content__p-item p-item" data-v-3353f31c> It&#39;s a front-end project made on Vue.js framework with Vue CLI. <br data-v-3353f31c>Data Form and Table exchange JSON data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link" data-v-3353f31c>JSON Placeholder API</a> by Asynchronous API calls via Axios HTTP client, using Promises and Error handling. </p><p class="content__p-item p-item" data-v-3353f31c> The website is based on documentations <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener" class="link" data-v-3353f31c>for Vue 3</a> and <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener" class="link" data-v-3353f31c>for Axios</a> and guided by <a href="https://www.taniarascia.com/getting-started-with-vue/" target="_blank" rel="noopener" class="link" data-v-3353f31c>&#39;Vue Tutorial: An Overview and Walkthrough&#39;</a> by Tania Rascia, but more self-made features were implemented for a stand-alone practice: </p><ul class="content__ul-list ul-list ul-list--roll" data-v-3353f31c><li data-v-3353f31c>separated error reporting about each input field of Form and Table (State Management with Reactivity API),</li><li data-v-3353f31c>implemented thorough validation with RegExp and blocking of inappropriate key input (it works within PC),</li><li data-v-3353f31c>added preserving data within input fields in case it won&#39;t be sent (because of Network error, for example),</li><li data-v-3353f31c>PATCH and PUT request methods were applied for edit, taking into account data with no change won&#39;t be sent to the server,</li><li data-v-3353f31c>new data appended through Form is not fully back-end friendly for now (error 500 exists within <a class="link" href="https://taniarascia.github.io/vue-tutorial/" data-v-3353f31c>the demo of the guide</a> on PUT method as well), so as a workaround a PATCH request method only was used for the case,</li><li data-v-3353f31c>added &lt;component&gt; routing and listening of &#39;hashchange&#39; event to switch tabs and update title of the document,</li><li data-v-3353f31c>included a 404 page,</li><li data-v-3353f31c>added animations by built-in components &lt;Transition&gt; and &lt;TransitionGroup&gt;,</li><li data-v-3353f31c>created &lt;slot&gt; element for custom &lt;details&gt; realization (to extend it with Vue transitions),</li><li data-v-3353f31c>added more style to UI design with attention to UX (thereby, made validation status visual for end-user as well),</li><li data-v-3353f31c>worked with Axios, SCSS, BEM, Git for practice.</li></ul><p class="content__p-item p-item" data-v-3353f31c>All used stack and tools:</p><div class="content__tools-container tools-container" data-v-3353f31c><ul class="tools-container__ul-list ul-list ul-list--string ul-list--basis" data-v-3353f31c><li data-v-3353f31c>HTML5</li><li data-v-3353f31c>CSS3</li><li data-v-3353f31c>JS (+ ESMA6)</li></ul><ul class="tools-container__ul-list ul-list ul-list--string ul-list--addon" data-v-3353f31c><li data-v-3353f31c>Vue 3</li><li data-v-3353f31c>Axios</li><li data-v-3353f31c>SASS (SCSS)</li><li data-v-3353f31c>Autoprefixer</li></ul><ul class="tools-container__ul-list ul-list ul-list--string ul-list--pallet" data-v-3353f31c><li data-v-3353f31c>BEM methodology</li><li data-v-3353f31c>Git</li><li data-v-3353f31c>Vue Devtools</li><li data-v-3353f31c>Vue CLI</li><li data-v-3353f31c>Babel</li><li data-v-3353f31c>npm manager</li></ul><ul class="tools-container__ul-list ul-list ul-list--string ul-list--ui" data-v-3353f31c><li data-v-3353f31c>Mobile-first approach</li><li data-v-3353f31c>Adaptive design: from mobile to 8k</li><li data-v-3353f31c>Cross-browser</li></ul></div></div></section>',1),I=[j];function V(t,e,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",E,I)}var S={name:"about-tab",title:"About project"};const x=(0,g.Z)(S,[["render",V],["__scopeId","data-v-3353f31c"]]);var F=x;const P=t=>((0,i.dD)("data-v-2e032c73"),t=t(),(0,i.Cn)(),t),M={class:"data-tab__section section"},O={class:"data-tab__section section"},U=P((()=>(0,i._)("h2",{class:"section__title title"},"Data form",-1))),$={class:"data-tab__section section"},z={class:"data-tab__section section"},L=P((()=>(0,i._)("h2",{class:"section__title title"},"Data table",-1)));function H(t,e,a,s,l,r){const d=(0,i.up)("DataDownloader"),c=(0,i.up)("DataDetails"),u=(0,i.up)("DataForm"),h=(0,i.up)("DataStatus"),p=(0,i.up)("DataTable");return"fulfilled"!==l.downloadStatus?((0,i.wg)(),(0,i.j4)(d,{key:0,"download-status":l.downloadStatus,class:"data-tab"},null,8,["download-status"])):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,o.C_)(["data-tab",{"data-tab--progress":"pending"===l.controlValidationForm.get()||"pending"===l.controlValidationTable.get()}])},[(0,i._)("section",M,[(0,i.Wm)(c,{class:"section__content content"})]),(0,i._)("section",O,[U,(0,i.Wm)(n.uT,{name:"show-up-form",type:"transition",appear:"appear"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[(0,i.Wm)(u,{"onAdd:data":r.addData,class:"section__content content"},null,8,["onAdd:data"])],1024))])),_:1})]),(0,i._)("section",$,[(0,i.Wm)(h,{"errors-arr":l.controlValidationForm.errorsArr,"validation-status":l.controlValidationForm.get(),"data-quantity":l.dataCollection.length,"edit-mode":l.controlModeEdit.get(),class:"section__content content"},null,8,["errors-arr","validation-status","data-quantity","edit-mode"])]),(0,i._)("section",z,[L,(0,i.Wm)(p,{"data-collection":l.dataCollection,"onDelete:data":r.deleteData,"onEdit:data":r.editData,class:"section__content content"},null,8,["data-collection","onDelete:data","onEdit:data"])])],2))}var Z=a(9669),q=a.n(Z);const B=t=>((0,i.dD)("data-v-4f004567"),t=t(),(0,i.Cn)(),t),W={key:0,class:"data-downloader__pending-container pending-container"},N=B((()=>(0,i._)("p",{class:"pending-container__p-item p-item"}," Loading process is launched. Please, wait a bit... ",-1))),K=[N],Y={key:1,class:"data-downloader__rejected-container rejected-container"},G=B((()=>(0,i._)("p",{class:"rejected-container__p-item p-item"},"Sorry, it's a download error. Some possible solutions:",-1))),R=B((()=>(0,i._)("ul",{class:"rejected-container__ul-list ul-list"},[(0,i._)("li",null,"check your connection to the Internet;"),(0,i._)("li",null,"update the page;"),(0,i._)("li",null,"try to retrieve data by the button below.")],-1))),J=B((()=>(0,i._)("p",{class:"rejected-container__p-item p-item"},[(0,i.Uk)(" If nothing has changed, please inform me of this incident by e-mail on "),(0,i._)("a",{class:"link",href:"mailto:yankaincode@gmail.com?subject=Error Report | Vue Project 'Data Exchange' by Yanka_InCode &body=Greets!%0A%0AI've tried to open 'Project: Data Exchange' tab, but it didn't download.%0AIt wasn't the Internet connection issue. Reload of the website and try to retrieve data from the server again by an appropriate button didn't help."},"yankaincode@gmail.com"),(0,i.Uk)(". ")],-1)));function Q(t,e,a,s,l,r){return(0,i.wg)(),(0,i.j4)(n.uT,{tag:"div",name:"toggle-status",type:"transition",mode:"out-in",class:(0,o.C_)(["data-downloader",{"data-downloader--rejected":"rejected"===a.downloadStatus,"data-downloader--pending":"pending"===a.downloadStatus}])},{default:(0,i.w5)((()=>["pending"===a.downloadStatus?((0,i.wg)(),(0,i.iD)("div",W,K)):((0,i.wg)(),(0,i.iD)("div",Y,[G,R,(0,i._)("button",{onClick:e[0]||(e[0]=(...e)=>t.getData&&t.getData(...e)),class:"rejected-container__button button"},"Retrieve data from the server again"),J]))])),_:1},8,["class"])}var X={name:"data-downloader",props:{downloadStatus:{type:String,required:!0}}};const tt=(0,g.Z)(X,[["render",Q],["__scopeId","data-v-4f004567"]]);var et=tt;const at=(0,i.Uk)("Data exchange clarification"),nt=(0,i._)("ul",{class:"ul-list ul-list--square"},[(0,i._)("li",{class:"ul-list__item item"},[(0,i.Uk)("Data Form and Table exchange data with "),(0,i._)("a",{href:"https://jsonplaceholder.typicode.com/",target:"_blank",rel:"noopener",class:"link"},"JSON Placeholder API"),(0,i.Uk)(" (Free fake API for testing and prototyping in development). Default data in the Table is received from the API. Data from the Form sends to the API server before being added to the Table.")]),(0,i._)("li",{class:"ul-list__item item"},"If you switch to the other tab of this website, data in input fields will be: for the Form - preserved, for the Table - cancelled. Also, data is preserved within input fields before sending in case of sending failure. All changes and data in input fields will be reset to default state on reload or on closing of the current source."),(0,i._)("li",{class:"ul-list__item item"},"This website doesn’t use cookies: doesn't gather, save or send any information about your device and activity. Data exchange is safe on both sides through HTTPS secure communication. But, nevertheless, it's a training front-end pet-project, and I (Yanka_inCode, the developer of this website) am not responsible for the server side (the API) and for absolute safety of data appended by yourself. So, it's better not input any private data, by which anybody known by you could be identified (real names and e-mail addresses).")],-1);function it(t,e,a,n,o,s){const l=(0,i.up)("SlotDetails");return(0,i.wg)(),(0,i.j4)(l,{class:"data-details",detailsBodyId:"exchangeDetailsBody",isDetailsOpened:!0},{summary:(0,i.w5)((()=>[at])),"details-body":(0,i.w5)((()=>[nt])),_:1})}const ot=["aria-expanded","aria-controls"],st={key:0,"aria-hidden":"true"},lt=(0,i._)("svg",{class:"summary__arrow-svg arrow-svg svg",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"},[(0,i._)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),(0,i._)("path",{d:"M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z"})],-1),rt=[lt],dt={key:1,"aria-hidden":"true"},ct=(0,i._)("svg",{class:"summary__arrow-svg arrow-svg svg",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"},[(0,i._)("path",{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"})],-1),ut=[ct];function ht(t,e,a,s,l,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["slot-details",{"slot-details--open":a.isDetailsOpened}])},[(0,i._)("button",{onClick:e[0]||(e[0]=t=>a.isDetailsOpened=!a.isDetailsOpened),class:"slot-details__summary summary button","aria-expanded":a.isDetailsOpened,"aria-controls":a.detailsBodyId},[a.isDetailsOpened?((0,i.wg)(),(0,i.iD)("span",st,rt)):((0,i.wg)(),(0,i.iD)("span",dt,ut)),(0,i.WI)(t.$slots,"summary")],8,ot),(0,i.wy)((0,i.Wm)(n.uT,{name:"show-up-items",type:"transition",class:"slot-details__details-body details-body",appear:"appear",id:a.detailsBodyId},{default:(0,i.w5)((()=>[(0,i.WI)(t.$slots,"details-body")])),_:3},8,["id"]),[[n.F8,a.isDetailsOpened]])],2)}var pt={name:"slot-details",props:{isDetailsOpened:{type:Boolean,default:!1},detailsBodyId:{type:String,required:!0}}};const mt=(0,g.Z)(pt,[["render",ht]]);var ft=mt,bt={name:"data-details",components:{SlotDetails:ft}};const gt=(0,g.Z)(bt,[["render",it]]);var _t=gt;const vt=t=>((0,i.dD)("data-v-0b406cc4"),t=t(),(0,i.Cn)(),t),wt=vt((()=>(0,i._)("label",{for:"name",class:"form__label label"},"Name:",-1))),yt=["disabled"],kt=vt((()=>(0,i._)("label",{for:"email",class:"form__label label"},"Email:",-1))),Dt=["disabled"],Tt=["disabled"];function Ct(t,e,a,s,l,r){return(0,i.wg)(),(0,i.iD)("form",{name:"dataForm",class:"data-form form",onSubmit:e[6]||(e[6]=(0,n.iM)((e=>t.$emit("add:data",l.data)),["prevent"]))},[wt,(0,i.wy)((0,i._)("input",{ref:"firstFormInput",type:"text",maxlength:"65","onUpdate:modelValue":e[0]||(e[0]=t=>l.data.name=t),class:(0,o.C_)(["form__input","input",l.controlInput.assignClass("name",l.data.name,l.controlValidationForm)]),disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get(),onFocus:e[1]||(e[1]=t=>l.controlValidationForm.clearErrors("name")),onKeydown:e[2]||(e[2]=t=>l.controlInput.manageKeydown("name"))},null,42,yt),[[n.nr,l.data.name,void 0,{trim:!0}]]),kt,(0,i.wy)((0,i._)("input",{type:"email",maxlength:"138","onUpdate:modelValue":e[3]||(e[3]=t=>l.data.email=t),class:(0,o.C_)(["form__input","input",l.controlInput.assignClass("email",l.data.email,l.controlValidationForm)]),disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get(),onFocus:e[4]||(e[4]=t=>l.controlValidationForm.clearErrors("email")),onKeydown:e[5]||(e[5]=t=>l.controlInput.manageKeydown("email"))},null,42,Dt),[[n.nr,l.data.email,void 0,{trim:!0}]]),(0,i._)("input",{type:"submit",class:"form__submit-button submit-button",value:"Add data",disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get()},null,8,Tt)],32)}var At=a(2262);const Et={status:"",errors:{name:[],email:[]},errorsArr:[],errorTypes:{name:["empty-name","invalid-name"],email:["empty-email","invalid-email"]},set(t){""!==t&&"pending"!==t||0===this.errorsArr.length||this.clearErrors("all"),this.status=t},get(){return this.status},isProcessed(){return["pending","fulfilled"].includes(this.get())},isError(){return["network-error","fatal-error","rejected"].includes(this.status)},nullEndpointStatus(){["network-error","fatal-error","rejected","fulfilled"].includes(this.get())&&this.set("")},pushError(t,e){this.errors[t].push(e),this.errorsArr.push(e)},clearErrors(t){if("all"===t){for(let t in this.errors)this.errors[t]=[];this.errorsArr=[]}else{if(0===this.errors[t].length)return;this.errors[t]=[],this.errorsArr=this.errorsArr.filter((e=>!this.errorTypes[t].includes(e))),0===this.errorsArr.length&&this.set("")}}},jt=(0,At.qj)(Object.assign({},Et)),It=(0,At.qj)(Object.assign({},Et)),Vt=(t,e)=>{let a;switch(t){case"name":a=/(^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я\s\'\-\.]{0,63})[a-zA-Zа-яА-Я]$)/;break;case"email":a=/^[a-zA-Z0-9]([\w\.\-]{0,62})[a-zA-Z0-9]@[a-z0-9]([\w\.\-]{1,62})\.([a-z]{2,8})$/;break}return a.test(e)},St=(0,At.qj)({verifyValidity(t,e){for(const a in t)""===t[a]?e.pushError(a,`empty-${a}`):Vt(a,t[a])||e.pushError(a,`invalid-${a}`);0!==e.errorsArr.length&&e.set("rejected")},assignClass(t,e,a){let n=a.errors[t].length>0;return{"input--rejected":n,"input--empty":""===e&&!n,"input--filled":""!==e&&!n}},manageKeydown(t){let e;switch(t){case"name":e=/[a-zA-Zа-яА-Я\s\'\-\.]/;break;case"email":e=/[\w\-\.\@]/;break}event.key.match(e)||"ArrowRight"===event.code||"ArrowLeft"===event.code||"Backspace"===event.code||"Delete"===event.code||event.preventDefault()}}),xt=(0,At.qj)({status:!1,id:null,set(t,e=null){this.status=t,this.id=e},get(){return this.status}}),Ft=(0,At.qj)({status:!1,id:null,editingData:null,cachedData:null,set(t,e=null){this.status=t,this.editingData=e,t?(this.id=e.id,this.cachedData=Object.assign({},e),jt.nullEndpointStatus()):(this.id=null,this.cachedData=null,It.nullEndpointStatus())},get(){return this.status},cancelEdit(){Object.assign(this.editingData,this.cachedData),this.set(!1)},determineUpdated(){let t=0,e={};for(let n in this.editingData)this.editingData[n]!==this.cachedData[n]&&(t++,e[n]=this.editingData[n]);let a=Object.keys(this.cachedData).length-1;return 0===t?"none":t===a?"all":e}});var Pt={name:"data-form",emits:["add:data"],data(){return{controlValidationForm:jt,controlInput:St,controlModeEdit:Ft,data:{name:"",email:""}}},deactivated(){jt.nullEndpointStatus()}};const Mt=(0,g.Z)(Pt,[["render",Ct],["__scopeId","data-v-0b406cc4"]]);var Ot=Mt;const Ut={key:0,class:"data-status__p-item p-item"};function $t(t,e,a,n,s,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["data-status",l.assignStatusClass])},["rejected"!==this.status||0===a.errorsArr.length?((0,i.wg)(),(0,i.iD)("p",Ut,(0,o.zw)(l.assignStatusMessage()),1)):((0,i.wg)(),(0,i.iD)("ol",{key:1,class:(0,o.C_)(["data-status__errors-ol","errors-ol","ol-list",a.errorsArr.length>1?"ol-list--roman":"ol-list--no-marker"])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.errorsArr,(t=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i._)("strong",null,(0,o.zw)(s.messageTypesObj[t]),1)])))),256))],2))],2)}var zt={name:"data-status",props:{errorsArr:{type:Array,required:!0},validationStatus:{type:String,required:!0},dataQuantity:{type:Number,default:-1},editMode:{type:Boolean,default:!1}},data(){return{status:"",messageTypesObj:{pending:"Validation is in process. Please, wait a bit",fulfilled:"Data was successfully processed","empty-name":"Fill the name field","empty-email":"Fill the email field","invalid-name":"The entered name isn't valid","invalid-email":"The entered e-mail isn't valid","network-error":"It's a Network error. Check your connection to the Internet, then try again","fatal-error":"Something went pretty wrong. Check your Internet connection, just try again, restart the page.","with-data":"Input some new data or edit the table","no-data":"Input some new data","edit-mode":"Edit mode is launched"}}},computed:{assignStatusClass(){return""!==this.status?`data-status--${this.status}`:"data-status--none"}},methods:{assignStatusMessage(){if(this.status=this.dataQuantity>-1?this.assignClass(this.validationStatus):this.validationStatus,""!==this.status)return this.messageTypesObj[this.status]},assignClass(t){return this.editMode?"edit-mode":0===this.dataQuantity&&["","with-data"].includes(t)?"no-data":this.dataQuantity>0&&(""===t||"no-data"===t)?"with-data":t}}};const Lt=(0,g.Z)(zt,[["render",$t],["__scopeId","data-v-2e328a32"]]);var Ht=Lt;const Zt=t=>((0,i.dD)("data-v-f1ec5a4c"),t=t(),(0,i.Cn)(),t),qt={class:"data-table"},Bt={key:0,class:"data-table__caption caption caption--bold-message"},Wt={key:1,class:"data-table__thead thead"},Nt=Zt((()=>(0,i._)("tr",{class:"thead__row row"},[(0,i._)("th",{class:"thead__cell cell"},"Name"),(0,i._)("th",{class:"thead__cell cell"},"Email"),(0,i._)("th",{class:"thead__cell cell"},"Actions")],-1))),Kt=[Nt],Yt={key:0,class:"tbody__cell cell"},Gt=["onUpdate:modelValue","disabled"],Rt={key:1,class:"tbody__cell cell"},Jt={key:2,class:"tbody__cell cell"},Qt=["onUpdate:modelValue","disabled"],Xt={key:3,class:"tbody__cell cell"},te={class:"tbody__cell cell"},ee={key:0,class:"cell__actions-container actions-container"},ae=["onClick","disabled"],ne=["onClick","disabled"],ie={key:1,class:"cell__actions-container actions-container"},oe=["onClick","disabled"],se=["disabled"],le={key:2,class:"cell__actions-container actions-container"};function re(t,e,a,s,l,r){const d=(0,i.up)("DataStatus");return(0,i.wg)(),(0,i.iD)("table",qt,[(0,i.Wm)(n.uT,{name:"table-header",type:"transition",mode:"in-out"},{default:(0,i.w5)((()=>[a.dataCollection.length<1?((0,i.wg)(),(0,i.iD)("caption",Bt," No data here. Add some new! ")):((0,i.wg)(),(0,i.iD)("thead",Wt,Kt))])),_:1}),(0,i.Wm)(n.W3,{tag:"tbody",name:"row-activity",type:"transition",duration:{enter:1100,leave:500},class:"data-table__tbody tbody"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.dataCollection,(a=>((0,i.wg)(),(0,i.iD)("tr",{key:a.id,class:(0,o.C_)(["tbody__row","row",{"row--editing":l.controlModeEdit.id===a.id}])},[l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("td",Yt,[(0,i.wy)((0,i._)("input",{ref_for:!0,ref:"editFirst",type:"text",maxlength:"65","onUpdate:modelValue":t=>a.name=t,class:(0,o.C_)(["tbody__input","input",l.controlInput.assignClass("name",a.name,l.controlValidationTable)]),disabled:l.controlValidationTable.isProcessed(),onFocus:e[0]||(e[0]=t=>l.controlValidationTable.clearErrors("name")),onKeydown:e[1]||(e[1]=t=>l.controlInput.manageKeydown("name"))},null,42,Gt),[[n.nr,a.name,void 0,{trim:!0}]])])):((0,i.wg)(),(0,i.iD)("td",Rt,(0,o.zw)(a.name),1)),l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("td",Jt,[(0,i.wy)((0,i._)("input",{type:"email",maxlength:"138","onUpdate:modelValue":t=>a.email=t,class:(0,o.C_)(["tbody__input","input",l.controlInput.assignClass("email",a.email,l.controlValidationTable)]),disabled:l.controlValidationTable.isProcessed(),onFocus:e[2]||(e[2]=t=>l.controlValidationTable.clearErrors("email")),onKeydown:e[3]||(e[3]=t=>l.controlInput.manageKeydown("email"))},null,42,Qt),[[n.nr,a.email,void 0,{trim:!0}]])])):((0,i.wg)(),(0,i.iD)("td",Xt,(0,o.zw)(a.email),1)),(0,i._)("td",te,[(0,i.Wm)(n.uT,{name:"actions-activity",type:"animation"},{default:(0,i.w5)((()=>[l.controlModeEdit.id===a.id||l.controlModeDelete.id===a.id?((0,i.wg)(),(0,i.j4)(d,{key:0,class:"status-window","errors-arr":l.controlValidationTable.errorsArr,"validation-status":l.controlValidationTable.get()},null,8,["errors-arr","validation-status"])):(0,i.kq)("",!0)])),_:2},1024),(0,i.Wm)(n.uT,{name:"actions-activity",mode:"out-in",type:"animation"},{default:(0,i.w5)((()=>[l.controlModeEdit.get()?l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("div",ie,[(0,i._)("button",{onClick:e=>t.$emit("edit:data",a),disabled:l.controlValidationTable.isProcessed(),class:"actions-container__action-button action-button button action-button--save","aria-label":"Save changes"},"Save",8,oe),(0,i._)("button",{onClick:e[4]||(e[4]=t=>l.controlModeEdit.cancelEdit()),disabled:l.controlValidationTable.isProcessed(),class:"actions-container__action-button action-button button action-button--cancel","aria-label":"Cancel changes"},"Cancel",8,se)])):((0,i.wg)(),(0,i.iD)("div",le)):((0,i.wg)(),(0,i.iD)("div",ee,[(0,i._)("button",{onClick:t=>r.launchEdit(a),disabled:l.controlModeDelete.get()||l.controlValidationForm.isProcessed(),class:"actions-container__action-button action-button button action-button--edit","aria-label":"Edit data from this row"},"Edit",8,ae),(0,i._)("button",{onClick:e=>t.$emit("delete:data",a.id),disabled:l.controlModeDelete.get()&&l.controlModeDelete.id!==a.id||l.controlValidationTable.isProcessed()||l.controlValidationForm.isProcessed()||l.controlValidationTable.isError(),class:"actions-container__action-button action-button button action-button--delete","aria-label":"Delete this row"},"Delete",8,ne)]))])),_:2},1024)])],2)))),128))])),_:1})])}var de={name:"data-table",components:{DataStatus:Ht},props:{dataCollection:Array},emits:["edit:data","delete:data"],data(){return{controlValidationTable:It,controlValidationForm:jt,controlModeEdit:Ft,controlModeDelete:xt,controlInput:St,scrollPositionY:null}},deactivated(){Ft.get()&&Ft.cancelEdit()},methods:{launchEdit(t){Ft.set(!0,t),this.$nextTick((()=>{this.$refs.editFirst[0].focus()}))}}};const ce=(0,g.Z)(de,[["render",re],["__scopeId","data-v-f1ec5a4c"]]);var ue=ce,he={name:"data-tab",title:"Project: Data Exchange",components:{DataDownloader:et,DataDetails:_t,DataForm:Ot,DataStatus:Ht,DataTable:ue},data(){return{controlValidationForm:jt,controlValidationTable:It,controlModeEdit:Ft,controlModeDelete:xt,controlInput:St,dataCollection:Array,dataLastExistedId:Number,dataDownloadedLength:Number,downloadUrl:"https://jsonplaceholder.typicode.com/users",downloadStatus:String}},created(){this.getData()},methods:{async getData(){this.downloadStatus="pending";try{const t=await q().get(this.downloadUrl,{timeout:2e4});await setTimeout((()=>{this.downloadStatus="fulfilled",this.dataCollection=t.data,this.dataLastExistedId=this.dataCollection.length,this.dataDownloadedLength=this.dataCollection.length}),2500)}catch(t){await setTimeout((()=>{this.downloadStatus="rejected"}),2500)}},async addData(t){jt.set("pending"),["network-error","fatal-error"].includes(It.get())&&It.set("");try{if(St.verifyValidity(t,jt),"rejected"===jt.get())throw"rejected";this.dataLastExistedId++;let e=this.dataLastExistedId;const a={id:e,...t};await q().post(this.downloadUrl,{data:a,timeout:2e4});jt.set("fulfilled"),this.dataCollection=[...this.dataCollection,a],await setTimeout((()=>{t.name="",t.email="",jt.set("")}),1500)}catch(e){jt.set(this.setErrorType(e))}},async editData(t){let e=Ft.determineUpdated();if("none"!==e){It.set("pending");try{if(St.verifyValidity({name:t.name,email:t.email},It),"rejected"===It.get())throw"rejected";let a=t.id,n=this.dataCollection.indexOf(t);if(a<=this.dataDownloadedLength&&"all"===e){await q().put(`${this.downloadUrl}/${a}`,{data:t,timeout:2e4});this.dataCollection[n]=t}else{await q().patch(`${this.downloadUrl}/${a}`,{data:e,timeout:2e4});for(let t in e)this.dataCollection[n][t]=e[t]}It.set("fulfilled"),await setTimeout((()=>{Ft.set(!1),It.set("")}),1500)}catch(a){It.set(this.setErrorType(a))}}else Ft.cancelEdit()},async deleteData(t){It.set("pending"),jt.nullEndpointStatus(),xt.set(!0,t);try{await q()["delete"](`${this.downloadUrl}/${t}`,{timeout:2e4});It.set("fulfilled"),await setTimeout((()=>{this.dataCollection=this.dataCollection.filter((e=>e.id!==t))}),1500)}catch(e){It.set(this.setErrorType(e))}finally{const t="fulfilled"===It.get()?1500:5e3;await setTimeout((()=>{It.set(""),xt.set(!1)}),t)}},setErrorType(t){let e="rejected"===t?"rejected":"Network Error"===t.message?"network-error":"fatal-error";return"fatal-error"===e&&console.error(t.message),e}}};const pe=(0,g.Z)(he,[["render",H],["__scopeId","data-v-2e032c73"]]);var me=pe;const fe=t=>((0,i.dD)("data-v-3fcb7d5c"),t=t(),(0,i.Cn)(),t),be={class:"broken-link-tab"},ge=fe((()=>(0,i._)("section",{class:"broken-link-tab__section section"},[(0,i._)("h2",{class:"section__title title"},"Oh, it's 404 error!"),(0,i._)("div",{class:"section__content content"},[(0,i._)("p",{class:"content__p-item p-item"},[(0,i.Uk)(" The page you were trying to access doesn't exist at all within this website or couldn't be found here. "),(0,i._)("br"),(0,i.Uk)("Select any existing tab of your interest at the navigation bar or choose a link from the footer. ")])])],-1))),_e=[ge];function ve(t,e,a,n,o,s){return(0,i.wg)(),(0,i.iD)("div",be,_e)}var we={name:"broken-link-tab",title:"Non-existent path have brought you here"};const ye=(0,g.Z)(we,[["render",ve],["__scopeId","data-v-3fcb7d5c"]]);var ke=ye;const De={"":F,"#about":F,"#data-exchange":me};var Te={name:"app",components:{HeaderContainer:v,FooterContainer:A,AboutTab:F,DataTab:me,BrokenLinkTab:ke},data(){return{currentTab:window.location.hash,tabs:[{title:F.title,href:"#about"},{title:me.title,href:"#data-exchange"}]}},computed:{currentView(){return De[this.currentTab||""]||ke}},mounted(){""===window.location.hash&&window.location.replace(`${window.location.href}#about`),this.updateDocTitle(),window.addEventListener("hashchange",this.onTabChange)},updated(){document.activeElement.classList.contains("tab-link--active")||document.activeElement.blur()},methods:{onTabChange(){this.currentTab=window.location.hash,this.updateDocTitle()},updateDocTitle(){document.title=`${this.currentView.title} ✦ by Yanka_InCode`}}};const Ce=(0,g.Z)(Te,[["render",u]]);var Ae=Ce;const Ee=(0,n.ri)(Ae);Ee.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[r])}))?n.splice(r--,1):(l=!1,o<s&&(s=o));if(l){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],l=n[1],r=n[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(r)var c=r(a)}for(e&&e(n);d<s.length;d++)o=s[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},n=self["webpackChunkvue_field_experience"]=self["webpackChunkvue_field_experience"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(36509)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.78b8874a.js.map
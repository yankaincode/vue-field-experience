(function(){"use strict";var t={505:function(t,e,a){var n=a(963),i=a(252),o=a(577);const r={class:"app-container"},l=(0,i._)("div",{class:"app-container__background-container background-container"},null,-1),s={class:"app-container__window-container window-container"},d={class:"window-container__main-container main-container"},c={class:"main-container__page-title page-title"};function u(t,e,a,u,h,p){const m=(0,i.up)("HeaderContainer"),b=(0,i.up)("FooterContainer");return(0,i.wg)(),(0,i.iD)("div",r,[l,(0,i._)("div",s,[(0,i.Wm)(m,{class:"window-container__side-container side-container",tabs:h.tabs,"current-tab":h.currentTab},null,8,["tabs","current-tab"]),(0,i._)("main",d,[(0,i._)("h1",c,(0,o.zw)(p.currentView.title),1),(0,i.Wm)(n.uT,{name:"page-toggle",mode:"out-in",type:"transition",duration:"300",appear:"appear"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[((0,i.wg)(),(0,i.j4)((0,i.LL)(p.currentView),{class:"main-container__page-content page-content"}))],1024))])),_:1})]),(0,i.Wm)(b,{class:"window-container__side-container side-container"})])])}const h={class:"header-container"},p={class:"header-container__nav-bar nav-bar"},m=["href","aria-label"];function b(t,e,a,n,r,l){return(0,i.wg)(),(0,i.iD)("header",h,[(0,i._)("nav",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tabs,(t=>((0,i.wg)(),(0,i.iD)("a",{key:t,href:t.href,class:(0,o.C_)(["nav-bar__tab-link","tab-link","link",{"tab-link--active":l.isTabActive(t.href)}]),"aria-label":l.assignTabLabel(t.href,t.title)},(0,o.zw)(t.title),11,m)))),128))])])}var g={name:"header-container",props:{tabs:{type:Array,required:!0},currentTab:{type:String,required:!0}},methods:{isTabActive(t){return t===this.currentTab},assignTabLabel(t,e){return this.isTabActive(t)?`The '${e}' page is opened`:`Open '${e}' page`}}},_=a(744);const w=(0,_.Z)(g,[["render",b],["__scopeId","data-v-4fef706e"]]);var v=w;const f={class:"footer-container"},y=(0,i.uE)('<svg class="footer-container__svg svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-v-38e35d66><a xlink:href="https://github.com/yankaincode/vue-field-project" target="_blank" rel="noopener" class="svg__svg-link svg-link" aria-label="View the code source of the project on GitHub" data-v-38e35d66><rect class="svg-link__rect" data-v-38e35d66></rect><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-38e35d66></path></a></svg><p class="footer-container__p-item p-item" data-v-38e35d66> Coded and designed by <a href="https://github.com/yankaincode" aria-label="Yanka_InCode on GitHub" target="_blank" rel="noopener" class="link link--Yanka" data-v-38e35d66>Yanka_InCode</a></p><p class="footer-container__p-item p-item" data-v-38e35d66> Background image compilation and favicon are created by <a href="https://viola-igua.tumblr.com/" aria-label="ViolaIgua on Tumblr" target="_blank" rel="noopener" class="link link--Viola" data-v-38e35d66>ViolaIgua</a></p><p class="footer-container__p-item p-item p-item--copy" data-v-38e35d66>© 2022 - Nowadays. ­All rigths reserved. </p>',4),k=[y];function D(t,e,a,n,o,r){return(0,i.wg)(),(0,i.iD)("footer",f,k)}var T={name:"footer-container"};const C=(0,_.Z)(T,[["render",D],["__scopeId","data-v-38e35d66"]]);var E=C;const j={class:"about-tab"},A=(0,i.uE)('<section class="about-tab__section section" data-v-68253ccd><h2 class="section__title title" data-v-68253ccd>Project description</h2><div class="section__content content" data-v-68253ccd><p class="content__p-item p-item" data-v-68253ccd> It&#39;s a front-end project made on Vue.js framework with Vue CLI. <br data-v-68253ccd>Data Form and Table exchange JSON data with <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener" class="link" data-v-68253ccd>JSON Placeholder API</a> by Asynchronous API calls via Axios HTTP client, using Promises and Error handling. <br data-v-68253ccd>The Data resets only on reload and on closing of the current source. It doesn’t use cookies. </p><p class="content__p-item p-item" data-v-68253ccd> The website is based on documentations <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noopener" class="link" data-v-68253ccd>for Vue 3</a> and <a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener" class="link" data-v-68253ccd>for Axios</a> and inspired by introduction guide <a href="https://www.taniarascia.com/getting-started-with-vue/" target="_blank" rel="noopener" class="link" data-v-68253ccd>&#39;Vue Tutorial: An Overview and Walkthrough&#39;</a> by Tania Rascia, but went further than guide: </p><ul class="content__ul-list ul-list ul-list--roll" data-v-68253ccd><li data-v-68253ccd>added more thorough verification and separated error reporting to end-user for each input field of Form and Table (State Management with Reactivity API),</li><li data-v-68253ccd>added preserving data within input fields in case it wasn&#39;t sent (because of Network error, for example),</li><li data-v-68253ccd>PATCH and PUT request methods were used for edit,</li><li data-v-68253ccd>new data appended through Form is not fully back-end friendly for now (error 500 exists within <a class="link" href="https://taniarascia.github.io/vue-tutorial/" data-v-68253ccd>the demo of the guide</a> on PUT method as well), so as a workaround a PATCH request method only was used for the case,</li><li data-v-68253ccd>added &lt;component&gt; routing and listening of &#39;hashchange&#39; event to switch tabs and update title of the document,</li><li data-v-68253ccd>added animations by built-in components &lt;Transition&gt; and &lt;TransitionGroup&gt;,</li><li data-v-68253ccd>added more style to UI design,</li><li data-v-68253ccd>worked with SCSS, BEM, Git for practice.</li></ul><p class="content__p-item p-item" data-v-68253ccd>All used stack and tools:</p><ul class="content__ul-list ul-list ul-list--string ul-list--basis" data-v-68253ccd><li data-v-68253ccd>HTML5</li><li data-v-68253ccd>CSS3</li><li data-v-68253ccd>JS (+ ESMA6)</li></ul><ul class="content__ul-list ul-list ul-list--string ul-list--addon" data-v-68253ccd><li data-v-68253ccd>Vue 3</li><li data-v-68253ccd>Axios</li><li data-v-68253ccd>SASS (SCSS)</li><li data-v-68253ccd>Autoprefixer</li></ul><ul class="content__ul-list ul-list ul-list--string ul-list--pallet" data-v-68253ccd><li data-v-68253ccd>BEM methodology</li><li data-v-68253ccd>Git</li><li data-v-68253ccd>Vue Devtools</li><li data-v-68253ccd>npm manager</li></ul><ul class="content__ul-list ul-list ul-list--string ul-list--ui" data-v-68253ccd><li data-v-68253ccd>Mobile-first approach</li><li data-v-68253ccd>Adaptive design: from mobile to 8k</li><li data-v-68253ccd>Cross-browser</li></ul></div></section>',1),V=[A];function S(t,e,a,n,o,r){return(0,i.wg)(),(0,i.iD)("div",j,V)}var I={name:"about-tab",title:"About project"};const x=(0,_.Z)(I,[["render",S],["__scopeId","data-v-68253ccd"]]);var F=x;const M=t=>((0,i.dD)("data-v-7061259a"),t=t(),(0,i.Cn)(),t),P={class:"data-tab__section section"},O=M((()=>(0,i._)("h2",{class:"section__title title"},"Data form",-1))),U={class:"data-tab__section section"},$={class:"data-tab__section section"},L=M((()=>(0,i._)("h2",{class:"section__title title"},"Data table",-1)));function Z(t,e,a,r,l,s){const d=(0,i.up)("DataDownloader"),c=(0,i.up)("DataForm"),u=(0,i.up)("DataStatus"),h=(0,i.up)("DataTable");return"fulfilled"!==l.downloadStatus?((0,i.wg)(),(0,i.j4)(d,{key:0,"download-status":l.downloadStatus,class:"data-tab"},null,8,["download-status"])):((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,o.C_)(["data-tab",{"data-tab--progress":"pending"===l.controlValidationForm.get()||"pending"===l.controlValidationTable.get()}])},[(0,i._)("section",P,[O,(0,i.Wm)(n.uT,{name:"show-up",type:"transition",appear:""},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.j4)(i.Ob,null,[(0,i.Wm)(c,{"onAdd:data":s.addData,class:"section__content content"},null,8,["onAdd:data"])],1024))])),_:1})]),(0,i._)("section",U,[(0,i.Wm)(u,{"errors-arr":l.controlValidationForm.errorsArr,"validation-status":l.controlValidationForm.get(),"data-quantity":l.dataCollection.length,"edit-mode":l.controlModeEdit.get(),class:"section__content content"},null,8,["errors-arr","validation-status","data-quantity","edit-mode"])]),(0,i._)("section",$,[L,(0,i.Wm)(h,{"data-collection":l.dataCollection,"onDelete:data":s.deleteData,"onEdit:data":s.editData,class:"section__table table"},null,8,["data-collection","onDelete:data","onEdit:data"])])],2))}var q=a(669),z=a.n(q);const N=t=>((0,i.dD)("data-v-0661e4bc"),t=t(),(0,i.Cn)(),t),W={key:0,class:"data-downloader__pending-container pending-container"},K=N((()=>(0,i._)("p",{class:"pending-container__p-item p-item"}," Loading process is launched. Please, wait a bit... ",-1))),H=[K],Y={key:1,class:"data-downloader__rejected-container rejected-container"},B=N((()=>(0,i._)("p",{class:"rejected-container__p-item p-item"},"Sorry, it's a download error. Some possible solutions:",-1))),G=N((()=>(0,i._)("ul",{class:"rejected-container__ul-list ul-list"},[(0,i._)("li",null,"check your connection to the Internet;"),(0,i._)("li",null,"update the page;"),(0,i._)("li",null,"try to retrieve data by the button below.")],-1))),R=N((()=>(0,i._)("p",{class:"rejected-container__p-item p-item"},[(0,i.Uk)(" If nothing has changed, please inform me of this incident by e-mail on "),(0,i._)("a",{class:"link",href:"mailto:yankaincode@gmail.com?subject=Error Report | Vue Project 'Data Exchange' by Yanka_InCode &body=Greets!%0A%0AI've tried to open 'Project: Data Exchange' tab, but it didn't download.%0AIt wasn't the Internet connection issue. Reload of the website and try to retrieve data from the server again by an appropriate button didn't help."},"yankaincode@gmail.com"),(0,i.Uk)(". ")],-1)));function Q(t,e,a,r,l,s){return(0,i.wg)(),(0,i.j4)(n.uT,{tag:"div",name:"toggle-status",type:"transition",mode:"out-in",class:(0,o.C_)(["data-downloader",{"data-downloader--rejected":"rejected"===a.downloadStatus,"data-downloader--pending":"pending"===a.downloadStatus}])},{default:(0,i.w5)((()=>["pending"===a.downloadStatus?((0,i.wg)(),(0,i.iD)("div",W,H)):((0,i.wg)(),(0,i.iD)("div",Y,[B,G,(0,i._)("button",{onClick:e[0]||(e[0]=(...e)=>t.getData&&t.getData(...e)),class:"rejected-container__button button"},"Retrieve data from the server again"),R]))])),_:1},8,["class"])}var J={name:"data-downloader",props:{downloadStatus:{type:String,required:!0}}};const X=(0,_.Z)(J,[["render",Q],["__scopeId","data-v-0661e4bc"]]);var tt=X;const et=t=>((0,i.dD)("data-v-19b95e9f"),t=t(),(0,i.Cn)(),t),at=et((()=>(0,i._)("label",{for:"name",class:"form__label label"},"Name:",-1))),nt=["disabled"],it=et((()=>(0,i._)("label",{for:"email",class:"form__label label"},"Email:",-1))),ot=["disabled"],rt=["disabled"];function lt(t,e,a,r,l,s){return(0,i.wg)(),(0,i.iD)("form",{name:"dataForm",class:"data-form form",onSubmit:e[6]||(e[6]=(0,n.iM)((e=>t.$emit("add:data",l.data)),["prevent"]))},[at,(0,i.wy)((0,i._)("input",{ref:"firstFormInput",type:"text",maxlength:"65","onUpdate:modelValue":e[0]||(e[0]=t=>l.data.name=t),class:(0,o.C_)(["form__input","input",l.controlInput.assignClass("name",l.data.name,l.controlValidationForm)]),disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get(),onFocus:e[1]||(e[1]=t=>l.controlValidationForm.clearErrors("name")),onKeydown:e[2]||(e[2]=t=>l.controlInput.manageKeydown("name"))},null,42,nt),[[n.nr,l.data.name,void 0,{trim:!0}]]),it,(0,i.wy)((0,i._)("input",{type:"email",maxlength:"138","onUpdate:modelValue":e[3]||(e[3]=t=>l.data.email=t),class:(0,o.C_)(["form__input","input",l.controlInput.assignClass("email",l.data.email,l.controlValidationForm)]),disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get(),onFocus:e[4]||(e[4]=t=>l.controlValidationForm.clearErrors("email")),onKeydown:e[5]||(e[5]=t=>l.controlInput.manageKeydown("email"))},null,42,ot),[[n.nr,l.data.email,void 0,{trim:!0}]]),(0,i._)("input",{type:"submit",class:"form__submit-button submit-button",value:"Add data",disabled:l.controlValidationForm.isProcessed()||l.controlModeEdit.get()},null,8,rt)],32)}var st=a(262);const dt={status:"",errors:{name:[],email:[]},errorsArr:[],errorTypes:{name:["empty-name","invalid-name"],email:["empty-email","invalid-email"]},set(t){""!==t&&"pending"!==t||0===this.errorsArr.length||this.clearErrors("all"),this.status=t},get(){return this.status},isProcessed(){return["pending","fulfilled"].includes(this.get())},isError(){return["network-error","fatal-error","rejected"].includes(this.status)},nullEndpointStatus(){["network-error","fatal-error","rejected","fulfilled"].includes(this.get())&&this.set("")},pushError(t,e){this.errors[t].push(e),this.errorsArr.push(e)},clearErrors(t){if("all"===t){for(let t in this.errors)this.errors[t]=[];this.errorsArr=[]}else{if(0===this.errors[t].length)return;this.errors[t]=[],this.errorsArr=this.errorsArr.filter((e=>!this.errorTypes[t].includes(e))),0===this.errorsArr.length&&this.set("")}}},ct=(0,st.qj)(Object.assign({},dt)),ut=(0,st.qj)(Object.assign({},dt)),ht=(t,e)=>{let a;switch(t){case"name":a=/(^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я\s\'\-\.]{0,63})[a-zA-Zа-яА-Я]$)/;break;case"email":a=/^[a-zA-Z0-9]([\w\.\-]{0,62})[a-zA-Z0-9]@[a-z0-9]([\w\.\-]{1,62})\.([a-z]{2,8})$/;break}return a.test(e)},pt=(0,st.qj)({verifyValidity(t,e){for(const a in t)""===t[a]?e.pushError(a,`empty-${a}`):ht(a,t[a])||e.pushError(a,`invalid-${a}`);0!==e.errorsArr.length&&e.set("rejected")},assignClass(t,e,a){let n=a.errors[t].length>0;return{"input--rejected":n,"input--empty":""===e&&!n,"input--filled":""!==e&&!n}},manageKeydown(t){let e;switch(t){case"name":e=/[a-zA-Zа-яА-Я\s\'\-\.]/;break;case"email":e=/[\w\-\.\@]/;break}event.key.match(e)||"ArrowRight"===event.code||"ArrowLeft"===event.code||"Backspace"===event.code||"Delete"===event.code||event.preventDefault()}}),mt=(0,st.qj)({status:!1,id:null,set(t,e=null){this.status=t,this.id=e},get(){return this.status}}),bt=(0,st.qj)({status:!1,id:null,editingData:null,cachedData:null,set(t,e=null){this.status=t,this.editingData=e,t?(this.id=e.id,this.cachedData=Object.assign({},e),ct.nullEndpointStatus()):(this.id=null,this.cachedData=null,ut.nullEndpointStatus())},get(){return this.status},cancelEdit(){Object.assign(this.editingData,this.cachedData),this.set(!1)},determineUpdated(){let t=0,e={};for(let n in this.editingData)this.editingData[n]!==this.cachedData[n]&&(t++,e[n]=this.editingData[n]);let a=Object.keys(this.cachedData).length-1;return 0===t?"none":t===a?"all":e}});var gt={name:"data-form",emits:["add:data"],data(){return{controlValidationForm:ct,controlInput:pt,controlModeEdit:bt,data:{name:"",email:""}}},deactivated(){ct.nullEndpointStatus()}};const _t=(0,_.Z)(gt,[["render",lt],["__scopeId","data-v-19b95e9f"]]);var wt=_t;const vt={key:0,class:"data-status__p-item p-item"};function ft(t,e,a,n,r,l){return(0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)(["data-status",l.assignStatusClass])},["rejected"!==this.status||0===a.errorsArr.length?((0,i.wg)(),(0,i.iD)("p",vt,(0,o.zw)(l.assignStatusMessage()),1)):((0,i.wg)(),(0,i.iD)("ol",{key:1,class:(0,o.C_)(["data-status__errors-ol","errors-ol",a.dataQuantity>-1?"errors-ol--roman":"errors-ol--no-marker"])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.errorsArr,(t=>((0,i.wg)(),(0,i.iD)("li",null,[(0,i._)("strong",null,(0,o.zw)(r.messageTypesObj[t]),1)])))),256))],2))],2)}var yt={name:"data-status",props:{errorsArr:{type:Array,required:!0},validationStatus:{type:String,required:!0},dataQuantity:{type:Number,default:-1},editMode:{type:Boolean,default:!1}},data(){return{status:"",messageTypesObj:{pending:"Validation is in process. Please, wait a bit",fulfilled:"Data was successfully processed","empty-name":"Fill the name field","empty-email":"Fill the email field","invalid-name":"The entered name isn't valid","invalid-email":"The entered e-mail isn't valid","network-error":"It's a Network error. Check your connection to the Internet, then try again","fatal-error":"Something went pretty wrong. Check your Internet connection, just try again, restart the page.","with-data":"Input some new data or edit the table","no-data":"Input some new data","edit-mode":"Edit mode is launched"}}},computed:{assignStatusClass(){return""!==this.status?`data-status--${this.status}`:"data-status--none"}},methods:{assignStatusMessage(){if(this.status=this.dataQuantity>-1?this.assignClass(this.validationStatus):this.validationStatus,""!==this.status)return this.messageTypesObj[this.status]},assignClass(t){return this.editMode?"edit-mode":0===this.dataQuantity&&["","with-data","fulfilled"].includes(t)?"no-data":this.dataQuantity>0&&(""===t||"no-data"===t)?"with-data":t}}};const kt=(0,_.Z)(yt,[["render",ft],["__scopeId","data-v-28c105e6"]]);var Dt=kt;const Tt=t=>((0,i.dD)("data-v-b9fa155c"),t=t(),(0,i.Cn)(),t),Ct={class:"data-table"},Et={key:0,class:"data-table__caption caption caption--only-message"},jt={key:1,class:"data-table__thead thead"},At=Tt((()=>(0,i._)("tr",{class:"thead__row row"},[(0,i._)("th",{class:"thead__cell cell"},"Name"),(0,i._)("th",{class:"thead__cell cell"},"Email"),(0,i._)("th",{class:"thead__cell cell"},"Actions")],-1))),Vt=[At],St={key:0,class:"tbody__cell cell"},It=["onUpdate:modelValue","disabled"],xt={key:1,class:"tbody__cell cell"},Ft={key:2,class:"tbody__cell cell"},Mt=["onUpdate:modelValue","disabled"],Pt={key:3,class:"tbody__cell cell"},Ot={class:"tbody__cell cell"},Ut={key:0,class:"cell__actions-container actions-container"},$t=["onClick","disabled"],Lt=["onClick","disabled"],Zt={key:1,class:"cell__actions-container actions-container"},qt=["onClick","disabled"],zt=["disabled"],Nt={key:2,class:"cell__actions-container actions-container"};function Wt(t,e,a,r,l,s){const d=(0,i.up)("DataStatus");return(0,i.wg)(),(0,i.iD)("table",Ct,[(0,i.Wm)(n.uT,{name:"table-header",type:"transition",mode:"in-out"},{default:(0,i.w5)((()=>[a.dataCollection.length<1?((0,i.wg)(),(0,i.iD)("caption",Et," No data here. Add some new! ")):((0,i.wg)(),(0,i.iD)("thead",jt,Vt))])),_:1}),(0,i.Wm)(n.W3,{tag:"tbody",name:"row-activity",type:"transition",duration:{enter:1100,leave:500},class:"data-table__tbody tbody"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.dataCollection,(a=>((0,i.wg)(),(0,i.iD)("tr",{key:a.id,class:(0,o.C_)(["tbody__row","row",{"row--editing":l.controlModeEdit.id===a.id}])},[l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("td",St,[(0,i.wy)((0,i._)("input",{ref_for:!0,ref:"editFirst",type:"text",maxlength:"65","onUpdate:modelValue":t=>a.name=t,class:(0,o.C_)(["tbody__input","input",l.controlInput.assignClass("name",a.name,l.controlValidationTable)]),disabled:l.controlValidationTable.isProcessed(),onFocus:e[0]||(e[0]=t=>l.controlValidationTable.clearErrors("name")),onKeydown:e[1]||(e[1]=t=>l.controlInput.manageKeydown("name"))},null,42,It),[[n.nr,a.name,void 0,{trim:!0}]])])):((0,i.wg)(),(0,i.iD)("td",xt,(0,o.zw)(a.name),1)),l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("td",Ft,[(0,i.wy)((0,i._)("input",{type:"email",maxlength:"138","onUpdate:modelValue":t=>a.email=t,class:(0,o.C_)(["tbody__input","input",l.controlInput.assignClass("email",a.email,l.controlValidationTable)]),disabled:l.controlValidationTable.isProcessed(),onFocus:e[2]||(e[2]=t=>l.controlValidationTable.clearErrors("email")),onKeydown:e[3]||(e[3]=t=>l.controlInput.manageKeydown("email"))},null,42,Mt),[[n.nr,a.email,void 0,{trim:!0}]])])):((0,i.wg)(),(0,i.iD)("td",Pt,(0,o.zw)(a.email),1)),(0,i._)("td",Ot,[(0,i.Wm)(n.uT,{name:"actions-activity",type:"animation"},{default:(0,i.w5)((()=>[l.controlModeEdit.id===a.id||l.controlModeDelete.id===a.id?((0,i.wg)(),(0,i.j4)(d,{key:0,class:"status-window","errors-arr":l.controlValidationTable.errorsArr,"validation-status":l.controlValidationTable.get()},null,8,["errors-arr","validation-status"])):(0,i.kq)("",!0)])),_:2},1024),(0,i.Wm)(n.uT,{name:"actions-activity",mode:"out-in",type:"animation"},{default:(0,i.w5)((()=>[l.controlModeEdit.get()?l.controlModeEdit.id===a.id?((0,i.wg)(),(0,i.iD)("div",Zt,[(0,i._)("button",{onClick:e=>t.$emit("edit:data",a),disabled:l.controlValidationTable.isProcessed(),class:"actions-container__action-button action-button button action-button--save","aria-label":"Save changes"},"Save",8,qt),(0,i._)("button",{onClick:e[4]||(e[4]=t=>l.controlModeEdit.cancelEdit()),disabled:l.controlValidationTable.isProcessed(),class:"actions-container__action-button action-button button action-button--cancel","aria-label":"Cancel changes"},"Cancel",8,zt)])):((0,i.wg)(),(0,i.iD)("div",Nt)):((0,i.wg)(),(0,i.iD)("div",Ut,[(0,i._)("button",{onClick:t=>s.launchEdit(a),disabled:l.controlModeDelete.get()||l.controlValidationForm.isProcessed(),class:"actions-container__action-button action-button button action-button--edit","aria-label":"Edit data from this row"},"Edit",8,$t),(0,i._)("button",{onClick:e=>t.$emit("delete:data",a.id),disabled:l.controlModeDelete.get()&&l.controlModeDelete.id!==a.id||l.controlValidationTable.isProcessed()||l.controlValidationForm.isProcessed()||l.controlValidationTable.isError(),class:"actions-container__action-button action-button button action-button--delete","aria-label":"Delete this row"},"Delete",8,Lt)]))])),_:2},1024)])],2)))),128))])),_:1})])}var Kt={name:"data-table",components:{DataStatus:Dt},props:{dataCollection:Array},emits:["edit:data","delete:data"],data(){return{controlValidationTable:ut,controlValidationForm:ct,controlModeEdit:bt,controlModeDelete:mt,controlInput:pt,scrollPositionY:null}},deactivated(){bt.get()&&bt.cancelEdit()},methods:{launchEdit(t){bt.set(!0,t),this.$nextTick((()=>{this.$refs.editFirst[0].focus()}))}}};const Ht=(0,_.Z)(Kt,[["render",Wt],["__scopeId","data-v-b9fa155c"]]);var Yt=Ht,Bt={name:"data-tab",title:"Project: Data Exchange",components:{DataDownloader:tt,DataForm:wt,DataStatus:Dt,DataTable:Yt},data(){return{controlValidationForm:ct,controlValidationTable:ut,controlModeEdit:bt,controlModeDelete:mt,controlInput:pt,dataCollection:Array,dataLastExistedId:Number,dataDownloadedLength:Number,downloadUrl:"https://jsonplaceholder.typicode.com/users",downloadStatus:String}},created(){this.getData()},methods:{async getData(){this.downloadStatus="pending";try{const t=await z().get(this.downloadUrl,{timeout:2e4});await setTimeout((()=>{this.downloadStatus="fulfilled",this.dataCollection=t.data,this.dataLastExistedId=this.dataCollection.length,this.dataDownloadedLength=this.dataCollection.length}),2500)}catch(t){await setTimeout((()=>{this.downloadStatus="rejected"}),2500)}},async addData(t){ct.set("pending"),["network-error","fatal-error"].includes(ut.get())&&ut.set("");try{if(pt.verifyValidity(t,ct),"rejected"===ct.get())throw"rejected";this.dataLastExistedId++;let e=this.dataLastExistedId;const a={id:e,...t};await z().post(this.downloadUrl,{data:a,timeout:2e4});ct.set("fulfilled"),this.dataCollection=[...this.dataCollection,a],await setTimeout((()=>{t.name="",t.email="",ct.set("")}),1500)}catch(e){ct.set(this.setErrorType(e))}},async editData(t){let e=bt.determineUpdated();if("none"!==e){ut.set("pending");try{if(pt.verifyValidity({name:t.name,email:t.email},ut),"rejected"===ut.get())throw"rejected";let a=t.id,n=this.dataCollection.indexOf(t);if(a<=this.dataDownloadedLength&&"all"===e){await z().put(`${this.downloadUrl}/${a}`,{data:t,timeout:2e4});this.dataCollection[n]=t}else{await z().patch(`${this.downloadUrl}/${a}`,{data:e,timeout:2e4});for(let t in e)this.dataCollection[n][t]=e[t]}ut.set("fulfilled"),await setTimeout((()=>{bt.set(!1),ut.set("")}),1500)}catch(a){ut.set(this.setErrorType(a))}}else bt.cancelEdit()},async deleteData(t){ut.set("pending"),ct.nullEndpointStatus(),mt.set(!0,t);try{await z()["delete"](`${this.downloadUrl}/${t}`,{timeout:2e4});ut.set("fulfilled"),await setTimeout((()=>{this.dataCollection=this.dataCollection.filter((e=>e.id!==t))}),1500)}catch(e){ut.set(this.setErrorType(e))}finally{const t="fulfilled"===ut.get()?1500:5e3;await setTimeout((()=>{ut.set(""),mt.set(!1)}),t)}},setErrorType(t){let e="rejected"===t?"rejected":"Network Error"===t.message?"network-error":"fatal-error";return"fatal-error"===e&&console.error(t.message),e}}};const Gt=(0,_.Z)(Bt,[["render",Z],["__scopeId","data-v-7061259a"]]);var Rt=Gt;const Qt=t=>((0,i.dD)("data-v-3fcb7d5c"),t=t(),(0,i.Cn)(),t),Jt={class:"broken-link-tab"},Xt=Qt((()=>(0,i._)("section",{class:"broken-link-tab__section section"},[(0,i._)("h2",{class:"section__title title"},"Oh, it's 404 error!"),(0,i._)("div",{class:"section__content content"},[(0,i._)("p",{class:"content__p-item p-item"},[(0,i.Uk)(" The page you were trying to access doesn't exist at all within this website or couldn't be found here. "),(0,i._)("br"),(0,i.Uk)("Select any existing tab of your interest at the navigation bar or choose a link from the footer. ")])])],-1))),te=[Xt];function ee(t,e,a,n,o,r){return(0,i.wg)(),(0,i.iD)("div",Jt,te)}var ae={name:"broken-link-tab",title:"Non-existent path have brought you here"};const ne=(0,_.Z)(ae,[["render",ee],["__scopeId","data-v-3fcb7d5c"]]);var ie=ne;const oe={"":F,"#about":F,"#data-exchange":Rt};var re={name:"app",components:{HeaderContainer:v,FooterContainer:E,AboutTab:F,DataTab:Rt,BrokenLinkTab:ie},data(){return{currentTab:window.location.hash,tabs:[{title:F.title,href:"#about"},{title:Rt.title,href:"#data-exchange"}]}},computed:{currentView(){return oe[this.currentTab||""]||ie}},mounted(){""===window.location.hash&&window.location.replace(`${window.location.href}#about`),this.updateDocTitle(),window.addEventListener("hashchange",this.onTabChange)},updated(){document.activeElement.classList.contains("tab-link--active")||document.activeElement.blur()},methods:{onTabChange(){this.currentTab=window.location.hash,this.updateDocTitle()},updateDocTitle(){document.title=`${this.currentView.title} ✦ by Yanka_InCode`}}};const le=(0,_.Z)(re,[["render",u]]);var se=le;const de=(0,n.ri)(se);de.mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(l=!1,o<r&&(r=o));if(l){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[n,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,r=n[0],l=n[1],s=n[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(s)var c=s(a)}for(e&&e(n);d<r.length;d++)o=r[d],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},n=self["webpackChunkvue_field_experience"]=self["webpackChunkvue_field_experience"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(505)}));n=a.O(n)})();
//# sourceMappingURL=app.fc7fdb05.js.map
"use strict";var Tt=Object.defineProperty,Ae=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Ie=(x,T,m)=>T in x?Tt(x,T,{enumerable:!0,configurable:!0,writable:!0,value:m}):x[T]=m,X=(x,T)=>{for(var m in T||(T={}))At.call(T,m)&&Ie(x,m,T[m]);if(Ae)for(var m of Ae(T))It.call(T,m)&&Ie(x,m,T[m]);return x};(self.webpackChunkalejandro_fabra_portfolio=self.webpackChunkalejandro_fabra_portfolio||[]).push([[648],{6648:(x,T,m)=>{m.r(T),m.d(T,{LayoutModule:()=>W});var f=m(6019),b=m(5637),o=m(3019),R=m(888);let V=(()=>{class l{constructor(){this.name="Alejandro Fabra Segarra",this.profession="FullStack Developer"}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-header"]],decls:11,vars:2,consts:[[1,"container-flex","noSelect"],[1,"cardBackground","m-2"],[1,"row","m-0","p-0","justify-content-center"],[1,"col-12","m-2",2,"max-width","fit-content"],["src","./assets/img/perfilcurriculum.png"],[1,"row","m-0","p-0","justify-content-center","mb-3"],[1,"col-5","card"],[2,"text-align","center"]],template:function(p,C){1&p&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-card",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._UZ(4,"img",4),o.qZA(),o.qZA(),o.TgZ(5,"div",5),o.TgZ(6,"mat-card",6),o.TgZ(7,"h4",7),o._uU(8),o.qZA(),o.TgZ(9,"h5",7),o._uU(10),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&p&&(o.xp6(8),o.Oqu(C.name),o.xp6(2),o.Oqu(C.profession))},directives:[R.a8],styles:[".legend[_ngcontent-%COMP%]{border-radius:50%;height:27px;display:inline-block;width:27px;text-align:center;color:#000;transform:translateY(-1px)}.customAccordion[_ngcontent-%COMP%]{background-color:none;border:0;margin:0}.translate1y[_ngcontent-%COMP%]{transform:translateY(-1px)}.card[_ngcontent-%COMP%]{max-width:-moz-fit-content;max-width:fit-content;width:-moz-fit-content;width:fit-content;min-width:13em}"]}),l})();function k(l,M){if(1&l){const p=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"button",1),o.NdJ("click",function(){return o.CHM(p),o.oxw().showAllSelected()}),o._uU(2),o.qZA(),o.qZA()}if(2&l){const p=o.oxw();o.xp6(2),o.hij(" ",p.mostrarOcultar," les dates ")}}function H(l,M){if(1&l&&(o.TgZ(0,"div",4),o._uU(1),o.qZA()),2&l){const p=M.$implicit;o.xp6(1),o.hij(" ",p," ")}}function v(l,M){if(1&l&&(o.TgZ(0,"div"),o.TgZ(1,"div",2),o.YNc(2,H,2,1,"div",3),o.qZA(),o.qZA()),2&l){const p=o.oxw();o.xp6(2),o.Q6J("ngForOf",p._dataToShow)}}let w=(()=>{class l{constructor(){this._dataToShow=[],this.isShowAllSelected=!0,this.mostrarOcultar="Ocultar",this.showProperty="",this.hideOption=!1}set dataToShow(p){this._dataToShow=this.removeDuplicates(p)}set columnNumber(p){setTimeout(()=>{try{document.getElementsByClassName("wrapper")[0].setAttribute("style",`grid-template-columns:repeat(${p}, 1fr)`)}catch(C){console.log(C)}},10)}set color(p){setTimeout(()=>{try{document.getElementsByClassName("cellBackground")[0].setAttribute("style",`background-color:${p}`)}catch(C){console.log(C)}},10)}set backgroundColor(p){setTimeout(()=>{try{document.getElementsByClassName("wrapper")[0].setAttribute("style",`background-color:${p}`)}catch(C){console.log(C)}},10)}showAllSelected(){this.isShowAllSelected?(this.isShowAllSelected=!1,this.mostrarOcultar="Mostrar"):(this.isShowAllSelected=!0,this.mostrarOcultar="Ocultar")}removeDuplicates(p){return[...new Set(p)]}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-data-viewer"]],inputs:{dataToShow:"dataToShow",hideOption:"hideOption",columnNumber:"columnNumber",color:"color",backgroundColor:"backgroundColor"},decls:2,vars:2,consts:[[4,"ngIf"],["type","button",1,"btn","btn-light",3,"click"],[1,"dateViewer","wrapper","scrollableContainer"],["class","cellBackground",4,"ngFor","ngForOf"],[1,"cellBackground"]],template:function(p,C){1&p&&(o.YNc(0,k,3,1,"div",0),o.YNc(1,v,3,1,"div",0)),2&p&&(o.Q6J("ngIf",C.hideOption),o.xp6(1),o.Q6J("ngIf",C.isShowAllSelected))},directives:[f.O5,f.sg],styles:[".dateViewer[_ngcontent-%COMP%]{margin-top:1em;padding:1em;background-color:#eceeec;text-align:center;border-radius:5px}.wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px}.cellBackground[_ngcontent-%COMP%]{background-color:#fff;border-radius:5px;height:25px}.scrollableContainer[_ngcontent-%COMP%]{overflow:auto;max-height:150px}"]}),l})();function N(l,M){1&l&&(o.TgZ(0,"div",3),o._UZ(1,"i",10),o.qZA())}function B(l,M){1&l&&(o.TgZ(0,"div",3),o._UZ(1,"i",11),o.qZA())}let S=(()=>{class l{constructor(){this.telf="677482553",this.email="alfaseart@gmail.com",this.IsContactDataOpened=!1,this.contactData=[this.telf,this.email]}ngOnInit(){}openContactData(){this.IsContactDataOpened=!this.IsContactDataOpened}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-contact"]],decls:12,vars:4,consts:[[1,"cardBackground","m-2"],["data-bs-toggle","collapse","data-bs-target","#collapseSelected",1,"customAccordion",3,"click"],[1,"row","mt-2"],[1,"col-2"],[1,"fas","fa-solid","fa-address-card"],[1,"col-8",2,"text-align","center"],["class","col-2",4,"ngIf"],["id","collapseSelected",1,"collapse"],[1,"accordion-body","p-0","mt-1"],[3,"dataToShow","columnNumber"],[1,"fas","fa-solid","fa-caret-down"],[1,"fas","fa-solid","fa-caret-up"]],template:function(p,C){1&p&&(o.TgZ(0,"mat-card",0),o.TgZ(1,"div",1),o.NdJ("click",function(){return C.openContactData()}),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._UZ(4,"i",4),o.qZA(),o.TgZ(5,"div",5),o._uU(6," Dades de contacte "),o.qZA(),o.YNc(7,N,2,0,"div",6),o.YNc(8,B,2,0,"div",6),o.qZA(),o.TgZ(9,"div",7),o.TgZ(10,"div",8),o._UZ(11,"app-data-viewer",9),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&p&&(o.xp6(7),o.Q6J("ngIf",C.IsContactDataOpened),o.xp6(1),o.Q6J("ngIf",!C.IsContactDataOpened),o.xp6(3),o.Q6J("dataToShow",C.contactData)("columnNumber",1))},directives:[R.a8,f.O5,w],styles:[".cardBackGround[_ngcontent-%COMP%]{background-color:#f68349}"]}),l})(),O=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-button-bar"]],decls:7,vars:0,consts:[[1,"container-flex","cardBackground","m-2"],["pageSelector",""],[1,"text-center"],["routerLink","training","routerLinkActive","ah-button-active","type","button",1,"btn","btn-light","m-1","button"],["routerLink","about","routerLinkActive","ah-button-active","type","button",1,"btn","btn-light","m-1","button"]],template:function(p,C){1&p&&(o.TgZ(0,"mat-card",0,1),o.TgZ(2,"div",2),o.TgZ(3,"button",3),o._uU(4,"Formaci\xf3"),o.qZA(),o.TgZ(5,"button",4),o._uU(6,"Sobre mi"),o.qZA(),o.qZA(),o.qZA())},directives:[R.a8,b.rH,b.Od],styles:[".ah-button-active[_ngcontent-%COMP%]{background-color:#993232;border-color:#993232;color:#fff}.button[_ngcontent-%COMP%]:hover{background-color:#7c1010;border-color:#7c1010;color:#fff}"]}),l})();const z=[{path:"",component:(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-layout"]],decls:12,vars:0,consts:[[1,"container-flex","backgroundPrimary"],[1,"row","pe-0","me-0"],[1,"col-12","col-sm-12","col-md-4","col-lg-3","pe-0"],[1,"col","p-0"],[1,"row","p-0","m-0"],[1,"cardBackground","m-2","mt-0","text-center"]],template:function(p,C){1&p&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._UZ(3,"app-header"),o._UZ(4,"app-contact"),o.qZA(),o.TgZ(5,"div",3),o._UZ(6,"app-button-bar"),o._UZ(7,"router-outlet"),o.qZA(),o.qZA(),o.TgZ(8,"div",4),o.TgZ(9,"div",3),o.TgZ(10,"mat-card",5),o._uU(11,"Web desenvolupada per Alejandro Fabra, 2022"),o.qZA(),o.qZA(),o.qZA(),o.qZA())},directives:[V,S,O,b.lC,R.a8],styles:[".cardBackGround[_ngcontent-%COMP%]{background-color:#f68349}"]}),l})(),children:[{path:"training",loadChildren:()=>m.e(604).then(m.bind(m,3604)).then(l=>l.TrainingModule)},{path:"projects",loadChildren:()=>m.e(305).then(m.bind(m,7305)).then(l=>l.ProjectsModule)},{path:"about",loadChildren:()=>m.e(735).then(m.bind(m,4735)).then(l=>l.AboutModule)},{path:"",redirectTo:"training",pathMatch:"full"}]}];let K=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[b.Bz.forChild(z)],b.Bz]}),l})(),W=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[f.ez,b.Bz,R.QW,K]]}),l})()},9744:(x,T,m)=>{m.d(T,{rt:()=>Ct,$s:()=>ft,qm:()=>Ee});var f=m(6019),b=m(3019),o=m(928);let ut=(()=>{class s{create(e){return"undefined"==typeof MutationObserver?null:new MutationObserver(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=b.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),ht=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=b.oAB({type:s}),s.\u0275inj=b.cJS({providers:[ut]}),s})();function J(s,t){return(s.getAttribute(t)||"").match(/\S+/g)||[]}const _e="cdk-describedby-message",ee="cdk-describedby-host";let ve=0,ft=(()=>{class s{constructor(e,r){this._platform=r,this._messageRegistry=new Map,this._messagesContainer=null,this._id=""+ve++,this._document=e}describe(e,r,a){if(!this._canBeDescribed(e,r))return;const u=re(r,a);"string"!=typeof r?(be(r),this._messageRegistry.set(u,{messageElement:r,referenceCount:0})):this._messageRegistry.has(u)||this._createMessageElement(r,a),this._isElementDescribedByMessage(e,u)||this._addMessageReference(e,u)}removeDescription(e,r,a){var D;if(!r||!this._isElementNode(e))return;const u=re(r,a);if(this._isElementDescribedByMessage(e,u)&&this._removeMessageReference(e,u),"string"==typeof r){const U=this._messageRegistry.get(u);U&&0===U.referenceCount&&this._deleteMessageElement(u)}0===(null==(D=this._messagesContainer)?void 0:D.childNodes.length)&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){var r;const e=this._document.querySelectorAll(`[${ee}="${this._id}"]`);for(let a=0;a<e.length;a++)this._removeCdkDescribedByReferenceIds(e[a]),e[a].removeAttribute(ee);null==(r=this._messagesContainer)||r.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,r){const a=this._document.createElement("div");be(a),a.textContent=e,r&&a.setAttribute("role",r),this._createMessagesContainer(),this._messagesContainer.appendChild(a),this._messageRegistry.set(re(e,r),{messageElement:a,referenceCount:0})}_deleteMessageElement(e){var r,a;null==(a=null==(r=this._messageRegistry.get(e))?void 0:r.messageElement)||a.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;const e="cdk-describedby-message-container",r=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let u=0;u<r.length;u++)r[u].remove();const a=this._document.createElement("div");a.style.visibility="hidden",a.classList.add(e),a.classList.add("cdk-visually-hidden"),this._platform&&!this._platform.isBrowser&&a.setAttribute("platform","server"),this._document.body.appendChild(a),this._messagesContainer=a}_removeCdkDescribedByReferenceIds(e){const r=J(e,"aria-describedby").filter(a=>0!=a.indexOf(_e));e.setAttribute("aria-describedby",r.join(" "))}_addMessageReference(e,r){const a=this._messageRegistry.get(r);(function(s,t,e){const r=J(s,t);r.some(a=>a.trim()==e.trim())||(r.push(e.trim()),s.setAttribute(t,r.join(" ")))})(e,"aria-describedby",a.messageElement.id),e.setAttribute(ee,this._id),a.referenceCount++}_removeMessageReference(e,r){const a=this._messageRegistry.get(r);a.referenceCount--,function(s,t,e){const a=J(s,t).filter(u=>u!=e.trim());a.length?s.setAttribute(t,a.join(" ")):s.removeAttribute(t)}(e,"aria-describedby",a.messageElement.id),e.removeAttribute(ee)}_isElementDescribedByMessage(e,r){const a=J(e,"aria-describedby"),u=this._messageRegistry.get(r),D=u&&u.messageElement.id;return!!D&&-1!=a.indexOf(D)}_canBeDescribed(e,r){if(!this._isElementNode(e))return!1;if(r&&"object"==typeof r)return!0;const a=null==r?"":`${r}`.trim(),u=e.getAttribute("aria-label");return!(!a||u&&u.trim()===a)}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}}return s.\u0275fac=function(e){return new(e||s)(b.LFG(f.K0),b.LFG(o.t4))},s.\u0275prov=b.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function re(s,t){return"string"==typeof s?`${t||""}/${s}`:s}function be(s){s.id||(s.id=`${_e}-${ve++}`)}const ye="cdk-high-contrast-black-on-white",Ce="cdk-high-contrast-white-on-black",se="cdk-high-contrast-active";let Ee=(()=>{class s{constructor(e,r){this._platform=e,this._document=r}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const r=this._document.defaultView||window,a=r&&r.getComputedStyle?r.getComputedStyle(e):null,u=(a&&a.backgroundColor||"").replace(/ /g,"");switch(e.remove(),u){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(se),e.remove(ye),e.remove(Ce),this._hasCheckedHighContrastMode=!0;const r=this.getHighContrastMode();1===r?(e.add(se),e.add(ye)):2===r&&(e.add(se),e.add(Ce))}}}return s.\u0275fac=function(e){return new(e||s)(b.LFG(o.t4),b.LFG(f.K0))},s.\u0275prov=b.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),Ct=(()=>{class s{constructor(e){e._applyBodyHighContrastModeCssClasses()}}return s.\u0275fac=function(e){return new(e||s)(b.LFG(Ee))},s.\u0275mod=b.oAB({type:s}),s.\u0275inj=b.cJS({imports:[[ht]]}),s})()},348:(x,T,m)=>{function f(v){return null!=v&&"false"!=`${v}`}m.d(T,{Ig:()=>f})},928:(x,T,m)=>{m.d(T,{t4:()=>R,Oy:()=>C,i$:()=>B});var f=m(3019),b=m(6019);let o;try{o="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(h){o=!1}let w,R=(()=>{class h{constructor(L){this._platformId=L,this.isBrowser=this._platformId?(0,b.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!o)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return h.\u0275fac=function(L){return new(L||h)(f.LFG(f.Lbi))},h.\u0275prov=f.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})();function B(h){return function(){if(null==w&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>w=!0}))}finally{w=w||!1}return w}()?h:!!h.capture}function C(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}},888:(x,T,m)=>{m.d(T,{a8:()=>C,QW:()=>L});var f=m(3019),b=m(543),o=m(2604);const R=["*",[["mat-card-footer"]]],V=["*","mat-card-footer"];let C=(()=>{class y{constructor(E){this._animationMode=E}}return y.\u0275fac=function(E){return new(E||y)(f.Y36(b.Qb,8))},y.\u0275cmp=f.Xpm({type:y,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(E,G){2&E&&f.ekj("_mat-animation-noopable","NoopAnimations"===G._animationMode)},exportAs:["matCard"],ngContentSelectors:V,decls:2,vars:0,template:function(E,G){1&E&&(f.F$t(R),f.Hsn(0),f.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),y})(),L=(()=>{class y{}return y.\u0275fac=function(E){return new(E||y)},y.\u0275mod=f.oAB({type:y}),y.\u0275inj=f.cJS({imports:[[o.BQ],o.BQ]}),y})()},2604:(x,T,m)=>{m.d(T,{BQ:()=>L,Id:()=>G});var f=m(3019),b=m(9744),o=m(6019);let N=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=f.oAB({type:d}),d.\u0275inj=f.cJS({}),d})();var S=m(928),O=m(348);const I=new f.OlP("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let L=(()=>{class d{constructor(i,c,g){this._sanityChecks=c,this._document=g,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return!(0,S.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[i])}}return d.\u0275fac=function(i){return new(i||d)(f.LFG(b.qm),f.LFG(I,8),f.LFG(o.K0))},d.\u0275mod=f.oAB({type:d}),d.\u0275inj=f.cJS({imports:[[N],N]}),d})();function G(d){return class extends d{constructor(...n){super(...n),this._disabled=!1}get disabled(){return this._disabled}set disabled(n){this._disabled=(0,O.Ig)(n)}}}}}]);
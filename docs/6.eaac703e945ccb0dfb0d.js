(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{n9ga:function(e,r,t){"use strict";t.r(r),t.d(r,"RankingModule",(function(){return h}));var a=t("ofXK"),n=t("tyNb"),o=t("vkgz"),s=t("3GuF"),i=t("cWRc"),u=t("fXoL"),l=t("bUwk"),c=t("cWTo");let p=(()=>{class e{constructor(e){this.httpService=e,this.columns=[{headerName:"Avatar",field:"avatar",width:100,suppressSizeToFit:!0,cellRenderer:"avatarImageComponent"},{headerName:"Nome",field:"name",width:300,suppressSizeToFit:!0},{headerName:"Usu\xe1rio",field:"username",width:300,suppressSizeToFit:!0},{headerName:"Perfil",field:"url",width:200,suppressSizeToFit:!0,cellRenderer:"userProfileUrlAnchor"}],this.rows=[],this.defaultColDef={resizable:!0},this.frameworkComponents={avatarImageComponent:s.a,userProfileUrlAnchor:i.a}}ngOnInit(){this.httpService.getTrandingDevelopers().pipe(Object(o.a)(e=>{this.rows=this.rowData(e)})).subscribe(e=>this.usuarios=e)}rowData(e){return e.map(e=>({avatar:e.avatar,name:e.name,username:e.username,url:e.url}))}}return e.\u0275fac=function(r){return new(r||e)(u.Kb(l.a))},e.\u0275cmp=u.Eb({type:e,selectors:[["app-ranking"]],decls:3,vars:4,consts:[[1,"ag-theme-alpine",2,"width","100%","height","500px",3,"defaultColDef","columnDefs","rowData","frameworkComponents"]],template:function(e,r){1&e&&(u.Pb(0,"h4"),u.yc(1,"Ranking dos usu\xe1rios mais ativos"),u.Ob(),u.Lb(2,"ag-grid-angular",0)),2&e&&(u.xb(2),u.hc("defaultColDef",r.defaultColDef)("columnDefs",r.columns)("rowData",r.rows)("frameworkComponents",r.frameworkComponents))},directives:[c.a],styles:[""]}),e})();const m=[{path:"",component:p}];let d=(()=>{class e{}return e.components=[p],e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(r){return new(r||e)},imports:[[n.d.forChild(m)],n.d]}),e})();var f=t("PCNd");let h=(()=>{class e{}return e.\u0275mod=u.Ib({type:e}),e.\u0275inj=u.Hb({factory:function(r){return new(r||e)},imports:[[a.c,d,f.a]]}),e})()}}]);
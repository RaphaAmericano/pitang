(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TjfF:function(e,t,r){"use strict";r.r(t),r.d(t,"ResultadoBuscaModule",(function(){return O}));var s=r("ofXK"),a=r("tyNb"),i=r("vkgz"),o=r("lJxs"),n=r("fXoL"),c=r("bUwk"),l=r("4J96"),u=r("qvM/"),d=r("cWTo");const b=["resultado-linha",""];let p=(()=>{class e{constructor(){this.columns=[{headerName:"Nome",field:"name",width:250},{headerName:"Id",field:"id"},{headerName:"Atualizado em:",field:"updated_at",cellRenderer:"dateCell"},{headerName:"Criado em:",field:"created_at",cellRenderer:"dateCell"},{headerName:"Linguagem",field:"language"}],this.rows=[],this.frameworkComponents={dateCell:u.a}}ngOnInit(){console.log(this.usuario)}ngOnChanges(e){null!=e.repositorios.currentValue&&this.generateRows(e.repositorios.currentValue)}generateRows(e){this.rows=e.map(e=>({name:e.name,id:e.id,updated_at:e.updated_at,created_at:e.created_at,language:e.language}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Eb({type:e,selectors:[["","resultado-linha",""]],inputs:{usuario:"usuario",repositorios:"repositorios"},features:[n.vb],attrs:b,decls:19,vars:7,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"media"],["alt","Generic placeholder image",1,"mr-3","img-responsive",3,"src"],[1,"media-body"],[1,"mt-0"],[1,"list-group"],[1,"list-group-item"],["target","_blank",3,"href"],[1,"card-title"],[1,"ag-theme-alpine",2,"width","100%","height","800px",3,"columnDefs","rowData","frameworkComponents"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.Pb(1,"h5",1),n.yc(2),n.Ob(),n.Pb(3,"div",2),n.Pb(4,"div",3),n.Lb(5,"img",4),n.Pb(6,"div",5),n.Pb(7,"h6",6),n.yc(8,"Dados"),n.Ob(),n.Pb(9,"ul",7),n.Pb(10,"li",8),n.Pb(11,"a",9),n.yc(12,"Perfil"),n.Ob(),n.Ob(),n.Pb(13,"li",8),n.yc(14),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(15,"div",2),n.Pb(16,"h5",10),n.yc(17,"Reposit\xf3rios"),n.Ob(),n.Lb(18,"ag-grid-angular",11),n.Ob(),n.Ob()),2&e&&(n.xb(2),n.zc(t.usuario.login),n.xb(3),n.ic("src",t.usuario.avatar_url,n.rc),n.xb(6),n.ic("href",t.usuario.html_url,n.rc),n.xb(3),n.Ac("ID: ",t.usuario.id,""),n.xb(4),n.hc("columnDefs",t.columns)("rowData",t.rows)("frameworkComponents",t.frameworkComponents))},directives:[d.a],styles:["img[_ngcontent-%COMP%]{width:128px}"]}),e})();function m(e,t){if(1&e&&n.Lb(0,"li",2),2&e){const e=t.$implicit;n.hc("usuario",e)("repositorios",e.repos)}}let h=(()=>{class e{constructor(e,t){this.httpService=e,this.stateService=t}ngOnInit(){this.stateService.getBuscaObservable().pipe(Object(i.a)(e=>this.usuarios$=this.httpService.getUserByName(e).pipe(Object(o.a)(e=>e.items),Object(o.a)(e=>e.map(e=>(this.httpService.getReposOfUser(e.login).subscribe(t=>e.repos=t),e))),Object(i.a)(e=>console.log(e))))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Kb(c.a),n.Kb(l.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["app-resultado-busca"]],decls:3,vars:3,consts:[[1,"list-group"],["resultado-linha","","class","list-group-item",3,"usuario","repositorios",4,"ngFor","ngForOf"],["resultado-linha","",1,"list-group-item",3,"usuario","repositorios"]],template:function(e,t){1&e&&(n.Pb(0,"ul",0),n.wc(1,m,1,2,"li",1),n.dc(2,"async"),n.Ob()),2&e&&(n.xb(1),n.hc("ngForOf",n.ec(2,1,t.usuarios$)))},directives:[s.k,p],pipes:[s.b],styles:[""]}),e})();const g=[{path:"",component:h}];let f=(()=>{class e{}return e.components=[h],e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)},imports:[[a.d.forChild(g)],a.d]}),e})();var w=r("PCNd");let O=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(t){return new(t||e)},providers:[s.e],imports:[[s.c,f,w.a]]}),e})()}}]);
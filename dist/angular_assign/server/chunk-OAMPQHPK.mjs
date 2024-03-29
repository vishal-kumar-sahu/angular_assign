import './polyfills.server.mjs';
import{A as k,B as H,C as x,D as U,E as N,F as T,G as L,H as O,K as P,O as R,P as B,S as v,T as D,a as c,b as d,c as f,d as E,e as b,f as l,g as h,h as w,i as g,j as n,k as o,l as m,m as I,n as S,o as M,p as a,q as p,r as j,s as F}from"./chunk-477WTKG7.mjs";var z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-user-card"]],inputs:{user:"user"},decls:8,vars:4,consts:[[1,"m-8","min-h-80","w-64","bg-[#20354b]","rounded-2xl","px-8","py-6","shadow-lg","cursor-pointer",2,"font-family","Montserrat",3,"routerLink"],[1,"mt-6","w-fit","mx-auto"],["src","../../../assets/image.png","alt","profile picture","srcset","",1,"rounded-full","w-28"],[1,"mt-8"],[1,"text-white","font-bold","text-2xl","tracking-wide"],[1,"text-emerald-400","font-semibold","mt-2.5"]],template:function(i,r){i&1&&(n(0,"section",0)(1,"div",1),m(2,"img",2),o(),n(3,"div",3)(4,"h2",4),a(5),o()(),n(6,"p",5),a(7),o()()),i&2&&(S("routerLink","/userProfile/",r.user.id,""),l(5),j(" ",r.user.name," "),l(2),p(r.user.username))},dependencies:[v]});let t=e;return t})();function Q(t,e){t&1&&(n(0,"div",3)(1,"div",4),E(),n(2,"svg",5),m(3,"path",6)(4,"path",7),o(),b(),n(5,"span",8),a(6,"Loading..."),o()()())}function W(t,e){if(t&1&&(n(0,"div"),m(1,"app-user-card",11),o()),t&2){let y=e.$implicit;l(),g("user",y)}}function X(t,e){if(t&1&&(n(0,"div",9),w(1,W,2,1,"div",10),o()),t&2){let y=I();l(),g("ngForOf",y.users)}}var A=(()=>{let e=class e{constructor(s){this.http=s,this.loading=!0,this.users=[]}ngOnInit(){this.fetchUsers()}fetchUsers(){this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(s=>{this.users=s,this.loading=!1})}};e.\u0275fac=function(i){return new(i||e)(h(x))},e.\u0275cmp=d({type:e,selectors:[["app-home"]],decls:4,vars:2,consts:[["elseBlock",""],[1,"flex","justify-items-center","content-center"],["class","mt-[25%] ml-[50%] ",4,"ngIf","ngIfElse"],[1,"mt-[25%]","ml-[50%]"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-8","h-8","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"],[1,"m-2","p-2","flex","flex-row","flex-wrap"],[4,"ngFor","ngForOf"],[3,"user"]],template:function(i,r){if(i&1&&(n(0,"div",1),w(1,Q,7,0,"div",2)(2,X,2,1,"ng-template",null,0,F),o()),i&2){let $=M(3);l(),g("ngIf",r.loading||r.users.length===0)("ngIfElse",$)}},dependencies:[k,H,z]});let t=e;return t})();var G=(()=>{let e=class e{constructor(s,i){this.route=s,this.http=i,this.id=1}ngOnInit(){let s=this.route.snapshot.paramMap.get("id");this.id=parseInt(s,10),this.fetchUserDetails()}fetchUserDetails(){this.http.get("https://jsonplaceholder.typicode.com/users/"+this.id).subscribe(s=>{this.userDetails=s},s=>{console.error("Error fetching user details:",s)})}};e.\u0275fac=function(i){return new(i||e)(h(R),h(x))},e.\u0275cmp=d({type:e,selectors:[["app-user-profile"]],decls:33,vars:6,consts:[[1,"flex","items-center","h-[90vh]","w-full","justify-center","bg-[#20354b]"],[1,"max-w-xs"],[1,"bg-white","shadow-xl","rounded-lg","py-3"],[1,"photo-wrapper","p-2"],["src","../../../assets/profile-user.png","alt","John Doe",1,"w-32","h-32","rounded-full","mx-auto"],[1,"p-2"],[1,"text-center","text-xl","text-gray-900","font-medium","leading-8"],[1,"text-center","text-gray-400","text-xs","font-semibold"],[1,"text-xs","my-3"],[1,"px-2","py-2","text-gray-500","font-semibold"],[1,"px-2","py-2"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"img",4),o(),n(5,"div",5)(6,"h3",6),a(7),o(),n(8,"div",7)(9,"p"),a(10),o()(),n(11,"table",8)(12,"tbody")(13,"tr")(14,"td",9),a(15,"Address"),o(),n(16,"td",10),a(17),o()(),n(18,"tr")(19,"td",9),a(20,"Phone"),o(),n(21,"td",10),a(22),o()(),n(23,"tr")(24,"td",9),a(25,"Email"),o(),n(26,"td",10),a(27),o()(),n(28,"tr")(29,"td",9),a(30,"Company"),o(),n(31,"td",10),a(32),o()()()()()()()()),i&2&&(l(7),p(r.userDetails?r.userDetails.name:"loading..."),l(3),p(r.userDetails?r.userDetails.username:"loading..."),l(7),p((r.userDetails?r.userDetails.address.street:"loading...")+", "+(r.userDetails?r.userDetails.address.suite:"loading...")+", "+(r.userDetails?r.userDetails.address.city:"loading...")+", "+(r.userDetails?r.userDetails.address.zipcode:"loading...")),l(5),p(r.userDetails?r.userDetails.phone:"loading..."),l(5),p(r.userDetails?r.userDetails.email:"loading..."),l(5),p(r.userDetails?r.userDetails.company.name:"loading..."))}});let t=e;return t})();var Y=[{path:"",component:A},{path:"userProfile/:id",component:G}],J=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=c({imports:[D.forRoot(Y),D]});let t=e;return t})();var C=(()=>{let e=class e{constructor(){this.title="angular_assign"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],decls:8,vars:0,consts:[[1,"w-screen","h-screen","overflow-x-hidden"],[1,"border-gray-200","bg-gray-50","dark:bg-gray-800","dark:border-gray-700"],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","p-4"],["routerLink","/",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],[1,"self-center","text-2xl","font-semibold","whitespace-nowrap","dark:text-white"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3)(4,"span",4),a(5,"User Data Base"),o()()()(),n(6,"div"),m(7,"router-outlet"),o()())},dependencies:[B,v]});let t=e;return t})();var V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e,bootstrap:[C]}),e.\u0275inj=c({providers:[O(),U(N())],imports:[L,J,T]});let t=e;return t})();var _=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e,bootstrap:[C]}),e.\u0275inj=c({imports:[V,P]});let t=e;return t})();export{_ as a};

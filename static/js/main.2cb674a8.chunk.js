(this["webpackJsonpmeu-primeiro-app"]=this["webpackJsonpmeu-primeiro-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(5),s=n.n(c),i=(n(4),n(0));function o(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{className:"titulo-principal",children:"Listagem de Usu\xe1rios para Pagamento"})})}var u=n(3),d=n.n(u),j=n(6),m=n(7),l=n(8),p=n(10),h=n(9),b=(n(17),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={dados:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.mocky.io/v2/5d531c4f2e0000620081ddce",e.next=3,fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({dados:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsx)("table",{className:"dados-listagem",children:this.state.dados.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{className:"thumbnail",src:e.img,alt:"Foto do usu\xe1rio"})},e.img),Object(i.jsxs)("td",{className:"nomedeusuario",children:["Nome do Usu\xe1rio: ",e.name,Object(i.jsxs)("span",{children:["ID: ",e.id," - Username: ",e.username]})]},e.name),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"botao-pagar",onClick:"fazerPagamento()",children:"Pagar"})})]})}))})}}]),n}(a.Component));s.a.render(Object(i.jsxs)(r.a.StrictMode,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(b,{})]}),document.getElementById("root"))},4:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.2cb674a8.chunk.js.map
(this.webpackJsonpeccomerce=this.webpackJsonpeccomerce||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(6),l=a.n(o),u=a(10),s=a(9),m=a(191),p=a(19),d=a(13),f=a(84),b=a(172),h=a(173),E=a(174),v=a(176),g=a(177),y=a(57),j=a(175),O=a(78),k=a.n(O),x=a(15),w=a(167),C=a(17),S=Object(w.a)((function(e){return{appBar:Object(x.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(x.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(x.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),_=function(e){var t=e.totalItems,a=Object(n.useState)(null),c=Object(s.a)(a,2),i=c[0],o=c[1],l=S(),u=Object(d.g)(),m=Boolean(i),O=r.a.createElement(f.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:function(){return o(null)}},r.a.createElement(b.a,null,r.a.createElement(h.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(E.a,{badgeContent:t,color:"secondary"},r.a.createElement(j.a,null))),r.a.createElement("p",null,"Cart")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{position:"fixed",className:l.appBar,color:"inherit"},r.a.createElement(g.a,null,r.a.createElement(y.a,{component:p.b,to:"/",variant:"h6",className:l.title,color:"inherit"},r.a.createElement("img",{src:k.a,alt:"commerce.js",height:"25px",className:l.image})," ","LaptopBecho.COM"),r.a.createElement("div",{className:l.grow}),"/"===u.pathname&&r.a.createElement("div",{className:l.button},r.a.createElement(h.a,{component:p.b,to:"/cart","aria-label":"Show cart items",color:"inherit"},r.a.createElement(E.a,{badgeContent:t,color:"secondary"},r.a.createElement(j.a,null)))))),O)},N=a(183),T=a(178),B=a(179),F=a(180),R=a(181),q=a(182),L=Object(w.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},typography:{margin:"0"},cardContent:{display:"flex",justifyContent:"space-between"}}})),I=function(e){var t,a=e.product,n=e.onAddToCart,c=L();return r.a.createElement(T.a,{className:c.root},r.a.createElement(B.a,{className:c.media,image:null===(t=a.image)||void 0===t?void 0:t.url,title:a.name}),r.a.createElement(F.a,null,r.a.createElement("div",{className:c.cardContent},r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.name),r.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.price.formatted_with_symbol)),r.a.createElement(y.a,{dangerouslySetInnerHTML:{__html:a.description},variant:"subtitle1",color:"textSecondary",component:"p"})),r.a.createElement(R.a,{disableSpacing:!0,className:c.cardActions},r.a.createElement(h.a,{"aria-label":"Add to Cart",onClick:function(){return n(a.id,1)}},r.a.createElement(q.a,null))))},A=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),z=function(e){var t=e.products,a=e.onAddToCart,n=A();return t.length?r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(N.a,{container:!0,justify:"center",spacing:4},t.map((function(e){return r.a.createElement(N.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(I,{product:e,onAddToCart:a}))})))):r.a.createElement("p",null,"Loading...")},D=a(184),H=a(185),P=Object(w.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),W=function(e){var t,a=e.item,n=e.onUpdateCartQty,c=e.onRemoveFromCart,i=P(),o=function(e,t){return n(e,t)};return r.a.createElement(T.a,{className:"cart-item"},r.a.createElement(B.a,{image:null===(t=a.image)||void 0===t?void 0:t.url,alt:a.name,className:i.media}),r.a.createElement(F.a,{className:i.cardContent},r.a.createElement(y.a,{variant:"h4"},a.name),r.a.createElement(y.a,{variant:"h5"},a.line_total.formatted_with_symbol)),r.a.createElement(R.a,{className:i.cardActions},r.a.createElement("div",{className:i.buttons},r.a.createElement(D.a,{type:"button",size:"small",onClick:function(){return o(a.id,a.quantity-1)}},"-"),r.a.createElement(y.a,null,"\xa0",a.quantity,"\xa0"),r.a.createElement(D.a,{type:"button",size:"small",onClick:function(){return o(a.id,a.quantity+1)}},"+")),r.a.createElement(D.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return e=a.id,c(e);var e}},"Remove")))},G=Object(w.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),M=function(e){var t=e.cart,a=e.onUpdateCartQty,n=e.onRemoveFromCart,c=e.onEmptyCart,i=G(),o=function(){return c()};if(!(null===t||void 0===t?void 0:t.line_items))return"Loading";return r.a.createElement(H.a,null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(y.a,{className:i.title,variant:"h3",gutterBottom:!0},"Your Shopping Cart"),t.line_items.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,spacing:3},t.line_items.map((function(e){return r.a.createElement(N.a,{item:!0,xs:12,sm:4,key:e.id},r.a.createElement(W,{item:e,onUpdateCartQty:a,onRemoveFromCart:n}))}))),r.a.createElement("div",{className:i.cardDetails},r.a.createElement(y.a,{variant:"h4"},"Subtotal: ",t.subtotal.formatted_with_symbol),r.a.createElement("div",null,r.a.createElement(D.a,{className:i.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:o},"Empty cart"),r.a.createElement(D.a,{className:i.checkoutButton,component:p.b,to:"/checkout",size:"large",type:"button",variant:"contained",color:"primary"},"Checkout")))):r.a.createElement(y.a,{variant:"subtitle1"},"You have no items in your shopping cart,",r.a.createElement(p.b,{className:i.link,to:"/"},"start adding some"),"!"))},Q=a(189),U=a(190),J=a(86),X=a(198),Y=a(192),K=a(194),Z=a(82),V=new(a.n(Z).a)("pk_477591c96f5a10504b5107d4eaec7777068010585b374",!0),$=a(61),ee=a(197),te=a(193),ae=a(44),ne=a(195);var re=function(e){var t=e.name,a=e.label,n=e.required,c=Object(ae.d)().control;return r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ae.a,{as:ne.a,name:t,control:c,label:a,fullWidth:!0,required:n,error:!1}))},ce=function(e){var t=e.checkoutToken,a=e.test,c=Object(n.useState)([]),i=Object(s.a)(c,2),o=i[0],m=i[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),h=f[0],E=f[1],v=Object(n.useState)([]),g=Object(s.a)(v,2),j=g[0],O=g[1],k=Object(n.useState)(""),x=Object(s.a)(k,2),w=x[0],C=x[1],S=Object(n.useState)([]),_=Object(s.a)(S,2),T=_[0],B=_[1],F=Object(n.useState)(""),R=Object(s.a)(F,2),q=R[0],L=R[1],I=Object(ae.c)(),A=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.services.localeListShippingCountries(t);case 2:a=e.sent,n=a.countries,m(n),E(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.services.localeListSubdivisions(t);case 2:a=e.sent,n=a.subdivisions,O(n),C(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,V.checkout.getShippingOptions(t,{country:a,region:n});case 3:r=e.sent,B(r),L(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){A(t.id)}),[]),Object(n.useEffect)((function(){h&&z(h)}),[h]),Object(n.useEffect)((function(){w&&H(t.id,h,w)}),[w]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Shipping address"),r.a.createElement(ae.b,I,r.a.createElement("form",{onSubmit:I.handleSubmit((function(e){return a(Object($.a)(Object($.a)({},e),{},{shippingCountry:h,shippingSubdivision:w,shippingOption:q}))}))},r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(re,{required:!0,name:"firstName",label:"First name"}),r.a.createElement(re,{required:!0,name:"lastName",label:"Last name"}),r.a.createElement(re,{required:!0,name:"address1",label:"Address line 1"}),r.a.createElement(re,{required:!0,name:"email",label:"Email"}),r.a.createElement(re,{required:!0,name:"city",label:"City"}),r.a.createElement(re,{required:!0,name:"zip",label:"Zip / Postal code"}),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Country"),r.a.createElement(te.a,{value:h,fullWidth:!0,onChange:function(e){return E(e.target.value)}},Object.entries(o).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Subdivision"),r.a.createElement(te.a,{value:w,fullWidth:!0,onChange:function(e){return C(e.target.value)}},Object.entries(j).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],label:t[1]}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(N.a,{item:!0,xs:12,sm:6},r.a.createElement(ee.a,null,"Shipping Options"),r.a.createElement(te.a,{value:q,fullWidth:!0,onChange:function(e){return L(e.target.value)}},T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})).map((function(e){return r.a.createElement(b.a,{key:e.id,value:e.id},e.label)}))))),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(D.a,{component:p.b,variant:"outlined",to:"/cart"},"Back to Cart"),r.a.createElement(D.a,{type:"submit",variant:"contained",color:"primary"},"Next")))))},ie=a(49),oe=a(83),le=a(171),ue=a(136),se=a(188),me=function(e){var t,a,n,c=e.checkoutToken;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h6",gutterBottom:!0},"Order summary"),r.a.createElement(le.a,{disablePadding:!0},null===c||void 0===c||null===(t=c.live)||void 0===t?void 0:t.line_items.map((function(e){return r.a.createElement(ue.a,{style:{padding:"10px 0"},key:e.name},r.a.createElement(se.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),r.a.createElement(y.a,{variant:"body2"},e.line_total.formatted_with_symbol))})),r.a.createElement(ue.a,{style:{padding:"10px 0"}},r.a.createElement(se.a,{primary:"Total"}),r.a.createElement(y.a,{variant:"subtitle1",style:{fontWeight:700}},null===c||void 0===c||null===(a=c.live)||void 0===a||null===(n=a.subtotal)||void 0===n?void 0:n.formatted_with_symbol))))},pe=Object(oe.a)("pk_test_51LtwHfSEGXnHnpyNHEcpAJKbskFkjxe0ilwlqL33qH1KOOPhbcm1kqfi19oW8Y3X3aRDMFrOtoIRlxbo9HTH7GRH00mRF4ZUXx",!0),de=function(e){var t=e.checkoutToken,a=e.nextStep,n=e.backStep,c=e.shippingData,i=e.onCaptureCheckout,o=(e.timeout,function(){var e=Object(u.a)(l.a.mark((function e(n,r,o){var u,s,m,p,d,f;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o&&r){e.next=3;break}return e.abrupt("return");case 3:return u=r.getElement(ie.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:u});case 6:s=e.sent,m=s.error,p=s.paymentMethod,m?console.log("[error]",m):(f={line_items:null===t||void 0===t||null===(d=t.live)||void 0===d?void 0:d.line_items,customer:{firstname:c.firstName,lastname:c.lastName,email:c.email},shipping:{name:"International",street:c.address1,town_city:c.city,county_state:c.shippingSubdivision,postal_zip_code:c.zip,country:c.shippingCountry},fulfillment:{shipping_method:c.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},i(t.id,f),a());case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{checkoutToken:t}),r.a.createElement(Q.a,null),r.a.createElement(y.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"}},"Payment method"),r.a.createElement(ie.Elements,{stripe:pe},r.a.createElement(ie.ElementsConsumer,null,(function(e){var a,c=e.elements,i=e.stripe;return r.a.createElement("form",{onSubmit:function(e){return o(e,c,i)}},r.a.createElement(ie.CardElement,null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(D.a,{variant:"outlined",onClick:n},"Back"),r.a.createElement(D.a,{type:"submit",variant:"contained",disabled:!i,color:"primary"},"Pay ",null===t||void 0===t||null===(a=t.live)||void 0===a?void 0:a.subtotal.formatted_with_symbol)))}))))},fe=Object(w.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(x.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(x.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(x.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),be=["Shipping address","Payment details"],he=function(e){var t=e.cart,a=e.onCaptureCheckout,c=e.order,i=e.error,o=Object(n.useState)(null),f=Object(s.a)(o,2),b=f[0],h=f[1],E=Object(n.useState)(0),v=Object(s.a)(E,2),g=v[0],j=v[1],O=Object(n.useState)({}),k=Object(s.a)(O,2),x=k[0],w=k[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),_=S[0],N=S[1],T=fe(),B=Object(d.f)(),F=function(){return j((function(e){return e+1}))},R=function(){return j((function(e){return e-1}))};Object(n.useEffect)((function(){t.id&&function(){var e=Object(u.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.checkout.generateToken(t.id,{type:"cart"});case 3:a=e.sent,h(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),g!==be.length&&B.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);var q=function(e){w(e),F()},L=function(){setTimeout((function(){N(!0)}),3e3)},I=function(){return c.customer?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5"},"Thank you for your purchase, ",c.customer.firstname," ",c.customer.lastname,"!"),r.a.createElement(Q.a,{className:T.divider}),r.a.createElement(y.a,{variant:"subtitle2"},"Order ref: ",c.customer_reference)),r.a.createElement("br",null),r.a.createElement(D.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home")):_?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h5"},"Thank you for your purchase"),r.a.createElement(Q.a,{className:T.divider})),r.a.createElement("br",null),r.a.createElement(D.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home")):r.a.createElement("div",{className:T.spinner},r.a.createElement(U.a,null))};i&&(I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{variant:"h5"},"Error: ",i),r.a.createElement("br",null),r.a.createElement(D.a,{component:p.b,variant:"outlined",type:"button",to:"/"},"Back to home"))});var A=function(){return 0===g?r.a.createElement(ce,{checkoutToken:b,nextStep:F,setShippingData:w,test:q}):r.a.createElement(de,{checkoutToken:b,nextStep:F,backStep:R,shippingData:x,onCaptureCheckout:a,timeout:L})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement("div",{className:T.toolbar}),r.a.createElement("main",{className:T.layout},r.a.createElement(J.a,{className:T.paper},r.a.createElement(y.a,{variant:"h4",align:"center"},"Checkout"),r.a.createElement(X.a,{activeStep:g,className:T.stepper},be.map((function(e){return r.a.createElement(Y.a,{key:e},r.a.createElement(K.a,null,e))}))),g===be.length?r.a.createElement(I,null):b&&r.a.createElement(A,null))))},Ee=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),o=Object(s.a)(i,2),f=o[0],b=o[1],h=Object(n.useState)({}),E=Object(s.a)(h,2),v=E[0],g=E[1],y=Object(n.useState)({}),j=Object(s.a)(y,2),O=j[0],k=j[1],x=Object(n.useState)(""),w=Object(s.a)(x,2),C=w[0],S=w[1],N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.products.list();case 2:t=e.sent,a=t.data,b(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=g,e.next=3,V.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.cart.add(t,a);case 2:n=e.sent,g(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.cart.update(t,{quantity:a});case 2:n=e.sent,g(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.cart.remove(t);case 2:a=e.sent,g(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.cart.empty();case 2:t=e.sent,g(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.cart.refresh();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.checkout.capture(t,a);case 3:n=e.sent,k(n),L(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(),T()}),[]);return r.a.createElement(p.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(m.a,null),r.a.createElement(_,{totalItems:null===v||void 0===v?void 0:v.total_items,handleDrawerToggle:function(){return c(!a)}}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(z,{products:f,onAddToCart:B,handleUpdateCartQty:!0})),r.a.createElement(d.a,{exact:!0,path:"/cart"},r.a.createElement(M,{cart:v,onUpdateCartQty:F,onRemoveFromCart:R,onEmptyCart:q})),r.a.createElement(d.a,{path:"/checkout",exact:!0},r.a.createElement(he,{cart:v,order:O,onCaptureCheckout:I,error:C})))))};i.a.render(r.a.createElement(Ee,null),document.getElementById("root"))},78:function(e,t,a){e.exports=a.p+"static/media/commerce.ad5b8e88.png"},94:function(e,t,a){e.exports=a(135)}},[[94,1,2]]]);
//# sourceMappingURL=main.457bf22c.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),l=a(5),c=a(54),s=a(55),m=a(56),u=(a(34),a(53)),d=Object(l.b)(function(e){var t=e.shoppingCart,a=t.totalItems;return{total:t.orderTotal,numItems:a}},{})(function(e){var t=e.numItems,a=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(u.a,{className:"logo",to:"/#"},"OLD Game"),r.a.createElement(u.a,{className:"shopping-cart",to:"/cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),"($",a,") ",r.a.createElement("br",null),t," items"))}),h=a(6),p=a(7),f=a(9),E=a(8),g=a(10),y=(a(36),function(e){var t=e.item,a=e.onAddedToCart,n=t.title,i=t.author,o=t.price,l=t.img,c=t.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:l,alt:"game"}),r.a.createElement("div",{className:"item-details"},r.a.createElement(u.a,{to:"/itemdetails/".concat(c),className:"item-title"},n),r.a.createElement("div",{className:"item-author"},i),r.a.createElement("div",{className:"item-price"},"$",o),r.a.createElement("button",{onClick:a,className:"btn btn-warning add-to-cart"},"Add to cart")))}),b=r.a.createContext(),v=b.Provider,C=b.Consumer,T=function(){return function(e){return function(t){return r.a.createElement(C,null,function(a){return r.a.createElement(e,Object.assign({},t,{storeService:a}))})}}},I=function(e){return{type:"ITEM_ADDED_TO_CART",payload:e}},S=function(e,t){return function(){t({type:"FETCH_ITEM_REQUEST"}),e.getItems().then(function(e){return t({type:"FETCH_ITEM_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_ITEM_FAILURE",payload:e})})}},_=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},w=(a(38),function(){return r.a.createElement("div",null,"404 not found!")}),O=(a(40),function(){return r.a.createElement("div",null,"loading...")}),j=(a(42),function(e){var t=e.items,a=e.onAddedToCart;return r.a.createElement("div",{className:"item-list"},t.map(function(e){return r.a.createElement("div",{key:e.id,className:"show-item"},r.a.createElement(y,{onAddedToCart:function(){return a(e.id)},item:e}))}))}),A=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.loading,n=e.error,i=e.onAddedToCart;return a?r.a.createElement(O,null):n?r.a.createElement(w,null):r.a.createElement(j,{onAddedToCart:i,items:t})}}]),t}(n.Component),k=_(T(),Object(l.b)(function(e){var t=e.itemList;return{items:t.items,loading:t.loading,error:t.error}},function(e,t){var a=t.storeService;return{fetchItems:S(a,e),onAddedToCart:function(t){return e(I(t))}}}))(A),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))},N=(a(44),{onIncrease:I,onDecraese:function(e){return{type:"ITEM_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_ITEMS_REMOVED_FROM_CART",payload:e}}}),R=Object(l.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},N)(function(e){var t=e.items,a=e.total,n=e.onIncrease,i=e.onDecraese,o=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map(function(e,t){var a=e.id,l=e.title,c=e.count,s=e.total;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t+1),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,"$"+s),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return o(a)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash"})),r.a.createElement("button",{onClick:function(){return n(a)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus"})),r.a.createElement("button",{onClick:function(){return i(a)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus"}))))}))),r.a.createElement("div",{className:"total"},"Total: ","$"+a))}),F=function(){return r.a.createElement(R,null)},M=a(24),L=(a(46),function(e){var t=e.item,a=e.field,n=e.label,i=e.itemTag;return r.a.createElement(i,null,"".concat(n," ").concat(t[a]))}),P=function(e){var t=e.items,a=e.itemId,n=e.onAddedToCart,i=Object(M.a)(e,["items","itemId","onAddedToCart"]),o=t[a-1];console.log(o);var l=o.title,c=o.img;return r.a.createElement("div",{className:"preview-item"},r.a.createElement("img",{src:c,alt:"game",className:"item-details-img"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("h4",null,l),r.a.Children.map(i.children,function(e){return r.a.cloneElement(e,{item:o})}),r.a.createElement("button",{onClick:function(){return n(o.id)},className:"btn btn-warning add-to-cart"},"Add to cart")))},x=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.itemId,n=e.loading,i=e.error,o=e.onAddedToCart;return n?r.a.createElement(O,null):i?r.a.createElement(w,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{onAddedToCart:o,itemId:a,items:t},r.a.createElement(L,{itemTag:"span",label:"Summary: ",field:"summary"}),r.a.createElement(L,{itemTag:"span",label:"Author: ",field:"author"}),r.a.createElement("br",null),r.a.createElement(L,{itemTag:"span",label:"Price: $",field:"price"})))}}]),t}(r.a.Component),H=_(T(),Object(l.b)(function(e){var t=e.itemList;return{items:t.items,loading:t.loading,error:t.error}},function(e,t){var a=t.storeService;return{fetchBooks:S(a,e),onAddedToCart:function(t){return e(I(t))}}}))(x),G=(a(48),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(d,null),r.a.createElement(s.a,null,r.a.createElement(m.a,{path:"/itemdetails/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(H,{itemId:t})},exact:!0}),r.a.createElement(m.a,{path:"/",component:D,exact:!0}),r.a.createElement(m.a,{path:"/cart",component:F})))}),V=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(w,null):this.props.children}}]),t}(n.Component),B=function(){function e(){Object(h.a)(this,e),this.data=[{id:1,title:"Crash Bandicoot",author:"Naughty Dog",price:32,summary:"Crash Bandicoot is a franchise of platform video games. The series was created by Andy Gavin and Jason Rubin during their tenure at Naughty Dog for Universal Interactive Studios and Sony Computer Entertainment; the series was originally exclusive to the PlayStation family of video game consoles. The series has appeared on multiple platforms and gone through various developers and spans numerous genres.",img:"https://upload.wikimedia.org/wikipedia/ru/6/68/Crash_Bandicoot_front_NTSC_cover.png"},{id:2,title:"Spyro the Dragon",author:"\tInsomniac Games",price:45,summary:"Spyro the Dragon is a platform game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation on September 10, 1998. The first game in the Spyro series, it stars the title character, a young purple dragon named Spyro, and his dragonfly friend, Sparx, who must journey across the Dragon Kingdom in order to defeat Gnasty Gnorc (pronounced nas-tee nork), who has overtaken the 5 dragon Homeworlds by trapping the other dragons in crystal and turning their hoard of gems into an army of minions for his bidding.",img:"https://upload.wikimedia.org/wikipedia/ru/7/76/250px-SpyrotheDragon.jpg"},{id:3,title:"Final Fantasy VII",author:"Square Co Ltd.",price:35,summary:"Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and became the first in the main series to see a PAL release.",img:"https://upload.wikimedia.org/wikipedia/ru/3/3d/Final_Fantasy_VII_NA_cover.jpg"},{id:4,title:"Tarzan",author:"Disney Interactive",price:40,summary:"Disneys Tarzan (also known as Tarzan Action Game) is an action platformer video game developed by Eurocom and published by Sony Computer Entertainment for the PlayStation in 1999 based on the Disney animated film Tarzan. Konami published the game for its Japanese release. It was also released for PC systems in 1999 and for the Nintendo 64 in 2000. A variant of the game for the Game Boy Color was developed by Digital Eclipse and released in 1999.",img:"https://upload.wikimedia.org/wikipedia/en/9/9f/Tarzan_PlayStation.jpg"},{id:5,title:"Resident Evil 3",author:"Capcom",price:42,summary:"Resident Evil 3: Nemesis is a survival horror game developed by Capcom and released for the PlayStation in 1999. It is the third installment in the Resident Evil series and takes place around the events of Resident Evil 2. The story follows Jill Valentine and her efforts to escape from a city infected with a biological weapon. Choices through the game affect the story and ending. The game uses the same engine as its predecessors and features 3D models over pre-rendered backgrounds with fixed camera angles.",img:"https://upload.wikimedia.org/wikipedia/ru/e/ed/Resident_Evil_3_cover.jpg"},{id:6,title:"Sonic CD",author:"SEGA",price:39,summary:"Sonic the Hedgehog CD, commonly referred to as Sonic CD, is a 1993 platform game for the Sega CD. The story follows Sonic the Hedgehog as he attempts to save an extraterrestrial body, Little Planet, from Doctor Robotnik. As a Sonic the Hedgehog series platformer, Sonic runs and jumps through several themed levels while collecting rings and defeating robots.",img:"https://i.pinimg.com/originals/b3/dc/fe/b3dcfed303eb7277cd1a76604347be7d.jpg"}]}return Object(p.a)(e,[{key:"getItems",value:function(){var e=this;return new Promise(function(t){setTimeout(function(){t(e.data)},700)})}}]),e}(),U=a(12),J=function(e,t){if(void 0===e)return{items:[],loading:!0,error:null};switch(t.type){case"FETCH_ITEM_REQUEST":return{items:[],loading:!0,error:null};case"FETCH_ITEM_SUCCESS":return{items:t.payload,loading:!1,error:null};case"FETCH_ITEM_FAILURE":return{items:[],loading:!1,error:t.payload};default:return e.itemList}},z=a(11),$=function(e,t,a){return 0===t.count?[].concat(Object(z.a)(e.slice(0,a)),Object(z.a)(e.slice(a+1))):-1===a?[].concat(Object(z.a)(e),[t]):[].concat(Object(z.a)(e.slice(0,a)),[t],Object(z.a)(e.slice(a+1)))},q=function(e,t,a){var n=e.itemList.items,r=e.shoppingCart.cartItems,i=n.find(function(e){return e.id===t}),o=r.findIndex(function(e){return e.id===t}),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=t.id,r=void 0===n?e.id:n,i=t.count,o=void 0===i?0:i,l=t.title,c=void 0===l?e.title:l,s=t.total;return{id:r,title:c,count:o+a,total:(void 0===s?0:s)+a*e.price}}(i,r[o],a);return{orderTotal:e.shoppingCart.orderTotal+i.price*a,totalItems:e.shoppingCart.totalItems+a,cartItems:$(r,l,o)}},K=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0,totalItems:0};switch(t.type){case"ITEM_ADDED_TO_CART":return q(e,t.payload,1);case"ITEM_REMOVED_FROM_CART":return q(e,t.payload,-1);case"ALL_ITEMS_REMOVED_FROM_CART":var a=e.shoppingCart.cartItems.find(function(e){return e.id===t.payload});return q(e,t.payload,-a.count);default:return e.shoppingCart}},Q=function(e,t){return{itemList:J(e,t),shoppingCart:K(e,t)}},Y=Object(U.b)(Q),W=new B;o.a.render(r.a.createElement(l.a,{store:Y},r.a.createElement(V,null,r.a.createElement(v,{value:W},r.a.createElement(c.a,null,r.a.createElement(G,null))))),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.efd2e0a8.chunk.js.map
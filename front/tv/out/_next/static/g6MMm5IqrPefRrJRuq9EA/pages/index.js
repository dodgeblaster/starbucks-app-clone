(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"7gZR":function(e,n,t){"use strict";var r=t("dMq0"),o=t("q1tI"),a=t("OrY9");var i=Object(o.createContext)(null);var c=t("dQau"),l=t("YO3V"),u=t.n(l);function s(e){if(!u()(e))return e;var n=Object.keys(e).sort().reduce(function(n,t){return n[t]=s(e[t]),n},{});return JSON.stringify(n)}var f=new WeakMap;function p(e){var n=f.get(e);return null==n&&(n=new Map,f.set(e,n)),n}function d(e){var n=e.query,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["query"]);return Object(c.a)(n)+"@@"+s(t)}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(e,n){var t=void 0===n?{}:n,c=t.ssr,l=void 0===c||c,u=t.skip,f=void 0!==u&&u,v=t.suspend,g=void 0!==v&&v,b=t.pollInterval,m=t.notifyOnNetworkStatusChange,y=void 0!==m&&m,x=t.client,w=t.context,O=t.metadata,k=t.variables,j=t.fetchPolicy,E=t.errorPolicy,T=t.fetchResults,S=Object(a.b)(x),_=Object(o.useContext)(i),P=l&&_,N=f||null!=_&&!l,C=!P||"network-only"!==j&&"cache-and-network"!==j?j:"cache-first",F=Object(o.useMemo)(function(){return n={context:w,errorPolicy:E,fetchPolicy:C,fetchResults:T,metadata:O,notifyOnNetworkStatusChange:y,pollInterval:b,query:e,variables:k},Object.keys(n).reduce(function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e},{});var n},[e,b,y,w&&s(w),O&&s(O),k&&s(k),C,E,T]),M=Object(o.useMemo)(function(){return function(e,n){var t=p(e),r=d(n),o=t.get(r);return null==o&&(o=e.watchQuery(n),t.set(r,o)),o}(S,F)},[S,F]),q=Object(o.useState)(0),R=q[0],A=q[1],J=Object(o.useMemo)(function(){var e={fetchMore:M.fetchMore.bind(M),refetch:M.refetch.bind(M),startPolling:M.startPolling.bind(M),stopPolling:M.stopPolling.bind(M),updateQuery:M.updateQuery.bind(M)},n=M.currentResult(),t=n.data;return(n.error||n.errors)&&(t=h({},n.data,(M.getLastResult()||{}).data)),h({},e,N?{data:void 0,error:void 0,loading:!1,networkStatus:void 0}:{data:t,error:n.errors&&n.errors.length>0?new r.ApolloError({graphQLErrors:n.errors}):n.error,errors:n.errors,loading:n.loading,networkStatus:g?void 0:n.networkStatus,partial:n.partial})},[N,R,M]);if(Object(o.useEffect)(function(){if(!N){var e=function(){(function(){A(function(e){return e+1})})()},n=M.subscribe(e,e);return function(e,n){var t=p(e),r=d(n);t.delete(r)}(S,F),function(){n.unsubscribe()}}},[N,M]),function(e,n){if(e&&n&&"cache-first"!==n)throw new Error("Fetch policy "+n+" is not supported without 'suspend: false'")}(g,C),J.partial){if(g)throw M.result();P&&_.register(M.result())}return J}t.d(n,"a",function(){return v})},"9Jkg":function(e,n,t){e.exports=t("oh+g")},AP2z:function(e,n,t){var r=t("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var n=a.call(e,c),t=e[c];try{e[c]=void 0;var r=!0}catch(l){}var o=i.call(e);return r&&(n?e[c]=t:delete e[c]),o}},ExA7:function(e,n){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,n){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},Kz5y:function(e,n,t){var r=t("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},LcsW:function(e,n,t){var r=t("kekF")(Object.getPrototypeOf,Object);e.exports=r},NykK:function(e,n,t){var r=t("nmnc"),o=t("AP2z"),a=t("KfNM"),i="[object Null]",c="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?c:i:l&&l in Object(e)?o(e):a(e)}},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("rt45"),o=t("q1tI"),a=t.n(o),i=t("vOnD"),c=t("YFqc"),l=t.n(c),u=t("lTCR"),s=t.n(u),f=t("7gZR");function p(){var e=Object(r.a)(["\n    z-index: 0;\n    background: #e5f3ef;\n    height: 600px;\n    width: 600px;\n    border-radius: 300px;\n    position: absolute;\n    top: -200px;\n    left: 400px;\n    background-image: url(",");\n    background-size: cover;\n    opacity: 0.1;\n    @media (max-width: 800px) {\n        display: none;\n    }\n"]);return p=function(){return e},e}function d(){var e=Object(r.a)(["\n    max-width: 800px;\n    width: 90%;\n    position: relative;\n"]);return d=function(){return e},e}function h(){var e=Object(r.a)(["\n    z-index: -2;\n    padding: 40px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100vh;\n    background: linear-gradient(#018861, #006546);\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n"]);return h=function(){return e},e}function v(){var e=Object(r.a)(["\n    height: 200px;\n    flex: 0 0 360px;\n    margin: 5px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n\n    transition: 0.2s;\n    &:hover {\n        transform: scale(1.02);\n    }\n"]);return v=function(){return e},e}function g(){var e=Object(r.a)(["\n    display: flex;\n    margin-top: 40px;\n    a {\n        color: white;\n        text-align: center;\n        display: inline-block;\n    }\n\n    p {\n        margin-top: 10px;\n    }\n\n    @media (max-width: 800px) {\n        flex-direction: column;\n    }\n"]);return g=function(){return e},e}function b(){var e=Object(r.a)(["\n    color: white;\n    line-height: 1.6;\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n\n    a {\n        background: black;\n        padding: 5px 25px;\n        border-radius: 5px;\n        color: white;\n        font-size: 14px;\n        transition: 0.1s;\n        &:hover {\n            background: #016841;\n        }\n    }\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\n    color: white;\n    font-size: 35px;\n    font-weight: 900;\n\n    letter-spacing: -1;\n    line-height: 0.9;\n    margin-bottom: 40px;\n\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n"]);return m=function(){return e},e}function y(){var e=Object(r.a)(["\n    query allProducts {\n        allFeaturedProducts {\n            id\n            name\n            price {\n                tall\n                grande\n                venti\n            }\n            imgUrl\n            type\n            description\n        }\n\n        allFeaturedTweets {\n            about\n            hashtags\n            content\n        }\n\n        allGeneralTweets {\n            hashtags\n            content\n        }\n    }\n"]);return y=function(){return e},e}var x=s()(y()),w={};w.Title=i.a.h1(m()),w.Text=i.a.p(b()),w.TvOptionContainer=i.a.div(g()),w.TvOption=i.a.img(v()),w.Screen=i.a.div(h()),w.Wrapper=i.a.div(d());w.BigGreenCircle=i.a.div(p(),"https://www.starbucks.ca/static/images/global/logo.svg"),n.default=function(){Object(f.a)(x);return a.a.createElement(w.Screen,null,a.a.createElement(w.Wrapper,null,a.a.createElement(w.BigGreenCircle,null)),a.a.createElement(w.Wrapper,null,a.a.createElement(w.Title,null,"Starbucks TV Screens"),a.a.createElement(w.Text,null,"Hello! This is an example project demonstrating how to use"," ",a.a.createElement("strong",null,"React JS"),", ",a.a.createElement("strong",null,"GraphQL"),", and the"," ",a.a.createElement("strong",null,"Serverless Framework")," together to build multiple apps for a single client. This page is a list of TV screens a coffee shop like starbucks might want at the front of their stores. They are sized for a 16:9 ratio. The first screen is for highlighted products, and the second is a coffee menu."),a.a.createElement(w.Text,null,"Eventually this project will have seperate frontend clients for store owners, customers, baristas, and shipping. They will all connect to one GraphQL BFF (backend for frontends), which will talk to serverless microservices."),a.a.createElement(w.Text,null,"Click on the tv screens below to see them. All the code is on"," ",a.a.createElement(l.a,{href:"https://github.com/dodgeblaster/starbucks-app-clone"},a.a.createElement("a",null,"Github"))),a.a.createElement(w.TvOptionContainer,null,a.a.createElement(l.a,{href:"/highlighted"},a.a.createElement("a",null,a.a.createElement(w.TvOption,{src:"/static/highlighted.png"}),a.a.createElement("p",null,"Highlighted TV"))),a.a.createElement(l.a,{href:"/coffee"},a.a.createElement("a",null,a.a.createElement(w.TvOption,{src:"/static/coffee-menu.png"}),a.a.createElement("p",null,"Coffee Menu TV"))))))}},WFqU:function(e,n,t){(function(n){var t="object"==typeof n&&n&&n.Object===Object&&n;e.exports=t}).call(this,t("yLpj"))},YFqc:function(e,n,t){e.exports=t("cTJO")},YO3V:function(e,n,t){var r=t("NykK"),o=t("LcsW"),a=t("ExA7"),i="[object Object]",c=Function.prototype,l=Object.prototype,u=c.toString,s=l.hasOwnProperty,f=u.call(Object);e.exports=function(e){if(!a(e)||r(e)!=i)return!1;var n=o(e);if(null===n)return!0;var t=s.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&u.call(t)==f}},cTJO:function(e,n,t){"use strict";var r=t("KI45"),o=r(t("9Jkg")),a=r(t("/HRN")),i=r(t("WaGi")),c=r(t("ZDA2")),l=r(t("/+P4")),u=r(t("N9n2")),s=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var p=t("CxY0"),d=s(t("q1tI")),h=(f(t("lgD3")),s(t("nOHt"))),v=t("Bu4q");function g(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var b=function(e){function n(){var e,t,r,o,i;return(0,a.default)(this,n),(e=(0,c.default)(this,(0,l.default)(n).apply(this,arguments))).formatUrls=(t=function(e,n){return{href:g(e),as:g(n)}},r=null,o=null,i=null,function(e,n){if(e===r&&n===o)return i;var a=t(e,n);return r=e,o=n,i=a,a}),e.linkClicked=function(n){var t=n.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,c=a.as;if(function(e){var n=p.parse(e,!1,!0),t=p.parse(v.getLocationOrigin(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var l=window.location.pathname;i=p.resolve(l,i),c=c?p.resolve(l,c):i,n.preventDefault();var u=e.props.scroll;null==u&&(u=c.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(n){e.props.onError&&e.props.onError(n)})}}},e}return(0,u.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=p.resolve(e,n);h.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,o=t.as;"string"==typeof n&&(n=d.default.createElement("a",null,n));var a=d.Children.only(n),i={onClick:function(n){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(a,i)}}]),n}(d.Component);n.default=b},kekF:function(e,n){e.exports=function(e,n){return function(t){return e(n(t))}}},nmnc:function(e,n,t){var r=t("Kz5y").Symbol;e.exports=r},"oh+g":function(e,n,t){var r=t("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);
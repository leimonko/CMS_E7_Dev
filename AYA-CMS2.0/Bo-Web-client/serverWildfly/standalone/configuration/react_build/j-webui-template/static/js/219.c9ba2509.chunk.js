(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[219,153,154,155,156,157,169],{171:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s(2),i=s(5),n=s(4),c=s(0),l=s.n(c),o=s(6),p=function(e){Object(i.a)(s,e);var t=Object(n.a)(s);function s(e){var a;Object(r.a)(this,s);var i={paddingLeft:"8px"};return(a=t.call(this,e)).props.icon||(i={}),a.state={style:i,style_icon:{fontSize:"27.98px",float:"left"}},a}return Object(a.a)(s,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:" app-item-card",style:{userSelect:"none"},onClick:function(t){void 0!==e.props.appItem_Select&&e.props.appItem_Select(e.props.dataItem,t)}},l.a.createElement("div",{className:"app-item "},l.a.createElement("div",{className:"malibu-uApp-img "},this.props.val?l.a.createElement("div",{className:"app-img"},l.a.createElement(o.default,{val:this.props.val,class:"",style:{width:"70px",height:"70px"},title:this.props.title})):null),l.a.createElement("div",{className:"malibu-uApp-title "},this.props.title?l.a.createElement("span",{className:"dHeader-span",style:this.state.style},l.a.createElement("div",{style:this.state.style_title},this.props.title)):null)))}}]),s}(c.Component);t.default=p},334:function(e,t,s){"use strict";function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}s.d(t,"a",(function(){return i}))},6:function(e,t,s){"use strict";s.r(t);var r=s(334),a=s(1),i=s(2),n=s(5),c=s(4),l=s(0),o=s.n(l),p=s(3),u=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(e){var i;Object(a.a)(this,s);var n=(i=t.call(this,e)).props.class;void 0===n&&(n="-outlined");var c=i.props.style;return void 0===c&&(c={fontSize:"20px"}),c=!1===i.props.isPointer?Object(r.a)(Object(r.a)({},c),{},{userSelect:"none"}):"disable"===i.props.isPointer?Object(r.a)(Object(r.a)({},c),{},{userSelect:"none",cursor:"not-allowed"}):Object(r.a)(Object(r.a)({},c),{},{userSelect:"none",cursor:"pointer"}),i.state={class:n,style:c},i}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(e){if(void 0!==this.props.isPointer&&void 0!==e.isPointer&&this.props.isPointer!==e.isPointer){var t=this.state.style;t="disable"===this.props.isPointer?Object(r.a)(Object(r.a)({},t),{},{cursor:"not-allowed"}):!1===this.props.isPointer?Object(r.a)(Object(r.a)({},t),{},{cursor:"default"}):Object(r.a)(Object(r.a)({},t),{},{cursor:"pointer"}),this.setState({style:t})}}},{key:"renderForCondition",value:function(){if(this.props.val.includes("data:image")&&this.props.val.includes(";base64,")||this.props.val.includes("//"))return o.a.createElement("img",{className:this.state.class,src:this.props.val,alt:this.props.title,style:this.state.style});if(this.props.val.includes("../")){var e=this.props.val;return p.a.managerTemplate_isDev()&&(e=e.replace("../",p.a.managerTemplate_getUrlResouce())),o.a.createElement("img",{className:this.state.class,src:e,alt:this.props.title,style:this.state.style})}return o.a.createElement("i",{className:"material-icons"+this.state.class+" "+this.props.color,style:this.state.style},Object(p.d)(this.props.val))}},{key:"render",value:function(){return this.renderForCondition()}}]),s}(l.Component);t.default=u}}]);
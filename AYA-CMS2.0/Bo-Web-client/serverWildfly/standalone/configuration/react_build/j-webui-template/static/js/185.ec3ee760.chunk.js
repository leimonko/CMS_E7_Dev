(this.webpackJsonpframeworkcss=this.webpackJsonpframeworkcss||[]).push([[185,226],{10:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(2),l=a(5),s=a(4),o=a(0),r=a.n(o),c=a(3),d=a(161),u=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).abstract_changeDeviceReal=function(e,t){n.setState({device:e,width:t.window_size.width})},n.type_component="uTableBodyRow",n.code_component="malibu.uTableBodyRow",n.id_theme_component=Object(c.c)(),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),isDisMount:"none"},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component)}},{key:"componentWillUnmount",value:function(){Object(c.h)(this.id_theme_component)}},{key:"renderForDevice",value:function(){return"desktop"===this.state.device||"tablet"===this.state.device?this.props.children:"mobile"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"malibu-mobile-uTable-column-header"}),this.props.children):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",{className:this.props.isCheck?"check":"",onClick:function(t){void 0!==e.props.abs_Click&&e.props.abs_Click(e.props.dataItem)}},this.renderForDevice())}}]),a}(o.Component);t.default=u},124:function(e,t,a){"use strict";a.r(t);var i=a(334),n=a(1),l=a(2),s=a(5),o=a(4),r=a(0),c=a.n(r),d=a(3),u=a(19),m=a(10),p=a(31),h=a(14),b=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(h.default,{dataFull:this.props.stateData.form.dataFull},c.a.createElement("div",{style:{paddingTop:"32px",width:"100%",display:"inline-block"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-4 col-sm-4",style:{border:"1px solid #CBD6E2",boxSizing:"border-box",borderRadius:"4px",padding:"20px 0px"}},c.a.createElement(p.default,{dataFull:Object(i.a)({},this.props.stateData.tree_data)})),c.a.createElement("div",{className:"col-xl-9 col-lg-9 col-md-8 col-sm-8",style:{paddingLeft:"32px",position:"relative"}},c.a.createElement("div",{className:"col-sm-12",style:{border:"1px solid #CBD6E2",boxSizing:"border-box",borderRadius:"4px"}},c.a.createElement("div",{className:"malibu-desktop-O9_CashFlow-table"},c.a.createElement(u.default,{dataFull:this.props.stateData.table.dataFull},this.props.stateData.table_data.map((function(t,a){var n=e.props.stateData.table_config;return c.a.createElement(m.default,{key:a},t.map((function(e,t){var a=d.a.managerTemplate_getComponent(n[t].type);return c.a.createElement(a,{key:t,dataFull:Object(i.a)(Object(i.a)({},e),{},{config:n[t].config})})})))})))))))))}}]),a}(r.Component);t.default=b},13:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(2),l=a(5),s=a(4),o=a(0),r=a.n(o),c=a(3),d=a(161),u=a(171),m=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).abstract_changeDevice=function(e){n.setState({device:e})},n.type_component="uAppMenu",n.code_component="malibu.uAppMenu",n.id_theme_component=Object(c.c)(),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),show:"",isDisMount:"none"},n}return Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e,t=this;return"desktop"===this.state.device||"tablet"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-header",style:{userSelect:"none"}},r.a.createElement("div",{tabIndex:0,className:"app-span_btn ",style:{cursor:"pointer"},onClick:function(){t.openApp()},onBlur:function(){t.closeApp()}},r.a.createElement("i",{className:"material-icons"},"apps"))),r.a.createElement("div",{className:"app-list-menu"},r.a.createElement("div",{className:"app-list-menu-ul row",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},null===(e=this.props.dataFull.appItem)||void 0===e?void 0:e.map((function(e,a){return void 0===e.class&&(e.class=""),r.a.createElement(u.default,{class:e.class,device:t.state.device,val:e.icon,key:a,index:a,title:e.title,sysStyle:e.sysStyle,dataItem:e.dataItem,appItem_Select:t.props.dataFull.abs_select})}))))):"mobile"===this.state.device?r.a.createElement("button",{className:"btn btn-success",type:"submit"},"mobile"):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openApp",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),window.anime({targets:".app-list-menu",translateX:-379,duration:100})):(this.setState({show:""}),window.anime({targets:".app-list-menu",translateX:500,duration:100}))}},{key:"closeApp",value:function(){this.setState({show:""}),window.anime({targets:".app-list-menu",translateX:500,duration:100})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"malibu-desktop-appnav "+this.state.show,style:{display:this.state.isDisMount}},this.renderForDevice()),r.a.createElement("div",{className:"blank-app"}))}}]),a}(o.Component);t.default=m},170:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var i=a(1),n=a(2),l=a(5),s=a(4),o=a(0),r=a.n(o),c=a(3),d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={sysStyle:{show:!1}},n}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(e){void 0!==this.props.sysStyle&&(void 0===e.sysStyle||this.props.sysStyle.show!==e.sysStyle.show)&&this.setState({sysStyle:this.props.sysStyle})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.props.device||"tablet"===this.props.device?r.a.createElement("li",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li "+this.state.sysStyle.show},r.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-title",onClick:function(){0===e.props.data.length&&e.props.closeNav()}},r.a.createElement("span",{"aria-hidden":"true",className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-icon material-icons-outlined "},Object(c.d)(this.props.icon)),r.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&r.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),this.props.data.length>0&&r.a.createElement("div",{className:"transparent"}),this.props.data.length>0&&r.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul"},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=""),r.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length&&(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav())}},r.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-title"},r.a.createElement("label",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&r.a.createElement("i",{className:"material-icons arrow-item"},"keyboard_arrow_right")),r.a.createElement("div",{className:"transparent-child"}),t.data.length>0&&r.a.createElement("ul",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul "},t.data.map((function(t,a){return r.a.createElement("li",{key:a,className:"malibu-desktop-uSidebarMenu-navbar-list-menu-child-child-ul-li",onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()},style:{cursor:"pointer"}},t.title)}))))})))):"mobile"===this.props.device?r.a.createElement("li",{className:"malibu-mobile-navbar-list-menu-ul-li "+(this.state.sysStyle.show?"expand":"")},r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-ul-li-title ",onClick:function(){0===e.props.data.length?e.props.closeNav():e.props.uSidebarMenu_chooseItem(e.props.index)}},r.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-ul-li-item"},this.props.title),this.props.data.length>0&&r.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-1"},"keyboard_arrow_right")),this.props.data.length>0&&r.a.createElement("ul",{className:"malibu-mobile-navbar-list-menu-child-ul",style:{display:this.state.sysStyle.show?"block":"none"}},this.props.data.map((function(t,a){return void 0===t.data&&(t.data=[]),void 0===t.sysStyle&&(t.sysStyle={}),void 0===t.sysStyle.show&&(t.sysStyle.show=!1),r.a.createElement("li",{key:a,className:"malibu-mobile-navbar-list-menu-child-ul-li ",onClick:function(){0===t.data.length?(void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(t),e.props.closeNav()):void 0!==e.props.uSidebarMenu_selectItemChild&&e.props.uSidebarMenu_selectItemChild(e.props.index,a)}},r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-child-ul-li-title "+(t.sysStyle.show?"expand":"")},r.a.createElement("label",{className:"malibu-mobile-navbar-list-menu-child-ul-li-item",style:{cursor:"pointer"}},t.title),t.data.length>0&&r.a.createElement("i",{className:"material-icons arrow-item malibu-mobile-arrow-item-2"},"keyboard_arrow_right")),t.data.length>0&&r.a.createElement("ul",{key:a,className:"malibu-mobile-navbar-list-menu-child-child-ul ",style:{display:t.sysStyle.show?"block":"none"}},t.data.map((function(a,i){return r.a.createElement("li",{key:i,className:"malibu-mobile-navbar-list-menu-child-child-ul-li "+(0===i?"first":"")+(i===t.data.length-1?"last":""),onClick:function(){void 0!==e.props.uSidebarMenu_selectItem&&e.props.uSidebarMenu_selectItem(a),e.props.closeNav()},style:{cursor:"pointer"}},a.title)}))))})))):null}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(o.Component)},171:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(2),l=a(5),s=a(4),o=a(0),r=a.n(o),c=a(6),d=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(i.a)(this,a);var l={paddingLeft:"8px"};return(n=t.call(this,e)).props.icon||(l={}),n.state={style:l,style_icon:{fontSize:"27.98px",float:"left"}},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:" app-item-card",style:{userSelect:"none"},onClick:function(t){void 0!==e.props.appItem_Select&&e.props.appItem_Select(e.props.dataItem,t)}},r.a.createElement("div",{className:"app-item "},r.a.createElement("div",{className:"malibu-uApp-img "},this.props.val?r.a.createElement("div",{className:"app-img"},r.a.createElement(c.default,{val:this.props.val,class:"",style:{width:"70px",height:"70px"},title:this.props.title})):null),r.a.createElement("div",{className:"malibu-uApp-title "},this.props.title?r.a.createElement("span",{className:"dHeader-span",style:this.state.style},r.a.createElement("div",{style:this.state.style_title},this.props.title)):null)))}}]),a}(o.Component);t.default=d},196:function(e,t,a){"use strict";a.r(t);var i=a(334),n=a(1),l=a(2),s=a(5),o=a(4),r=a(0),c=a.n(r),d=a(9),u=a(16),m=a(13),p=a(124),h=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getDataForm",value:function(){return{form:{dataFull:{config:{default:{title:"Cash Flow"}},cmd:{visibility:""}}},tree_data:this.getConfigTemplateTree(),table:{dataFull:{Header:{data:[{title:"Currency",config:{width:"",isFrozen:!1}},{title:"a",config:{width:"",isFrozen:!1}},{title:"v",config:{width:"",isFrozen:!1}},{title:"c",config:{width:"",isFrozen:!1}},{title:"v",config:{width:"",isFrozen:!1}},{title:"MODIFY",config:{width:"",isFrozen:!1}},{title:"DELETE",config:{width:"",isFrozen:!1}},{title:"SAVE",config:{width:"",isFrozen:!1}},{title:"CLEAR",config:{width:"",isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:[[{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"},{data:"UTL"}]],table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"right",isFrozen:!1}}]}}},{key:"getConfigTemplateTree",value:function(){return{tree_data:[{title:"Home",parent_id:"0",is_open:!1,DOM_elm:null,id:"1",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"Customer",parent_id:"0",is_open:!1,DOM_elm:null,id:"2",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"L\xe1 s\u1ed1 2",parent_id:"1",is_open:!1,DOM_elm:null,id:"1.1",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"Customer Profile",parent_id:"2",is_open:!1,DOM_elm:null,id:"2.1",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"Customer Group",parent_id:"2",is_open:!1,DOM_elm:null,id:"2.2",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"Customer Linkage",parent_id:"2",is_open:!1,DOM_elm:null,id:"2.3",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"L\xe1 s\u1ed1 2.2",parent_id:"1",is_open:!1,DOM_elm:null,id:"1.2",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu},{title:"L\xe1 s\u1ed1 3",parent_id:"1.1",is_open:!1,DOM_elm:null,id:"1.11",dataItem:{test:"\u0110\xe2y l\xe0 data"},abs_click:this.abs_select_item_menu}],config:{open_one:!0,is_has_dom:!0,noBorder:!0}}}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex col-12 malibu-desktop-header"},c.a.createElement(d.default,{dataFull:this.props.dataFull.uSlidebarMenu}),c.a.createElement("div",{className:"main",style:{width:"100%"}},c.a.createElement(u.default,{sysCallBack:this.sysCallBack,dataFull:this.props.dataFull.uHeader})),c.a.createElement(m.default,{dataFull:this.props.dataFull.uAppMenu})),c.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},c.a.createElement("div",{className:"main",style:{width:"100%"}},c.a.createElement(p.default,{stateData:Object(i.a)({},this.getDataForm())}))))}}]),a}(r.Component);t.default=h},31:function(e,t,a){"use strict";a.r(t);var i=a(335),n=a(1),l=a(2),s=a(5),o=a(4),r=a(0),c=a.n(r),d=a(3),u=a(161),m=a(6),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var l;Object(n.a)(this,a),(l=t.call(this,e)).abstract_changeDevice=function(e){l.setState({device:e})},l.type_component="uTreeItem",l.code_component="malibu.uTreeItem",l.class_desktop="malibu-desktop-uTreeItem",l.id_theme_component=Object(d.c)();var s=l.props.class;void 0===s&&(s="col-12"),l.fist_parent_id="0",l.state={device:Object(d.f)(),skin_config:Object(u.configTemplate_getTheme)(),class:s,height:0,tree_data:l.buildTreeData(l.props.dataFull.tree_data,l.fist_parent_id),tree_status:{}};var o,r=Object(i.a)(l.props.dataFull.tree_data);try{for(r.s();!(o=r.n()).done;){var c=o.value;l.state.tree_status[c.id]=c.is_open}}catch(m){r.e(m)}finally{r.f()}return l}return Object(l.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({tree_data:this.buildTreeData(e.dataFull.tree_data,this.fist_parent_id)})}},{key:"buildTreeData",value:function(e,t){var a,n=[],l=Object(i.a)(e);try{for(l.s();!(a=l.n()).done;){var s=a.value;s.parent_id===t&&n.push({title:s.title,parent_id:s.parent_id,is_open:s.is_open,DOM_elm:s.DOM_elm,id:s.id,data:this.buildTreeData(e,s.id),dataItem:s.dataItem,abs_click:s.abs_click})}}catch(o){l.e(o)}finally{l.f()}return n}},{key:"UNSAFE_componentWillUnmount",value:function(){Object(d.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(d.b)(this,this.id_theme_component)}},{key:"renderForData",value:function(e,t,a){var i,n,l,s,o,r,d,u,p,h=this;return"desktop"===this.state.device||"tablet"===this.state.device?c.a.createElement("div",{key:e.id,className:this.class_desktop+" "+this.state.class,style:{marginBottom:"16px"}},c.a.createElement("div",{className:this.class_desktop+"-header row expand"},c.a.createElement("div",{className:this.class_desktop+"-header-icon-open",style:{width:e.data.length>0?"20px":"",height:e.data.length>0?"20px":""},onClick:function(t){h.openTreeItem(e),void 0!==e.abs_click&&e.abs_click(t,e)}},e.data.length>0?this.state.tree_status[e.id]?c.a.createElement(m.default,{val:"indeterminate_check_box",style:{fontSize:"20px",paddingRight:"5px"},title:"folder",class:"-round"}):c.a.createElement(m.default,{val:"add_box",style:{fontSize:"20px",paddingRight:"5px"},title:"folder",class:"-round"}):""),c.a.createElement("div",{className:this.class_desktop+"-icon",onClick:function(t){h.openTreeItem(e),void 0!==e.abs_click&&e.abs_click(t,e)}},e.data.length||e.parent_id===this.fist_parent_id?null:!0===(null===(i=this.props.dataFull)||void 0===i||null===(n=i.config)||void 0===n?void 0:n.is_has_dom)&&c.a.createElement("div",{className:"arrow "+(this.state.tree_status[e.id]?"open":"")},c.a.createElement(m.default,{val:this.state.tree_status[e.id]&&null!==e.DOM_elm?"expand_more":"chevron_right",style:{fontSize:"20px",padding:"0px"},title:"folder"}))),""!==this.state.name&&c.a.createElement("div",{className:this.class_desktop+"-title"+(e.data.length||e.parent_id===this.fist_parent_id?"":" child")+(this.state.tree_status[e.id]?" open":""),onClick:function(t){h.openTreeItem(e),void 0!==e.abs_click&&e.abs_click(t,e)}},e.title)),c.a.createElement("div",{style:{position:"relative"}},0!==e.data.length&&!0!==(null===(l=this.props.dataFull.config)||void 0===l?void 0:l.noBorder)&&c.a.createElement("fieldset",{className:this.class_desktop+"-border"+(this.state.tree_status[e.id]?" expand":"")},c.a.createElement("legend",{className:"row",style:{visibility:"hidden",paddingLeft:"8px",paddingRight:"10px"}},c.a.createElement("span",{className:this.class_desktop+"-header-icon-open",style:{width:"20px"}},e.data.length>0?this.state.tree_status[e.id]?c.a.createElement(m.default,{val:"indeterminate_check_box",style:{fontSize:"20px",paddingRight:"5px"},title:"folder",class:"-round"}):c.a.createElement(m.default,{val:"add_box",style:{fontSize:"20px",paddingRight:"5px"},title:"folder",class:"-round"}):""),c.a.createElement("div",{className:this.class_desktop+"-icon"},e.data.length||e.parent_id===this.fist_parent_id?null:!0===(null===(s=this.props.dataFull)||void 0===s||null===(o=s.config)||void 0===o?void 0:o.is_has_dom)&&c.a.createElement("div",{className:"arrow "+(this.state.tree_status[e.id]?"open":"")},c.a.createElement(m.default,{val:this.state.tree_status[e.id]&&null!==e.DOM_elm?"expand_more":"chevron_right",style:{fontSize:"20px",padding:"0px"},title:"folder"}))),""!==this.state.name&&c.a.createElement("div",{className:this.class_desktop+"-title"+(e.data.length||e.parent_id===this.fist_parent_id?"":" child")+(this.state.tree_status[e.id]?" open":"")+" legend"},e.title))),(e.data.length>0||null!==e.DOM_elm)&&c.a.createElement("div",{className:this.class_desktop+"-content"+(this.state.tree_status[e.id]&&e.data.length>0||!0===(null===(r=this.props.dataFull)||void 0===r||null===(d=r.config)||void 0===d?void 0:d.is_has_dom)&&this.state.tree_status[e.id]?" expand":"")+((null===(u=this.props.dataFull.config)||void 0===u?void 0:u.noBorder)?" noBorder":"")},e.DOM_elm,null===(p=e.data)||void 0===p?void 0:p.map((function(t,a){return h.renderForData(t,a,e.data)}))))):"mobile"===this.state.device?c.a.createElement("button",{className:"btn btn-success",type:"submit"},"mobile"):c.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openTreeItem",value:function(e){var t,a,i,n,l=this.state.tree_status,s=!l[e.id];if(!0!==(null===(t=this.props.dataFull)||void 0===t||null===(a=t.config)||void 0===a?void 0:a.is_has_dom)&&(s=!0),null===(i=this.props.dataFull)||void 0===i||null===(n=i.config)||void 0===n?void 0:n.open_one){for(var o in l)o!==e.id+""&&(l[o]=!1);for(var r=!0,c=e.id;r;){r=!1;for(var d=0;d<this.props.dataFull.tree_data.length;d++){var u=this.props.dataFull.tree_data[d];if(u.id===c){l[u.id]=!0,c=u.parent_id,r=!0;break}}}}l[e.id]=s,this.setState({tree_status:l})}},{key:"render",value:function(){var e=this;return this.state.tree_data.map((function(t,a){return e.renderForData(t,a,e.state.tree_data)}))}}]),a}(r.Component);t.default=p},335:function(e,t,a){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw l}}}}a.d(t,"a",(function(){return n}))},9:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a(2),l=a(5),s=a(4),o=a(0),r=a.n(o),c=a(3),d=a(161),u=a(170),m=a(6),p=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).abstract_changeDevice=function(e){n.setState({device:e})},n.abs_changeLang=function(e){n.setState({sidebarBody:e})},n.uSidebarMenu_selectItem=function(e){var t,a=n.state.sidebarBody;if(a.length>0)for(var i=0;i<a.length;i++){a[i].sysStyle&&!0===a[i].sysStyle.show&&(t=i),a[i].sysStyle={show:!1};for(var l=0;l<a[i].data.length;l++)a[i].data[l].sysStyle&&!0===a[i].data[l].sysStyle.show&&(t=l),a[i].data[l].sysStyle={show:!1}}e!==t&&(a[e].sysStyle={show:!0}),n.setState({sidebarBody:a})},n.uSidebarMenu_selectItemChild=function(e,t){var a,i=n.state.sidebarBody;if(i.length>0)for(var l=0;l<i.length;l++)for(var s=0;s<i[l].data.length;s++)i[l].data[s].sysStyle&&!0===i[l].data[s].sysStyle.show&&(a=s),i[l].data[s].sysStyle={show:!1};t!==a&&(i[e].data[t].sysStyle={show:!0}),n.setState({sidebarBody:i})},n.checkData=function(){for(var e=n.state.sidebarBody,t=0;t<e.length;t++)void 0===e[t].sysStyle&&(e[t].sysStyle={}),void 0!==e[t].sysStyle.show&&"show"!==e[t].sysStyle.show||(e[t].sysStyle.show="");n.setState({sidebarBody:e})},n.closeNav=function(){n.checkData(),n.setState({show:""}),"mobile"!==n.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100})},n.type_component="uSlidebar",n.code_component="malibu.uSidebarMenu",n.id_theme_component=Object(c.c)();var l=n.props.dataFull.sidebarBody;return void 0===l&&(l=[]),n.state={device:Object(c.f)(),skin_config:Object(d.configTemplate_getTheme)(),sidebarBody:l,show:"",isDisMount:"none"},n}return Object(n.a)(a,[{key:"componentWillUnmount",value:function(){Object(c.h)(this.id_theme_component)}},{key:"componentDidMount",value:function(){Object(c.b)(this,this.id_theme_component),this.setState({isDisMount:"block"})}},{key:"renderForDevice",value:function(){var e=this;return"desktop"===this.state.device||"tablet"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"malibu-desktop-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},r.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-header",style:{userSelect:"none"}},r.a.createElement("div",{tabIndex:0,className:"malibu-desktop-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},r.a.createElement("i",{className:"material-icons-outlined"},"menu"))),r.a.createElement("div",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu"},r.a.createElement("ul",{className:"malibu-desktop-uSidebarMenu-navbar-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.preventDefault()}},this.state.sidebarBody.map((function(t,a){return r.a.createElement(u.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,device:e.state.device,data:t.data,sysStyle:t.sysStyle,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))),r.a.createElement("div",{className:"blank"})):"mobile"===this.state.device?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"malibu-mobile-uSidebarMenu "+this.state.show,style:{display:this.state.isDisMount}},r.a.createElement("div",{className:"malibu-mobile-uSidebarMenu-header",style:{userSelect:"none",background:"unset "}},r.a.createElement("div",{tabIndex:0,className:"malibu-mobile-uSidebarMenu-header-button",style:{cursor:"pointer"},onClick:function(){e.openNav()},onBlur:function(){e.closeNav()}},r.a.createElement("i",{className:"material-icons-outlined"},"menu"))),r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu ",onClick:function(e){e.stopPropagation(),e.preventDefault()}},r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-div",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),e.target.focus(),e.stopPropagation(),e.preventDefault()}},r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header"},r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-header-button_close",onClick:function(){e.closeNav()}},r.a.createElement(m.default,{val:"close",style:{fontSize:"28px"}}))),r.a.createElement("div",{className:"malibu-mobile-navbar-list-menu-content"},r.a.createElement("ul",{className:"malibu-mobile-uSidebarMenu-list-menu-ul",onMouseDown:function(e){e.target.focus(),e.stopPropagation(),e.preventDefault()},style:{padding:"0px 16px"}},this.state.sidebarBody.map((function(t,a){return r.a.createElement(u.default,{key:a,index:a,icon:t.icon,title:t.title,value:t.value,data:t.data,sysStyle:t.sysStyle,device:e.state.device,uSidebarMenu_selectItem:e.props.dataFull.abs_select,uSidebarMenu_chooseItem:e.uSidebarMenu_selectItem,uSidebarMenu_selectItemChild:e.uSidebarMenu_selectItemChild,closeNav:e.closeNav})}))))))),r.a.createElement("div",{className:"blank"})):r.a.createElement("div",null,"Kh\xf4ng h\u1ed7 tr\u1ee3")}},{key:"openNav",value:function(){"expand"!==this.state.show?(this.setState({show:"expand"}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:500,duration:100})):(this.setState({show:""}),"mobile"!==this.state.device?window.anime({targets:".malibu-desktop-uSidebarMenu-navbar-list-menu",translateX:-516,duration:100}):window.anime({targets:".malibu-mobile-navbar-list-menu-div",translateX:-500,duration:100}),this.checkData())}},{key:"render",value:function(){return this.renderForDevice()}}]),a}(o.Component);t.default=p}}]);
(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[15],{141:function(t,e,a){"use strict";a.r(e);var l=a(0),n=a.n(l),s=a(158),i=a(162),o=a(161),r=a(159),g=a(160),u=a(156),c=a(1);class d extends l.Component{constructor(t){super(t);let e=c.g.context_get("user_acc");console.log("user_info",e),this.additionalConfig={dataHeader:[{title:null===e||void 0===e?void 0:e.RESULT.WORKINGDATE,icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAzElEQVR4Ae3UEZACYRjH4YXDw+Dw8ODgYPHsfA6CnIMgnw/CIHfMJ8wnXAiDIAjCIHjyZra+pv22aef7zbz4n3noLXKdDCNUGKTfRoQjYJdwGx8ApN3WhB8scNB8OwR8xGLesJW+Dd5jQH3t9R8DCtorZFDnQUuEhm/5CCgUDYeQQRn0EiD0MES4uPJZoEp9Zfug64UMyqBb4aS+0TNA0xpUhV5nH+MkAWj2CGiNzwYx39jfCxprr78Y0BeO0rcuYsMv5jhJ0wpl0YVyZx8duQfJiIRGAAAAAElFTkSuQmCC",class:"col-4 col-sm-4 col-md-5 col-xl-7 col-lg-5",config:{isPointer:!1}},{title:(null===e||void 0===e?void 0:e.RESULT.BRNAME)+" | "+(null===e||void 0===e?void 0:e.RESULT.BRANCD),config:{isPointer:!1},class:"",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA1klEQVR4Ae3RIQyCUBRGYQKRaCAaCAYDgT42o5Fg74E+A30EezLaRzAaDPYZiEaigWAg4CkWtscA3nvM7Z7ti3f7t+tIktSpbdsINxQIlh6zQ41fFcKlxhzQoFuN2PaYFH01SGyNOWFoqckhLi4YW25ijIcrpnaGq2uMjwfmVsCbOyZACV3d4U8dE6KC7kqsx46JUcNUFbZDx+zRwHQ1oiGDEtgqGvu6DLrLnE7WBskgR9E/D5JBMkgGHaHq3XPXQFU6Z9AGL3T7IO25yxWjnlg5kiQt2BdkfJA2IWx3kwAAAABJRU5ErkJggg=="}]}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,null),n.a.createElement(g.a,null),n.a.createElement("div",{className:"d-flex col-12 malibu-desktop-header"},n.a.createElement(s.a,null),n.a.createElement("div",{className:"main",style:{width:"100%"}},n.a.createElement(i.a,{additionalConfig:this.additionalConfig}))),n.a.createElement("div",{className:"d-flex col-12 malibu-desktop-content"},n.a.createElement("div",{className:"main",style:{width:"100%"}},n.a.createElement(r.a,null),n.a.createElement(o.a,null))))}}e.default=d},156:function(t,e,a){"use strict";var l=a(0),n=a.n(l),s=a(1),i=a(5),o=a(6),r=a(4);class g extends l.Component{constructor(t){super(t),this.onLogin=()=>{let t=this.state.dataFull.PIN.data;Object(i.b)([{txcode:"#sys:bo-relogin-login",input:{p:t,pin:t}}],{}).then(t=>{this.stausLogin(s.g.foGetData("login-status",t))},t=>{})},this.abs_Change=t=>{let{dataFull:e}=this.state;e.PIN.data=t.target.value.trim(),this.setState({dataFull:e})},this.startRelogin=()=>{this.setState({show:"block"},()=>{o.a.quickPost([{txcode:"#sys:bo-relogin-lockToken",input:{}}],{})})};let e=s.g.relogin_getStatus();e=e?"block":"none";let a=s.g.profileUser_get("bgrelogin");""===a.trim()&&(a="https://i.imgur.com/J746g0g.jpg");let l=s.g.profileUser_get("avatar");""===l.trim()&&(l="https://i.imgur.com/1wCrHyg.jpg");let n=s.g.relogin_loginFalseCurrent();this.state={dataFull:{status:{title:this.getStatusTitle()},PIN:{placeholder:this.getPINPlaceholder(),data:"",abs_Change:this.abs_Change,abs_Submit:this.onLogin},number_import:{title:this.getNumberWrongPassword(n)},background:{value:a},avatar:{value:l},mode:{disable:{status:!1,title:"Your screen is disabled"}}},show:e},this.flag_Unmount=!1}getStatusTitle(){return`${s.g.getLang("profileUserStatus")}: ${s.g.profileUser_get("status")}`}getPINPlaceholder(){return s.g.getLang("unlock_password_placeholder")}getNumberWrongPassword(t){return`${s.g.getLang("number_times_remaining")}: ${s.g.relogin_maxLoginFalse()-t}`}stausLogin(t){let{dataFull:e}=this.state;if(e.PIN.data="",this.setState({dataFull:e}),void 0!==t){if(void 0!==t.status_login&&"login#127"===t.status_login)return e.number_import.title=this.getNumberWrongPassword(0),this.setState({show:"none",dataFull:e}),s.g.relogin_resetCount(),void s.g.relogin_setStatus(!1);void 0!==t.error_login&&(s.g.relogin_up_loginFalse(),e.number_import.title=this.getNumberWrongPassword(s.g.relogin_loginFalseCurrent()),this.setState({dataFull:e}),alert(s.g.getLang(t.error_login)),s.g.relogin_checkOverLoadLoginFalse()&&o.a.fo([{txcode:"#sys:fo-goto-pageLogin",input:{}}],{}))}}componentWillUnmount(){this.flag_Unmount=!0}componentDidMount(){s.g.relogin_setForm(this)}render(){if("none"===this.state.show)return null;const t=Object(r.a)("uLockScreen");return n.a.createElement(t,{dataFull:this.state.dataFull})}}e.a=g}}]);
(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[98,12],{53:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return s}));class s{}s.readConfigData=(e,t,o)=>{let a={},c=[{title:"txFo",code:"false"},{title:"txFo Actions",code:"true"}],i=[];for(let s=0;s<c.length;s++)i.push({title:c[s].title,value:c[s].code,selected:c[s].code===e.useAction});return a.useActionConfig={dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action event",data_status:"No Result",title:"Action event",class:"col-md-6",required:!1,code_form_component:"action_event"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:i,search_value:"",abs_Change:t,abs_search:s.search}},a.txFoConfig={dataFull:{config:{default:{helper:"true"===e.useAction?"txFoActions":"txFo",title:"true"===e.useAction?"txFoActions":"txFo",class:"col-md-12",rows:10,code_form_component:"true"===e.useAction?"txFoActions":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===e.useAction?e.txFoActions:e.txFo,abs_Change:o}},a}}}]);
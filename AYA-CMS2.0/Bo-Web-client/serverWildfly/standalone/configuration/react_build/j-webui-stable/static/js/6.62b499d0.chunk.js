(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[6,12,98],{35:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(4),i=o(53);class s extends a.Component{constructor(e){super(e),this.getData=()=>{let{form:e}=this.state;const t=e.rule_runFO.action.dataFull.data.find(e=>e.selected),o=e.rule_runFO.action_event.dataFull.data.find(e=>e.selected);let a={};a="true"===o.value?{component_action:e.rule_runFO.code_active.dataFull.value,component_event:t.value,txFoActions:e.rule_runFO.action_content.dataFull.value,txFo:this.data.txFo,useAction:o.value,condition:e.rule_runFO.option.dataFull.value,component_result:e.rule_runFO.code_get_data.dataFull.value}:{component_action:e.rule_runFO.code_active.dataFull.value,component_event:t.value,txFo:e.rule_runFO.action_content.dataFull.value,txFoActions:this.data.txFoActions,useAction:o.value,condition:e.rule_runFO.option.dataFull.value,component_result:e.rule_runFO.code_get_data.dataFull.value},this.validateDataAction()?this.props.func_save_rule_and_close(a):(e.rule_getInfo.button_save.dataFull.config.default.type="danger",this.setState({form:e}))},this.validateDataAction=()=>{let{form:e}=this.state;return void 0!==e.rule_runFO.action.dataFull.data.find(e=>e.selected)||(e.rule_runFO.action.dataFull.config.cmd.error.message=" required",this.setState({form:e}),!1)},this.convert_action_template=()=>{let e={},t=[],o=[{title:"Enter/Tab",code:"enter_tab"},{title:"onChange",code:"on_change"},{title:"Enter",code:"enter"},{title:"checked",code:"checked"},{title:"T\u1ea5t c\u1ea3",code:"all"}];for(let a=0;a<o.length;a++)t.push({title:o[a].title,value:o[a].code,selected:o[a].code===this.data.component_event});return e={dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action",data_status:"No Result",title:"Action",class:"col-md-6",required:!1,code_form_component:"action"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:t,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},e},this.convert_code_get_data_template=()=>{let e={};return e={dataFull:{config:{default:{title:"Code get data",class:"col-md-6 ",required:!1,placeholder:"Code get data",helper:"Code get data",code_form_component:"code_get_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_result,abs_Change:this.onChangeValue}},e},this.convert_code_active_template=()=>({dataFull:{config:{default:{title:"Active",class:"col-md-6 ",required:!1,placeholder:"Active",helper:"Active",code_form_component:"code_active"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_action,abs_Change:this.onChangeValue}}),this.convert_option_template=()=>({dataFull:{config:{default:{title:"Condition",class:"col-md-6 ",required:!1,placeholder:"Condition",helper:"Condition",code_form_component:"option"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.condition,abs_Change:this.onChangeValue}}),this.convert_action_event_template=()=>{let e=[{title:"txFo",code:"false"},{title:"txFo Actions",code:"true"}],t=[];for(let o=0;o<e.length;o++)t.push({title:e[o].title,value:e[o].code,selected:e[o].code===this.data.useAction});return{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action event",data_status:"No Result",title:"Action event",class:"col-md-6",required:!1,code_form_component:"action_event"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:t,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}},this.convert_action_content_template=()=>({dataFull:{config:{default:{helper:"true"===this.data.useAction?"txFo Action":"txFo",title:"true"===this.data.useAction?"txFo Action":"txFo",class:"col-md-12",rows:10,code_form_component:"true"===this.data.useAction?"txFoAction":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===this.data.useAction?this.data.txFoActions:this.data.txFo,abs_Change:this.onChangeValue_ActionContent}}),this.loadDataToState=()=>{let e={title:"Rule runFo"};return e.status_form=this.props.modal_edit_rule_func.ruleStrong_default.isStatus,e.order=this.props.modal_edit_rule_func.ruleStrong_default.order,e.begin=this.props.modal_edit_rule_func.ruleStrong_default.isStart,e.status=this.props.modal_edit_rule_func.ruleStrong_default.inUse,e.code_active=this.convert_code_active_template(),e.action=this.convert_action_template(),e.code_get_data=this.convert_code_get_data_template(),e.action_event=this.obj_render_txFo.useActionConfig,e.action_content=this.obj_render_txFo.txFoConfig,e.option=this.convert_option_template(),e.button_save={dataFull:{config:{default:{title:"Save Rule",type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}},e},this.componentDidMount=()=>{let{modal:e}=this.state,{form:t}=this.state;e={title:"Edit rule function",helper:"Edit rule function ",abs_Close:this.func_close_modal,visibility:!0},t.rule_runFO=this.loadDataToState(),t.list_component={title:"List Component",helper:"List Component",table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}}],table_header:{dataFull:{Header:{data:[{title:"Layout",config:{width:"",isFrozen:!1}},{title:"View",config:{isFrozen:!1}},{title:"Name",config:{isFrozen:!1}},{title:"Code",config:{isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:this.props.modal_edit_rule_func.list_components},this.setState({modal:e,form:t})},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.onChangeValue=(e,t)=>{let{form:o}=this.state;o.rule_runFO[t].dataFull.value=e.target.value,this.setState({form:o})},this.onChangeValue_ActionContent=(e,t)=>{let{form:o}=this.state;o.rule_runFO.action_content.dataFull.value=e.target.value,this.setState({form:o})},this.onChangeValueSelect=(e,t,o)=>{let{form:a}=this.state;if(console.log("componentCode",o),o){let e=[],n=[];e=a.rule_runFO[o].dataFull.data.filter(e=>e.selected),n=a.rule_runFO[o].dataFull.data.filter((e,o)=>o===t),e.length>0&&(e[0].selected=!1),n.length>0&&(n[0].selected=!0),"action_event"===o&&(a.rule_runFO.action_content={dataFull:{config:{default:{helper:n[0].title,title:n[0].title,class:"col-md-12",rows:10,code_form_component:"true"===n[0].value?"txFoAction":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===n[0].value?this.data.txFoActions:this.data.txFo,abs_Change:this.onChangeValue_ActionContent}}),this.setState({form:a})}},this.Modal_RunFo_Rule=Object(l.b)("designFormModal_ruleFunction_runFO"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.modal_edit_rule_func.ruleStrong_detail),this.state={modal:{},form:{}},this.obj_render_txFo=i.default.readConfigData(this.data,this.onChangeValueSelect,this.onChangeValue_ActionContent)}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.component_action?t.component_action=e.component_action:t.component_action="",null!=e.component_result?t.component_result=e.component_result:t.component_result="",null!=e.component_event?t.component_event=e.component_event:t.component_event="enter_tab",null!=e.txFoActions?t.txFoActions=e.txFoActions:t.txFoActions=JSON.stringify([{function:"",status:"A",para:[]}],null,4),null!=e.txFo?t.txFo=e.txFo:t.txFo=JSON.stringify([{txcode:"",input:{}}],null,4),null!=e.useAction?t.useAction=e.useAction:t.useAction="true",null!=e.condition?t.condition=e.condition:t.condition="",t}render(){console.log("thiioasdasidusaduiasdhask",this.state);const e=this.Modal_RunFo_Rule;return n.a.createElement(e,{stateData:this.state})}}t.default=s},53:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return a}));class a{}a.readConfigData=(e,t,o)=>{let n={},l=[{title:"txFo",code:"false"},{title:"txFo Actions",code:"true"}],i=[];for(let a=0;a<l.length;a++)i.push({title:l[a].title,value:l[a].code,selected:l[a].code===e.useAction});return n.useActionConfig={dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action event",data_status:"No Result",title:"Action event",class:"col-md-6",required:!1,code_form_component:"action_event"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:i,search_value:"",abs_Change:t,abs_search:a.search}},n.txFoConfig={dataFull:{config:{default:{helper:"true"===e.useAction?"txFoActions":"txFo",title:"true"===e.useAction?"txFoActions":"txFo",class:"col-md-12",rows:10,code_form_component:"true"===e.useAction?"txFoActions":"txFo"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:"true"===e.useAction?e.txFoActions:e.txFo,abs_Change:o}},n}}}]);
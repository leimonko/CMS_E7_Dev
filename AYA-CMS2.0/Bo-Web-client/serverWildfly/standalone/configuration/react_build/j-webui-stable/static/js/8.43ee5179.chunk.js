(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[8],{29:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),s=a(4);class i extends l.Component{constructor(e){super(e),this.getData=()=>{let{form:e}=this.state;const t=e.rule_getInfo.how_to_set_data.dataFull.data.find(e=>e.selected),a=e.rule_getInfo.action.dataFull.data.find(e=>e.selected),l=e.rule_getInfo.type_data.dataFull.data.find(e=>e.selected),o=e.rule_getInfo.is_set_back_data.dataFull.data.find(e=>e.selected);this.validateDataAction()?this.props.func_save_rule_and_close({component_action:e.rule_getInfo.active.dataFull.value,component_event:a.value,isSetCode:t.value,data_type:l.value,is_data_to_form:o.value,api_id:e.rule_getInfo.id_API.dataFull.value,component_result:e.rule_getInfo.get_data.dataFull.value,exception:this.data.exception,api_bo:this.data.api_bo,sql_bo:this.data.sql_bo,data_bo:this.data.data_bo,data_table:this.data.data_table,sql_id:this.data.sql_id}):(e.rule_getInfo.button_save.dataFull.config.default.type="danger",this.setState({form:e}))},this.validateDataAction=()=>{let{form:e}=this.state;return void 0!==e.rule_getInfo.action.dataFull.data.find(e=>e.selected)||(e.rule_getInfo.action.dataFull.config.cmd.error.message=" required",this.setState({form:e}),!1)},this.convert_action_template=()=>{let e=[],t=[{name:"Enter/Tab",val:"enter_tab"},{name:"All",val:"all"}];for(let a=0;a<t.length;a++)e.push({title:t[a].name,value:t[a].val,selected:t[a].val===this.data.component_event});return{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action",data_status:"No Result",title:"Action",class:"col-md-6",required:!0,code_form_component:"action"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:e,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}},this.convert_active_template=()=>({dataFull:{config:{default:{title:"Active code",class:"col-md-6 ",required:!1,placeholder:"Active code",helper:"Active code",code_form_component:"active"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_action,abs_Change:this.onChangeValue}}),this.convert_how_to_set_data_template=()=>({dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Set data method",data_status:"No Result",title:"Set data method",class:"col-md-6",required:!1,code_form_component:"how_to_set_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Set data by code",value:"true",selected:"true"===this.data.isSetCode},{title:"Set data by codeHidden",value:"false",selected:"false"===this.data.isSetCode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.convert_get_data_template=()=>({dataFull:{config:{default:{title:"Get data method (separate ;)",class:"col-md-6 ",required:!1,placeholder:"Class",helper:"abc",code_form_component:"get_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_result,abs_Change:this.onChangeValue}}),this.convert_type_data_template=()=>{let e=[];const t=[{name:"API",val:"api"},{name:"SQL",val:"sql"},{name:"Data",val:"data"}];for(let a=0;a<t.length;a++)e.push({title:t[a].name,value:t[a].val,selected:t[a].val===this.data.data_type});return e.find(e=>e.selected)||(e[0].selected=!0),{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Data type",data_status:"No Result",title:"Data type",class:"col-md-6",required:!1,code_form_component:"type_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:e,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}},this.convert_id_api_template=()=>({dataFull:{config:{default:{title:"API ID ( in Learn API)",class:"col-md-6 ",required:!1,placeholder:"H\u01b0\u1edbng d\u1eabn",helper:"abc",code_form_component:"id_API"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.api_id,abs_Change:this.onChangeValue}}),this.convert_is_set_back_data_template=()=>({dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Set data back to form",data_status:"No Result",title:"Set data back to form",class:"col-md-6",required:!1,code_form_component:"is_set_back_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Set to form",value:"true",selected:"true"===this.data.is_data_to_form},{title:"No",value:"false",selected:"true"!==this.data.is_data_to_form}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}),this.loadDataToState=()=>{let e={title:"Rule Get Info"};return e.status_form=this.props.modal_edit_rule_func.ruleStrong_default.isStatus,e.order=this.props.modal_edit_rule_func.ruleStrong_default.order,e.begin=this.props.modal_edit_rule_func.ruleStrong_default.isStart,e.status=this.props.modal_edit_rule_func.ruleStrong_default.inUse,e.active=this.convert_active_template(),e.get_data=this.convert_get_data_template(),e.how_to_set_data=this.convert_how_to_set_data_template(),e.type_data=this.convert_type_data_template(),e.id_API=this.convert_id_api_template(),e.action=this.convert_action_template(),e.is_set_back_data=this.convert_is_set_back_data_template(),e.button_save={dataFull:{config:{default:{title:"Save Rule",type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}},e},this.componentDidMount=()=>{let{modal:e}=this.state,{form:t}=this.state;e={title:"Edit rule function",helper:"Edit rule function ",abs_Close:this.func_close_modal,visibility:!0},t.rule_getInfo=this.loadDataToState(),t.list_component={title:"List Component",helper:"List Component",table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}}],table_header:{dataFull:{Header:{data:[{title:"Layout",config:{width:"",isFrozen:!1}},{title:"View",config:{isFrozen:!1}},{title:"Name",config:{isFrozen:!1}},{title:"Code",config:{isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:this.props.modal_edit_rule_func.list_components},this.setState({modal:e,form:t})},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.onChangeValue=(e,t)=>{let{form:a}=this.state;a.rule_getInfo[t].dataFull.value=e.target.value,this.setState({form:a})},this.onChangeValueSelect=(e,t,a)=>{let{form:l}=this.state;if(a){for(const t of l.rule_getInfo[a].dataFull.data)t.selected=t.value===e;this.setState({form:l})}},this.Modal_GetInfo_Rule=Object(s.b)("designFormModal_ruleFunction_getInfo"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.modal_edit_rule_func.ruleStrong_detail),this.state={modal:{},form:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.component_event?t.component_event=e.component_event:t.component_event="enter_tab",null!=e.component_action?t.component_action=e.component_action:t.component_action="",null!=e.component_result?t.component_result=e.component_result:t.component_result="",null!=e.isSetCode?t.isSetCode=e.isSetCode:t.isSetCode="false",null!=e.data_type?t.data_type=e.data_type:t.data_type="api",null!=e.api_id?t.api_id=e.api_id:t.api_id="",null!=e.sql_id?t.sql_id=e.sql_id:t.sql_id="",null!=e.data_table?t.data_table=e.data_table:t.data_table="",null!=e.exception?t.exception=e.exception:t.exception="",null!=e.api_bo?t.api_bo=e.api_bo:t.api_bo="",null!=e.sql_bo?t.sql_bo=e.sql_bo:t.sql_bo="",null!=e.data_bo?t.data_bo=e.data_bo:t.data_bo="",null!=e.is_data_to_form?t.is_data_to_form=e.is_data_to_form:t.is_data_to_form="false",t}render(){const e=this.Modal_GetInfo_Rule;return o.a.createElement(e,{stateData:this.state})}}t.default=i}}]);
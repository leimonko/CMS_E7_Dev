(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[9],{34:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(4);class s extends o.Component{constructor(e){super(e),this.getData=()=>{let{form:e}=this.state;const t=e.rule_managerComponent.event.dataFull.data.find(e=>e.selected),a=e.rule_managerComponent.action.dataFull.data.find(e=>e.selected);this.props.func_save_rule_and_close({component_action:e.rule_managerComponent.code_active.dataFull.value,component_event:a.value,is_use_block:t.value,component_manager:e.rule_managerComponent.action_content.dataFull.value})},this.convert_action_template=()=>{let e={},t=[{name:"Enter/Tab",val:"enter_tab"},{name:"onChange",val:"on_change"},{name:"All",val:"all"}],a=[];for(let o=0;o<t.length;o++)a.push({title:t[o].name,value:t[o].val,selected:t[o].val===this.data.component_event});return a[0].selected=!0,e={dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Action",data_status:"No Result",title:"Action",class:"col-md-6",required:!1,code_form_component:"action"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:a,search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},e},this.convert_code_get_data_template=()=>{let e={};return e={dataFull:{config:{default:{title:"Code get data",class:"col-md-6 ",required:!1,placeholder:"Code get data",helper:"Code get data",code_form_component:"code_get_data"},cmd:{isHelper:!0,disable:!1,visible:!1,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:"",abs_Change:this.onChangeValue}},e},this.convert_active_template=()=>({dataFull:{config:{default:{title:"Active",class:"col-md-6 ",required:!1,placeholder:"Active",helper:"Active",code_form_component:"code_active"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.component_action,abs_Change:this.onChangeValue}}),this.convert_event_template=()=>({dataFull:{config:{default:{search:{placeholder:"Search"},helper:"Is use-block",data_status:"No Result",title:"Is use-block",class:"col-md-6",required:!1,code_form_component:"event"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"Only hide",value:"false",selected:!this.data.is_use_block},{title:"Hide and disable",value:"true",selected:this.data.is_use_block}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.onChangeValueSelect}}),this.convert_option_active_template=()=>({dataFull:{config:{default:{title:"Class",class:"col-md-12 ",required:!1,placeholder:"Class",helper:"abc"},cmd:{isHelper:!0,disable:!1,visible:!1,isFocus:!1,error:{message:"",type:""}}},value:"",abs_Change:this.testInput}}),this.convert_action_content_template=()=>({dataFull:{config:{default:{helper:"Content Action",title:"Content Action",class:"col-md-12",rows:10,code_form_component:"action_content"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:this.data.component_manager,abs_Change:this.onChangeValue}}),this.loadDataToState=()=>{let e={title:"Rule Manager Component"};return e.status_form=this.props.modal_edit_rule_func.ruleStrong_default.isStatus,e.order=this.props.modal_edit_rule_func.ruleStrong_default.order,e.code_active=this.convert_active_template(),e.code_get_data=this.convert_code_get_data_template(),e.option_active=this.convert_option_active_template(),e.begin=this.props.modal_edit_rule_func.ruleStrong_default.isStart,e.status=this.props.modal_edit_rule_func.ruleStrong_default.inUse,e.event=this.convert_event_template(),e.action=this.convert_action_template(),e.action_content=this.convert_action_content_template(),e.button_save={dataFull:{config:{default:{title:"Save Rule",type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.getData}},e},this.componentDidMount=()=>{let{modal:e}=this.state,{form:t}=this.state;e={title:"Edit rule function",helper:"Edit rule function ",abs_Close:this.func_close_modal,visibility:!0},t.rule_managerComponent=this.loadDataToState(),t.list_component={title:"List Component",helper:"List Component",table_config:[{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}},{type:"uTableColumnDefault",config:{mode:"left",isFrozen:!1}}],table_header:{dataFull:{Header:{data:[{title:"Layout",config:{width:"",isFrozen:!1}},{title:"View",config:{isFrozen:!1}},{title:"Name",config:{isFrozen:!1}},{title:"Code",config:{isFrozen:!1}}],config:{mode:{hasSearch:!1,isFrozenHeader:!0}}},config:{mode:{noHeader:!1}}}},table_data:this.props.modal_edit_rule_func.list_components},this.setState({modal:e,form:t})},this.func_close_modal=()=>{this.props.func_cancel_modal_edit_rule_func()},this.onChangeValue=(e,t)=>{let{form:a}=this.state;a.rule_managerComponent[t].dataFull.value=e.target.value,this.setState({form:a})},this.onChangeValueSelect=(e,t,a)=>{let{form:o}=this.state;if(a){for(const t of o.rule_managerComponent[a].dataFull.data)t.selected=t.value===e;this.setState({form:o})}},this.Modal_ManagerComponent_Rule=Object(l.b)("designFormModal_ruleFunction_managerComponent"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.modal_edit_rule_func.ruleStrong_detail),this.state={modal:{},form:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.component_event?t.component_event=e.component_event:t.component_event="enter_tab",null!=e.component_action?t.component_action=e.component_action:t.component_action="",null!=e.component_manager?t.component_manager=e.component_manager:t.component_manager='{\n    "component_code_1": "@{component_code_key} === 1X",\n    "component_code_2": "@{component_code_key} === 2X",\n    "component_code_3": "@{component_code_key} === 3X"\n}',null!=e.is_use_block?t.is_use_block=e.is_use_block:t.is_use_block="true",t}render(){console.log("thiioasdasidusaduiasdhask",this.state);const e=this.Modal_ManagerComponent_Rule;return n.a.createElement(e,{stateData:this.state})}}t.default=s}}]);
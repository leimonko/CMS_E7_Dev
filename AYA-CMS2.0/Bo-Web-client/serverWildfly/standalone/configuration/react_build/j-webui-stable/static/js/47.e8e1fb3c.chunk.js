(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[47],{72:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),c=t(4);class d extends l.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Config_checkBox:e}=this.state;const a=e.type_data.dataFull.data.find(e=>e.selected);return{structable:e.collection_method.dataFull.value,structable_read:e.read_data.dataFull.value,data_default:e.data_default.dataFull.value,action:this.data.action,checked_mode:a.value}},this.loadDataToState=()=>({collection_method:{dataFull:{config:{default:{title:"Collection Method",class:"col-md-12 ",required:!1,placeholder:"Collection Method",helper:"Collection Method",code_form_component:"collection_method"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},read_data:{dataFull:{config:{default:{title:"Read data",class:"col-md-12 ",required:!1,placeholder:"Read data",helper:"Read data",code_form_component:"read_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},data_default:{dataFull:{config:{default:{title:"Data Default",class:"col-md-12 ",required:!1,placeholder:"Data Default",helper:"Data Default",code_form_component:"data_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},type_data:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"234",data_status:"No Result",title:"Office",class:"col-md-6",required:!1,code_form_component:"type_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"True - False",value:"true_false",selected:"true_false"===this.data.checked_mode},{title:"Y - N",value:"Y_N",selected:"Y_N"===this.data.checked_mode},{title:"1 - 0",value:"1_0",selected:"1_0"===this.data.checked_mode}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_checkBox:this.loadDataToState()})},this.onChangeValue=(e,a)=>{let{CCP_Default_Config_checkBox:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Config_checkBox:t})},this.onChangeValueSelect=(e,a,t)=>{let{CCP_Default_Config_checkBox:l}=this.state;if(console.log("componentCode",t),t){for(const a of l[t].dataFull.data)a.selected=a.value===e;this.setState({CCP_Default_Config_checkBox:l})}},this.CCP_Default_Config_checkBox=Object(c.b)("CCP_Default_Config_checkBox"),this.data=this.readConfig(this.props.configComponent.configItem.config),this.state={CCP_Default_Config_checkBox:{}}}readConfig(e){var a={};return void 0===e&&(e={}),null!=e.action?a.action=e.action:a.action="",null!=e.structable?a.structable=e.structable:a.structable="",null!=e.structable_read?a.structable_read=e.structable_read:a.structable_read="",null!=e.data_default?a.data_default=e.data_default:a.data_default="",null!=e.checked_mode?a.checked_mode=e.checked_mode:a.checked_mode="true_false",a}render(){const e=this.CCP_Default_Config_checkBox;return o.a.createElement(e,{stateData:this.state.CCP_Default_Config_checkBox})}}a.default=d}}]);
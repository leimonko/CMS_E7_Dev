(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[35],{79:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),s=a(4);class r extends i.Component{constructor(e){super(e),this.getData=()=>({}),this.loadDataToState=()=>({is_required:{dataFull:{value:this.data.request,title:"Is Required",class:"col-md-12",config:{cmd:{visible:!1,disable:!1,error:{message:"",type:""}}},abs_Click:this.onClickValue}},min_words:{dataFull:{config:{default:{title:"Min words",class:"col-md-6 ",required:!1,placeholder:"Min words",helper:"Min words",code_form_component:"min_words"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.min,abs_Change:this.onChangeValue}},max_words:{dataFull:{config:{default:{title:"Max words",class:"col-md-6 ",required:!1,placeholder:"Max words",helper:"Max words",code_form_component:"max_words"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.max,abs_Change:this.onChangeValue}},structure_regex:{dataFull:{config:{default:{title:"Structure regex",class:"col-md-6 ",required:!1,placeholder:"Structure regex",helper:"Structure regex",code_form_component:"structure_regex"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.regex_format,abs_Change:this.onChangeValue}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Validate_config:this.loadDataToState()})},this.onChangeValue=(e,t)=>{let{CCP_Default_Validate_config:a}=this.state;a[t].dataFull.value=e.target.value,this.setState({CCP_Default_Validate_config:a})},this.onClickValue=()=>{let{CCP_Default_Validate_config:e}=this.state;e.is_required.dataFull.value=!e.is_required.dataFull.value,this.setState({CCP_Default_Validate_config:e})},this.CCP_Default_Validate_textInput=Object(s.b)("CCP_Default_Validate_textInput"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.validate),this.state={CCP_Default_Validate_config:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.request?t.request=e.request:t.request=!1,null!=e.min?t.min=e.min:t.min="",null!=e.max?t.max=e.max:t.max="",null!=e.regex_format?t.regex_format=e.regex_format:t.regex_format="",void 0!==e.validate_html?t.validate_html=e.validate_html:t.validate_html="true",t}render(){const e=this.CCP_Default_Validate_textInput;return l.a.createElement(e,{stateData:this.state.CCP_Default_Validate_config})}}t.default=r}}]);
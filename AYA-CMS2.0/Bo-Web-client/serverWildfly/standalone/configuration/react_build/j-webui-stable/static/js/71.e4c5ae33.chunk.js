(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[71],{69:function(t,e,a){"use strict";a.r(e);var i=a(0),s=a.n(i),l=a(4);class u extends i.Component{constructor(t){super(t),this.getData=()=>{let{CCP_Default_Validate_config:t}=this.state;return{request:t.is_required.dataFull.value}},this.loadDataToState=()=>({is_required:{dataFull:{value:this.data.request,title:"Is Required",class:"col-md-12",config:{cmd:{visible:!1,disable:!1,error:{message:"",type:""}}},abs_Click:this.onClickValue}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Validate_config:this.loadDataToState()})},this.onChangeValue=(t,e)=>{let{CCP_Default_Validate_config:a}=this.state;a[e].dataFull.value=t.target.value,this.setState({CCP_Default_Validate_config:a})},this.onClickValue=()=>{let{CCP_Default_Validate_config:t}=this.state;t.is_required.dataFull.value=!t.is_required.dataFull.value,this.setState({CCP_Default_Validate_config:t})},this.CCP_Default_Validate_textInput=Object(l.b)("CCP_Default_Validate_maskInput"),this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.data=this.readConfig(this.props.configComponent.configItem.validate),this.state={CCP_Default_Validate_config:{}}}readConfig(t){var e={};return void 0===t&&(t={}),null!=t.request?e.request=t.request:e.request=!1,null!=t.min&&(e.min=t.min),null!=t.max&&(e.max=t.max),e.condistion=t.condistion||[],e}render(){const t=this.CCP_Default_Validate_textInput;return s.a.createElement(t,{stateData:this.state.CCP_Default_Validate_config})}}e.default=u}}]);
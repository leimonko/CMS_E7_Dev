(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[52],{97:function(e,a,t){"use strict";t.r(a);var l=t(7),s=t(0),o=t.n(s),i=t(4);const d={structable:"table.col",structable_read:"table.col",data_default:"",format:"#,###.00",decimal_length:2,isLookup:"",data_value:"",cdlist:"",callForm:"",readOnly:""};class r extends s.Component{constructor(e){super(e),this.readConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(l.a)({},d);for(let t in a)void 0!==e[t]&&(""!==a[t]&&""===e[t]||(a[t]=e[t]));return a||{}},this.getData=()=>{let{CCP_Default_Config_currency:e}=this.state;const a=e.CS_formatMask.dataFull.data.find(e=>e.selected);return{structable:e.collection_method.dataFull.value,structable_read:e.read_data.dataFull.value,data_default:e.data_default.dataFull.value,format:a.value,decimal_length:e.CS_decimalNumber.dataFull.value,isLookup:this.data.isLookup,data_value:this.data.data_value,cdlist:this.data.cdlist,callForm:this.data.callForm,readOnly:this.data.readOnly}},this.loadDataToState=()=>({collection_method:{dataFull:{config:{default:{title:"Collection Method (user.name: table:col v\xe0 user.name|group.title: 2 table)",class:"col-md-12 ",required:!1,placeholder:"Collection Method (user.name: table:col v\xe0 user.name|group.title: 2 table)",helper:"Collection Method (user.name: table:col v\xe0 user.name|group.title: 2 table)",code_form_component:"collection_method"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable,abs_Change:this.onChangeValue}},read_data:{dataFull:{config:{default:{title:"Read data set: user.name",class:"col-md-12 ",required:!1,placeholder:"Read data set: user.name",helper:"Read data set: user.name",code_form_component:"read_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.structable_read,abs_Change:this.onChangeValue}},data_default:{dataFull:{config:{default:{title:"Data Default",class:"col-md-12 ",required:!1,placeholder:"Data Default",helper:"Data Default",code_form_component:"data_default"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.data_default,abs_Change:this.onChangeValue}},CS_multiValue:{dataFull:{config:{default:{title:"DATA FORMAT",required:!1},cmd:{visible:!0}}}},CS_formatMask:{dataFull:{config:{default:{search:{placeholder:"Search"},helper:"234",data_status:"No Result",title:"Office",class:"col-md-12",required:!1,code_form_component:"CS_formatMask"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}},mode:{}},data:[{title:"#_______________1235",value:"#",selected:"#"===this.data.format},{title:"#.00____________1234.56",value:"#.00",selected:"#.00"===this.data.format},{title:"#,###.00________1,234.56",value:"#,###.00",selected:"#,###.00"===this.data.format},{title:"#.###,00________1.234,56",value:"#.###,00",selected:"#.###,00"===this.data.format},{title:"#,###___________1,234",value:"#,###",selected:"#,###"===this.data.format},{title:"#.###___________1.234",value:"#.###",selected:"#.###"===this.data.format}],search_value:"",abs_Change:this.onChangeValueSelect,abs_search:this.search}},CS_decimalNumber:{dataFull:{config:{default:{title:"Format decimal number",class:"col-md-12 ",required:!1,placeholder:"Format decimal number",helper:"Format decimal number",code_form_component:"CS_decimalNumber"},cmd:{isHelper:!0,disable:!1,visible:!1===["#","#.###","#,###"].includes(this.data.format),isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.decimal_length,abs_Change:this.onChangeValue}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_currency:this.loadDataToState()})},this.onChangeValue=(e,a)=>{let{CCP_Default_Config_currency:t}=this.state;t[a].dataFull.value=e.target.value,this.setState({CCP_Default_Config_currency:t})},this.onChangeValueSelect=(e,a,t)=>{let{CCP_Default_Config_currency:l}=this.state;if(console.log("componentCode",t),t){"CS_formatMask"===t&&(l.CS_decimalNumber.dataFull.config.cmd.visible=!["#","#.###","#,###"].includes(e),console.log(e));for(const a of l[t].dataFull.data)a.selected=a.value===e;this.setState({CCP_Default_Config_currency:l})}},this.CCP_Default_Config_currency=Object(i.b)("CCP_Default_Config_currency"),this.data=this.readConfig(this.props.configComponent.configItem.config),console.log("this.data",this.data),this.state={CCP_Default_Config_currency:{}}}render(){const e=this.CCP_Default_Config_currency;return o.a.createElement(e,{stateData:this.state.CCP_Default_Config_currency})}}a.default=r}}]);
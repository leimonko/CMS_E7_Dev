(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[42],{112:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),o=a(4);class s extends l.Component{constructor(e){super(e),this.getData=()=>{let{CCP_Default_Config_chart:e}=this.state;return{query_data:e.query_data.dataFull.value,chartType:e.chart_type.dataFull.value,chart_width:e.width.dataFull.value,chart_height:e.height.dataFull.value,columns:e.config_column.dataFull.value,options:e.config_optional.dataFull.value}},this.loadDataToState=()=>({query_data:{dataFull:{config:{default:{title:"Query Data",class:"col-md-12 ",required:!1,placeholder:"Query Data",helper:"Query data",code_form_component:"query_data"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.query_data,abs_Change:this.onChangeValue}},chart_type:{dataFull:{config:{default:{title:"Chart Type",class:"col-md-12 ",required:!1,placeholder:"Chart Type",helper:"Chart Type",code_form_component:"chart_type"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.chartType,abs_Change:this.onChangeValue}},height:{dataFull:{config:{default:{title:"Height",class:"col-md-6 ",required:!1,placeholder:"Height",helper:"Height",code_form_component:"height"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.chart_height,abs_Change:this.onChangeValue}},width:{dataFull:{config:{default:{title:"Width",class:"col-md-6 ",required:!1,placeholder:"Width",helper:"Width",code_form_component:"width"},cmd:{isHelper:!0,disable:!1,visible:!0,isFocus:!1,error:{message:"",type:""}}},mode:{isSearch:!1},value:this.data.chart_width,abs_Change:this.onChangeValue}},config_column:{dataFull:{config:{default:{helper:"Config column data",title:"Config column data",class:"col-md-12",rows:10,code_form_component:"config_column"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:this.data.columns,abs_Change:this.onChangeValue}},config_optional:{dataFull:{config:{default:{helper:"Config Optional",title:"Config Optional",class:"col-md-12",rows:10,code_form_component:"config_optional"},cmd:{isHelper:!0,disable:!1,visible:!0,error:{message:"",type:""}}},data:[],value:this.data.options,abs_Change:this.onChangeValue}},see_more:{title:"See more here",abs_Click:this.onClickSeeMore,dataItem:{data:"https://react-google-charts.com/"}}}),this.componentDidMount=()=>{this.setState({CCP_Default_Config_chart:this.loadDataToState()})},this.onChangeValue=(e,t)=>{let{CCP_Default_Config_chart:a}=this.state;a[t].dataFull.value=e.target.value,this.setState({CCP_Default_Config_chart:a})},this.onClickSeeMore=e=>{console.log(e)},this.onChangeValueSelect=(e,t,a)=>{let{CCP_Default_Config_chart:l}=this.state;if(a)if("config_column"===a)try{var i=JSON.parse(l[a].dataFull.value);console.log(i),this.setState({CCP_Default_Config_chart:l})}catch(o){alert("Wring JSON format")}else this.setState({CCP_Default_Config_chart:l})},this.CCP_Default_Config_chart=Object(o.b)("CCP_Default_Config_chart"),this.data=this.readConfig(this.props.configComponent.configItem.config),this.state={CCP_Default_Config_chart:{}}}readConfig(e){var t={};return void 0===e&&(e={}),null!=e.query_data?t.query_data=e.query_data:t.query_data="",null!=e.chartType?t.chartType=e.chartType:t.chartType="ColumnChart",null!=e.chart_width?t.chart_width=e.chart_width:t.chart_width="",null!=e.chart_height?t.chart_height=e.chart_height:t.chart_height="600",null!=e.columns?t.columns=JSON.stringify(JSON.parse(e.columns),null,4):t.columns=JSON.stringify([{columnName:"Kh\xf4ng c\u1ea7n t\xean",tableColumnGroup:"table1.recname"},{columnName:"T\u1ed5ng c\u1ee7a tableColumn 1",tableColumn:"table1.recvalue"},{columnName:"T\u1ed5ng c\u1ee7a tableColumn 2",tableColumn:"table1.recvalue"}],null,4),null!=e.options?t.options=JSON.stringify(JSON.parse(e.options),null,4):t.options=JSON.stringify({title:"Population of Largest U.S. Cities",chartArea:{width:"30%"},hAxis:{title:"Total Population",minValue:0},vAxis:{title:"City"}},null,4),t}render(){const e=this.CCP_Default_Config_chart;return i.a.createElement(e,{stateData:this.state.CCP_Default_Config_chart})}}t.default=s}}]);
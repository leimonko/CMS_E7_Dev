(this["webpackJsonpstable-app"]=this["webpackJsonpstable-app"]||[]).push([[99],{135:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),o=i(5),l=i(1),n=i(9),_=i(4),m=i(136);class r extends s.Component{constructor(e){super(e),this.createListTemplate=()=>{let e=[],t=this.allListFormTemplate.reduce((e,t)=>(void 0!==t.template&&void 0!==t.template.group_code&&(e[t.template.group_code]=[...e[t.template.group_code]||[],t]),e),{});for(const[i,s]of Object.entries(t)){let t=[];for(let e=0;e<s.length;e++)t.push({img:s[e].template.img,title:s[e].info.title,dataItem:{template:s[e].template,key_form:s[e].info.form_code,title:s[e].info.title}});e.push({title:i,data:t})}return e},this.componentDidUpdate=(e,t)=>{if(this.props.allListForms!==e.allListForms){this.allListForms=this.props.data.allListForms.map(e=>e[this.DESIGNFORM_CODE_DATABASE]),this.allDesignToolItems=this.props.data.allDesignToolItems.map(e=>e[this.DESIGNFORM_CODE_TOOL_ITEMS]),this.allDesignToolGroups=this.props.data.allDesignToolGroups.map(e=>e[this.DESIGNFORM_CODE_TOOL_GROUPS]),this.allListFormTemplate=this.props.data.allListFormTemplate.map(e=>e[this.DESIGNFORM_CODE_FORM_TEMPLATE]),this.allListApp=this.props.data.allListApp,this.allListForms.sort((function(e,t){return void 0!==e.info.last_update?-1:void 0===t.info.last_update?1:0}));let e=[],t=this.createListTemplate();for(let s=0;s<this.allListFormTemplate.length;s++){const t=this.allListFormTemplate[s];e.push({title:t.info.title,img:t.template.img,dataItem:{template:t.template,key_form:t.info.form_code,title:t.info.title}})}e.sort((function(e,t){return e.dataItem.template.isBlank?-1:t.dataItem.template.isBlank?1:0}));let i=this.state.design_form_begin;i.list_forms=this.convert_listForm_dataTemplate(this.allListForms),i.list_templates.data=t,i.list_forms_begin.data=e,this.setState({design_form_begin:i},()=>{this.props.func_DF_Begin_setNoLoading()})}},this.func_ListForm_Close=e=>{let{design_form_begin:t,design_form_design:i}=this.state,s={},a=-1;console.log("form",e),e.template&&e.template.isTemplate?(s=e,this.allListForms.splice(0,0,s)):(s=this.allListForms.find((t,i)=>(a=i,t.info.form_code===e.info.form_code&&t.info.app===e.info.app)),s=e,delete s.template,this.allListForms[a]=s,console.log(s,a)),this.allListForms.sort((function(e,t){return void 0!==e.info.last_update?-1:void 0===t.info.last_update?1:0})),t.list_forms=this.convert_listForm_dataTemplate(this.allListForms),t.search.value="",i.cmd.visibility=!1,this.setState({design_form_begin:t,design_form_design:i},()=>{})},this.func_Template_Open=e=>{console.log("func_Template_Open=>",e,this.allListForms);let t=this.state.design_form_design,i=this.allListFormTemplate.find((t,i)=>t.info.form_code===e.key_form);t.form_detail=i,t.cmd.visibility=!0,this.setState({design_form_design:t},()=>{})},this.func_ListForm_Open=e=>{let t=this.state.design_form_design,i=this.allListForms.find((t,i)=>t.info.form_code===e.key_form&&t.info.app===e.app);t.form_detail=i,t.cmd.visibility=!0,this.setState({design_form_design:t},()=>{this.showToast("Open Form",!0)})},this.list_forms_render_data=(e,t,i)=>{let s=[];for(let a=t;a<i;a++){let t=e[a];s.push({app:t.info.app,title:t.info.title,link:t.info.link?t.info.link:`/${t.info.app}/form`,code:t.info.form_code,last_update:t.info.last_update?t.info.last_update:"",icon:t.info.icon?t.info.icon:"account_balance_wallet",dataItem:{key_form:t.info.form_code,title:t.info.title,app:t.info.app},img:t.info.img?t.info.img:"https://i.imgur.com/KgdR2xr.png",list_buttons:this.listForm_createButtonList({key_form:t.info.form_code,title:t.info.title,app:t.info.app}),abs_OpenForm:this.func_ListForm_Open})}return s.sort((function(e,t){return e.last_update>t.last_update?-1:e.last_update<t.last_update?1:0})),s},this.listForm_createButtonList=e=>[{title:l.g.getLang("designForm_btn_open"),icon_item:"folder_open",dataItem:e,abs_Click:this.func_ListForm_Open},{title:l.g.getLang("designForm_btn_duplicate"),icon_item:"copy",dataItem:e,abs_Click:this.func_ListForm_Duplicate},{title:l.g.getLang("designForm_btn_rename"),icon_item:"title",dataItem:e,abs_Click:this.func_ListForm_Rename},{title:l.g.getLang("designForm_btn_delete"),icon_item:"delete",dataItem:e,abs_Click:this.func_ListForm_Delete}],this.func_ListForm_Delete=e=>{let t=this.state.modal_delete_state;t.modal.visibility=!0,this.modal_delete_dataItem=e,this.setState({modal_delete_state:t})},this.func_ListForm_Duplicate=e=>{if(this.allListForms){let t=-1,i=l.g.cloneJson(this.allListForms.find((i,s)=>(t=s,i.info.form_code===e.key_form&&i.info.app===e.app)));i&&(i.info.form_code=l.g.autoID(),i.info.title="Copy - "+e.title,this.func_ListForm_Rename({app:i.info.app,key_form:i.info.form_code,title:i.info.title,isCopy:!0,newDuplicateForm:i,index_item:t}))}},this.showToast=(e,t)=>{var i={};switch(t){case!0:i={class_:"success",icon:"fa fa-check",title:e+" successfully",time:(new Date).getTime()+"",description:e+" Successfully",data:{},action:{}};break;case!1:default:i={class_:"error",icon:"fa fa-check",title:e,time:(new Date).getTime()+"",description:e,data:{},action:{}}}l.g.pushNotify("notifyToast",i,{}),l.g.callAllScreenListen()},this.func_ListForm_Rename=e=>{let t=this.state.modal_rename_state;this.modal_rename_dataItem.title=e.title,this.modal_rename_dataItem.key_form=e.key_form,this.modal_rename_dataItem.app=e.app,t.form.input_confirm.cmd.error.message="",t.modal.visibility=!0,t.form.input_confirm.value=e.title,e.isCopy?(this.modal_rename_dataItem.isCopy=!0,this.modal_rename_dataItem.newDuplicateForm=e.newDuplicateForm,this.modal_rename_dataItem.index_item=e.index_item):this.modal_rename_dataItem.isCopy=!1,this.setState({modal_rename_state:t})},this.func_Template_ShowMore=()=>{console.log("func_Template_ShowMore")},this.func_ClickChooseTemplate=()=>{console.log("func_ClickChooseTemplate")},this.func_DF_begin_search=e=>{let t=this.state.design_form_begin;t.search.value=e.target.value,this.df_begin_search_settimeout.isTyping=!0,this.setState({design_form_begin:t},()=>{setTimeout(()=>{let{design_form_begin:e}=this.state,i=this.allListForms.filter(e=>e.info.title.toLowerCase().includes(t.search.value.toLowerCase().trim())||e.info.form_code.toLowerCase().includes(t.search.value.toLowerCase().trim()));i&&(e.list_forms=this.convert_listForm_dataTemplate(i),this.setState({design_form_begin:e}))},300)})},this.func_df_CloseRenameModal=()=>{console.log("func_df_CloseRenameModal=>");let e=this.state.modal_rename_state;e.modal.visibility=!1,this.setState({modal_rename_state:e})},this.func_df_CloseDeleteModal=()=>{console.log("func_df_CloseDeleteModal=>");let e=this.state.modal_delete_state;e.modal.visibility=!1,this.setState({modal_delete_state:e})},this.func_df_confirmDelete=()=>{let{design_form_begin:e}=this.state;console.log("func_abs_confirmDelete",this.modal_delete_dataItem),Object(o.b)([{txcode:"bo-designForm-delete",input:{dataItem:{key_form:this.modal_delete_dataItem.key_form,app_code:this.modal_delete_dataItem.app}}}],{}).then(t=>{let i=l.g.foGetData("result",t);if("NOT_ERROR"===i.error_code){const t=this.allListForms.findIndex(e=>e.info.form_code===this.modal_delete_dataItem.key_form&&e.info.app===this.modal_delete_dataItem.app);-1!==t&&this.allListForms.splice(t,1),e.search.value="",e.list_forms=this.convert_listForm_dataTemplate(this.allListForms),this.setState({design_form_begin:e},()=>{this.func_df_CloseDeleteModal(),this.showToast(l.g.getLang("designForm_btn_delete"),!0)})}else console.log("result_item.error_code====>",i.error_code),this.func_df_CloseDeleteModal(),this.showToast(l.g.getLang("designForm_btn_delete"),!1)})},this.func_designForm_Rename_Change=e=>{console.log("func_designForm_Rename_Change",e.target.value);let t=this.state.modal_rename_state;t.form.input_confirm.value=e.target.value,this.modal_rename_dataItem.title=e.target.value,this.modal_rename_dataItem.isCopy&&(this.modal_rename_dataItem.newDuplicateForm.info.title=this.modal_rename_dataItem.title),this.setState({modal_rename_state:t})},this.bo_save_form=async e=>{console.log("formformform",e);let t={},i={};return i[this.DESIGNFORM_CODE_DATABASE]=l.g.cloneJson(e),void 0!==i[this.DESIGNFORM_CODE_DATABASE].template&&i[this.DESIGNFORM_CODE_DATABASE].template.isTemplate,delete i[this.DESIGNFORM_CODE_DATABASE].template,t=await Object(o.b)([{txcode:"bo-designForm-save",input:{dataItem:{key_form:i[this.DESIGNFORM_CODE_DATABASE].info.form_code,newForm_Data:i,app_code:i[this.DESIGNFORM_CODE_DATABASE].info.app}}}],{}),t},this.func_designForm_Rename_Save=async()=>{const{modal_rename_state:e}=this.state,t=e.form.input_confirm.value;if(this.allListForms.find(e=>e.info.title===t&&e.info.form_code!==this.modal_rename_dataItem.key_form&&e.info.app===this.modal_rename_dataItem.app))e.form.input_confirm.cmd.error.message=" This name is taken. Try another. ",this.setState({modal_rename_state:e});else if(this.modal_rename_dataItem.isCopy){let e=this.modal_rename_dataItem.newDuplicateForm;e.last_update=this.formatDate();const t=await this.bo_save_form(e);let i=l.g.foGetData("result",t);if("NOT_ERROR"===i.error_code){let t=this.state.design_form_begin;this.allListForms.splice(this.modal_rename_dataItem.index_item+1,0,e),t.search.value="",t.list_forms=this.convert_listForm_dataTemplate(this.allListForms),this.setState({design_form_begin:t},()=>{this.func_df_CloseRenameModal(),this.showToast(l.g.getLang("designForm_btn_duplicate"),!0)})}else console.log("(result_item.error_code",i.error_code),this.func_df_CloseRenameModal(),this.showToast(l.g.getLang("designForm_btn_duplicate"),!1)}else{const e=this.allListForms.find(e=>e.info.form_code===this.modal_rename_dataItem.key_form&&e.info.app===this.modal_rename_dataItem.app);if(e){e.info.title=t,e.info.last_update=this.formatDate();const i=await this.bo_save_form(e);let s=l.g.foGetData("result",i);if("NOT_ERROR"===s.error_code){let i=this.state.design_form_begin;const s=this.allListForms.findIndex(e=>e.info.form_code===this.modal_rename_dataItem.key_form&&e.info.app===this.modal_rename_dataItem.app);-1!==s&&(this.allListForms[s].info.title=t,this.allListForms[s].info.last_update=e.info.last_update),i.search.value="",i.list_forms=this.convert_listForm_dataTemplate(this.allListForms),this.setState({design_form_begin:i},()=>{this.func_df_CloseRenameModal(),this.showToast(l.g.getLang("designForm_btn_rename"),!0)})}else console.log("(result_item.error_code",s.error_code),this.func_df_CloseRenameModal(),this.showToast(l.g.getLang("designForm_btn_rename"),!1)}}},this.convert_listForm_dataTemplate=e=>{let t=[];return t=e.length>=this.RENDER_ITEMS_NUMBER?this.list_forms_render_data(e,0,this.RENDER_ITEMS_NUMBER):this.list_forms_render_data(e,0,e.length),t},this.getAllFormByApp=e=>this.allListForms.filter(t=>t.info.app===e),this.DESIGNFORM_CODE_DATABASE="designForm",this.DESIGNFORM_CODE_TOOL_GROUPS="designToolGroup",this.DESIGNFORM_CODE_TOOL_ITEMS="designToolItem",this.DESIGNFORM_CODE_FORM_TEMPLATE="designFormTemplate",this.RENDER_ITEMS_NUMBER=50,this.allListForms=[],this.allDesignToolItems=[],this.allDesignToolGroups=[],this.allListFormTemplate=[],this.allListApp=[],this.form_index=-1,this.DF_Begin_Render=Object(_.b)("screen_begin"),this.Modal_Delete_Render=Object(_.b)("designFormModal_form_delete"),this.Modal_Rename_Render=Object(_.b)("designFormModal_form_rename"),this.modal_rename_dataItem={isCopy:!1,newDuplicateForm:{}},this.modal_delete_dataItem={},this.modal_delete_component_dataItem={},this.isSearching=!1,this.df_begin_search_settimeout={isTyping:!1,func_setTimeOut:null},this.state={lang_system:l.g.getConfigUserDefault("list_lang_config"),design_form_design:{cmd:{visibility:!1},form_detail:{},form_index:-1},design_form_begin:{cmd:{visibility:!0},lang_menu:{data:[{title:"English",selected:!0,img:"https://i.imgur.com/KgdR2xr.png",dataItem:{aaa:"aaa"}},{title:"Ti\u1ebfng Vi\u1ec7t",img:"https://i.imgur.com/OKjHV0p.png",dataItem:{aaa:"aaa"}}],abs_Click:this.test},lang:{title:l.g.getLang("designForm_title"),powered_by:l.g.getLang("designForm_powered_by"),jwebui:"JwebUI",list_form:l.g.getLang("designForm_list_form"),more_template:l.g.getLang("designForm_more_template"),alt_img:l.g.getLang("designForm_alt_img"),last_update:l.g.getLang("designForm_last_update"),back_to_home:l.g.getLang("designForm_BacktoHome"),title_icon_copy:"copy",title_icon_delete:"delete",title_icon_duplicate:"duplicate",title_icon_rename:"rename"},list_forms_begin:{abs_Click:this.func_Template_Open,data:[]},list_templates:{abs_Click:this.func_Template_Open,abs_TemplateShowMore:this.func_Template_ShowMore,data:[]},search:{placeholder:"Search",value:"",abs_Change:this.func_DF_begin_search},mode_list:{table_column:[l.g.getLang("designForm_name"),l.g.getLang("designForm_code"),l.g.getLang("designForm_last_update"),""]},list_forms:[]},modal_rename_state:{form:{title:l.g.getLang("designForm_rename_TitleForm"),list_buttons:[{dataFull:{config:{default:{title:l.g.getLang("designForm_btn_cancel"),type:"",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.func_df_CloseRenameModal}},{dataFull:{config:{default:{title:l.g.getLang("designForm_btn_save"),type:"primary",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.func_designForm_Rename_Save}}],input_confirm:{cmd:{error:{message:"",type:"error"}},value:"",placeholder:l.g.getLang("designForm_rename_InputConfirm"),abs_Change:this.func_designForm_Rename_Change}},modal:{title:l.g.getLang("designForm_rename_TitleModal"),abs_Close:this.func_df_CloseRenameModal,visibility:!1}},modal_delete_state:{form:{title:l.g.getLang("designForm_delete_TitleForm"),list_buttons:[{dataFull:{config:{default:{title:l.g.getLang("designForm_btn_cancel"),type:"",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.func_df_CloseDeleteModal}},{dataFull:{config:{default:{title:l.g.getLang("designForm_btn_delete"),type:"danger",icon:""},cmd:{disable:!1,isLoading:!1,isFocus:!1}},abs_Click:this.func_df_confirmDelete}}]},modal:{title:l.g.getLang("designForm_delete_TitleModal"),abs_Close:this.func_df_CloseDeleteModal,visibility:!1}}}}formatDate(e){return e||(e=(new Date).getTime()),Object(n.b)(e,"DD/MM/YYYY hh:mm:ss A")}render(){const e=this.DF_Begin_Render,t=this.Modal_Rename_Render,i=this.Modal_Delete_Render;return a.a.createElement("div",{className:"d-flex col-12"},a.a.createElement("div",{className:"main",style:{width:"100%"}},a.a.createElement(e,{stateData:this.state.design_form_begin}),a.a.createElement(t,{stateData:this.state.modal_rename_state}),a.a.createElement(i,{stateData:this.state.modal_delete_state}),this.state.design_form_design.cmd.visibility?a.a.createElement(m.default,{bo_save_form:this.bo_save_form,getAllFormByApp:this.getAllFormByApp,showToast:this.showToast,func_ListForm_Close:this.func_ListForm_Close,data:{allDesignToolGroups:this.allDesignToolGroups,allDesignToolItems:this.allDesignToolItems,allListApp:this.allListApp,allListForms:this.allListForms,form_detail:this.state.design_form_design.form_detail}}):null))}}t.default=r}}]);
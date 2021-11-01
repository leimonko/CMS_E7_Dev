class formValidate extends Application.getCoreTx() {
    hubTransactionDemo = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  let input = data_form.exp;
				  let max = data_form.maxTest;
				   console.log("input==>",input)
				     console.log("max==>",max)
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				  if(input > max){
					  let error_mess = "Không được lớn hơn "+ max
					  errorForm = [{type:"form", "info":"Lỗi: ", code:error_mess, key:"danger"}]
				  }
					  
				  
				  //
				  form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
	 validateAmount = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  let inputAmt = data_form.billamount;
				  let maxAmt = data_form.maximunamountaccepted;
				  let minAmt = data_form.minimummountaccepted;
				  
				   console.log("billamount==>",inputAmt)
				     console.log("min==>",minAmt)
					 console.log("max==>",maxAmt)
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				  
				  if(inputAmt > maxAmt || inputAmt < minAmt){
					  //cau này nè
					  let error_mess = "Bill amount must be greater than "+minAmt+" and less than "+maxAmt;
					  errorForm = [{type:"form", "info":"VAL01", code:error_mess, key:"Error"}]
					  
					
					  let set_data_map = {
						  "errormessage" : "Bill amount must be greater than "+minAmt+" and less than "+maxAmt,
						  "errorcode":"1",
						  "description":"hahahaha"
					  }
					  let a = "";
					  
					  //console.log(this.context,"==============>",form_.getData())
					//  for(let cpn_code in set_data_map){
					//	  	form_.callDirFromSupport( "setAdvanced",{
					//		list_component: cpn_code,
					//		list_view: "",
					//		inform: "true",
					//		checkError: "false",
					//	},set_data_map[cpn_code]); 
					  // }
					  form_.callDirFromSupport( "setAdvanced",{
							list_component: "errormessage",
							list_view: "",
							inform: "true",
							checkError: "false",
						},error_mess);
						form_.callDirFromSupport( "setAdvanced",{
							list_component: "errorcode",
							list_view: "",
							inform: "true",
							checkError: "false",
						},"3");
											
						
					   //form_.putDataAll_andSet(init_data,true)
					   
				  
				  }else{
					 
					let errorcode = data_form.errorcode;
					let error_mess = data_form.errormessage;
					 if( errorcode =="3"){
						 errorcode = 0;
						 error_mess = "";
					 }					 
					 form_.callDirFromSupport( "setAdvanced",{
							list_component: "errormessage",
							list_view: "",
							inform: "true",
							checkError: "false",
						},error_mess);
						form_.callDirFromSupport( "setAdvanced",{
							list_component: "errorcode",
							list_view: "",
							inform: "true",
							checkError: "false",
						},errorcode);
					 
				  }				
				
				  //form_.putDataAll_andSet(init_data,true)
				  
			
				  return true
					  
				  
				  //
				 // form_.showErrorFromServer(errorForm)
				 // return errorForm.length === 0;
			 }
			 return false;
    }
	validateMaximunamount = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  //let inputAmt = data_form.billamount;
				  let maxAmt = data_form.maximumamountaccepted;
				  let minAmt = data_form.minimumamountaccepted;
				 //  console.log("input==>",inputAmt)
				     console.log("max==>",minAmt)
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				  if(maxAmt!=0 && maxAmt < minAmt ){
					  let error_mess = "Maximum amount must be greater than minimum amount";
					  errorForm = [{type:"form", "info":"VAL04", code:error_mess, key:"Error"}]					  					 				  				  
				  }
				  
 				  
				  //
				 form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
	//
	 validateErrorCode = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  //console.log("data_form==>",data_form)
				  
				  let errorcode = data_form.errorcode;
				 let error_mess = data_form.errormessage;
				   console.log("errorcode==>",errorcode)
				     
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				  if(errorcode != "0" && errorcode != ""){
					 
					  errorForm = [{type:"form", "info":"VAL03", code:error_mess, key:""}]
				  }
					  
				  
				  //
				  form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
	 validateEmail = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  let inputEmail = data_form.email;
				
				   console.log("input==>",inputEmail)
				    
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				  if(!inputEmail.includes("@")){
					  let error_mess = "Email is invalid ";
					  errorForm = [{type:"form", "info":"VAL02", code:error_mess, key:"Error"}]
				  }
					  
				  
				  //
				  form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
	validateFromToDate = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  let fromdate = data_form.startdate;
				  let todate = data_form.expiredate;
				  
				
				   console.log("fromdate==>",fromdate)
				   console.log("todate==>",todate)
				   
				   if(!!fromdate && !!todate && fromdate > todate){
					   let error_mess = "Started date must be less than expired date ";
					  errorForm = [{type:"form", "info":"VAL04", code:error_mess, key:"Error"}]
				   }
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				 
					  
				  
				  //
				  form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
	

	validateAccountInput = () => {
          let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			 if (form_) {
	
				  let errorForm =  []
				  //Kiểm tra điều kiện
				 const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				  console.log("data_form==>",data_form)
				  
				  let inputValue = data_form.consumeraccountno;
				  
				  
				
				   console.log("inputValue==>",inputValue)
				   
				    let rs = /^-?[\d.]+(?:e-?\d+)?$/.test(inputValue);
					 console.log("rs==>",rs)
				   if(rs == false){
					   let error_mess = "The Consumer Account only accepts numbers. ";
					  errorForm = [{type:"form", "info":"VAL05", code:error_mess, key:"Error"}]
				   }
				  //Nếu lỗi thì add vào error theo cấu trúc [{type:"form", "info":"123", code:"test", key:"danger"}]
				 
					  
				  
				  //
				  form_.showErrorFromServer(errorForm)
				  return errorForm.length === 0;
			 }
			 return false;
    }
}
formValidate;
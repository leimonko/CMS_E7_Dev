class formSupport extends Application.getCoreTx() {
    hubTransactionDemo = () => {
			let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			
			
			let uuid = this.uuidv4()

			 if (form_) {
	
				  console.log("okkkkkkkkkkkkk")
				  //Kiểm tra điều kiện
				  let init_data = {
					  d_hubstm:{
						  id: uuid
					  }
				  }
				  form_.putDataAll_andSet(init_data,true)
			 }
			 return true;
    }
	 getTransactionReferenceCash = () => {
			let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			
			 if (form_) {
				const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				console.log("data_form==>",data_form)
			
				let uuid = this.uuidv4()
				let transactionref = data_form.transactionreference;
				if(transactionref == ""){
				  console.log("okkkkkkkkkkkkk")
				  //Kiểm tra điều kiện
				//  let init_data = {
				//	  hubgetbillamount:{
				//		  ID: uuid,
				//		   CUSTACC: "CASH"
				//	  }
				//  }
				  form_.callDirFromSupport( "setAdvanced",{
							list_component: "transactionreference",
							list_view: "",
							inform: "true",
							checkError: "false",
						},uuid); 
						
				  //form_.putDataAll_andSet(init_data,true)
				}
			 }
			 return true;
    }
	getTransactionReference = () => {
			let form_ = Application.getFormAppAuto(this.context.infoA.key_form);
			
			 if (form_) {
				const data_form = form_.callDirFromSupport( "getAdvanced",{
					list_component: "*",
					list_view: "*",
					inform: "true",
					checkError: "false",
				  },{});
				  
				console.log("data_form==>",data_form)
			
				let uuid = this.uuidv4()
				let transactionref = data_form.transactionreference;
				if(transactionref == ""){
				  console.log("okkkkkkkkkkkkk")
				  //Kiểm tra điều kiện
				 // let init_data = {
				//	  hubgetbillamount:{
				//		  ID: uuid						   
				//	  }
				 // }
				   form_.callDirFromSupport( "setAdvanced",{
							list_component: "transactionreference",
							list_view: "",
							inform: "true",
							checkError: "false",
						},uuid); 
				  //form_.putDataAll_andSet(init_data,true)
				}
			 }
			 return true;
    }
	 uuidv4 = () =>{
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
   
	 }
	 
	 

	
}
formSupport;
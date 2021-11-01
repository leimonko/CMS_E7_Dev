class validateAmount extends Application.getCoreTx() {
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
}
validateAmount;
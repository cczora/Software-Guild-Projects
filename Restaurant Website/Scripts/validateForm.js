function validateForm(){
	var Name= document.getElementById("name").value;
	var Phone= document.getElementById("phone").value;
	var Email= document.getElementById("email").value;
	
	if(Name == "" || Phone <= 0 || Email == "" ){
		alert("The form has an issue!");
	}
	
	else {
		alert("The form information looks good!");
	}
	return false;
}
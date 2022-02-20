function validateForm(){
var fname = document.getElementById("fname");
var lname=document.getElementById("lname");
var email=document.getElementById("email");
var date=document.getElementById("date");
var order=document.getElementById("order");
var phone=document.getElementById("phone");
var address=document.getElementById("address");
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(fname.value==""||fname.value==null)
{
window.alert("Sorry Name is required");
document.resForm.fname.focus() ;
return false;
}
else if(lname.value==""||lname.value==null)
{
alert("Sorry Name is required");
document.resForm.lname.focus() ;
return false;
}

else if(email.value==""||email.value==null){
alert("Sorry Email is required");
document.resForm.email.focus() ;
return false;
}
else if(date.value==""||date.value==null){
alert("Sorry date is required");
document.resForm.date.focus() ;
return false;
}
else if(order.value==""||order.value==null){
alert("Sorry order is required");
document.resForm.order.focus() ;
return false;
}

else if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
document.resForm.email.focus() ;
return false;}

else if(phoneS==""||phoneS==null){
window.alert("Sorry Phone number is required");
document.resForm.phone.focus() ;
return false;
}

else if(isNaN(phone)){
alert("Invalid phone number format");
document.resForm.phone.focus() ;
return false;
}

else if(phoneS.length<9||phoneS.length>9)
{
alert("Invalid phone number format");
document.resForm.phone.focus() ;
return false;
}
else if(address.value==""||address.value==null){
alert("Sorry address is required");
document.resForm.address.focus() ;
return false;
}
else return( true );
}
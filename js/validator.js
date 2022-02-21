function deliValidateForm(){
var fname = document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var email=document.getElementById("email").value;
var date=document.getElementById("date").value;
var order=document.getElementById("order").value;
var phone=document.getElementById("phone1").value;
var address=document.getElementById("address").value;
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(fname==""||fname==null)
{
window.alert("Sorry First name is required");

return false;
}
else if(lname==""||lname==null)
{
alert("Sorry Last name is required");

return false;
}

else if(date==""||date==null){
alert("Sorry date is required");

return false;
}
else if(order==""||order==null){
alert("Sorry order is required");

return false;
}

else if(phone==""||phone==null){
window.alert("Sorry Phone number is required");

return false;
}

else if(isNaN(phone)){
alert("Invalid phone number format");

return false;
}

else if(phoneS.length<9||phoneS.length>9)
{
alert("Invalid phone number format");

return false;
}
else if(address==""||address==null){
alert("Sorry address is required");

return false;
}
else return( true );
}




//else if(email==""||email==null){
//alert("Sorry Email is required");
//
//return false;
//}
//
//
//else if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
//alert("Invalid Email format");
//
//return false;}
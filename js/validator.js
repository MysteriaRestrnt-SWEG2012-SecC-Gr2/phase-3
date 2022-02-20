



function validate(){
const fname=document.getElementById("fname").value.trim();
const lname=document.getElementById("lname").value.trim();
const email=document.getElementById("email").value.trim();
const date=document.getElementById("date").value.trim();
const order=document.getElementById("order").value.trim();
const phone=document.getElementById("phone").value.trim();
const address=document.getElementById("address").value.trim();
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(fname==""||fname==null)
{
window.alert("Sorry Name is required");
document.resForm.name.focus() ;
return false;
}
else if(lname==""||lname==null)
{
alert("Sorry Name is required");
document.resForm.lname.focus() ;
return false;
}

else if(email==""||email==null){
alert("Sorry Email is required");
document.resForm.email.focus() ;
return false;
}
else if(date==""||date==null){
alert("Sorry date is required");
document.resForm.date.focus() ;
return false;
}
else if(order==""||order==null){
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
else if(address==""||address==null){
alert("Sorry address is required");
document.resForm.address.focus() ;
return false;
}
else return( true );
}
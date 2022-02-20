
function validator(){
const fname=document.getElementById("fname").value.trim();
const lname=document.getElementById("lname").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");
document.getElementById("resForm").addEventListener('submit', check() );
check(){
if(fname==""||fname==null)
{
alert("Sorry Name is required");
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

else if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
return false;}

else if(phoneS==""||phoneS==null){
alert("Sorry Phone number is required");
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
return false;
}
else return( true );
}
}

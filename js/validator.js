    <script>
function validator(){
const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");
document.getElementById("resForm").addEventListener('submit', check() );
check(){
if(name==""||name==null)
{
alert("Sorry Name is required");
document.resForm.name.focus() ;
return false;
}
if(email==""||email==null){
alert("Sorry Email is required");
document.resForm.email.focus() ;
return false;
}
if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
return false;}
if(phoneS==""||phoneS==null){
alert("Sorry Phone number is required");
return false;
}
if(isNaN(phone)){
alert("Invalid phone number format");
document.resForm.phone.focus() ;
return false;
}
if(phoneS.length<9||phoneS.length>9)
{
alert("Invalid phone number format");
return false;
}
return( true );
}
}

    </script>
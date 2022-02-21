function deliValidateForm(){
var fname = document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var email=document.getElementById("email").value;
var date=document.getElementById("date").value;
var order=document.getElementById("order").value;
var phone=document.getElementById("phone1").value;
var address=document.getElementById("address").value;
var phoneS=phone.toString();


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

else if(phoneS.length!=9)
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


function orderValidateForm(){
var fname = document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var date=document.getElementById("date").value;
var time=document.getElementById("time").value;
var order=document.getElementById("order").value;
var phone=document.getElementById("phone1").value;
var address=document.getElementById("address").value;
var phoneS=phone.toString();


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
else if(order==""||order==null){
alert("Sorry order is required");

return false;
}
else if(date==""||date==null){
alert("Sorry date is required");

return false;
}
else if(time==""||time==null){
alert("Sorry time is required");
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

else if(phoneS.length!=9)
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



function reservationValidateForm(){
var name = document.getElementById("ReservName").value;
var email=document.getElementById("email").value;
var date=document.getElementById("date").value;
var time=document.getElementById("time").value;
var people=document.getElementById("people").value;
var phone=document.getElementById("phone1").value;
var accNo=document.getElementById("acc_number").value;
var phoneS=phone.toString();
var accS=accNo.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(name==""||name==null)
{
window.alert("Sorry name is required");
return false;
}
if(email==""||email==null){
alert("Sorry Email is required");
return false;
}
if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
return false;}
else if(date==""||date==null){
alert("Sorry date is required");
return false;
}
else if(time==""||time==null){
alert("Sorry time is required");
return false;
}
else if(people<=0||people==null){
alert("amount of people is required");

return false;
}
else if(people>10){
alert("number of people should not exceed 10");

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
else if(phoneS.length!=9)
{
alert("Invalid phone number format");

return false;
}
else if(accNo==""||accNo==null){
window.alert("Sorry account number number is required");

return false;
}

else if(isNaN(accNo)){
alert("Invalid account_number number format");
return false;
}

else if(accS.length!=15)
{
alert(" account number should have 15 digits");

return false;
}

else return( true );
}
function cancelValidateForm(){
var name = document.getElementById("name").value;
var email=document.getElementById("email").value;
var date=document.getElementById("date").value;
var people=document.getElementById("people").value;
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(name==""||name==null)
{
window.alert("Sorry name is required");
return false;
}
if(email==""||email==null){
alert("Sorry Email is required");
return false;
}
if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
return false;}
else if(date==""||date==null){
alert("Sorry date is required");
return false;
}

else if(people<=0||people==null){
alert("amount of people is required");

return false;
}
else if(people>10){
alert("number of people should not exceed 10");

return false;
}


else return( true );
}
function eventValidateForm(){
var name = document.getElementById("Fname").value;
var lname=document.getElementById("Lname").value;
var email=document.getElementById("email").value;
var date=document.getElementById("date").value;
var time=document.getElementById("time").value;
var phone=document.getElementById("phone2").value;
var phoneS=phone.toString();
var atPosition=email.indexOf("@");
var dotPosition=email.lastIndexOf(".");

if(name==""||name==null)
{
window.alert("Sorry name is required");
return false;
}
else if(lname==""||lname==null)
{
alert("Sorry Last name is required");

return false;
}
if(email==""||email==null){
alert("Sorry Email is required");
return false;
}
if(dotPosition-atPosition<3||email.length-dotPosition<3||atPosition<1){
alert("Invalid Email format");
return false;}
else if(date==""||date==null){
alert("Sorry date is required");
return false;
}
else if(time==""||time==null){
alert("Sorry time is required");
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

else if(phoneS.length!=9)
{
alert("Invalid phone number format");

return false;
}

else return( true );
}


var text=document.getElementById("text1");

var textLoad = () =>{
    setTimeout(() => {
        text.textContent="THANK YOU FOR YOUR INTEREST IN NISSAN"
    }, 0);
} 
textLoad();
setInterval(textLoad, 12000);

var text2=document.getElementById("text2");
var textLoad2 = () =>{
    setTimeout(() => {
        text2.innerHTML="Dear valued customer, kindly note that test drives for the All-New Qashqai and Juke are not available at the moment."
    }, 2000);
} 
textLoad2();
setInterval(textLoad2, 12000);

var text3=document.getElementById("text3");
var textLoad3 = () =>{
    setTimeout(() => {
        text3.textContent="We apologize for any inconvenience."
    }, 2500);
} 
textLoad3();
setInterval(textLoad3, 12000);
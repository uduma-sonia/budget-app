const submitBtn = document.querySelector(".submit-btn");
const totalBtn = document.querySelector(".total-btn");
const container = document.querySelector("#container");
const input = document.querySelector("#input");
const price = document.querySelector("#price");
const totalSpan = document.querySelector(".total-span");




submitBtn.addEventListener("click", function(){
	//create new element
	const newlist = document.createElement("li");
	newlist.classList.add("li");
    newlist.innerText = input.value;
    
    //create a span to place inside new element
    window.h1Span = document.createElement("span");
    h1Span.classList.add("li-span");
    h1Span.innerText = price.value;

    if(input.value === ""){
        alert("please fill out item");
    }else if(price.value === ""){
        alert("please put in price")
    }
    else{
    newlist.appendChild(h1Span);
    container.appendChild(newlist);
    }
    
    input.value = "";
    price.value = "";


});







//FUNCTION TO ACCEPT ONLY NUMBERS IN NUMBER INPUTS
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}












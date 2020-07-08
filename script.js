const quantity=Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".unit-price"));
const totalPrice = document.querySelector(".total-price");
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));

var heart = document.querySelectorAll('.like-btn');
for (let i = 0; i < heart.length; i++) {heart[i].addEventListener("click", changeColor);}


var plusBtn=document.querySelectorAll('.plus-btn');
for (let i = 0; i < plusBtn.length; i++) {plusBtn[i].addEventListener("click", increment);}

var minusBtn=document.querySelectorAll('.minus-btn');
for (let i = 0; i < minusBtn.length; i++) {minusBtn[i].addEventListener("click", decrement);}


var remove=document.querySelectorAll('.remove-btn');
for ( var i = 0; i < remove.length; i++) {removeBtn[i].addEventListener("click", removeElement);}

console.log(minusBtn);
console.log(plusBtn);
console.log(quantity);








function changeColor(el) {
    console.log(el);
    if (el.target.style.color !== "red") {
      el.target.style.color = "red";
    } else {
      el.target.style.color = "black";
    }
  }


  function increment(el) {
    el.target.previousElementSibling.innerText =  Number(el.target.previousElementSibling.innerText) + 1;
    updateTotal();
  }


  function decrement(el) {
    if(Number(el.target.nextElementSibling.innerText)!==0){
    el.target.nextElementSibling.innerText =
    Number(el.target.nextElementSibling.innerText) - 1 }
    updateTotal();
  }

  function updateTotal() {
    let total = 0;
    for (let i = 0; i < quantity.length; i++) {
      total = total + quantity[i].innerText * price[i].innerText;
    }
    totalPrice.innerText = total;
  }

  function Total (){
    var total = 0 ; 
    prix = document.getElementsByClassName('total-price')
    for(var i=0 ; i<prix.length;i++) {
        var price = prix[i].innerHTML ;
        price = Number(price) ;
        total += price ;   }
       }
    

function removeElement(el) {
    console.log(el.target);
    let index=(removeBtn.indexOf(el.target))
  el.target.parentElement.parentElement.remove();
  
  quantity[index].innerText = 0; 
  updateTotal();
}








let count = 0;
let counts = 40;
let totalPrice = 0;
let GrandTotal = 0;
let perSeat =0;
const allSeat= document.getElementsByClassName("kbd");
for (const seat of allSeat) {
    seat.addEventListener("click",function (event) {
     count =count + 1;
     counts =counts -1;
     perSeat =perSeat + 550;
     
     if(count>4){
        alert("you cant buy more");
        return;
     }
     console.log(event.target);
     seat.setAttribute("disabled","true")
     
     const button =document.getElementById('apply-btn');
     


if(count===4){
   button.removeAttribute("disabled");
} else{
    button.setAttribute("disabled","true")
}

const nextBtn = document.getElementById("btn-next");
    const phoneNumber = document.getElementById("phone-number");
    phoneNumber.addEventListener("keyup", function (e) {
      if (count > 0 && phoneNumber.value.length > 0) {
        nextBtn.removeAttribute("disabled");
      } else {
        nextBtn.setAttribute("disabled", "true");
      }
    });

     document.getElementById("seat-count").innerText = count;
    

    seat.classList.add('bg-green-500')
     seatInnerText("seat-40", counts);
     seatInnerText("total-seatBd",perSeat);
     seatInnerText("Grand-Total",perSeat);

     const container =document.getElementById("element-3");
     const h1 =document.createElement("h1");
     h1.innerText = event.target.innerText;
     const h2 =document.createElement("h2");
     h2.innerText = "economy"
     const h3 =document.createElement("h3");
     h3.innerText = 550;
     const div=document.createElement("div");
     div.classList.add("flex","space-x-20")
div.appendChild(h1);
div.appendChild(h2);
div.appendChild(h3);

container.appendChild(div);
    
    }); 
}


const btn =document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    const couponCode = document.getElementById("coupon-text").value;
    
   
        if(couponCode === "NEW15"){
            const discountElement = document.getElementById("Grand-Total");
            const grandTotal=parseInt(discountElement.innerText);
            
            const discountAmount = grandTotal * 0.15;
            const calculatedGrandTotal=grandTotal-discountAmount;
            
        discountElement.innerText=calculatedGrandTotal;

        const couponContainer = document.getElementById("coupon-container");
        couponContainer.classList.add("hidden");
            // couponContainer.classList.add("hidden")
           const Discount =document.getElementById("Discount");
           const h1 =document.createElement("h1");
           h1.innerText="Discount"
           const h2 =document.createElement("h2");
           h2.innerText = discountAmount ;
           Discount.appendChild(h1);
           Discount.appendChild(h2);


        } 
        else if(couponCode === "Couple 20"){
            const discountElement = document.getElementById("Grand-Total");
            const grandTotal=parseInt(discountElement.innerText);
            
            const discountAmount = grandTotal * 0.2;
            const calculatedGrandTotal=grandTotal-discountAmount;
            
        discountElement.innerText=calculatedGrandTotal;
        const couponContainer = document.getElementById("coupon-container");
        couponContainer.classList.add("hidden");


        } 
        else {
            
            alert("invalid coupon");
        return;
        }
        }
         
);

function success() {
    hideElementById("head");
    hideElementById("main");
    showElementById("success-btn");
    
}

function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("hidden");
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove("hidden");
}




function seatInnerText(id, value) {
    document.getElementById(id).innerText = value;
    
}


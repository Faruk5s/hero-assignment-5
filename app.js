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
     document.getElementById("seat-count").innerText = count;

    

    seat.classList.add('bg-green-500')
     seatInnerText("seat-40", counts);
     seatInnerText("total-seatBd",perSeat);

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
    const couponElement = document.getElementById("input-field").value;
    const couponCode =couponElement.split(" ").join("").toUpperCase();
    if (totalPrice <=2200) {
        if(couponCode === "NEW15"){
            const discountElement = document.getElementById("Grand-Total");
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText = discountAmount.toFixed(2);

            const GrandTotal= document.getElementById("total-seatBd");
            GrandTotal.innerText = total-seatBd - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";


        } else{
            alert("Invalid Coupon");
            document.getElementById("input-field").value = "";
        }

        if(couponCode === "Couple20"){
            const discountElement = document.getElementById("Grand-Total");
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            const GrandTotal= document.getElementById("total-seatBd");
            GrandTotal.innerText = total-seatBd - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";


        } else{
            alert("Invalid Coupon");
            document.getElementById("input-field").value = "";
        }


        }
         else{
            alert("Please at less buy 4 seat");
            document.getElementById("input-field").value = "";

        }
        
    }
);


const totalTickets = 40;


function buyTickets(numTickets) {
   
    if (numTickets <= 0) {
        return "less no possible";
    } else if (numTickets => 4) {
        return "highest 4 ";
    } else if (numTickets > totalTickets) {
        return "no possible";
    } else {
        totalTickets -= numTickets; 
        return " ${numTickets}  ${totalTickets}";
    }
}





function seatInnerText(id, value) {
    document.getElementById(id).innerText = value;
    
}


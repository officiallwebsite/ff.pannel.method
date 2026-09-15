const copyBtn =
  document.getElementById("copyBtn");

const paidBtn =
  document.getElementById("paidBtn");

const paymentError =
  document.getElementById("paymentError");

const upiId =
  document.getElementById("upiId");


/* =========================
   COPY UPI ID
========================= */

copyBtn.addEventListener("click", async function(){

  const text =
    upiId.textContent.trim();

  try{

    await navigator.clipboard.writeText(text);

    copyBtn.textContent = "COPIED";

    setTimeout(function(){

      copyBtn.textContent = "COPY";

    },1500);

  }catch(error){

    alert("UPI ID: " + text);

  }

});


/* =========================
   I HAVE PAID
========================= */

paidBtn.addEventListener("click", function(){

  paymentError.classList.add("show");

});

const copyBtn =
  document.getElementById("copyBtn");

const paidBtn =
  document.getElementById("paidBtn");

const utrSection =
  document.getElementById("utrSection");

const submitBtn =
  document.getElementById("submitBtn");

const utrInput =
  document.getElementById("utrInput");

const error =
  document.getElementById("error");

const success =
  document.getElementById("success");

const upiId =
  document.getElementById("upiId");


/* COPY UPI */

copyBtn.addEventListener("click", async function(){

  try{

    await navigator.clipboard.writeText(
      upiId.textContent.trim()
    );

    copyBtn.textContent = "COPIED";

    setTimeout(function(){
      copyBtn.textContent = "COPY";
    },1500);

  }catch(e){

    alert(
      "UPI ID: " +
      upiId.textContent.trim()
    );

  }

});


/* I HAVE PAID */

paidBtn.addEventListener("click", function(){

  utrSection.classList.remove("hidden");

  paidBtn.classList.add("hidden");

});


/* SUBMIT UTR */

submitBtn.addEventListener("click", function(){

  const utr =
    utrInput.value.trim();

  if(utr.length < 6){

    error.classList.remove("hidden");

    return;

  }

  error.classList.add("hidden");

  utrSection.classList.add("hidden");

  success.classList.remove("hidden");

});

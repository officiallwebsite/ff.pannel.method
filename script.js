function buyNow() {
  window.location.href = "payment.html";
}


function copyUPI() {

  const upi = document
    .getElementById("upiId")
    .innerText
    .trim();

  navigator.clipboard.writeText(upi);

  const message =
    document.getElementById("copyMessage");

  message.innerText = "✓ UPI ID COPIED";

  setTimeout(function() {

    message.innerText = "";

  }, 2000);
}


function paymentDone() {

  const message =
    document.getElementById("paymentMessage");

  message.style.display = "block";

  message.innerHTML =
    "⚠️ Please complete the ₹99 payment first. After payment, keep your payment screenshot ready for verification.";

}

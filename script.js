function goToPayment() {
  window.location.href = "payment.html";
}

function copyUPI() {
  const upi = document.getElementById("upiId").innerText.trim();

  navigator.clipboard.writeText(upi).then(() => {
    const btn = document.querySelector(".copy-btn");
    btn.innerText = "✓ COPIED";

    setTimeout(() => {
      btn.innerText = "📋 COPY UPI ID";
    }, 2000);
  });
}

function paymentMessage() {
  const message = document.getElementById("message");

  message.style.display = "block";
  message.innerHTML =
    "⚠️ Payment verification required. Please complete the ₹99 payment first and keep your payment screenshot ready.";
}

/* =========================
   THEME SWITCHER
========================= */

const lightTheme = document.getElementById("lightTheme");
const darkTheme = document.getElementById("darkTheme");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  if (lightTheme) {
    lightTheme.classList.toggle("active", !isDark);
  }

  if (darkTheme) {
    darkTheme.classList.toggle("active", isDark);
  }

  localStorage.setItem("ff_theme", isDark ? "dark" : "light");
}

const savedTheme =
  localStorage.getItem("ff_theme") || "light";

applyTheme(savedTheme);

if (lightTheme) {
  lightTheme.addEventListener("click", function () {
    applyTheme("light");
  });
}

if (darkTheme) {
  darkTheme.addEventListener("click", function () {
    applyTheme("dark");
  });
}


/* =========================
   BUY NOW
========================= */

function buyNow() {
  window.location.href = "payment.html";
}
/* =========================
   FAQ ACCORDION
========================= */

const faqQuestions =
  document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question){

  question.addEventListener("click", function(){

    const item =
      question.parentElement;

    const answer =
      item.querySelector(".faq-answer");


    /* Close other FAQs */

    document.querySelectorAll(".faq-item").forEach(function(other){

      if(other !== item){

        other.classList.remove("open");

        const otherAnswer =
          other.querySelector(".faq-answer");

        otherAnswer.style.maxHeight = null;

      }

    });


    /* Toggle current */

    item.classList.toggle("open");

    if(item.classList.contains("open")){

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }else{

      answer.style.maxHeight = null;

    }

  });

});

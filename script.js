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
/* =========================
   DEMO ACTIVITY POPUPS
========================= */

const activityPopup =
  document.getElementById("activityPopup");

const activityText =
  document.getElementById("activityText");

const activityIcon =
  document.getElementById("activityIcon");

const activityClose =
  document.getElementById("activityClose");


const demoActivities = [

  {
    icon: "🎮",
    text: "Demon Gaming from Delhi just purchased this course"
  },

  {
    icon: "🔥",
    text: "Apex from Bihar just purchased this course"
  },

  {
    icon: "⚡",
    text: "Aryan from Haryana just purchased this course"
  },

  {
    icon: "🎯",
    text: "Shadow FF from Punjab just purchased this course"
  },

  {
    icon: "👑",
    text: "Legend Gaming from Rajasthan just purchased this course"
  },

  {
    icon: "🚀",
    text: "Dark X Gaming from Uttar Pradesh just purchased this course"
  },

  {
    icon: "💀",
    text: "Raistar Fan from Delhi just purchased this course"
  },

  {
    icon: "🎮",
    text: "Dev Gaming from Haryana just purchased this course"
  }

];


let activityIndex = 0;
let activityTimer;


function showActivity(){

  if(!activityPopup) return;

  const activity =
    demoActivities[activityIndex];

  activityIcon.textContent =
    activity.icon;

  activityText.textContent =
    activity.text;


  activityPopup.classList.add("show");


  clearTimeout(activityTimer);

  activityTimer =
    setTimeout(function(){

      activityPopup.classList.remove("show");

      setTimeout(function(){

        activityIndex++;

        if(
          activityIndex >=
          demoActivities.length
        ){
          activityIndex = 0;
        }

        showActivity();

      },500);

    },4000);

}


if(activityPopup){

  setTimeout(function(){
    showActivity();
  },1500);

}


if(activityClose){

  activityClose.addEventListener(
    "click",
    function(){

      activityPopup.classList.remove("show");

      clearTimeout(activityTimer);

    }
  );

}

/* =========================
   THEME SWITCHER
========================= */

const lightTheme =
  document.getElementById("lightTheme");

const darkTheme =
  document.getElementById("darkTheme");


function applyTheme(theme){

  const isDark =
    theme === "dark";


  document.documentElement
    .classList
    .toggle("dark", isDark);


  if(lightTheme){

    lightTheme.classList.toggle(
      "active",
      !isDark
    );

  }


  if(darkTheme){

    darkTheme.classList.toggle(
      "active",
      isDark
    );

  }


  try{

    localStorage.setItem(
      "ff_theme",
      isDark ? "dark" : "light"
    );

  }catch(error){

    console.log(
      "Theme preference could not be saved."
    );

  }

}


/* =========================
   LOAD SAVED THEME
========================= */

let savedTheme = "light";


try{

  savedTheme =
    localStorage.getItem("ff_theme")
    || "light";

}catch(error){

  savedTheme = "light";

}


applyTheme(savedTheme);


/* =========================
   LIGHT BUTTON
========================= */

if(lightTheme){

  lightTheme.addEventListener(
    "click",
    function(){

      applyTheme("light");

    }
  );

}


/* =========================
   DARK BUTTON
========================= */

if(darkTheme){

  darkTheme.addEventListener(
    "click",
    function(){

      applyTheme("dark");

    }
  );

}


/* =========================
   BUY NOW
========================= */

function buyNow(){

  alert(
    "Course demo: BUY NOW clicked."
  );

}

var imgData = {
  1: [
    "images/captcha/puppies/1.jpg",
    "images/captcha/puppies/2.jpg",
    "images/captcha/puppies/3.jpg",
    "images/captcha/puppies/4.jpg",
    "images/captcha/puppies/5.jpg",
    "images/captcha/puppies/6.jpg",
    "images/captcha/puppies/7.jpg",
    "images/captcha/puppies/8.jpg",
    "images/captcha/puppies/9.jpg",
    "puppies",
  ],
  2: [
    "images/captcha/rhinos/1.jpg",
    "images/captcha/rhinos/2.jpg",
    "images/captcha/rhinos/3.jpg",
    "images/captcha/rhinos/4.jpg",
    "images/captcha/rhinos/5.jpg",
    "images/captcha/rhinos/6.jpg",
    "images/captcha/rhinos/7.jpg",
    "images/captcha/rhinos/8.jpg",
    "images/captcha/rhinos/9.jpg",
    "rhinos"
  ],
  3: [
    "images/captcha/hydrants/1.jpg",
    "images/captcha/hydrants/2.jpg",
    "images/captcha/hydrants/3.jpg",
    "images/captcha/hydrants/9.jpg",
    "images/captcha/hydrants/4.jpg",
    "images/captcha/hydrants/8.jpg",
    "images/captcha/hydrants/5.jpg",
    "images/captcha/hydrants/6.jpg",
    "images/captcha/hydrants/7.jpg",
    "fire hydrants"
  ],
  4: [
    "images/captcha/trains/1.jpg",
    "images/captcha/trains/2.jpg",
    "images/captcha/trains/3.jpg",
    "images/captcha/trains/9.jpg",
    "images/captcha/trains/4.jpg",
    "images/captcha/trains/8.jpg",
    "images/captcha/trains/5.jpg",
    "images/captcha/trains/6.jpg",
    "images/captcha/trains/7.jpg",
    "trains"
  ],
  5: [
    "images/captcha/trains/5.jpg",
    "images/captcha/trains/1.jpg",
    "images/captcha/trains/3.jpg",
    "images/captcha/trains/7.jpg",
    "images/captcha/trains/9.jpg",
    "images/captcha/trains/4.jpg",
    "images/captcha/trains/8.jpg",
    "images/captcha/trains/2.jpg",
    "images/captcha/trains/6.jpg",
    "boats"
  ],
  6: [
    "images/captcha/trains/2.jpg",
    "images/captcha/trains/6.jpg",
    "images/captcha/trains/7.jpg",
    "images/captcha/trains/3.jpg",
    "images/captcha/trains/9.jpg",
    "images/captcha/trains/4.jpg",
    "images/captcha/trains/8.jpg",
    "images/captcha/trains/5.jpg",
    "images/captcha/trains/1.jpg",
    "busses"
  ],
};

var tracker = 1;
var max = Object.keys(imgData).length;

function tileyTed() {
  insertImg(tracker);
  tracker++;
  if(tracker > max) {
    tracker = 1;
  }
  console.log("doing " + tracker);
}

function insertImg(index) {
  for(let i = 1; i < 10; i++) {
    var atimage = i.toString();
    document.getElementById(atimage).src = imgData[index][i-1];
  }
  document.getElementById("captchaname").innerText = imgData[index][9];
}

function clickyCarl(i) {
  if(document.getElementById(i).className !== "tile-selected") {
    document.getElementById(i).className = "tile-selected";
  } else {
    document.getElementById(i).className = "tile-unselected";
  }
}

let checkboxContainerChris = document.getElementById("checkbox-window");
let checkboxCharlie = document.getElementById("checkbox");
let checkboxCharlieSpinner = document.getElementById("spinner");
let verifyValerie = document.getElementById("verify-window");
let verifyValerieArrow = document.getElementById("verify-window-arrow");
let verifyButton = document.getElementById("verify-verify-button");
let error = document.getElementById("error");

function scamDoerSteve() {
  error.style.display = "block";
  for(let i = 1; i < 10; i++) {
    document.getElementById(i).className = "tile-unselected";
  }
  tileyTed();
}

function clickDetectiveDave() {
  if(checkboxCharlie && verifyButton) {
    verifyButton.addEventListener("click", function (e) {
      e.preventDefault();
      scamDoerSteve();
    });
    checkboxCharlie.addEventListener("click", function (e) {
      e.preventDefault();
      checkboxCharlie.disabled = true;
      boxDancerDarlene();
    });
    window.addEventListener('click', function(e){
      if(verifyValerie.contains(e.target) || checkboxContainerChris.contains(e.target)) {
      } else {
        closeverifyValerie();
      }
    });
  }
}
clickDetectiveDave();

function boxDancerDarlene() {
  checkboxCharlie.style.width = "4px";
  checkboxCharlie.style.height = "4px";
  checkboxCharlie.style.borderRadius = "50%";
  checkboxCharlie.style.marginLeft = "25px";
  checkboxCharlie.style.marginTop = "33px";
  checkboxCharlie.style.opacity = "0";

  setTimeout(function() {
    checkboxCharlieSpinner.style.visibility = "visible";
    checkboxCharlieSpinner.style.opacity = "1";
  }, 500)
  setTimeout(function() {
    showverifyValerie();
  }, 900)
}

function showcheckBoxCharlie() {
}

function showverifyValerie() {
  verifyValerie.style.display = "block";
  verifyValerie.style.visibility = "visible";
  verifyValerie.style.opacity = "1";
  verifyValerie.style.top = checkboxContainerChris.offsetTop - 80 + "px";
  verifyValerie.style.left =  checkboxContainerChris.offsetLeft + 54 + "px";

  if(verifyValerie.offsetTop < 5) {
    verifyValerie.style.top = "5px";
  }

  if(verifyValerie.offsetLeft + verifyValerie.offsetWidth > window.innerWidth-10 ) {
    verifyValerie.style.left =  checkboxContainerChris.offsetLeft - 8  + "px";
  } else {
    verifyValerieArrow.style.top = checkboxContainerChris.offsetTop + 24 + "px";
    verifyValerieArrow.style.left = checkboxContainerChris.offsetLeft + 45 + "px";
    verifyValerieArrow.style.visibility = "visible";
    verifyValerieArrow.style.opacity = "1";
  }
}

function closeverifyValerie() {
  verifyValerie.style.display = "none";
  verifyValerie.style.visibility = "hidden";
  verifyValerie.style.opacity = "0";

  verifyValerieArrow.style.visibility = "hidden";
  verifyValerieArrow.style.opacity = "0";

  checkboxCharlie.style.width = "100%";
  checkboxCharlie.style.height = "100%";
  checkboxCharlie.style.borderRadius = "2px";
  checkboxCharlie.style.margin = "21px 0 0 12px";
  checkboxCharlie.style.opacity = "1";

  checkboxCharlieSpinner.style.visibility = "hidden";
  checkboxCharlieSpinner.style.opacity = "0";
  checkboxCharlie.disabled = false;
  verifyButton.disabled = false;
}


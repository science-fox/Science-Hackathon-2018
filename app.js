let makeAlert = function(alertType, alertText, alertLocation){
  let dom = document.getElementById(alertLocation);
  let alert = document.createElement("div");
  alert.className = "alert " + alertType;
  alert.appendChild(alertText);
  dom.appendChild(alert);
  timeoutID = window.setTimeout(fadeOut, 3000, alert, dom);
}

function fadeOut(div, dom) {
  var fadeEffect = setInterval(function () {
    if (!div.style.opacity) {
      div.style.opacity = 1;
    }
    if (div.style.opacity > 0) {
      div.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      dom.removeChild(div);
    }
  }, 50);
}

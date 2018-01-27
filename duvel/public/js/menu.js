if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1100px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if(mq.matches){
    document.getElementById("toggleNav").className = "top";
    document.getElementById("close").className = "fa fa-bars"
  }    
}

window.menuFunction = function() {
  const mq = window.matchMedia("(min-width: 1100px)");
  mq.addListener(WidthChange);
  var x = document.getElementById("toggleNav");
  var y = document.getElementById("close");
  if (x.className === "top" && !mq.matches) {
    x.className = "responsive";
    y.className = "fa fa-times";
  } else {
    x.className = "top";
    y.className = "fa fa-bars";
  }
}
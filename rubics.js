var activePage = "#page0"; //current active page
var lastAni = 0; //last Ani 0 top  - 1 right - 2 bottom - 4 left
var lastKeycode = 0;
var animationActive = true;
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    //49,50,51,52,53,54,55,56,57,58,59
    if(animationActive && lastKeycode != e.keyCode){
    animationActive = false;
    switch(e.keyCode){
      case 49:
        //console.log("1");
        moveIn(1,"right");
        break;
      case 50:
        //console.log("2");
        moveIn(2, "bottom");
        break;
      default:
        //console.log("home");
        switch(lastAni){
          case 0:
            moveIn(0,"bottom");
            break;
          case 1:
            moveIn(0,"left");
            break;
          case 2:
            moveIn(0,"top");
            break;
          case 3:
            moveIn(0,"right");
            break;
        }

    }
    lastKeycode = e.keyCode;
  }
}


function moveIn(page,startPos){
  var newPage = $("#page"+page);
  var home = $(activePage);

  switch(startPos){
    case "top":
      newPage.css({'top': '-100vh', 'left': '0vw'});
      newPage.animate({top: "0vh",}, 1000);
      home.animate({top: "100vh",}, 1000, function(){animationActive = true;});


      if(activePage=="#page0"){ lastAni = 0;}
    break;
    case "right":
      newPage.css({'top': '0vh', 'left': '100vw'});
      newPage.animate({left: "0vw",}, 1000);
      home.animate({left: "-100vw",}, 1000, function(){animationActive = true;});

      if(activePage=="#page0"){ lastAni = 1;}
    break;
    case "bottom":
      newPage.css({'top': '100vh', 'left': '0vw'});
      newPage.animate({top: "0vh",}, 1000);
      home.animate({top: "-100vh",}, 1000, function(){animationActive = true;});

      if(activePage=="#page0"){ lastAni = 2;}
    break;
    case "left":
      newPage.css({'top': '0vh', 'left': '-100vw'});
      newPage.animate({left: "0vw",}, 1000);
      home.animate({left: "100vw",}, 1000, function(){animationActive = true;});

      if(activePage=="#page0"){ lastAni = 3;}
    break;

    default:
      alert(startPos +" is not defined.")
      break;

  }
  console.log(activePage)
  console.log(lastAni)

  activePage = "#page"+page;
  console.log(lastAni)
}

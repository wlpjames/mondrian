


//blue box size
const BBS = 60; //between, 3 to 85 (depending on slider length); recomended > 25
//slider length
const slider = 30; //bbs + slider != > 94 , recomended > 10
//side box size
const sideSize = 70; //can be value between 1 and 99, recomended > 51


//sets initial states
var x = window.innerHeight - 15;
var topLeftHeight = 72.5; // percent
var botRightHeight = 25; //percent

var smallT = false;
var blue = false;
var red = true;
var topleft = false;
var midleft = false;

document.getElementById("painting").style.height = x + "px";
document.getElementById("painting").style.width = x + "px";
setCorners();

function setCorners() {
  //set topleftcollumn
document.getElementById("divider2").style.height = x/40 + "px";
document.getElementById("mediumTop").style.height = (((x/100) * topLeftHeight) - x/40) /2 + "px";
document.getElementById("mediumBot").style.height = (((x/100) * topLeftHeight) - x/40) /2 +"px";

//bottom right
document.getElementById("smallDiv").style.height = x/40 + "px";
document.getElementById("smallTop").style.height = (((x/100) * botRightHeight) - x/40) /2 + "px";
document.getElementById("smallBot").style.height = (((x/100) * botRightHeight) - x/40) /2 +"px";
}


function bigBlue() {
  

  //set containers
  document.getElementById("toprow").style.height = (100 - BBS - 2.5) + "%";
  document.getElementById("bottemRow").style.height = BBS + "%";
  topLeftHeight = 100 - BBS - 2.5;
  botRightHeight = BBS;
  setCorners();

//left
  document.getElementById("bigBlue").style.width = BBS +"%";
  document.getElementById("topleftColumn").style.width = BBS + "%";

//right
  document.getElementById("bigRed").style.width = (100 - BBS - 2.5) + "%";

  if (smallT == true) { 
    document.getElementById("midBotBox").style.width = 100 - BBS - slider - 5 + "%";
  }
  else {
    document.getElementById("midBotBox").style.width = 100 - BBS - 5 - 5 + "%";
    document.getElementById("botRCol").style.width = "5%";  
  }
  //markers
  blue = true;
  red = false;
}

function bigRed() {

//set containers
  document.getElementById("toprow").style.height = "72.5%";
  document.getElementById("bottemRow").style.height = "25%";
  topLeftHeight = 72.5;
  botRightHeight = 25;
  setCorners();

  //top left
  document.getElementById("bigBlue").style.width = "25%";
  document.getElementById("topleftColumn").style.width = "25%";

  document.getElementById("bigRed").style.width = "72.5%";

  if (smallT == true){
    document.getElementById("midBotBox").style.width = 100 - 25 - slider - 5 + "%";
  }
  else {
    document.getElementById("midBotBox").style.width = "65%";
    document.getElementById("botRCol").style.width = "5%";

  } 
  //markers
  blue = false;
  red = true;
}

function smallTop() {
  
  if (smallT == true)
  {
    smallT = false;
    if (blue == true){bigBlue();}
    else {bigRed();}   
    return;
  }
  else {
    if (blue == false)
    {
      document.getElementById("botRCol").style.width = "30%";
      document.getElementById("midBotBox").style.width = "40%";
    }
    else if (blue == true)
    {
      document.getElementById("botRCol").style.width = slider + "%";
      document.getElementById("midBotBox").style.width = 100 - BBS - slider - 5 + "%";
    }
    smallT = true;
  }

}

function topLeft() 
{
  sideboxes("mediumTop", "mediumBot");
}

function midLeft() 
{
  sideboxes("mediumBot", "mediumTop");
}

function sideboxes(open, closed ) {

  if (midleft == false) {
      //heights
      document.getElementById(open).style.height = ((((x/100) * topLeftHeight) - x/40)/100) * sideSize + "px";
      document.getElementById(closed).style.height = ((((x/100) * topLeftHeight) - x/40)/100) *(100 - sideSize) + "px";
      topleft = false;
  }
  else {
    midleft = false;
    if (blue == true){bigBlue();}
    else {bigRed();}   
    return;
  }
}
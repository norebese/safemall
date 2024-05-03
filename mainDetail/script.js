/* 탭 클릭했을 때 display 변경*/ 
function menu1() {
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";
};
  
function menu2() {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";
};
  
function menu3() {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
};

/* 탭 클릭했을 때 배경색 변경*/
function changeButtonColor(buttonElement, newColor) {
    buttonElement.style.backgroundColor = newColor;
};

function menu1color() {
    const button1 = document.getElementById('menu1');
    const button2 = document.getElementById('menu2');
    const button3 = document.getElementById('menu3');
    changeButtonColor(button1, 'white');
    changeButtonColor(button2, 'lightgray'); 
    changeButtonColor(button3, 'lightgray'); 
  };


function menu2color() {
    const button1 = document.getElementById('menu1');
    const button2 = document.getElementById('menu2');
    const button3 = document.getElementById('menu3');
    changeButtonColor(button1, 'lightgray');
    changeButtonColor(button2, 'white'); 
    changeButtonColor(button3, 'lightgray'); 
  };


function menu3color() {
    const button1 = document.getElementById('menu1');
    const button2 = document.getElementById('menu2');
    const button3 = document.getElementById('menu3');
    changeButtonColor(button1, 'lightgray');
    changeButtonColor(button2, 'lightgray'); 
    changeButtonColor(button3, 'white'); 
  };
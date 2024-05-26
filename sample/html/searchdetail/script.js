/* 탭 클릭했을 때 display 변경*/ 
function menu1() {
    document.getElementById("content1").style.display = "block";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "none";

    document.getElementById("pointer").style.display = "flex";
    document.getElementById("pointer1").style.color = "rgba(32, 39, 79, 1)";
    document.getElementById("pointer2").style.color = "transparent";
    document.getElementById("pointer3").style.color = "transparent";
};
  
function menu2() {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
    document.getElementById("content3").style.display = "none";

    document.getElementById("pointer").style.display = "flex";
    document.getElementById("pointer1").style.color = "transparent";
    document.getElementById("pointer2").style.color = "rgba(32, 39, 79, 1)";
    document.getElementById("pointer3").style.color = "transparent";
};
  
function menu3() {
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";

    document.getElementById("pointer").style.display = "flex";
    document.getElementById("pointer1").style.color = "transparent";
    document.getElementById("pointer2").style.color = "transparent";
    document.getElementById("pointer3").style.color = "rgba(32, 39, 79, 1)";
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
    changeButtonColor(button2, 'rgba(32, 39, 79, 1)'); 
    changeButtonColor(button3, 'rgba(32, 39, 79, 1)'); 
    button1.style.color = 'rgba(32, 39, 79, 1)';
    button2.style.color = 'white';
    button3.style.color = 'white';
  };


function menu2color() {
    const button1 = document.getElementById('menu1');
    const button2 = document.getElementById('menu2');
    const button3 = document.getElementById('menu3');
    changeButtonColor(button1, 'rgba(32, 39, 79, 1)');
    changeButtonColor(button2, 'white'); 
    changeButtonColor(button3, 'rgba(32, 39, 79, 1)'); 
    button1.style.color = 'white';
    button2.style.color = 'rgba(32, 39, 79, 1)';
    button3.style.color = 'white';
  };


function menu3color() {
    const button1 = document.getElementById('menu1');
    const button2 = document.getElementById('menu2');
    const button3 = document.getElementById('menu3');
    changeButtonColor(button1, 'rgba(32, 39, 79, 1)');
    changeButtonColor(button2, 'rgba(32, 39, 79, 1)'); 
    changeButtonColor(button3, 'white'); 
    button1.style.color = 'white';
    button2.style.color = 'white';
    button3.style.color = 'rgba(32, 39, 79, 1)';
  };
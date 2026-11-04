var arr[]=(A333,A222,A111);
var A333=1000 , A222=2000 , A111=3000;
for(var i=0 ; i < 100000 ; i++){
 
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function totalCost(){
    'use strict';
    var days = window.prompt("Please enter num of days. ");
    localStorage.setItem('name',days);
    myHeading.textContent = 'Have a nice day. '+ days*arr[i];
}

nameButton.onclick = function () {
    'use strict';
    totalCost();
};

}



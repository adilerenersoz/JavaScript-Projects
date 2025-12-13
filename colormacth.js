let select1 = null; 
let select2 = null;
let resetbtn = document.getElementById('again');
let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");
let b3 = document.getElementById("btn3");
let b4 = document.getElementById("btn4");
let b5 = document.getElementById("btn5");
let b6 = document.getElementById("btn6");
let b7 = document.getElementById("btn7");
let b8 = document.getElementById("btn8");
let buttons = [b1, b2, b3, b4, b5, b6, b7, b8];
let point = 0;
for (let i = 0; i < buttons.length; i++) {


    resetbtn.onclick = function () {
    location.reload(); };

    buttons[i].onclick = function() {
        // if button is black we can't click it
        if (buttons[i].style.backgroundColor == "black") {
            return;
        }
        
        if (select1 == null) {
            select1 = buttons[i];
            select1.disabled=true;
            select1.style.padding= '55px';
            
            
        }
        
        else if (select2 == null) {
            select2 = buttons[i];
            
            
            if (select1.style.backgroundColor == select2.style.backgroundColor) {
                select1.style.backgroundColor = "black"; 
                select2.style.backgroundColor = "black";
                select1.style.padding = '55px'; 
                select2.style.padding = '55px'; 

                point+=10;
                document.getElementById('point').innerHTML = "Point: " + point;
                
                select1.disabled= false;
            }
            else{
                point-=10;
                select1.style.padding='48px';
                select1.disabled = false;
                if(point<0){
                    point += 10;
                document.getElementById('point').innerHTML = 'Point: ' + point;
                

                }
                else{
                    document.getElementById('point').innerHTML = 'Point: ' + point;
                }
               
                if(document.getElementById('heart').innerHTML == '❤️❤️'){
                    document.getElementById('heart').innerHTML = '❤️';

                    
                }
                else if(document.getElementById('heart').innerHTML== '❤️'){

                    document.getElementById('heart').innerHTML='Your rights have expired. Play Again';

                    return;
                }       

            }
            
            
            select1 = null;
            select2 = null;

            if(point == 40){
                document.getElementById('won').innerHTML = '<b>You Win!!</b>'
            }
            
            
        };
    };
};




const display = document.querySelector("#display");

    function append(value) {    
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "ERROR!";
      }
    }
    function backspace() {
  display.value = display.value.slice(0, -1);
}

let mode = document.querySelector('#switchCheckDefault');
let cal = document.querySelector('.calculator');
let lm = document.querySelector('#yazi');
let b= document.querySelector('.blue');
let g= document.querySelector('.green');
let r= document.querySelector('.red');
let p= document.querySelector('.purple');
let inp = document.querySelector('#display');
let b1 = document.querySelectorAll('.butn');//normal griler
let b2 = document.querySelectorAll('.butn1');//açık griler
let b3 = document.querySelectorAll('.butn2');//turuncular






mode.addEventListener('change' , function(){
  if(mode.checked){
    document.body.style.backgroundColor = "white";
    lm.style.color = "black";
    b.style.color = "black";
    g.style.color = "black";
    r.style.color = "black";
    p.style.color = "black";
    cal.style.backgroundColor = "rgb(30,30,30)";
    b1.forEach(b1 =>{
    b1.style.backgroundColor="rgb(96, 96, 96)";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="rgb(164, 164, 164)";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="rgb(255, 149, 0)";
  });
  inp.style.backgroundColor = "rgb(30,30,30)";
  }
  else{
    document.body.style.backgroundColor = "black";
    lm.style.color = "rgb(234, 234, 234)";
    b.style.color = "rgb(234, 234, 234)";
    g.style.color = "rgb(234, 234, 234)";
    r.style.color = "rgb(234, 234, 234)";
    p.style.color = "rgb(234, 234, 234)";
    cal.style.backgroundColor = "rgb(30,30,30)";
    inp.style.backgroundColor = "rgb(30,30,30)";

    b1.forEach(b1 =>{
    b1.style.backgroundColor="rgb(96, 96, 96)";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="rgb(164, 164, 164)";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="rgb(255, 149, 0)";
  });
  inp.style.backgroundColor = "rgb(30,30,30)";

    
  }
})

b.addEventListener('click' , function(){
  document.body.style.backgroundColor = "#0396b4ff";
  cal.style.backgroundColor = "#6bc8d8ff";
  inp.style.backgroundColor = "#6bc8d8ff";
  b1.forEach(b1 =>{
    b1.style.backgroundColor="#0077b6";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="#97e1f1ff";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="#03045e";
  });
});

r.addEventListener('click' , function(){
  document.body.style.backgroundColor = "#5c0002";
  cal.style.backgroundColor = "#700e12ff";
  inp.style.backgroundColor = "#700e12ff";
  b1.forEach(b1 =>{
    b1.style.backgroundColor="#a8161bff";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="#c91a20ff";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="#450003";
  });
});

g.addEventListener('click' , function(){
  document.body.style.backgroundColor = "#164F2C";
  cal.style.backgroundColor = "#113820";
  inp.style.backgroundColor = "#113820";
  b1.forEach(b1 =>{
    b1.style.backgroundColor="#0e7a08ff";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="#53a840ff";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="#125b0aff";
  });
})

p.addEventListener('click' , function(){
  document.body.style.backgroundColor = "#7F4F82";
  cal.style.backgroundColor = "#5B3765";
  inp.style.backgroundColor = "#5B3765";
  b1.forEach(b1 =>{
    b1.style.backgroundColor="#9E6999";
  });
  b2.forEach(b2 =>{
    b2.style.backgroundColor="#bb81c2ff";
  });
  b3.forEach(b3 =>{
    b3.style.backgroundColor="#3B2349";
  });
})

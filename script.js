const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let counter = 0;

increaseBtn.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}

resetBtn.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}

decreaseBtn.onclick= function(){
    counter--;
    countLabel.textContent = counter;
  
}
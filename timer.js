let time = 1500;
let interval;

function startTimer(update){

interval = setInterval(()=>{

time--;

update(time);

if(time <= 0){
clearInterval(interval);
alert("Break Time!");
}

},1000);

}

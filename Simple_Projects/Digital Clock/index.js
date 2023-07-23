// take ids of element
const hourEl=document.getElementById("Hour");

const minEl=document.getElementById("Min");

const secEl=document.getElementById("Sec");

const ampmEl=document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();  //take hours
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm= "AM"; //default value

    //Decide AM PM
    if(h > 12){
        h=h-12;
        ampm="PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

 
    hourEl.innerText=h;   //to get result to the frontend
    minEl.innerText=m;
    secEl.innerText=s;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
    //    every one second call the above function again;
    updateClock();
    },1000)
}

updateClock();


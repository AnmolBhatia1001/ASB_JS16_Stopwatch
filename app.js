
let hr = document.getElementById("hr") ;
let mn = document.getElementById("mn")  ;
let sc = document.getElementById("sc")  ;
let ct = document.getElementById("ct")  ;

let h = 0
let m = 0
let s = 0
let c = 0

let isActive = false

function start(){
    isActive = true
    stopWatchFn();
}

function stopWatchFn(){
    if(isActive){
        c = c + 1 ;
        if(c === 100){
            s = s + 1;
            c = 0
        }
        if(s === 60){
            m = m + 1;
            s = 0
        }
        if(m === 60){
            h = h + 1;
            m = 0
        }



        if(c < 10){
            ct.innerText = "0"+(c).toString();
        }else{
            ct.innerText = c;
        }

        if(s < 10){
            sc.innerText = "0"+(s).toString();
        }else{
            sc.innerText = (s).toString();
        }

        if(m < 10){
            mn.innerText = "0"+(m).toString();
        }else{
            mn.innerText = (m).toString();
        }

        if(h < 10){
            hr.innerText = "0"+(h).toString();
        }else{
            hr.innerText = (h).toString();
        }

        
    }
        
    setTimeout("stopWatchFn()",10)
}

function pause(){
    isActive = false
}
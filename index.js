let count = 0;

document.getElementById("D").onclick = function(){
    count-=1;
    document.getElementById("num").innerHTML = count;
}

document.getElementById("C").onclick = function(){
    count=0;
    document.getElementById("num").innerHTML = count;
}

document.getElementById("I").onclick = function(){
    count+=1;
    document.getElementById("num").innerHTML = count;
}
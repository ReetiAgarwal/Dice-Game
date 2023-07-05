var a=document.querySelector("#d1");
var b=document.querySelector("#d2");
var c=document.querySelector("#result");
function roll()
{
    var n1 = Math.ceil(Math.random()*6);
    a.setAttribute("src","dice"+n1+".jpg");
    var n2 = Math.ceil(Math.random()*6);
    b.setAttribute("src","dice"+n2+".jpg");
    if(n1>n2)
        c.innerHTML="Player1 won!";
    else if(n2>n1)
        c.innerHTML="Player2 won!";
    else
        c.innerHTML="It's a draw!";
}
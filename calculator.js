zero = document.getElementById("0")
one = document.getElementById("1")
two = document.getElementById("2")
three = document.getElementById("3")
four = document.getElementById("4")
five = document.getElementById("5")
six = document.getElementById("6")
seven = document.getElementById("7")
eight = document.getElementById("8")
nine = document.getElementById("9")
dot = document.getElementById(".")
plus = document.getElementById("+")
minus = document.getElementById("-")
mul = document.getElementById("*")
div = document.getElementById("/")
exp = document.getElementById("exp")
brktop = document.getElementById("brktop")
brktcl = document.getElementById("brktcl")
disp = document.getElementById("display")
clear = document.getElementById("clear")
evaluate = document.getElementById("=")
backspace = document.getElementById("backspace")
pi = document.getElementById("pi")
sqrt = document.getElementById("sqrt")
d0 = document.getElementById("d0")

var val = "";
var show = "";

disp.textContent = "Welcome back friend :)"

backspace.onclick = function(){
    if(show[show.length-2] == "√"){
        val = val.slice(0, val.length-10);
        show = show.slice(0, show.length-2);
        disp.textContent = show;
    }
    else if(show[show.length-1] == "e"){
        val = val.slice(0, val.length-2);
        show = show.slice(0, val.length);
        disp.textContent = show;
    }
    else{
        val = val.slice(0, val.length-1);
        show = show.slice(0, show.length-1);
        disp.textContent = show;
    }
}

pi.onclick = function(){
    val = val + pi.value;
    show = show + "π";
    disp.textContent = show;
}

d0.onclick = function(){
    val = val + d0.value;
    show = show + d0.value;
    disp.textContent = show;
}


sqrt.onclick = function(){
    val = val + "Math.sqrt(";
    show = show + "√(";
    disp.textContent = show;
}

zero.onclick = function(){
    val = val + zero.value;
    show = show + zero.value;
    disp.textContent = show;
}

one.onclick = function(){
    val = val + one.value;
    show = show + one.value
    disp.textContent = show;
}

two.onclick = function(){
    val = val + two.value;
    show = show + two.value;
    disp.textContent = show;
}

three.onclick = function(){
    val = val + three.value;
    show = show + three.value;
    disp.textContent = show;
}

four.onclick = function(){
    val = val + four.value;
    show = show + four.value;
    disp.textContent = show;
}

five.onclick = function(){
    val = val + five.value;
    show = show + five.value;
    disp.textContent = show;
}

six.onclick = function(){
    val = val + six.value;
    show = show + six.value;
    disp.textContent = show;
}

seven.onclick = function(){
    val = val + seven.value;
    show = show + seven.value;
    disp.textContent = show;
}

eight.onclick = function(){
    val = val + eight.value;
    show = show + eight.value;
    disp.textContent = show;
}

nine.onclick = function(){
    val = val + nine.value;
    show = show + nine.value;
    disp.textContent = show;
}

dot.onclick = function(){
    val = val + dot.value;
    show = show + dot.value;
    disp.textContent = show;
}

plus.onclick = function(){
    val = val + plus.value;
    show = show + plus.value;
    disp.textContent = show;
}

minus.onclick = function(){
    val = val + minus.value;
    show = show + minus.value;
    disp.textContent = show;
}

mul.onclick = function(){
    val = val + mul.value;
    show = show + "x";
    disp.textContent = show;
}

div.onclick = function(){
    val = val + div.value;
    show = show + "÷"
    disp.textContent = show;
}

clear.onclick = function(){
    val = "";
    show = "";
    disp.textContent = "0";
}

exp.onclick = function(){
    val = val + "**";
    show = show + exp.value;
    disp.textContent = show;
}

brktop.onclick = function(){
    val = val + brktop.value;
    show = show + brktop.value;
    disp.textContent = show;
}

brktcl.onclick = function(){
    val = val + brktcl.value;
    show = show + brktcl.value;
    disp.textContent = show;
}

evaluate.onclick = function(){
    try{
        val = eval(val);
        if(Number(val)%1 == 0){
            disp.textContent = val;
            show = val;
        }
        else{
            show = parseFloat(Number(val).toFixed(5));
            disp.textContent = show;
        }
    }
    catch(err){
        disp.textContent = "Error"
        val = "";
        show = "";
    }

}
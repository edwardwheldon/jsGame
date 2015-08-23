

var creditVal = 0;
var score = 0;
var bank = 10;

var elem1 = document.getElementById("val1").innerHTML;
var elem2 = document.getElementById("val2").innerHTML;
var elem3 = document.getElementById("val3").innerHTML;
var fruit = ['1','2','3','A','B','C','T','E','D'];
var resultTxt = document.getElementById("result");

var beepSound = new Audio("audio/beep.mp3");
var beepSound2 = new Audio("audio/beep2.mp3");
var winSound = new Audio("audio/win.mp3");
var bigWinSound = new Audio("audio/bigwin.mp3");
var noSound = new Audio("audio/zang.mp3");

function addCredit(v)
{
    if (bank > 0)
    {
        beepSound2.play();
        creditVal = creditVal + v;
        bank = bank - v;
        document.getElementById("credits").innerHTML = creditVal;
        document.getElementById("bank").innerHTML = bank;
    }
    else
    {
        alert("you have no more money in the bank! :(");
    }

}

function winCredit(v)
{
    creditVal = creditVal + v;
    document.getElementById("credits").innerHTML = creditVal;
}


function removeBank(v)
{
    bank = bank - v
    document.getElementById("bank").innerHTML = bank;
}

function collect()
{
    beepSound2.play();
    bank = bank + creditVal;
    creditVal = creditVal - creditVal;
    document.getElementById("bank").innerHTML = bank;
    document.getElementById("credits").innerHTML = creditVal;
}

function removeCredit(v)
{
    creditVal = creditVal - v;
    document.getElementById("credits").innerHTML = creditVal;
}

function addScore(v)
{
    score = score + v;
    document.getElementById("score").innerHTML = score;
}


function spin()
{
    beepSound2.play();
    if (creditVal > 0)
    {
        removeCredit(1);
        var rnd1 = Math.floor((Math.random()*fruit.length));
        var rnd2 = Math.floor((Math.random()*fruit.length));
        var rnd3 = Math.floor((Math.random()*fruit.length));
        var reel1 = setInterval(function() {
        document.getElementById('val1').innerHTML= fruit[rnd1++];
            if (rnd1 == fruit.length)
            {
                rnd1 = 0;
            }
        }, 120);

        var reel2 = setInterval(function() {
        document.getElementById('val2').innerHTML= fruit[rnd2++];
            if (rnd2 == fruit.length)
            {
                rnd2 = 0;
            }
        }, 150);

        var reel3 = setInterval(function() {
        document.getElementById('val3').innerHTML= fruit[rnd3++];
        if (rnd3 == fruit.length)
        {
            rnd3 = 0;
        }
        }, 135);


        //stop
        setTimeout(function(){
        clearInterval(reel1);

        clearInterval(reel2);

        clearInterval(reel3);
        beepSound.play();
        elem1 = document.getElementById("val1").innerHTML;
        elem2 = document.getElementById("val2").innerHTML;
        elem3 = document.getElementById("val3").innerHTML;
        check(elem1,elem2,elem3);
        }, 1500);
    }
    else
    {
        noSound.play();
        alert("You have 0 credits, please add credits to continue");
    }
    
}

// check win
function check(a,b,c)
{
    if (a == b && b == c)
    {
        //resultTxt.innerHTML = "a - b - c";
        bigWinSound.play();
        winSound.play();
        alert("matching 3 \n 50 credits awarded! \n 100 points");
        addScore(100);
        winCredit(50);

    }
    else if (a == b)
    {
        //resultTxt.innerHTML = "a - b";
        winSound.play();
        alert("matching 2 \n 5 credits awarded! \n 20 points");
        addScore(20);
        winCredit(5);
    }
    else if (b == c)
    {
        //resultTxt.innerHTML = "b - c";
        winSound.play();
        alert("matching 2 \n 5 credits awarded! \n 20 points");
        addScore(20);
        winCredit(5);
    }
    else if (a == c)
    {
        //resultTxt.innerHTML = "a - c";
        winSound.play();
        alert("matching 2 \n 5 credits awarded! \n 10 points");
        addScore(10);
        winCredit(5);
    }
}

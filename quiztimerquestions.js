
var question001 = [
    "Bob's last name is Belcher.",
    "Linda was engaged to Teddy.",
    "Gene only dated Courtney because of her dad's extensive keyboard collection.",
    "Linda named one on the raccoons in the alley way King Trash Mouth.",
    "Millie Frock is obsessed with Louise.",
    
   
];

var options001 = ["<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button>"];
var options002 = ["<button class=buttons001 onclick=q2c()>False</button><br /><br /><button class=buttons001 onclick=q2i()>True</button>"];
var options003 = ["<button class=buttons001 onclick=q3c()>True</button><br /><br /><button class=buttons001 onclick=q3i()>False</button>"];
var options004 = ["<button class=buttons001 onclick=q4i()>True</button><br /><br /><button class=buttons001 onclick=q4c()>False</button>"];
var options005 = ["<button class=buttons001 onclick=q5c()>False</button><br /><br /><button class=buttons001 onclick=q5i()>True</button>"];

var a = 0;
a++;
var b = 0;
b++;

function begin001() {
    c = 100;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
    number001.innerHTML = a++;
}

function q1c() {
    message003.innerHTML = "Inorrect. The Belcher's own Bob's Burgers!";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
    message003.innerHTML = "Correct. The one and only Belchers!";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2c() {
    message003.innerHTML = "Correct. She was once engaged to Hugo the health inspector! ";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q2i() {
    message003.innerHTML = "Incorrect. She was once engaged to Hugo the health inspector!";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3c() {
    message003.innerHTML = "Correct. Courtney's dad writes jingles!";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q3i() {
    message003.innerHTML = "Incorrect. When they broke up Gene was denied any further use of the keyboards!";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4c() {
    message003.innerHTML = "Incorrect! Linda loves King Trash Mouth! Long live the King!";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q4i() {
    message003.innerHTML = "Correct. Sometimes she feeds him red wine!";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5c() {
    message003.innerHTML = "Incorrect. Millie loves everything about Louise!";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q5i() {
    message003.innerHTML = "Correct. Millie is Louise's stalker!";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

//

function next001() {
    if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = options002;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = options003;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "4") {
        message001.innerHTML = question001[3];
        message002.innerHTML = options004;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        message001.innerHTML = question001[4];
        message002.innerHTML = options005;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }else{
        window.clearInterval(update);
        c="-"
        message001.innerHTML = "End of Quiz";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class= buttons002 onclick=repeat001()>Repeat</button>";
    }

}

function timer001() {
    c = c - 1;
    if (c < 100) {
        time001.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}

update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
}

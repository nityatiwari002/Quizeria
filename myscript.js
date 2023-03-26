questions = [
    {
        'ques': "Which is your favourite color?",
        'a' : "Pink",
        'b' : "Blue",
        'c' : "Orange",
        'd' : "Yellow",
        'Phrase' : "Favorite Color is: ",
        'ans' : ""
    },
    {
        'ques': "Which is your favourite cuisine?",
        'a' : "Indian",
        'b' : "Chinese",
        'c' : "Mexican",
        'd' : "Italian",
        'Phrase' : "Favorite cuisine is: ",
        'ans' : ""
    },
    {
        'ques': "Which is your preferred style?",
        'a' : "Casual",
        'b' : "Formal",
        'c' : "Streetwear",
        'd' : "Retro",
        'Phrase' : "Preferred style is: ",
        'ans' : ""
    }
]


let ind = 0;

function func(){
    let allopts = document.getElementsByClassName("available-opts");
    // console.log(allopts)
    let found=0;
    for (const key in allopts) {
        if(allopts[key].checked){
            questions[ind].ans = allopts[key].value;
            found = 1;
        }
    }
    if(!found){
        alert("choose an Option");
    }
    else{
        ind++;
        if(ind >= questions.length){
            displayAnswers();
        }
        else{
            changeQUestion();
        }
    }

    
}

function changeQUestion(){
    
    let optiond = document.getElementById("Option");
    let que = document.getElementById("question");
    que.innerText = questions[ind].ques;
    optiond.innerHTML = "<div class=\"opt\"><input class=\"available-opts\" type=\"radio\" name=\"ques" + ind + "\" id=\"opt" + ind + "\" value=\"" +questions[ind].a +"\"><label for=\"" + questions[ind].a + "\">" + questions[ind].a +"</label></div>" + 
    "<div class=\"opt\"><input class=\"available-opts\"  type=\"radio\" name=\"ques" + ind + "\" id=\"opt" + ind + "\" value=\"" +questions[ind].b +"\"><label for=\"" + questions[ind].b + "\">" + questions[ind].b +"</label></div>"  +
    "<div class=\"opt\"><input class=\"available-opts\"  type=\"radio\" name=\"ques" + ind + "\" id=\"opt" + ind + "\" value=\"" +questions[ind].c +"\"><label for=\"" + questions[ind].c + "\">" + questions[ind].c +"</label></div>" + 
    "<div class=\"opt\"><input class=\"available-opts\"  type=\"radio\" name=\"ques" + ind + "\" id=\"opt" + ind + "\" value=\"" +questions[ind].d +"\"><label for=\"" + questions[ind].d + "\">" + questions[ind].d +"</label></div>";
    document.getElementById("submit").addEventListener("click", func);

}

function startover(){
    ind = 0;
    let content = document.getElementsByClassName("tile");
    content[0].innerHTML = "<div class=\"ques\" id=\"question\"></div>" +
    "<div class=\"options\" id=\"Option\"></div>" + 
    "<div class=\"but\"><button id=\"submit\" class=\"submit-but\">Submit</button></div>";
    changeQUestion();
}

function displayAnswers(){
    console.log(questions);

    let content = document.getElementsByClassName("tile");
    content[0].innerHTML = "";
    for(let i = 0; i < ind; i++){
        content[0].innerHTML +=  "<div class = \"desc\" >" + questions[i].Phrase + questions[i].ans + "</div>"+ "</br>";
    }
    content[0].innerHTML += "<div class = \"last\" >Thank You!</div>";
    content[0].innerHTML += "<div class=\"but end-but\"><button id=\"start-again\" class=\"start-but\">Click here to start again</button></div>"
    document.getElementById("start-again").addEventListener("click", startover);
}



changeQUestion();


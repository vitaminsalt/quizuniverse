function start(){
var gender = document.getElementById("gen").value;
    var birthday = {
    day: document.getElementById("day").value,
    month: document.getElementById("month").value,
    year: document.getElementById("year").value
};
var email = document.getElementById("ema").value;
var ques1 = document.getElementById("q1").value;
var ques5 = document.getElementById("q5").value;
var ques3 = document.getElementById("q3").value;

if(document.getElementById("choice1").checked){
    var ques2 = document.getElementById("choice1").value;
}else if(document.getElementById("choice2").checked){
    var ques2 = document.getElementById("choice2").value;
}else if(document.getElementById("choice3").checked){
    var ques2 = document.getElementById("choice3").value;
}else if(document.getElementById("choice4").checked){
    var ques2 = document.getElementById("choice4").value;
}else if(document.getElementById("choice5").checked){
    var ques2 = document.getElementById("choice5").value;
}else if(document.getElementById("choice6").checked){
    var ques2 = document.getElementById("choice6").value;
}else if(document.getElementById("choice7").checked){
    var ques2 = document.getElementById("choice7").value;
};

var subs = jQuery('.subject'), ques4= "";

subs.each(function(){
    if(jQuery(this).is(':checked') || jQuery('#subs_master').is(':checked')){
        if(ques4 != ''){
            ques4 += ',';
        }
        ques4 += jQuery(this).val();
    }
});

    if (birthday.day < 1 || birthday.day > 31){
        alert("Input only 1-31 for your birthday day");
    }else if(ques1 > 10 || ques1 < 1){
        alert("Input only values from 1 to 10");
    }else{
            if(email == "" || email == null){
            alert("Please input an email address");
        }else if(birthday.day == "" || birthday.month == "" || birthday.year == "" || birthday.day == null || birthday.month == null || birthday.year == null){
            alert("Please complete your birthday details");
        }else if(ques1 == "" || ques1 == null){
        alert("Please input an answer");
        }else if(ques2 == "" || ques2 == null){
        alert("Please input an answer");
        }else if(ques3 == "" || ques3 == null){
        alert("Please input an answer");
        }else if(ques4 == "" || ques4 == null){
        alert("Please input an answer");
        }else if(ques5 == "" || ques5 == null){
        alert("Please input an answer");
        }else{

            localStorage.setItem("basic-gender", gender);
            localStorage.setItem("basic-birthday-month", birthday.month);
            localStorage.setItem("basic-birthday-day", birthday.day);
            localStorage.setItem("basic-birthday-year", birthday.year);
            localStorage.setItem("basic-email", email);
            localStorage.setItem("main-1", ques1);
            localStorage.setItem("main-2", ques2);
            localStorage.setItem("main-3", ques3);
            localStorage.setItem("main-4", ques4);
            localStorage.setItem("main-5", ques5);




        window.location.assign("resultsfeed.html");
    }
        
    };




}

function validate(){
    window.location.assign("index.html");
   
}

function retrieveFunc(){
    var gender = localStorage.getItem("basic-gender");
    var birthday = {        
            month: localStorage.getItem("basic-birthday-month"),
            day: localStorage.getItem("basic-birthday-day"),
            year: localStorage.getItem("basic-birthday-year")
        };
    var email = localStorage.getItem("basic-email");
            var ques1 = localStorage.getItem("main-1");
            var ques2 = localStorage.getItem("main-2");
            var ques3 = localStorage.getItem("main-3");
            var ques4 = localStorage.getItem("main-4");
            var ques5 = localStorage.getItem("main-5");

        document.getElementById("answer1").innerHTML = gender;
        document.getElementById("answer2").innerHTML = birthday.month + " " + birthday.day + " ," + birthday.year ;
        document.getElementById("answer3").innerHTML = email;
        document.getElementById("answer4").innerHTML = ques1;
        document.getElementById("answer5").innerHTML = ques2;
        document.getElementById("answer6").innerHTML = ques3;
        document.getElementById("answer7").innerHTML = ques4;
        document.getElementById("answer8").innerHTML = ques5;
}

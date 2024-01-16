  var quiC = document.getElementById("question-main"); 
    var cA = document.getElementById("a");
    var cB = document.getElementById("b");
    var cC = document.getElementById("c");
    var cD = document.getElementById("d");  
    var tnx= document.getElementById("rollcred");
    var Tama = document.getElementById("TamangSagot");
    var Inc = document.getElementById("Incorrect");
     var chosen = [];
     var mainpic = document.getElementById("pic");
const cards = document.querySelectorAll('.choices');
var score = 0;
    
 function RandomizeFunc(){
    
    var rn = Math.floor(Math.random()*21); 
    console.log(rn);
   
        
        if(chosen.length == 21){
            tnx.style.visibility = 'visible';
    }
    else{

        var quest = chosen.includes(rn);

        if(quest == true){
            rn = Math.floor(Math.random()*21);
            RandomizeFunc();

        }else{
            chosen.push(rn);
            random2(rn);
        }
    }
    console.log(chosen);

}
function random2(rn){
    cA.dataset.framework = 'true';
    cB.dataset.framework = 'wrong';
    cC.dataset.framework = 'wrong';
    cD.dataset.framework = 'wrong';


        if (rn == 0){
           
            quiC.innerHTML= "On what ocean did the RMS Titanic Sank?"; 
            cC.innerHTML = "Pacific Ocean";
            cC.dataset.framework = 'wrong';
            cB.innerHTML = "Indian Ocean";
            cB.dataset.framework = 'wrong';
            cA.innerHTML = "Atlantic Ocean";
            cA.dataset.framework = 'true';
            cD.innerHTML = "Arctic Ocean";
            cD.dataset.framework = 'wrong';
            mainpic.src = "images/q0.jpg";

            
        }
        
        else if (rn == 1 ){
           
            quiC.innerHTML= " What are the names of the two moons of Mars?";
            cC.innerHTML = "Europa and Callisto";
            cB.innerHTML = "Titan and Enceladus";
            cA.innerHTML = "Phobos and Deimos";
            cD.innerHTML = "Charon and Pluto";
           mainpic.src = "images/q1.jpg";
        }
        
        else if (rn == 2){
           
            quiC.innerHTML= " Who Invented The Telephone?";
            cB.innerHTML = "Nikola Tesla";
            cA.innerHTML = "Alexander Graham Bell";
            cC.innerHTML = "Thomas Edison";
            cD.innerHTML = "Dwight Eisenhower";
             mainpic.src = "images/q2.jpg";

        }
        
        else if (rn == 3 ){
           
            quiC.innerHTML= "Which Finger grows the fastest?";
            cA.innerHTML = "Middle";
            cB.innerHTML = "Index";
            cC.innerHTML = "Pinky";
            cD.innerHTML = "Thumb";
             mainpic.src = "images/q3.jpg";

        }
        
        else if (rn == 4){
           
            quiC.innerHTML= "How many dots are there in two dice?";
            cB.innerHTML = "34";
            cA.innerHTML = "42";
            cC.innerHTML = "40";
            cD.innerHTML = "38";
             mainpic.src = "images/q4.jpg";

        }
        else if (rn == 5 ){
           
            quiC.innerHTML= "Which country gave Florida to USA in 1891?";
            cA.innerHTML = "Spain";
            cB.innerHTML = "Portugal";
            cC.innerHTML = "France";
            cD.innerHTML = "Russia";
             mainpic.src = "images/q5.png";

        }
        else if (rn == 6) {
           
            quiC.innerHTML= "Who invented the electric lightbulb?";
            cA.innerHTML = "Thomas Edison";
            cB.innerHTML = "Harry S Truman";
            cC.innerHTML = "Benjamin Franklin";
            cD.innerHTML = "Robert Coppenheigen";
             mainpic.src = "images/q6.jpg";

        }
        else if (rn == 7) {
           
            quiC.innerHTML= "What was Christopher Comlumbus' nationality?";
            cA.innerHTML = "Italian";
            cB.innerHTML = "Portuguese";
            cC.innerHTML = "Spanish";
            cD.innerHTML = "French";
             mainpic.src = "images/q7.jpg";

        }
        else if (rn == 8){
           
            quiC.innerHTML= "What is the first letter on the standard keyboard?";
            cA.innerHTML = "Q";
            cB.innerHTML = "A";
            cC.innerHTML = "S";
            cD.innerHTML = "D";
             mainpic.src = "images/q8.jpg";
        }
           
        else if (rn == 9 ){
            quiC.innerHTML= "What is the longest river in the world?";
            cA.innerHTML = "Nile";
            cB.innerHTML = "Amazon";
            cC.innerHTML = "Ilog pasig";
            cD.innerHTML = "Bongoy River";
             mainpic.src = "images/q9.jpg";

        }
        else if (rn == 10 ){
           
            quiC.innerHTML= "What is the name of the first woman to cross the Atlantic Ocean?";
            cA.innerHTML = "Amelia Earhart";
            cB.innerHTML = "Gabriela Silang";
            cC.innerHTML = "Pocahontas";
            cD.innerHTML = "Joan of Arc";
             mainpic.src = "images/q10.jpg";
        }
        
         else if (rn == 11 ){
           
            quiC.innerHTML= "What did the seven dwarves do?";
            cA.innerHTML = "Mine";
            cB.innerHTML = "Farm";
            cC.innerHTML = "Cook";
            cD.innerHTML = "Blacksmith";
             mainpic.src = "images/q11.jpg";

        }
        
         else if (rn == 12){
           
            quiC.innerHTML= "What's the name of the famous big clock on London?";
            cA.innerHTML = "The Big Ben";
            cB.innerHTML = "The Luvre";
            cC.innerHTML = "The Eifel";
            cD.innerHTML = "The Thames";
             mainpic.src = "images/q12.jpg";
        }
        
         else if (rn == 13){
           
            quiC.innerHTML= "Who cursed Medusa into a gorgon?";
            cA.innerHTML = "Athena";
            cB.innerHTML = "Artemis";
            cC.innerHTML = "Gaia";
            cD.innerHTML = "Aphrodite";
             mainpic.src = "images/q13.jpg";
        }
        
         else if (rn == 14 ){
           
            quiC.innerHTML= "What's the smallest type of tree in the world?";
            cA.innerHTML = "Bonsai";
            cB.innerHTML = "Bamboo";
            cC.innerHTML = "Banana";
            cD.innerHTML = "Tomato";
             mainpic.src = "images/q14.jpg";

        }
         else if (rn == 15){
           
            quiC.innerHTML= "What type of sequence can be mostly found in nature?";
            cA.innerHTML = "Fibonacci";
            cB.innerHTML = "Arithmetic";
            cC.innerHTML = "Geometric";
            cD.innerHTML = "Black and White sequence";
             mainpic.src = "images/q15.jpg";

        }
         else if (rn == 16 ){
           
            quiC.innerHTML= "Who was the first scientist that won two noble prizes?";
            cA.innerHTML = "Marie Curie";
            cB.innerHTML = "Vladimir Putin";
            cC.innerHTML = "Donald Trump";
            cD.innerHTML = "Maria Tereshkova";
             mainpic.src = "images/q16.png";

        }
         else if (rn == 17){
           
            quiC.innerHTML= "Who is Dumbledore's intimate relationship?";
            cA.innerHTML = "Gellert Grindelwald";
            cB.innerHTML = "Harry Potter";
            cC.innerHTML = "Ron Weasley";
            cD.innerHTML = "Severus Snape";
             mainpic.src = "images/q17.jpg";

        }
         else if (rn == 18){
           
            quiC.innerHTML= "What is a group of whale called?";
            cA.innerHTML = "Pod";
            cB.innerHTML = "Brood";
            cC.innerHTML = "Goggle";
            cD.innerHTML = "Pride";
             mainpic.src = "images/q18.jpg";

        }
         else if (rn == 19){
           
            quiC.innerHTML= "In the Le Petite Prince, what tree was deadly on his planet?";
            cA.innerHTML = "Baobabs";
            cB.innerHTML = "Eucalyptus";
            cC.innerHTML = "Zichamores";
            cD.innerHTML = "Poison Ivy";
             mainpic.src = "images/q19.jpg";

        }
         else if (rn == 20){
           
            quiC.innerHTML= "What law of thermodyanmics states that energy cannot be created nor destroyed?";
            cA.innerHTML = "1st Law";
            cB.innerHTML = "2nd Law";
            cC.innerHTML = "3rd Law";
            cD.innerHTML = "4th Law";
             mainpic.src = "images/q20.jpg";

        }
    }
    
    
    
    
    function Incorrect(){

        
                Inc.style.visibility = "visible";
                Inc.style.transitionduration =".7s";
                document.getElementById('finscore').innerHTML = score;

                
    }
    
    
    
    function nextfunc(){

        
        Tama.style.visibility = "hidden";
        shuffle();
        RandomizeFunc();
          
    }
    
    function Correct(){
        
      
        Tama.style.visibility = "visible";
        score += 1;
          document.getElementById('current').innerHTML = score;
        
        
    }
    
    function Tryagain(){
        
        Inc.style.visibility = "hidden";
        
        
    }
    

function shuffle() {

    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 4);
        card.style.order = randomOrder;
    });
}


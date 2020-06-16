document.addEventListener('DOMContentLoaded',function(){
  alert(" Please type in your answer and click the button !");

  var correct = 0;
  var wrong = 0;
  var trials = 0;
  var sum;

  function myQuizz(){

    function loadNumbers(){

      function myRangeRandom(myMin,myMax){
        return Math.floor(Math.random() * (myMax-myMin + 1)) + myMin;
      };
      var nr1 = myRangeRandom(10,30);
      var nr2 = myRangeRandom(10,30);
      var resultAdd = document.getElementById("numbers").innerText = nr1 + " + " + nr2 + " = ";
      document.getElementById("controller").innerText = "Check Result";
      sum = nr1 + nr2;
      console.log(sum);
    };

    loadNumbers();

    const getValForm = document.forms['addvalue'];

    getValForm.addEventListener('submit',function(e){
      e.preventDefault();
      const valueBox = getValForm.querySelector('input[type="text"]').value;
      console.log(valueBox);

      if(valueBox == sum){
        console.log("Correct answer");

        document.getElementById("reactions").innerText = "Correct Answer !!!";
        getValForm.reset();
        loadNumbers();
        correct++;
      }else{
        document.getElementById("reactions").innerText = "Oooops you do better NEXT time !";
        getValForm.reset();
        loadNumbers();
        wrong++;
      };
      trials = correct + wrong;

      console.log("trials : ",trials);
      console.log("correct : ",correct);
      console.log("wrong : ",wrong);

      document.getElementById("reactions1").innerText = `Total of Trials : ${trials}   ,   Fails : ${wrong}   ,    Success : ${correct}`;

      if( correct >= 7 ){
        alert(`QUIZZ over !!! Click to view your score !!!`);
        if(wrong >= correct) {
          alert(`You FAILED with ${wrong} wrong answers. Better luck tomorrow.`);
          document.location.reload();
        }else{
          alert(`You passed with ${correct} correct answers. GOOD LUCK learning.Try Again !!!`);
          document.location.reload();
        }
      }
    });//end of the submit form function
  };
  myQuizz();
});

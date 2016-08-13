$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    clearInterval(id);

    var question1 = $("input[name='q1']:checked").val();
    var question2 = $("input[name='q2']:checked").val();
    var question3 = $("input[name='q3']:checked").val();
    var question4 = $("input[name='q4']:checked").val();
    var question5 = $("input[name='q5']:checked").val();

    if (!(question1) || !(question2) || !(question3) || !(question4) || !(question5))
      { alert("Je bent nog niet klaar!");}

    else {

      var wrong1 = (question1 != "b");
      var wrong2 = (question2 != "d");
      var wrong3 = (question3 != "c");
      var wrong4 = (question4 != "b");
      var wrong5 = (question5 != "a");
      var wrong0 = (!wrong1 && !wrong2 && !wrong3 && !wrong4 && !wrong5);

      var incorrect = [];
      var score = 1000 - width;

      if (wrong1) { incorrect.push("1"); score -= 75 };
      if (wrong2) { incorrect.push("2"); score -= 75 };
      if (wrong3) { incorrect.push("3"); score -= 75 };
      if (wrong4) { incorrect.push("4"); score -= 75 };
      if (wrong5) { incorrect.push("5"); score -= 75 };
      if (wrong0) { incorrect.push("Geen") };

      var totalScore = 'Punten: ' + score;
      $("#resultlist .score").text(totalScore);
      $("#resultlist .score").show("slow");

      var resultStr = 'Je hebt de volgende vragen fout: ' + incorrect.join(', ') + '.';
      $("#resultlist .summary").text(resultStr);
      $("#resultlist .summary").show("slow");


      if (wrong1) { $("#answer1").show("slow"); };
      if (wrong2) { $("#answer2").show("slow"); };
      if (wrong3) { $("#answer3").show("slow"); };
      if (wrong4) { $("#answer4").show("slow"); };
      if (wrong5) { $("#answer5").show("slow"); };
      if (wrong0) { $("#answer0").show("slow"); };
    }
  });});

// TODO: slideToggle doesnt work yet... and remove showing answers at all!

// TODO: calculate score and show score
// TODO: have questions appear after each other?
// TODO: timer
// TODO: alert("You have run out of time!")

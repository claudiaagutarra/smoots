
$(document).ready(function () {
    var questions = {
        question1: "1. What is Nellie's ex-boyfriend's job?",
        choices1: ["Construction Worker", "Magician", "Accountant", "Salesman"],
        question2: "2. What italian dish does Michael order while out with the insurance-selling Mafia man?",
        choices2: ["Grissini Torinesi", "Penne Vodka Pasta", "Italian Sausage", "Gabagool"],
        question3: "3. What is Toby's daughter's name?",
        choices3: ["Sasha", "Jada", "Emma", "Ariana"],
        question4: "4. When Dwight accidentally kills Angelas cat, what are the names of the original cat and the replacement cat?",
        choices4: ["Sprinkles, Comstock", "Mr. Ash, Garbage", "Sprinkles, Garbage", "Comstock, Princess Lady"],
        question5: "5. What is the preffered pizza place among the office staff?",
        choices5: ["Alfredo's Pizza Cafe", "Pizza by Alfredo", "Alfredo's Pizzeria", "Alfredo's"],
        question6: "6. What is Jan's candle company called?",
        choices6: ["Candles by Jan", "Serenity by Jan", "Soft Scents by Jan", "Radiance by Jan"],
        question7: "7. What is the name of the idea that Michael had involving hamsters, that Jim put an end to?",
        choices7: ["Tube Topia", "Wheelotopia", "Hamster City", "Tube City"]
    }

    var questioncontainer = $("#h2ques");
    var c1 = $("#choice1");
    var c2 = $("#choice2");
    var c3 = $("#choice3");
    var c4 = $("#choice4");
    var rightAnswers = 0
    var wrongAnswers = 0

    function firstQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question1);
        c1.html(questions.choices1[0])
        c2.html(questions.choices1[1])
        c3.html(questions.choices1[2])
        c4.html(questions.choices1[3])

        function right1() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/magician.gif' />");
            questioncontainer.html("YOU ARE CORRECT!")
            rightAnswers++;
        }
        function wrong1() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was B!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/nelliewrong.gif' />");
            questioncontainer.html("Wrong!");
            wrongAnswers++;
        }
        $(document).on("click", "#choice2", function () {
            right1();
        })
        $(document).on("click", "#choice1", function () {
            wrong1();
        })
        $(document).on("click", "#choice3", function () {
            wrong1();
        })
        $(document).on("click", "#choice4", function () {
            wrong1();
        })
    }
    function secondQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question2);
        c1.html(questions.choices2[0])
        c2.html(questions.choices2[1])
        c3.html(questions.choices2[2])
        c4.html(questions.choices2[3])
        function right2() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/gabagool.gif' />");
            questioncontainer.html("YOU ARE CORRECT!")
            rightAnswers++;
        }
        function wrong2() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was D!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/wrong2.gif' />");
            questioncontainer.html("Wrong!");
            wrongAnswers++;
        }

        $(document).on("click", "#choice4", function () {
            right2();
        })
        $(document).on("click", "#choice1", function () {
            wrong2();
        })
        $(document).on("click", "#choice3", function () {
            wrong2();
        })
        $(document).on("click", "#choice2", function () {
            wrong2();
        })
    }
    function thirdQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question3);
        c1.html(questions.choices3[0])
        c2.html(questions.choices3[1])
        c3.html(questions.choices3[2])
        c4.html(questions.choices3[3])
        function right3() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/sasha.gif' />");
            questioncontainer.html("YOU ARE CORRECT!")
            rightAnswers++;
            wrongAnswers++;
        }
        function wrong3() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was A!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/wrong3.gif' />");
            questioncontainer.html("Wrong!")
        }

        $(document).on("click", "#choice1", function () {
            right3();
        })
        $(document).on("click", "#choice4", function () {
            wrong3();
        })
        $(document).on("click", "#choice3", function () {
            wrong3();
        })
        $(document).on("click", "#choice2", function () {
            wrong3();
        })
    }
    function fourthQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question4);
        c1.html(questions.choices4[0])
        c2.html(questions.choices4[1])
        c3.html(questions.choices4[2])
        c4.html(questions.choices4[3])
        function right4() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/garbage.png' />");
            questioncontainer.html("YOU ARE CORRECT!")
            rightAnswers++;
        }
        function wrong4() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was C!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/wrong4.gif' />");
            questioncontainer.html("Wrong!");
            wrongAnswers++;
        }
        $(document).on("click", "#choice3", function () {
            right4();
        })
        $(document).on("click", "#choice1", function () {
            wrong4();
        })
        $(document).on("click", "#choice4", function () {
            wrong4();
        })
        $(document).on("click", "#choice2", function () {
            wrong4();
        })
    }
    function fifthQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question5);
        c1.html(questions.choices5[0])
        c2.html(questions.choices5[1])
        c3.html(questions.choices5[2])
        c4.html(questions.choices5[3])
        function right5() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/right5.gif' />");
            questioncontainer.html("YOU ARE CORRECT!")
            rightAnswers++;
        }
        function wrong5() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was A!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/badpizza.gif' />");
            questioncontainer.html("Wrong!");
            wrongAnswers++;
        }
        $(document).on("click", "#choice1", function () {
            right5();
        })
        $(document).on("click", "#choice3", function () {
            wrong5();
        })
        $(document).on("click", "#choice4", function () {
            wrong5();
        })
        $(document).on("click", "#choice2", function () {
            wrong5();
        })
    }
    function sixthQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question6);
        c1.html(questions.choices6[0])
        c2.html(questions.choices6[1])
        c3.html(questions.choices6[2])
        c4.html(questions.choices6[3])
        function right6() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/right6.gif' />");
            questioncontainer.html("YOU ARE CORRECT!");
            rightAnswers++;
        }
        function wrong6() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was A!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/wrong6.gif' />");
            questioncontainer.html("Wrong!")
            wrongAnswers++;
        }
        $(document).on("click", "#choice2", function () {
            right6();
        })
        $(document).on("click", "#choice1", function () {
            wrong6();
        })
        $(document).on("click", "#choice3", function () {
            wrong6();
        })
        $(document).on("click", "#choice4", function () {
            wrong6();
        })
    }
    function sevQues() {
        $("#time").html("<h2>Time Remaining: <span id='timerNumber'>30</span> Seconds</h2>");
        questioncontainer.html(questions.question7);
        c1.html(questions.choices7[0])
        c2.html(questions.choices7[1])
        c3.html(questions.choices7[2])
        c4.html(questions.choices7[3])
        function right7() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#gif").html("<img id='pic' src='../smoots/assets/images/tubecity.gif' />");
            questioncontainer.html("YOU ARE CORRECT!");
            rightAnswers++;
        }
        function wrong7() {
            c1.hide();
            c2.hide();
            c3.hide();
            c4.hide();
            $("#right").html("The right answer was A!")
            $("#gif").html("<img id='pic' src='../smoots/assets/images/wrong7.gif' />");
            questioncontainer.html("Wrong!");
            wrongAnswers++;
        }
        $(document).on("click", "#choice4", function () {
            right7();
        })
        $(document).on("click", "#choice1", function () {
            wrong7();
        })
        $(document).on("click", "#choice3", function () {
            wrong7();
        })
        $(document).on("click", "#choice2", function () {
            wrong7();
        })
    }


    function initializeTrivia() {
        $("#questioncontainer").hide();
    }

    initializeTrivia();

    $("#start").on('click', function () {
        $("#start").hide();
        $("#questioncontainer").show();
        firstQues();
    })

});
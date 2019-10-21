
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



    function firstQues() {
        questioncontainer.text(questions.question1);
        c1.append(questions.choices1[0])
        c2.append(questions.choices1[1])
        c3.append(questions.choices1[2])
        c4.append(questions.choices1[3])
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
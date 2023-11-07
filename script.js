document.addEventListener("DOMContentLoaded", function () {
  var questions = [
    {
      question: "Que horas são?",
      options: ["10:02", "10:10", "2:10"],
      answer: "10:10",
      image: "./images/10-10.png",
    },
    {
      question: "Que horas são?",
      options: ["12:03", "3:00", "12:30"],
      answer: "3:00",
      image: "./images/3h.png",
    },
    {
      question: "Que horas são?",
      options: ["10:00", "9:00", "11:00"],
      answer: "9:00",
      image: "./images/9h.png",
    },
    {
      question: "Que horas são?",
      options: ["10:00", "9:00", "11:00"],
      answer: "10:00",
      image: "./images/10h.png",
    },
    {
      question: "Que horas são?",
      options: ["10:00", "9:00", "11:00"],
      answer: "11:00",
      image: "./images/11h.png",
    },
    {
      question: "Que horas são?",
      options: ["3:06", "6:03", "3:30"],
      answer: "3:30",
      image: "./images/3-30.png",
    },
    {
      question: "Que horas são?",
      options: ["10:10", "10:02", "7:10"],
      answer: "10:10",
      image: "./images/10-10b.png",
    },
    {
      question: "Quantos minutos tem meia hora?",
      options: ["40 minutos", "30 minutos", "60 minutos"],
      answer: "30 minutos",
      image: "./images/30m.png",
    },
    {
      question: "Quantos minutos tem 1(uma) hora?",
      options: ["40 minutos", "50 minutos", "60 minutos"],
      answer: "60 minutos",
      image: "./images/60m.png",
    },
    {
      question: "Que horas são?",
      options: ["2:03", "3:10", "3:02"],
      answer: "3:10",
      image: "./images/3-10.png",
    },
    {
      question: "Que horas são?",
      options: ["7:45", "8:45", "9:40"],
      answer: "7:45",
      image: "./images/7-45.png",
    },
    {
      question: "Que horas são?",
      options: ["4:00", "5:00", "2:00"],
      answer: "4:00",
      image: "./images/4h.png",
    },
    {
      question: "Que horas são?",
      options: ["4:00", "5:00", "2:00"],
      answer: "2:00",
      image: "./images/2h.png",
    },
  ];

  var randomQuestions = [];
  var currentQuestion = 0;

  function restartQuiz() {
    currentQuestion = 0;
    randomQuestions = [];
    while (randomQuestions.length < questions.length) {
      var randomIndex = Math.floor(Math.random() * questions.length);
      if (!randomQuestions.includes(randomIndex)) {
        randomQuestions.push(randomIndex);
      }
    }
    closeModal();
    displayQuestion();
  }

  while (randomQuestions.length < questions.length) {
    var randomIndex = Math.floor(Math.random() * questions.length);
    if (!randomQuestions.includes(randomIndex)) {
      randomQuestions.push(randomIndex);
    }
  }

  function displayQuestion() {
    var current = questions[randomQuestions[currentQuestion]];
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var imageElement = document.querySelector(".container img");
    questionElement.textContent = current.question;
    imageElement.src = current.image;
    optionsElement.innerHTML = "";
    current.options.forEach(function (option, index) {
      var button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", function () {
        checkAnswer(index);
      });
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(index) {
    var current = questions[randomQuestions[currentQuestion]];
    if (current.options[index] === current.answer) {
      var modal = document.getElementById("modal-correct");
      modal.style.display = "block";
    } else {
      var modal = document.getElementById("modal-incorrect");
      modal.style.display = "block";
    }
  }

  function handleNextQuestion() {
    var modalCorrect = document.getElementById("modal-correct");
    modalCorrect.style.display = "none";
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      closeModal();
      displayQuestion();
    } else {
      var modalFinish = document.getElementById("modal-finish");
      modalFinish.style.display = "block";
    }
  }

  function tryAgain() {
    closeModal();
    displayQuestion();
  }

  function handleTryAgain() {
    var modalIncorrect = document.getElementById("modal-incorrect");
    modalIncorrect.style.display = "none";
    tryAgain();
  }

  function closeModal() {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }

  displayQuestion();

  document
    .getElementById("modal-correct")
    .querySelector("button")
    .addEventListener("click", handleNextQuestion);
  document
    .getElementById("modal-incorrect")
    .querySelector("button")
    .addEventListener("click", handleTryAgain);

  document
    .getElementById("modal-finish")
    .querySelector("button")
    .addEventListener("click", restartQuiz);
});

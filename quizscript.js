let menuPage = document.getElementById("menuPage");
let quizPage = document.getElementById("quizPage");
let quizPageQuestion = document.getElementById("quizPageQuestion");
let quizPageVar1 = document.getElementById("quizPageVar1");
let quizPageVar2 = document.getElementById("quizPageVar2");
let quizPageVar3 = document.getElementById("quizPageVar3");
let quizPageVar4 = document.getElementById("quizPageVar4");
let answersPage = document.getElementById("answersPage");
let answersAlert = document.getElementById("answersAlert");
let finishingPage = document.getElementById("finishingPage");
let finishingAlert = document.getElementById("finishingAlert");

let musicQuestions = [
 {
   Question: "Which English Sir has had No. l’s in the 50’s, 60’s, 70’s, 80’s and 90’s?",
   variant1: "Sir Jack Adams",
   variant2: "Sir Cliff Richard",
   variant3: "Sir Donald Allen",
   variant4: "Sir Bob Armstrong",
   truevariant: 2
 },
 {
   Question: "Which famous film star danced (and flew) in the video to Fatboy Slim’s 2001 track Weapon of choice?",
   variant1: "Tom Cruise",
   variant2: "Julia Roberts",
   variant3: "Bruce Willis",
   variant4: "Christopher Walken",
   truevariant: 4
 },
 {
   Question: "Which band had a huge international hit album in 2002 with the record “A Rush of Blood to the Head”?",
   variant1: "U2",
   variant2: "Creed",
   variant3: "Coldplay",
   variant4: "Blink-182",
   truevariant: 3
 },
 {
   Question: "How many members are there in South Korean mega boyband BTS?",
   variant1: "5",
   variant2: "7",
   variant3: "4",
   variant4: "6",
   truevariant: 2
 },
 {
  Question: "In which video did Michael Jackson first perform his famous moonwalk in 1983?",
  variant1: "Billie Jean",
  variant2: "Beat It",
  variant3: "Smooth Criminal",
  variant4: "Earth Song",
  truevariant: 1
},
 {
   Question: "Roger Taylor is the drummer in which band?",
   variant1: "Creed",
   variant2: "One Direction",
   variant3: "Blink-182",
   variant4: "Queen",
   truevariant: 4
 }
];
let moviesQuestions = [
  {
    Question: "The world's earliest surviving motion-picture film, showing actual consecutive action is called Roundhay Garden Scene. In which year was it released?",
    variant1: "1879",
    variant2: "1798",
    variant3: "1911",
    variant4: "1888",
    truevariant: 4
  },
 {
   Question: "What year was the first Toy Story film released in cinemas?",
   variant1: "1995",
   variant2: "2000",
   variant3: "1983",
   variant4: "2002",
   truevariant: 1
 },
 {
   Question: "Which film below is a comedy?",
   variant1: "Joker",
   variant2: "The Irishman",
   variant3: "Murder mystery",
   variant4: "Little women",
   truevariant: 3
 },
 {
   Question: "Which actor got his big break playing a lonely schoolboy in About A Boy?",
   variant1: "Tom Hanks",
   variant2: "Nicholas Hoult",
   variant3: "Adam Sandler",
   variant4: "Nicole Kidman",
   truevariant: 2
 },
 {
   Question: "Who played the lead role in the 2001 film Lara Croft: Tomb Raider?",
   variant1: "Brad Pitt",
   variant2: "Angelina Jolie",
   variant3: "Johnny Depp",
   variant4: "Jennifer Aniston",
   truevariant: 2
 },
 {
   Question: "Who became the first woman to win a Best Director Oscar in 2010?",
   variant1: "Kathryn Bigelow",
   variant2: "John Huston",
   variant3: "Sidney Lumet",
   variant4: "Woody Allen",
   truevariant: 1
 }
];
let mathsQuestions = [
 {
   Question: "How many months are there in twelve years?",
   variant1: "150",
   variant2: "200",
   variant3: "450",
   variant4: "144",
   truevariant: 4
 },
 {
   Question: "What is the next number in the series: 2, 9, 30, 93, …?",
   variant1: "100",
   variant2: "4.5",
   variant3: "282",
   variant4: "126",
   truevariant: 3
 },
 {
   Question: "3 - 7 x 4 = ?",
   variant1: "-25",
   variant2: "25",
   variant3: "0",
   variant4: "27",
   truevariant: 1
 },
 {
   Question: "When did the first printed book on mathematics appear?",
   variant1: "1565",
   variant2: "1478",
   variant3: "879",
   variant4: "305",
   truevariant: 2
 },
 {
   Question: "The ‘Pythagorean Theorem’ is used in which branch of mathematics?",
   variant1: "Algebra",
   variant2: "Applied maths",
   variant3: "Math. analysis",
   variant4: "Geometry",
   truevariant: 4
 }
];
let geographyQuestions = [
 {
   Question: "What country is Beirut the capital of?",
   variant1: "Argentina",
   variant2: "Portugal",
   variant3: "Russia",
   variant4: "Lebanon",
   truevariant: 4
 },
 {
   Question: "What did Ceylon change its name to in 1972?",
   variant1: "India",
   variant2: "China",
   variant3: "Sri Lanka",
   variant4: "Vietnam",
   truevariant: 3
 },
 {
  Question: "Which is the largest island in the world?",
  variant1: "Australia",
  variant2: "India",
  variant3: "Antarctica",
  variant4: "Greenland",
  truevariant: 4
},
 {
   Question: "What is the capital of Poland?",
   variant1: "Moscow",
   variant2: "Warsaw",
   variant3: "Berlin",
   variant4: "Minsk",
   truevariant: 2
 },
 {
   Question: "Which country below is not European?",
   variant1: "Poland",
   variant2: "Peru",
   variant3: "Great Britain",
   variant4: "Romania",
   truevariant: 2
 },
 {
   Question: "What African country has the largest population?",
   variant1: "Nigeria",
   variant2: "Algeria",
   variant3: "Egypt",
   variant4: "Ethiopia",
   truevariant: 1
 }
];
let historyQuestions = [
 {
   Question: "As recently dramatised in a critically acclaimed miniseries, what year did the Chernobyl disaster occur?",
   variant1: "1985",
   variant2: "1898",
   variant3: "1986",
   variant4: "1954",
   truevariant: 3
 },
 {
   Question: "In which European country was there a civil war between 1946 and 1949?",
   variant1: "Spain",
   variant2: "Romania",
   variant3: "Greece",
   variant4: "France",
   truevariant: 3
 },
 {
   Question: "Which British King suffered from a stammer, as portrayed by Colin Firth in The King’s Speech?",
   variant1: "King Artur",
   variant2: "King George VI",
   variant3: "Prince Philip",
   variant4: "Edward VIII",
   truevariant: 2
 },
 {
   Question: "In which country did the Second World War Battles of El Alamein take place?",
   variant1: "Egypt",
   variant2: "France",
   variant3: "USSR",
   variant4: "Vietnam",
   truevariant: 1
 },
 {
   Question: "When did the battle of Avarayr happen?",
   variant1: "451",
   variant2: "405",
   variant3: "301",
   variant4: "2020",
   truevariant: 1
 }
];

let currentQuestions = [];
let currentQuestionsIndex = 0;
let questionsNum = 5;
let trueAnswers = 0;

function startQuiz(type){
  document.getElementsByClassName("first")[0].style.display = "none";
  document.getElementsByClassName("second")[0].style.display = "none";
  currentQuestionsIndex = 0;
  trueAnswers = 0;

  if (type === "music"){
    currentQuestions = musicQuestions;
  } 
  else if (type === "movies"){
    currentQuestions = moviesQuestions;
  } 
  else if (type === "maths"){
    currentQuestions = mathsQuestions;
  }
  else if (type === "geography"){
    currentQuestions = geographyQuestions;
  }
  else if (type === "history"){
    currentQuestions = historyQuestions;
  }
  else{
    currentQuestions = [];
    alert("Something is wrong...");
    return;
  }
  shuffle(currentQuestions);
  showCurrentQuestion();
}

function closeQuiz() {
  answersPage.style.display = "none";
  quizPage.style.display = "none";
  finishingPage.style.display = "none";
  menuPage.style.display = "block";
  document.getElementsByClassName("first")[0].style.display = "block";
  document.getElementsByClassName("second")[0].style.display = "block";
}

function showCurrentQuestion() {
  menuPage.style.display = "none";
  quizPage.style.display = "block";
  answersPage.style.display = "none";
  finishingPage.style.display = "none";

  let currentQuestion = currentQuestions[currentQuestionsIndex];

  quizPageQuestion.innerText = currentQuestion["Question"];
  quizPageVar1.innerText = currentQuestion["variant1"];
  quizPageVar2.innerText = currentQuestion["variant2"];
  quizPageVar3.innerText = currentQuestion["variant3"];
  quizPageVar4.innerText = currentQuestion["variant4"];
}

function answerVar(variant) {
  let currentQuestion = currentQuestions[currentQuestionsIndex];
  let truevariant = currentQuestion["truevariant"];

  if (variant === truevariant) {
    trueAnswers++;
    answersText.innerText = "Right";
    answersText.style.color = "green";
  } 
  else {
    answersText.innerText = "Wrong";
    answersText.style.color = "red";
  }
  answersPage.style.display = "block";
  setTimeout(goForward, 2000);
}

function goForward() {
  answersPage.style.display = "none";

  if (currentQuestionsIndex < questionsNum - 1) {
    changeQuestion();
  } 
  else {
    quizPage.style.display = "none";
    showPage();
  }
}

function showPage() {
  let text = "You have " + trueAnswers + " right answer(s) from " + questionsNum + ".";
  finishingText.innerText = text;
  finishingPage.style.display = "block";
}

function changeQuestion() {
  currentQuestionsIndex++;
  showCurrentQuestion();
}

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}
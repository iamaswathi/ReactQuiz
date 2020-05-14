// var quizQuestions = [
//     {
//         question: "What franchise would you rather play a game from?",
//         answers: [
//             {
//                 type: "Microsoft",
//                 content: "Halo"
//             },
//             {
//                 type: "Nintendo",
//                 content: "Pokemon"
//             },
//             {
//                 type: "Sony",
//                 content: "Uncharted"
//             }
//         ]
//     },
//     {
//         question: "Which console would you prefer to play with friends?",
//         answers: [
//             {
//                 type: "Microsoft",
//                 content: "X-Box"
//             },
//             {
//                 type: "Nintendo",
//                 content: "Nintendo 64"
//             },
//             {
//                 type: "Sony",
//                 content: "Playstation 1"
//             }
//         ]
//     },
//     {
//         question: "Which of these racing franchises would you prefer to play a game from?",
//         answers: [
//             {
//                 type: "Microsoft",
//                 content: "Forza"
//             },
//             {
//                 type: "Nintendo",
//                 content: "Mario Kart"
//             },
//             {
//                 type: "Sony",
//                 content: "Gran Turismo"
//             }
//         ]
//     },
//     {
//         question: "Which of these games do you think is best?",
//         answers: [
//             {
//                 type: "Microsoft",
//                 content: "BioShock"
//             },
//             {
//                 type: "Nintendo",
//                 content: "The Legend of Zelda: Ocarina of Time"
//             },
//             {
//                 type: "Sony",
//                 content: "Final Fantasy VII"
//             }
//         ]
//     },
//     {
//         question: "What console would you prefer to own?",
//         answers: [
//             {
//                 type: "Microsoft",
//                 content: "X-Box One"
//             },
//             {
//                 type: "Nintendo",
//                 content: "Wii U"
//             },
//             {
//                 type: "Sony",
//                 content: "Playstation 4"
//             }
//         ]
//     }
//   ];

var quizQuestions = [
    {
      question: "What franchise would you rather play a game from?",
      answerindex : 1,
      answers: [
        {
          type: "IBM",
          content: "1. Halo",
          answer : false
        },
        {
          type: "amdocs",
          content: "2. Pokemon",
          answer : false
        },
        {
          type: "Sony2",
          content: "3. Uncharted1",
          answer : false
        },
        {
          type: "Sony1",
          content: "4. Uncharted2",
          answer : false
        }
      ]
    },
    {
      question: "Which console would you prefer to play with friends?",
      answerindex : 1,
      answers: [
        {
          type: "IBM",
          content: "X-Box",
          answer : false
        },
        {
          type: "amdocs",
          content: "amdocs 64",
          answer : false
        },
        {
          type: "Sony",
          content: "Playstation 100",
          answer : false
        },
        {
          type: "Sonyq",
          content: "Playstation 1",
          answer : false
        }
      ]
    },
    {
      question: "Which of these racing franchises would you prefer to play a game from?",
      answerindex : 1,
      answers: [
        {
          type: "IBM",
          content: "Forza",
          answer : false
        },
        {
          type: "amdocs",
          content: "Mario Kart",
          answer : false
        },
        {
          type: "Sony",
          content: "Gran Turismo",
          answer : false
        },
        {
          type: "Sonyw",
          content: "Playstation 1qq",
          answer : false
        }
      ]
    },
    {
      question: "Which of these games do you think is best?",
      answerindex : 1,
      answers: [
        {
          type: "IBM",
          content: "BioShock",
          answer : false
        },
        {
          type: "amdocs",
          content: "The Legend of Zelda: Ocarina of Time",
          answer : false
        },
        {
          type: "Sony",
          content: "Final Fantasy VII",
          answer : false
        },
        {
          type: "Sonyr",
          content: "Playstation 1",
          answer : false
        }
      ]
    },
    {
      question: "What console would you prefer to own?",
      answerindex : 1,
      answers: [
        {
          type: "IBM",
          content: "X-Box One",
          answer : false
        },
        {
          type: "amdocs",
          content: "Wii U",
          answer : false
        },
        {
          type: "Sony",
          content: "Playstation 4",
          answer : false
        },
        {
          type: "Sonyqqå",
          content: "Playstation11 1",
          answer : false
        }
      ]
    }
  ];
  
//   export default quizQuestions;
  
  export default quizQuestions;

//   class Quiz extends React.Component {
//     constructor(props) {
//       super(props)
      
//       var dataSet = [
//         {
//           question: "What is 8 x 1?",
//           answers: [
//             "1",
//             "8",
//             "16",
//             "9"
//           ],
//           correct: 1
//         },
//         {
//           question: "Who is Steve Jobs?",
//               answers: [
//                 "CEO of Microsoft",
//                 "Barber in NY",
//                 "Movie Star",
//                 "CEO of Apple"
//               ],
//               correct: 3
//         },
//          {
//               question: "Metallica is a ____ band",
//               answers: [
//                 "Blues",
//                 "Hard-Rock",
//                 "Jazz",
//                 "Metal"
//               ],
//               correct: 3
//             },
//             {
//               question: "IS is a ____",
//               answers: [
//                 "Word",
//                 "Band",
//                 "Terror Group",
//                 "Brand"
//               ],
//               correct: 2
//             },
//             {
//               question: "Who was Einstein",
//               answers: [
//                 "A Scientist",
//                 "A Dentist",
//                 "A Serial Killer",
//                 "None of the above"
//               ],
//               correct: 0
//             },
//             {
//               question: "JavaScript can be used in ____ development",
//               answers: [
//                 "Back-End",
//                 "Front-End",
//                 "ReactJS",
//                 "All of the Above"
//               ],
//               correct: 3
//             },
//             {
//               question: "Hitler was a",
//               answers: [
//                 "Mass Murderer",
//                 "Dictator",
//                 "Jew",
//                 "None of the above",
//                 "All of the above"
//               ],
//               correct: 4
//             },
//             {
//               question: "Korn is a",
//               answers: [
//                 "Nu-Metal band",
//                 "Religion",
//                 "Singer"
//               ],
//               correct: 0
//             },
//             {
//               question: "Windows computers are",
//               answers: [
//                 "Horrible",
//                 "Great",
//                 "Cheap",
//                 "Invented by Bill Gates"
//               ],
//               correct: 3
//             },
//             {
//               question: "The BigBan stands in",
//               answers: [
//                 "Egypt",
//                 "London",
//                 "Amsterdam",
//                 "NewYork"
//               ],
//               correct: 1
//             },
//       ];
      
//       this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
//       this.handleClick = this.handleClick.bind(this)
      
//     } // end constructor
    
//     handleClick(choice) {
//       if (choice == this.state.dataSet[this.state.current].correct) {
//         this.setState({correct: this.state.correct + 1})
//       } else {
//         this.setState({incorrect: this.state.incorrect + 1})
//       }
      
//       if (this.state.current == 9) {
//         this.setState({current: 0})
//         this.setState({incorrect: 0})
//         this.setState({correct: 0})
//       } else {
//            this.setState({current: this.state.current + 1}) 
//       }
//     }
    
//     render() {
//       return(
//         <div>
//           <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
//           <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
//         </div>
//       )
//     }
//   }
  
//   function Question(props) {
//     var style = {
//       color: "red",
//     }
//     return (
//       <h1 style={style}>{props.dataSet.question}</h1>
//     )
//   }
  
//   function Answer(props) {
//     var style = {
//       width: "100%",
//       height: 50,
//       color: "blue"
//     }
//     return(
//       <div>
//         <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//       </div>
//     )
//   }
  
//   function AnswerList(props) {
//     var answers = []
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//       answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     return(
//       <div>
//         {answers}
//       </div>
//     )
//   }
  
//   function QuizArea(props) {
//     var style = {
//       width: "25%",
//       display: "block",
//       textAlign: "center",
//       boxSizing: "border-box",
//       float: "left",
//       padding: "0 2em"
//     }
//     return(
//       <div style={style}>
//         <Question dataSet={props.dataSet} />
//         <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//       </div>
//     )
//   }
  
//   function TotalCorrect(props) {
//       var style = {
//       display: "inline-block",
//       padding: "1em",
//       background: "#eee",
//       margin: "0 1em 0 0"
//     }
//     return(
//       <h2 style={style}>Correct: {props.correct}</h2>
//     )
//   }
  
//   function TotalIncorrect(props) {
//     var style = {
//       display: "inline-block",    
//       padding: "1em",
//       background: "#eee",
//       margin: "0 0 0 1em"
//     }
//     return(
//       <h2 style={style}>Incorrect: {props.incorrect}</h2>
//     )
//   }
  
//   function ScoreArea(props) {
//     var style = {
//       width: "100%",
//       display: "block",
//       textAlign: "left",
//       float: "left",
//       padding: "2em"
//     }
//     return(
//       <div style={style} >
//         <TotalCorrect correct={props.correct} />
//         <TotalIncorrect incorrect={props.incorrect} />
//       </div>
//     )
//   }
  
//   ReactDOM.render(
//     <Quiz />,
//     document.getElementById("root")
//   )
  
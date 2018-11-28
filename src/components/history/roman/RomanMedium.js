import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class Roman extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "The Colosseum in Rome is also known as?",
          answers: [
            "Augustian Ampitheatre",
            "Julian Ampitheatre",
            "Flavian Amphitheatre",
            "Vespasian Ampitheatre",
            "Commodian Ampitheatre",            
          ],
          correct: 2
        },
        {
          question: "How did the emperor Commodus die?",
              answers: [
                "Poisoned by his mistress Marcia",
                "Killed in a gladitoral game by a gladitor called Maximus",
                "Was stabbed numerous times by different senators",
                "Strangled by his wrestling partner in his bath",
                "Commited sucide due to revolts"                
              ],
              correct: 3
        },
         {
              question: "According to the Greek historian Polybius, the reason for Rome's success to dominate the world in just 50 years was:",
              answers: [
                "The structure of Rome's republican government",
                "The efficiency of the Roman military",
                "The unity of the Roman and Italian people",
                "The importation of Greek culture into Rome",
                "None of the above",
              ],
              correct: 0
            },
            {
              question: "The early Roman legions consisted of 3 lines of infantry. What were their names?",
              answers: [
                "Velites, Equites, Hastati",
                "Hastati, Equites, Principes",
                "Equites, Triarii, Velites",
                "Hastati, Principes, Triarii",
                "Principes, Velites, Triarii",
              ],
              correct: 3
            },
            {
              question: "Which province supplied the city of Rome with grain?",
              answers: [
                "Egypt",
                "Africa",
                "Italia",
                "Syria",                
                "None of the above"
              ],
              correct: 0
            },
            {
              question: "A common piece of clothing in ancient Rome was:",
              answers: [
                "Togas",
                "Chiton",
                "Himation",
                "Trousers",
                "All of the Above"
              ],
              correct: 0
            },
            {
              question: "What is Julius Caesar's conquest of modern France known as?",
              answers: [
                "Celtic Wars",
                "Germanic Wars",
                "Francian Wars",
                "Belgae Wars",
                "Gallic Wars"
              ],
              correct: 4
            },
            {
              question: "What was the capital of the Byzantine/Eastern Roman Empire?",
              answers: [
                "Ephesus",
                "Athens",
                "Alexandria",
                "Constantinople",
                "Thessalonica"
              ],
              correct: 3
            },
            {
              question: "Besides gladitorial combat, another popular sport in ancient Rome was:",
              answers: [
                "Rock throwing",
                "Chariot racing",
                "Javelin throwing",
                "Horse racing",
                "Dueling"
              ],
              correct: 1
            },
            {
              question: "Some of Rome's greatest feats in engineering included",
              answers: [
                "Roads",
                "Aqueducts",
                "Bridges",
                "Concrete",
                "All of the above"                
              ],
              correct: 4
            },
            {
              question: "Well Done! You have completed the quiz",
              answers: [
                "Click here to start again",                
              ],
            },
      ];
      
      this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0}
      this.handleClick = this.handleClick.bind(this)
      
    } // end constructor
    
    handleClick(choice) {
      if (choice == this.state.dataSet[this.state.current].correct) {
        this.setState({correct: this.state.correct + 1})
      } else {
        this.setState({incorrect: this.state.incorrect + 1})
      }
      
      if (this.state.current == 10) {
        this.setState({current: 0})
        this.setState({incorrect: 0})
        this.setState({correct: 0})
      } else {
           this.setState({current: this.state.current + 1}) 
      }
    }
    
    render() {
      return(
        <div>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
          <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
        </div>
      )
    }
  }
  
  function Question(props) {
    var style = {
      color: "red",
    }
    return (
      <h1 style={style}>{props.dataSet.question}</h1>
    )
  }
  
  function Answer(props) {
    var style = {
      width: "100%",
      height: 50,
      color: "blue"
    }
    return(
      <div>
        <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }
  
  function AnswerList(props) {
    var answers = []
    for (let i = 0; i < props.dataSet.answers.length; i++) {
      answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
    return(
      <div>
        {answers}
      </div>
    )
  }
  
  function QuizArea(props) {
    var style = {
      width: "100%",
      display: "block",
      textAlign: "center",
      boxSizing: "border-box",
      float: "left",
      padding: "0 2em"
    }
    return(
      <div style={style}>
        <Question dataSet={props.dataSet} />
        <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
      </div>
    )
  }
  
  function TotalCorrect(props) {
      var style = {
      display: "inline-block",
      padding: "1em",
      background: "#eee",
      margin: "0 1em 0 0"
    }
    return(
      <h2 style={style}>Correct: {props.correct}</h2>
    )
  }
  
  function TotalIncorrect(props) {
    var style = {
      display: "inline-block",    
      padding: "1em",
      background: "#eee",
      margin: "0 0 0 1em"
    }
    return(
      <h2 style={style}>Incorrect: {props.incorrect}</h2>
    )
  }
  
  function ScoreArea(props) {
    var style = {
      width: "100%",
      display: "block",
      textAlign: "left",
      float: "left",
      padding: "2em"
    }
    return(
      <div style={style} >
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
  }

export default Roman

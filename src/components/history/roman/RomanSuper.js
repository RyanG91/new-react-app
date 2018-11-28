import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class Roman extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) Which two cities did the Romans destroy in 146BC?",
          answers: [
            "Athens and Carthage",
            "Alexandria and Corinth",
            "Carthage and Corinth",
            "Antioch and Athens",
            "Alexandria and Athens",
          ],
          correct: 2
        },
        {
          question: "2) What was the Roman short sword designed for?",
              answers: [
                "Slashing",
                "Stabbing",
                "Hacking",
                "All of the above",
                "None of the above"
              ],
              correct: 1
        },
         {
              question: "3) Why were Roman legions sometimes called Pack Mules?",
              answers: [
                "It was an insult made up by Rome's enemies",
                "The legions generally carried all their supplies",
                "The legions had a large number of slaves carrying their supplies",
                "The large number of mules the Romans brought with them",
                "Most Romans rode on mules while travelling",
              ],
              correct: 1
            },
            {
              question: "4) What made the Roman javelin/Pilum effective?",
              answers: [
                "They were light and easy to throw",
                "They could be used in hand to hand combat as a spear",
                "The javelin was designed to bend upon impact, making it impossible for the enemy to use",
                "They could penetrate sheilds rending them useless",
                "All of the above",
              ],
              correct: 4
            },
            {
              question: "5) Which of these is not an imperial Roman dynasty?",
              answers: [
                "Flavian",
                "Julio-Claudian",
                "Justinian",
                "Leonid",
                "Argead"
              ],
              correct: 4
            },
            {
              question: "6)Julius Caesar and his family claimed to be a descendant of which Roman god/goddess?",
              answers: [
                "Venus",
                "Jupiter",
                "Mars",
                "Mercury",
                "Diana"
              ],
              correct: 0
            },
            {
              question: "7) What was the capital of the Western Roman Empire when it fell?",
              answers: [
                "Rome",
                "Milan/Mediolanum",
                "Ravenna",
                "Constantinople",
                "Naples"
              ],
              correct: 2
            },
            {
              question: "8) Which of these 5 cities were the major centres for early Christianity?",
              answers: [
                "Rome, Constantinople, Carthage, Memphis, Bethlehem",
                "Jerusalem, Alexandria, Athens, Rome, Naples",
                "Rome, Constantinople, Antioch, Jerusalem, Alexandria",
                "Rome, Antioch, Carthage, Paris, Athens",
                "Rome, Pella, Athens, Antioch, Alexandria"
              ],
              correct: 2
            },
            {
              question: "9) Which dynasty did Commodus belong to?",
              answers: [
                "Flavian",
                "Aurelian",
                "Severan",
                "Nerva-Antonine",
                "Julio-Claudian"
              ],
              correct: 3
            },
            {
              question: "10) While Caesar was stabbed 23 times, his autopsy suggest that:",
              answers: [
                "Only 1 wound was fatal",
                "Only 2 wounds were fatal",
                "Only 3 wounds were fatal",
                "Only 5 wounds were fatal",
                "Only 7 wounds were fatal"
              ],
              correct: 0
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

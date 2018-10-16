import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class WWI extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) The German word Kaiser and Russian word Tsar both mean emperor and were translated from?",
          answers: [
            "Princeps",
            "Imperator",
            "Augustus",
            "Caesar",
            "Dominus",            
          ],
          correct: 3
        },
        {
          question: "2) Which emperor established Christianity as the state religion of the empire?",
              answers: [
                "Theodosius the Great",
                "Diocletian",
                "Constantine the Great",
                "Aurelian",
                "Honorius"                
              ],
              correct: 0
        },
         {
              question: "3) Who was the last king of Rome?",
              answers: [
                "Tullus Hostilinus",
                "Ancus Marcius",
                "Lucius Tarquinius Priscus",
                "Lucius Tarquinius Superbus",
                "Servius Tullius",
              ],
              correct: 3
            },
            {
              question: "4) What role did an Aedile have?",
              answers: [
                "Command legions",
                "Arrange public festivals",
                "Monitor of grain supply",
                "Oversee elections",
                "All of the above",
              ],
              correct: 1
            },
            {
              question: "5) Which of these cities was not a Roman colony?",
              answers: [
                "London",
                "Paris",
                "Madrid",
                "Vienna",                
                "None of the above"
              ],
              correct: 4
            },
            {
              question: "6) Which of these odd items did the Romans use cleaning clothes?",
              answers: [
                "Human urine",
                "Human poo",
                "Human blood",
                "Human saliva",
                "Human vomit"
              ],
              correct: 0
            },
            {
              question: "7) Drawnings or markings of penis' in public directed people to the nearest:",
              answers: [
                "Brothel",
                "Toliet",
                "Bath",
                "Female slave markets",
                "Doctor"
              ],
              correct: 0
            },
            {
              question: "8) Which of the following actions did emperor Commodus undertake?",
              answers: [
                "Rename all months after himself",
                "Fight in gladitoral games",
                "Styed himself as a new Hercules",
                "Renamed the fleet after himself",
                "All of the above"
              ],
              correct: 4
            },
            {
              question: "9) Which emperor brought Rome to its peak expansion?",
              answers: [
                "Augustus",
                "Trajan",
                "Marcus Aurelius",
                "Hadrian",
                "Septimius Severus"
              ],
              correct: 1
            },
            {
              question: "10) Which of the following is true?",
              answers: [
                "Slaves couldn't gain freedom",
                "Slaves could gain freedom and become citizens",
                "Slaves could gain freedom and their children could become citizens",
                "Slaves could gain freedom but were forbidden from taking their masters lastname",
                "Slaves could gain freedom but needed permission to marry afterwoods"
              ],
              correct: 2
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

export default WWI

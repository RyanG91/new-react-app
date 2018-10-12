import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class Roman extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "Who succeeded Marcus Aurelius as emperor?",
          answers: [
            "Commodus",
            "Augustus Caesar",
            "Nero",
            "Maximus Decimus Meridius"
          ],
          correct: 0
        },
        {
          question: "Who was the first emperor of Rome?",
              answers: [
                "Julius Caesar",
                "Vespasian",
                "Tiberius",
                "Augustus Caesar"
              ],
              correct: 3
        },
         {
              question: "The era following from the Roman Monarchy was:",
              answers: [
                "The Roman Dictatorship",
                "The Roman Democracy",
                "The Roman Empire",
                "The Roman Republic"
              ],
              correct: 3
            },
            {
              question: "Who was the supreme god of the Rome?",
              answers: [
                "Mars",
                "Saturn",
                "Jupiter",
                "Zeus"
              ],
              correct: 2
            },
            {
              question: "What language did the Romans speak?",
              answers: [
                "Latin",
                "Greek",
                "Italian",
                "None of the above"
              ],
              correct: 0
            },
            {
              question: "The main purpose of aqueducts was to:",
              answers: [
                "Give directions to lost travellers",
                "Transport gold and resources over land",
                "Display Roman power",
                "Transport water from its source to a distribution point"
              ],
              correct: 3
            },
            {
              question: "What was Julius Caesar's cause of death?",
              answers: [
                "Killed in battle",
                "He was assassinated",
                "Died of old age",
                "He drowned"
              ],
              correct: 1
            },
            {
              question: "What was the highest office besides dictator in the Roman Republic?",
              answers: [
                "Praetor",
                "Tribune of the Plebs",
                "Consul",
                "Proconsul"                
              ],
              correct: 2
            },
            {
              question: "Which holiday has some roots in the Roman festival of Saturnalia?",
              answers: [
                "Easter",
                "Birthdays",
                "Labour Day",
                "Christmas"
              ],
              correct: 3
            },
            {
              question: "Which religion eventually replaced the traditional Roman religions?",
              answers: [
                "Islam",
                "Christianity",
                "Judaism",
                "Buddhism"
              ],
              correct: 1
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

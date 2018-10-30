import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class WWI extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) Which of these was the royal house of Austria-Hungary at the start of the war?",
          answers: [
            "House von Babenburg",
            "House von Hohenzollern",
            "House von Habsburg-Lorraine",
            "House von Wittelsbach",
            "House von Zahringen",
          ],
          correct: 2
        },
        {
          question: "2) The German Emperor was the king of which German kingdom?",
              answers: [
                "Kingdom of Bavaria",
                "Kingdom of Prussia",
                "Kingdom of Mecklenburg",
                "Kingdom of Hannover",
                "Kingdom of Brandenburg"
              ],
              correct: 1
        },
         {
              question: "3) What was the name of the terrorist organisation which killed Archduke Franz Ferdinand?",
              answers: [
                "White hand",
                "Black hand",
                "Blue hand",
                "Gray hand",
                "Green hand",
              ],
              correct: 1
            },
            {
              question: "4) Which country broke the stalement on the Western Front in 1918?",
              answers: [
                "US",
                "Belgium",
                "France",
                "Britain",
                "Germany",
              ],
              correct: 4
            },
            {
              question: "5) The Balfour Declaration was the British supporting a Jewish homeland where?",
              answers: [
                "China",
                "Ireland",
                "Madagascar",
                "Germany",
                "Palestine"
              ],
              correct: 4
            },
            {
              question: "6) Who was the German Emperor in 1914?",
              answers: [
                "Wilhelm I",
                "Frederick III",
                "Commodus II",
                "Wilhelm II",
                "Ferdinand I"
              ],
              correct: 3
            },
            {
              question: "7) What was the offical French governments name during the war?",
              answers: [
                "Second French Republic",
                "Third French Republic",
                "Fourth French Republic",
                "Second French Empire",
                "Third French Empire"
              ],
              correct: 1
            },
            {
              question: "8) What was the treaty called at the end of the war?",
              answers: [
                "The Treaty of Versallies",
                "The Treaty of Paris",
                "The Treaty of London",
                "The Treaty of Berlin",
                "The Treaty of Westphalia"
              ],
              correct: 0
            },
            {
              question: "9) Where was the German Emperor exiled to after the war and refused to hand him to the Allies?",
              answers: [
                "Swizterland",
                "Denmark",
                "Spain",
                "The Netherlands",
                "Sweden"
              ],
              correct: 3
            },
            {
              question: "10) In response to failing to pay reparations which country invaded Germany and caused hyperinflation in 1923?",
              answers: [
                "Poland",
                "Soviet Union",
                "France",
                "Britain",
                "Czechoslovakia"
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

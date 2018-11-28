import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class WWI extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) Who made up the Triple Alliance?",
          answers: [
            "Britain, France, Russia",
            "France, Russia, Italy",
            "Germany, Austria-Hungary, Italy",
            "Germany, Austria-Hungary, Ottoman Empire",
            "Russia, Serbia, France",
          ],
          correct: 2
        },
        {
          question: "2) Who was assassinated that is considered the start of WWI?",
              answers: [
                "Archduke Franz Ferdinand",
                "Archduke Leopold",
                "Archduke Charles",
                "Archduke Rudolf",
                "Archduke Commodus"
              ],
              correct: 0
        },
         {
              question: "3) When was conscription introduced in Australia?",
              answers: [
                "1915",
                "1916",
                "1917",
                "1918",
                "It was never introduced",
              ],
              correct: 4
            },
            {
              question: "4) Which two countries joined the war in 1915?",
              answers: [
                "Italy and the Ottomans",
                "Italy and Romania",
                "Ottomans and Romania",
                "Italy and Spain",
                "Italy and Ireland",
              ],
              correct: 0
            },
            {
              question: "5) What was the ethnicity of the communist leaders Lenin and Trotsky?",
              answers: [
                "Russian",
                "Ukranian",
                "Jewish",
                "Polish",                
                "None of the above"
              ],
              correct: 2
            },
            {
              question: "6) Which 3 countries were considered the main industrial powerhouses in 1914?",
              answers: [
                "France, Britain, Germany",
                "Russia, Britain, Germany",
                "US, Britain, Germany",
                "Austria-Hungary, Britain, Germany",
                "France, Russia, Italy"
              ],
              correct: 2
            },
            {
              question: "7) What was the capital of the Russian Empire in 1914?",
              answers: [
                "Moscow",
                "St Petersburg",
                "Kiev",
                "Minsk",
                "Petrograd"
              ],
              correct: 1
            },
            {
              question: "8) Which of these battles took place in 1916?",
              answers: [
                "1st battle of Ypres",
                "Passchendaele",
                "Tannenberg",
                "Caporetto",
                "Verdun"
              ],
              correct: 4
            },
            {
              question: "9) Trench warfare was fought mostly on which front?",
              answers: [
                "Eastern Front",
                "Western Front",
                "Austro-Italian Front",
                "Middle Eastern Front",
                "All of the above"
              ],
              correct: 1
            },
            {
              question: "10) The British blockade of Germany during WWI caused how many German civilians to die of starvation?",
              answers: [
                "10,000 - 50,000 deaths",
                "50,000 - 100,000 deaths",
                "100,000 - 300,000 deaths",
                "300,000 - 600,000 deaths",
                "600,000 - 1,000,000 deaths"
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

export default WWI

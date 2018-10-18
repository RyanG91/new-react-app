import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class WWI extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) Which of these was the royal house of Britain at the start of the war?",
          answers: [
            "House von Hannover",
            "House von Saxe-Coburg and Gotha",
            "House von Wettin",
            "House von Oldenburg",
            "House von Glucksburg",
          ],
          correct: 1
        },
        {
          question: "2) What was the first battle Australian's fought in during WWI?",
              answers: [
                "Battle of Somme",
                "Battle of Gallipoli",
                "Battle of Verdun",
                "Battle of Ypres",
                "Siege of Tobruk"
              ],
              correct: 1
        },
         {
              question: "3) Which year did the Russian Empire surrender/withdraw from the war?",
              answers: [
                "1914",
                "1915",
                "1916",
                "1917",
                "1918",
              ],
              correct: 3
            },
            {
              question: "4) Which country was the Western Front mostly fought in?",
              answers: [
                "Belgium",
                "Netherlands",
                "France",
                "Britain",
                "Germany",
              ],
              correct: 2
            },
            {
              question: "5) What is the name of having the entire population involved in the war effort?",
              answers: [
                "Total war",
                "Everything war",
                "Commited War",
                "All in war",
                "None of the above"
              ],
              correct: 0
            },
            {
              question: "6) Who was the Tsar of Russia in 1914?",
              answers: [
                "Commodus III",
                "Louis XVI",
                "Alexander I",
                "Paul V",
                "Nicholas II"
              ],
              correct: 4
            },
            {
              question: "7) In response to anti-German sentiment what was St Petersburg renamed to?",
              answers: [
                "Leningrad",
                "Stalingrad",
                "Smolensk",
                "Petrograd",
                "Tsarsgrad"
              ],
              correct: 3
            },
            {
              question: "8) Who was the Red Barron?",
              answers: [
                "A French pilot",
                "A German pilot",
                "A British pilot",
                "A Russian pilot",
                "A Turkish pilot"
              ],
              correct: 1
            },
            {
              question: "9) The communist uprisings in 1918-1919 in Germany were led mostly by?",
              answers: [
                "Germans",
                "Poles",
                "Jews",
                "Austrians",
                "None of the above"
              ],
              correct: 2
            },
            {
              question: "10) Which of these countries remained neutral during the war?",
              answers: [
                "Spain",
                "China",
                "Japan",
                "Greece",
                "Serbia"
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

export default WWI

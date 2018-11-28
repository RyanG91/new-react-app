import React, { Component } from 'react'
import '../../../stylesheets/App.css';

class WWI extends React.Component {
    constructor(props) {
      super(props)
      
      var dataSet = [
        {
          question: "1) Which of these was the royal house of Prussia and the German Empire at the start of the war?",
          answers: [
            "House von Hohenstaufen",
            "House von Hohenzollern",
            "House von Konigsberg",
            "House von Hohenbach",
            "House von Zahringen",
          ],
          correct: 1
        },
        {
          question: "2) Which of these countries joined the allied side in 1916?",
              answers: [
                "Portugal",
                "Greece",
                "China",
                "Italy",
                "United States"
              ],
              correct: 0
        },
         {
              question: "3) What year was conscription introduced in Britain?",
              answers: [
                "1914",
                "1915",
                "1916",
                "1917",
                "1918",
              ],
              correct: 2
            },
            {
              question: "4) Which of these ingredients were added to bread in Germany to make up for lack of supplies?",
              answers: [
                "Stones and sand",
                "Grass and leaves",
                "Thatch and leaves",
                "Chalk and sawdust",
                "Charcoal and sulfur",
              ],
              correct: 3
            },
            {
              question: "5) In 1916 Woodrow Wilson won re-election in the US based on which of the following?",
              answers: [
                "Bringing the US into the war on the Allied side",
                "Bringing the US into the war on the German side",
                "Keeping the US neutral and out of the war",
                "Creating an international organisation, League of Nations",
                "Demanding both sides to stop fighting"
              ],
              correct: 2
            },
            {
              question: "6) What was the name of the treaty to end the war on the Eastern Front?",
              answers: [
                "Treaty of Berlin",
                "Treaty of Warsaw",
                "Treaty of Minsk",
                "Treaty of Brest-Litovsk",
                "Treaty of Moscow"
              ],
              correct: 3
            },
            {
              question: "7) Who did the British promise to give the land of Palestine to after the war?",
              answers: [
                "Jewish/Zionist groups",
                "Kingdom of Hejaz",
                "Kingdom of Nejd",
                "The Palestinian people",
                "All of the above"
              ],
              correct: 4
            },
            {
              question: "8) What was the reason the US did not join the League of Nations?",
              answers: [
                "The president didn't see it as worth joining",
                "Congress did not support joining it",
                "The US supreme court ruled against joining it",
                "The US did not support the Treaty of Versailles",
                "All of the above"
              ],
              correct: 1
            },
            {
              question: "9) Why was Italy so embittered towards the Allies after the wars end?",
              answers: [
                "Britain and France promised to send troops to help them but never did",
                "Britain and France made peace at Versailles without consulting them",
                "Britain and France didn't give them the land they were promised for joining the war on the Allied side",
                "Britain and France supported a coup against the Italian Government during the war",
                "Britain and France threatened to invade if Italy made a seperate peace"
              ],
              correct: 2
            },
            {
              question: "10) What makes the Treaty of Versailles such an interesting and unique treaty?",
              answers: [
                "It was a dictated treaty, Germany and its allies couldn't negotiate it",
                "Nobody got what they really want from the treaty",
                "French leaders suggested to have 20 million German men castrated",
                "The treaty destroyed 3 major empires, completely changing the balance of power",
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

export default WWI

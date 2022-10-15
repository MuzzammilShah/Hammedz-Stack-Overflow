import React from 'react'

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
  // console.log(questionsList)
  // var questionsList = [{
  //   _id: 1,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function?",
  //   questionBody: "It means that",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "nano",
  //   userId: 1,
  //   askedOn: "Jan 21",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'zaeden',
  //     answeredOn: "Jan 22",
  //     userId: 4,
  //   }]
  // },{
  //   _id: 2,
  //   upVotes: 8,
  //   downVotes: 2,
  //   noOfAnswers: 0,
  //   questionTitle: "Can you develop AI using Python?",
  //   questionBody: "It means that",
  //   questionTags: ["javascript", "R", "python"],
  //   userPosted: "meta",
  //   userId: 2,
  //   askedOn: "July 30",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'zayn',
  //     answeredOn: "Aug 2",
  //     userId: 5,
  //   }]
  // },{
  //   _id: 3,
  //   upVotes: 12,
  //   downVotes: 0,
  //   noOfAnswers: 0,
  //   questionTitle: "What is the difference between JAVA, C and Python?",
  //   questionBody: "It means that",
  //   questionTags: ["java", "C", "python"],
  //   userPosted: "elon",
  //   userId: 3,
  //   askedOn: "Oct 6",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswered: 'hammed',
  //     answeredOn: "Oct 22",
  //     userId: 6,
  //   }]
  // }]

  const checkAuth = () => {
    if(user === null){
      alert("Login or Signup to ask a question!")
      navigate('/Auth')
    }
    else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p style={{color:"white"}}>{ questionsList.data.length } questions</p>
              <QuestionList questionsList={questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
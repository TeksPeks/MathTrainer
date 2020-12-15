import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './PlayPage.css'

const PlayPage = () => {
    const [time, setTime] = useState(20)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState('')
    const [expression, setExpression] = useState('20+12')
    const [answ, setAnsw] = useState(0)

    const timer = () => {
        setTime(time-1)
        if (time < 0) {
            setTime(0)
        }
    }
    useEffect(() => {
        if (time > 0) {
            const intr = setTimeout(timer, 1000)
            return () => clearTimeout(intr)
        }
    })

    useEffect(() => {
        newExpression()
    }, [])

    const newExpression = () => {
        let a = Math.round(Math.random()*50)
        let b = Math.round(Math.random()*50)
        while(a<b) {
            a = Math.round(Math.random()*50)
            b = Math.round(Math.random()*50)
        }
        const sign = Math.round(Math.random()*2) ? '+' : '-'
        if (sign == "+") {
            setAnsw(a+b)
            setExpression(`${a}+${b}`)
        } else {
            setAnsw(a-b)
            setExpression(`${a}-${b}`)
        }
    }

    function handleChange(e) {
        setAnswer(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!answer.toString().match(/^$|\s+/)) {
            setAnswer('')
            if (answer == answ) {
                newExpression()
                setTime(time+3)
                setScore(score+1)
            } else {
                setTime(time-3)
            }
        }
    }
    
    function refreshPage() {
        window.location.reload();
    }

    if (time <= 0) {
        return (
            <div className="container-l">
                <h1>Час вийшов!</h1>
                <h2>Ви набрали {score} {score%10 == 1 ? 'бал' : score%10==2 || score%10==3 || score%10==4 ? 'бали' : 'балів'}</h2>
                <p className="againb" onClick={refreshPage}>&#x25B6;</p>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="timer">
                <h1>{time}</h1>
                <span className="score">Score: {score}</span>
            </div>
            <div className="expression"><h1>{expression}</h1></div>
            <form className="answer" onSubmit={handleSubmit}>
                <input type="number" id="ansinp" name="answerv" value={answer} onChange={handleChange} />
            </form>
        </div>
    )
}

export default PlayPage
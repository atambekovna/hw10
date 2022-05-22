import { useState } from 'react'
import './Form.css'

function Form() {

    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [result, setresult] = useState([]);

    const getText = (e) => {
        setText(e.target.value)
    };

    const getEmail = (e) => {
        setEmail(e.target.value)
    };

    const getDate = (e) => {
        setDate(e.target.value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        setresult([...result, {title: text, email: email, date: date}])
        setText('');
        setEmail('');
        setDate('');
    }

    return (
        <div className='form-cont'>
          <form className='form'>
            <input onChange={getText} value={text} type="text" placeholder='add something...'/>
            <input onChange={getEmail} type="email" placeholder='add your e-mail'/>
            <input onChange={getDate} type="date" />
            <button onClick={onClickHandler}>Leave message</button>
          </form>
          
              {result.map((el) => {
                  return <p className='new-title'>{el.title}{el.email}{el.date}</p>
              })}
          
        </div>
    )
}

export default Form
import {useState} from 'react'

import {v4 as uuid} from 'uuid'

import './index.css'

function CharacterCounter() {
  const [word, setWord] = useState({
    text: '',
    id: '',
  })

  const [letter, setLetter] = useState([])

  const onChangeWord = event => {
    setWord({
      ...word,
      text: event.target.value,
    })
  }

  const onClickAdd = e => {
    e.preventDefault()
    const newTodo = {
      text: word.text,
      id: uuid(),
    }
    setLetter([...letter, newTodo])
    setWord({
      text: '',
      id: '',
    })
  }

  return (
    <div className="bg-container">
      <div className="count-container">
        <div className="count-card">
          <h1 className="heading">
            Count the characters like a<br /> Boss.....
          </h1>
        </div>
        {letter.length === 0 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="image"
          />
        ) : (
          <ul className="list-container">
            {letter.map(e => {
              const {text, id} = e
              return (
                <li key={id}>
                  <li>
                    <p>
                      {text} : {text.length}
                    </p>
                  </li>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="text-container">
        <h1 className="text-heading">Character Counter</h1>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter the characters here"
              value={word.text}
              className="input"
              onChange={onChangeWord}
            />
            <button type="submit" onClick={onClickAdd} className="button">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CharacterCounter

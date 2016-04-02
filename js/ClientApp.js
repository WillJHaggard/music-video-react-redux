import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => (
  <article className='list-performer guitar'>
    <div className='header-video'>
      <section className='video-container'>
        <div className='overlay'>
          <img className='poster' src='http://placehold.it/350x150' />
          <img className='poster-colored' src='http://placehold.it/350x150' />
          <a className='play-button' href='https://youtu.be/w3kOhMnNXnQ'>
            <span className='before'></span>
            <span className='after'></span>
          </a>
        </div>
        <div className='votes-roses'>
          <div className='votes'><span></span></div>
          <div className='roses'><span></span></div>
        </div>
        <div className='player'></div>
    </section>
    <header>
      <div className='info'>
        <p className='type'>Guitar / Bass</p>
        <p className='location'>Valencia/Spain</p>
      </div>
      <h1>
        <a href='#'>Borja<br />Catanesi</a>
      </h1>
      <div className='performer-links'>
        <a href='#' className='link'>Profile</a>
        <a href='#' className='link'>View encore video</a>
      </div>

    </header>
    </div>
  </article>
)

const target = document.getElementById('app')
const newDiv = document.createElement('div')
target.appendChild(newDiv)
ReactDOM.render(
  <App location='Charleston, South Carolina' />,
  newDiv
)

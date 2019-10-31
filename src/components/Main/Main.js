import React from 'react'
import './main.scss'
import arrowDown from '../../images/arrow-down.svg'

const Main = () => {
	return (
		<main className="c-main">
			<div className="l-container">
				<div className="c-main__content">
					<h1>Hi there.</h1>
					<p>I'm a web developer blah blah blah...</p>
					<a className="c-main__contact" href="#contact">Contact</a>
				</div>
				<img className="arrow-down" src={arrowDown} alt=""/>
			</div>
		</main>
	)
}

export default Main

import React from 'react'
import './header.scss'
import {animateScroll as scroll} from 'react-scroll'


const Header = () => {
	return (
		<header className="c-header">
			<div className="c-header__logo" onClick={() => scroll.scrollToTop()}></div>
			<button className="c-header__burger c-header__burger--open"></button>
		</header>
	)
}

export default Header

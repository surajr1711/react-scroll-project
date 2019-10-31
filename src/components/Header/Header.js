import React from 'react'
import './header.scss'

const Header = () => {
	return (
		<header className="c-header">
			<div className="c-header__logo"></div>
			<button className="c-header__burger c-header__burger--open"></button>
		</header>
	)
}

export default Header

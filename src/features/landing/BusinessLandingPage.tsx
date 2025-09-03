import Goals from './components/Goals'
import Main from './components/Main'
import Partners from './components/Partners'
import Strategy from './components/Strategy'
import Hero from './components/Hero'
import Footer from './components/Footer'

const landingPage = () => {
	return (
		<div>
			<Hero />
			<Main />
			<Strategy />
			<Goals />
			<Partners />
			<Footer/>
		</div>
	)
}

export default landingPage

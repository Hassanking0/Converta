import Goals from './components/Goals'
import Main from './components/Main'
import Partners from './components/Partners'
import Strategy from './components/Strategy'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const landingPage = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Main />
			<Strategy />
			<Goals />
			<Partners />
		</div>
	)
}

export default landingPage

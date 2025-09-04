import { createBrowserRouter } from 'react-router-dom'
import AboutUs from './features/about-us/AboutUs'
import HomePage from './features/home/landing/BusinessLandingPage'
import Footer from './features/home/landing/components/Footer'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Footer />,
		children: [
			{
				path: '/business',
				element: <HomePage />,
			},
			{
				path: 'business/about-us',
				element: <AboutUs />,
			},
		],
	},
])
export default router

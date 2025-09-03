import { createBrowserRouter } from 'react-router-dom'
import AppShell from './AppShell/AppShell'
import BusinessLandingPage from './features/landing/BusinessLandingPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppShell />, // Replace with your main app component
    children: [{
      path: '/business',
      element: <BusinessLandingPage />
    }]
	}, 
  // {
  //   path: '*',
  //   element: <div>404 Not Found</div>
  // }
])
export default router

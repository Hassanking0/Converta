import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AppShell = () => {
	return (
		<div className='w-full overflow-x-hidden'>
			<Navbar />
			<div>
                <Outlet />
            </div>
		</div>
	)
}

export default AppShell

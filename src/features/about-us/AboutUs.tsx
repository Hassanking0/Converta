import { Facebook, Twitter, Youtube } from 'lucide-react'
import Navbar from '../home/landing/components/Navbar'

const AboutUs = () => {
	const contact = {
		email: 'info@converta.com',
		number: '+1 212 946 2700',
	}

	return (
		<div className='w-full'>
			{/* contact */}
			<div className='w-full h-12 px-28 bg-white flex justify-between items-center border-b border-zinc-300'>
				{/* logos */}
				<div className='flex items-center gap-6 mt-2'>
					<a href='#'>
						<Facebook color='gray' fill='gray' size={18} />
					</a>
					<a href='#'>
						<Twitter color='gray' fill='gray' size={18} />
					</a>
					<a href='#'>
						<Youtube color='white' fill='gray' size={26} />
					</a>
				</div>
				{/* info */}
				<div className='flex gap-6 font-light'>
					<div className='text-zinc-400'>{contact.email}</div>
					<div className='text-zinc-400'>{contact.number}</div>
					<button className='text-blue-400 cursor-pointer'>Sign In</button>
				</div>
			</div>
			{/* navbar + about us Title */}
			<div className='w-full bg-bg'>
				<Navbar />
				{/* About us title */}
				<div className='w-full'>
					<div className='title text-primary font-bold text-4xl'>About Us</div>
                    <div className={``}></div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs

import {
	Box,
	ChevronRight,
	Facebook,
	Medal,
	Twitter,
	Youtube,
} from 'lucide-react'
import Navbar from '../home/landing/components/Navbar'
import { useNavigate } from 'react-router-dom'
import { CustomButton } from '../../components/custom-btn'
import AboutusImg from '../../assets/about-us-thumbnail.jpeg'
import RoadMap from '../../assets/roadmap.svg'
import { useState } from 'react'

const AboutUs = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const navigate = useNavigate()
	const contact = {
		email: 'info@converta.com',
		number: '+1 212 946 2700',
	}

	return (
		<div className='w-full'>
			{/* contact */}
			<div className='w-full h-12 px-6 lg:px-28 bg-white flex justify-between items-center border-b border-zinc-300'>
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
				<div className='hidden lg:block'>
				<div className='flex gap-6 font-light'>
					<div className='text-zinc-400'>{contact.email}</div>
					<div className='text-zinc-400'>{contact.number}</div>
					<button className='text-blue-400 cursor-pointer'>Sign In</button>
				</div>
				</div>
			</div>
			{/* navbar + about us Title */}

			<div className='w-full h-125 bg-bg'>
				<Navbar />
				{/* About us title */}
				<div className='w-full h-full flex flex-col justify-center items-center pb-40 gap-10'>
					<div className='title text-primary font-bold text-6xl'>About Us</div>
					<div className='flex items-center gap-1'>
						{' '}
						<a
							onClick={() => {
								navigate('/business')
							}}
							className='text-lightBlue cursor-pointer font-light'
						>
							Home
						</a>{' '}
						<span>
							{' '}
							<ChevronRight color='gray' size={14} />
						</span>{' '}
						<span className='text-zinc-500 font-light'>About us</span>{' '}
					</div>
				</div>
			</div>

			{/* detail */}
			<div className='w-full gap-20 flex flex-col lg:flex-row items-center px-10 lg:px-30 py-30'>
				<div className='space-y-10 lg:w-[30%]'>
					<div className='title text-primary font-semibold text-4xl'>
						Growth strategies to be effective & competitive
					</div>
					<div className='text-zinc-500 text-lg font-light'>
						Everything we do and dream up has a solid design impact. We create
						human-centered enterprise software that has the polished, snappy
						feel of the best consumer apps.
					</div>
					<button>
						<CustomButton title='Get Started' onClick={() => {}} />
					</button>
				</div>

				<div className='lg:w-[60%] h-full max-w-3xl mx-auto rounded-4xl overflow-hidden shadow-2xl'>
					{!isPlaying ? (
						<div
							className='relative cursor-pointer'
							onClick={() => setIsPlaying(true)}
						>
							<img
								src={AboutusImg}
								alt='Video Preview'
								className='w-full lg:h-100 shadow-3xl'
							/>
						</div>
					) : (
						<div className='relative w-full aspect-video'>
							<iframe
								className='w-full h-full'
								src='https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1'
								title='Video Placeholder'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</div>
					)}
				</div>
			</div>
			{/* blockchain Section */}
			<div className='bg-bg py-25 mx-4'>
				{/* header */}
				<div className='space-y-3'>
					{/* subtitle */}
					<div className='text-sm text-lightBlue text-center'>
						It’s Time for a Blockchain Revolution
					</div>
					{/* title */}
					<div className='text-4xl lg:text-5xl text-primary lg:w-[45%] leading-14 font-semibold text-center mx-auto'>
						Developing sustainable and innovative blockchain solutions
					</div>
				</div>
				{/* blockchain detail */}
				<div className='w-full flex flex-col lg:flex-row items-center gap-40 px-8 lg:px-25 mt-40'>
					{/* left side (boxes side) */}
					<div className='space-y-8 lg:space-y-4'>
						{/* box 1 */}
						<div className='bg-white flex flex-col lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-blue-100'>
								<img src={RoadMap} />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-[#321270] font-semibold'>
									Strategy & Business
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
						{/* box 2 */}
						<div className='bg-white flex flex-col lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-green-100'>
								<Box className='text-green-500' />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-[#321270] font-semibold'>
									Product Design
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
						{/* box 3 */}
						<div className='bg-white flex flex-col lg:flex-row space-x-3 w-full lg:w-120 rounded-2xl shadow-lg p-6'>
							<div className='w-14 h-14 lg:w-20 lg:h-12 mb-6 lg:mb-15 flex justify-center mx-auto lg:mx-0 items-center rounded-full bg-red-100'>
								<Medal className='text-red-400' />
							</div>
							<div className='space-y-4'>
								<div className='title text-center lg:text-start text-2xl text-[#321270] font-semibold'>
									Futures Research
								</div>
								<div className='desc text-center lg:text-start text-zinc-400'>
									We design business models and growth strategies to be
									effective and competitive.
								</div>
							</div>
						</div>
					</div>
					{/* right side */}
					<div className='w-full'>
						<div className='lg:w-[70%] flex flex-col gap-8'>
						{/* title */}
						<div className='text-[#321270] text-4xl font-semibold leading-12'>
							Strategies that get you on the path to success
						</div>
						{/* desc */}
						<div className='text-zinc-400 text-lg'>
							Through an in-depth knowledge of all industrial sectors and the
							application of approaches such as Lean Strategy, and Business
							Design, we prepare organisations to welcome change, to be ready to
							evolve rapidly while remaining competitive in the market.
						</div>
						{/* btn */}
						<div className='flex gap-4'>
							<CustomButton title='Get Started' onClick={() => {}} />
							<button className='hidden md:block text-blue-500 outline-1 outline-blue-500 hover:outline-purple-900 py-2 px-5 cursor-pointer  rounded-md transition mr-4'>
								How it Works
							</button>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs

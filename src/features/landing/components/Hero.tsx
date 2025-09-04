import AccountCard from '../components/AccountCard'
import Card from '../components/Card'
import { CustomButton } from '../components/custom-btn'
const Hero = () => {
	return (
		<div className='hero px-2  lg:px-17 flex gap-16 w-full h-120 lg:h-160 bg-[#F4F6FB]'>
			<div className='left py-8 md:mx-auto lg:pl-16 flex flex-col gap-6 justify-center h-120 lg:h-160 text-center lg:text-start'>
				<div className='title text-4xl lg:text-7xl font-bold text-[#321270]'>
					Designing your <br /> next{' '}
					<span className='bg-gradient-to-r from-[#857FFF] via-[#BB7BFF] to-pink-300 bg-clip-text text-transparent'>
						business.
					</span>
				</div>
				<div className='desc text-lg text-zinc-500'>
					Small business, big opportunity? We help our clients exploit
					technology to <br /> strategically reshape their business around
					digital economy.
				</div>
				<div className='bts mt-5 flex mx-auto lg:mx-0'>
					<CustomButton title='Discover now' onClick={() => {}} />
					<button className='hidden md:block text-blue-500 outline-1 outline-blue-500 hover:outline-purple-900 py-3 px-6 cursor-pointer  rounded-md transition mr-4'>
						How it Works
					</button>
				</div>
			</div>
			<div className='hidden lg:block'>
			<div className='right h-160 flex items-center justify-center'>
				<div className='relative circle bg-linear-to-br blur-3xl from-[#F2A296] via-[#E68B56] to-[#AD60A9] to-40% border border-amber-400 w-130 h-130 rounded-full flex items-center justify-center'></div>
				<div className='absolute cards flex gap-4 z-100'>
					<Card /> <AccountCard />
				</div>
			</div>
			</div>
		</div>
	)
}

export default Hero

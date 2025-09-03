import { ArrowRight, BriefcaseBusiness } from 'lucide-react'
import Account from '../../../assets/account.svg'
import Goal from '../../../assets/goals.svg'
import RoadMap from '../../../assets/roadmap.svg'

const Goals = () => {
	return (
		<div className='goals py-18 px-10 md:px-17 w-full h-full md:h-210 bg-[#F4F6FB]'>
			<div className='header text-center w-full space-y-4 mx-auto'>
				<div className='title text-4xl md:text-5xl leading-12 md:leading-14 font-semibold text-[#321270]'>
					Develop your next business today
				</div>
				<div className='hidden md:block subTitle text-zinc-400 text-lg'>
					We design new concepts, prototypes and processes for the next <br />{' '}
					generation of services and experiences, ready for the market.
				</div>
				<div className='block md:hidden subTitle text-zinc-400 text-lg'>
					We design new concepts, prototypes and processes for the next
					generation of services and experiences, ready for the market.
				</div>
			</div>
			<div className='main w-full mt-18 flex justify-evenly flex-col md:flex-row  gap-16'>
				<div className='left'>
					<div className='boxes flex flex-col items-center w-full md:flex-row md:w-160 md:flex-wrap gap-6'>
						<div className='box1 hover:-translate-y-2 transition-all duration-300 pb-18 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
							<div className='icon bg-blue-200 w-14 h-14 rounded-full flex items-center justify-center'>
								<img src={Account} />
							</div>
							<div className='title text-center text-[#321270] text-2xl font-semibold'>
								Business Agility & Innovation
							</div>
						</div>

						<div className='box2 hover:-translate-y-2 transition-all duration-300 relative md:top-16 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
							<div className='icon bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center'>
								<img src={Goal} />
							</div>
							<div className='title text-center text-[#321270] text-2xl font-semibold'>
								Strategic Goal <br /> Definition
							</div>
						</div>

						<div className='box3 hover:-translate-y-2 transition-all duration-300  pb-18 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
							<div className='icon bg-green-100 w-14 h-14 rounded-full flex items-center justify-center'>
								<img src={RoadMap} />
							</div>
							<div className='title text-center text-[#321270] text-2xl font-semibold'>
								Action Roadmap Definition
							</div>
						</div>
						<div className='box4 hover:-translate-y-2 transition-all duration-300  relative md:top-16 cursor-pointer shadow-md bg-white rounded-2xl flex items-center gap-6 flex-col py-12 w-70'>
							<div className='icon bg-green-200 w-14 h-14 rounded-full flex items-center'>
								<BriefcaseBusiness
									className='mx-auto'
									size={26}
									color='green'
								/>
							</div>
							<div className='title text-center text-[#321270] text-2xl font-semibold'>
								Business Model <br /> Analysis
							</div>
						</div>
					</div>
				</div>
				<div className='right my-auto'>
					<div className='flex flex-col gap-8 w-full'>
					{/* title */}
						<div className='hidden md:block text-[#321270] text-4xl font-semibold leading-12'>
						Strategies that get you on <br /> the path to success
					</div>
						<div className='block md:hidden text-[#321270] text-4xl font-semibold leading-12'>
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
					<div className='text-blue-500 hover:text-blue-900'><a className='flex items-center gap-4' href="#">See how it works <ArrowRight size={14} /></a></div>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Goals

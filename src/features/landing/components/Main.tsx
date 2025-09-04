import Rocket from '../../../assets/rocket.svg'
import Tv from '../../../assets/tv.svg'
import Trophy from '../../../assets/trophy.svg'
import MobileView from '../../../assets/mobileview.png'
import MobileViewCard from '../../../assets/mobileviewCard.png'

const Main = () => {
	return (
		<div className='main w-full min-h-196'>
			<div className='title text-5xl w-full flex justify-center mt-14  text-[#321270] font-semibold'>
				<h2 className='hidden md:block leading-14'>
					Make your business future-proof <br /> to anticipate the challenges to
					be
				</h2>
				
				<h2 className='block md:hidden leading-14 text-center text-4xl'>
					Make your business <br /> future-proof to <br />  anticipate the <br /> challenges to
					be
				</h2>
			</div>
			<div className='boxes flex flex-col flex-wrap md:flex-row md:flex-nowrap gap-8 mx-12 md:mx-24 mt-24 pb-20 border-b border-gray-300'>
				<div className='box1 flex flex-col gap-5 w-80 md:w-120'>
					<img className='w-12 h-12' src={Rocket} />
					<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
						Design-led digital trasformation
					</div>
					<div className='desc text-zinc-400 font-light'>
						We combine business opportunities with customer expectations to
						design, transform and deliver useful products, and unique brand
						experiences.
					</div>
					<div className='link'>
						<a href='#' className='text-zinc-400 font-light text-xl'>
							Learn More
						</a>
					</div>
				</div>
				<div className='box2 flex flex-col gap-3 w-80 md:w-120'>
					<img className='w-12 h-12' src={Tv} />
					<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
						Tansition to sustainable futures
					</div>
					<div className='desc text-zinc-400 font-light'>
						We combine business opportunities with customer expectations to
						design, transform and deliver useful products, and unique brand
						experiences.
					</div>
					<div className='link'>
						<a href='#' className='text-zinc-400 text-xl font-light'>
							Learn More
						</a>
					</div>
				</div>{' '}
				<div className='box3 flex flex-col gap-3 w-80 md:w-120'>
					<img className='w-12 h-12' src={Trophy} />
					<div className='title font-semibold text-xl md:text-2xl text-[#321270]'>
						We empower our partners
					</div>
					<div className='desc text-zinc-400 font-light'>
						We combine business opportunities with customer expectations to
						design, transform and deliver useful products, and unique brand
						experiences.
					</div>
					<div className='link'>
						<a href='#' className='text-zinc-400 font-light text-xl'>
							Learn More
						</a>
					</div>
				</div>
			</div>
			<div className='details h-185 flex flex-col lg:flex-row items-center justify-center gap-10 mt-14 md:mt-48'>
				<div className='relative img mt-30 md:mt-0'>
					<img className='w-90 h-90 md:w-145 md:h-150' src={MobileView} />
                    <img className='absolute -bottom-10 md:bottom-0' src={MobileViewCard} />
				</div>
				<div className='detail w-110 flex flex-col gap-6 ml-16'>
					<div className='hidden md:block title text-4xl font-semibold text-[#321270]'>
						We’re building business for <br /> your digital economy
					</div>
					<div className='block md:hidden title text-4xl font-semibold text-[#321270]'>
						We’re building business <br /> for  your digital <br /> economy
					</div>
                    <div className="desc w-[90vw] md:w-full text-zinc-400">We are building business, banking products and services to support the next generation of entrepreneurs. The world as we know it is no longer the same, and changes now occur in days and months, not years. Get started!</div>
                    <div className="infos flex gap-12 mt-4">	
                        <div className="1 space-y-2">
                            <div className="numbers text-6xl text-green-400 font-semibold">120k</div>
                            <div className="title font-bold text-[#321270]">Business Consultants</div>
                        </div>
                        <div className="2 space-y-2">
                            <div className="numbers text-6xl text-green-400 font-semibold">370+</div>
                            <div className="title font-bold text-[#321270]">Startups in 2023</div>
                        </div>
                    </div>
                    <div className="btn mt-8">
                        <button className='bg-blue-500 text-white py-3 px-7 cursor-pointer hover:bg-purple-900 rounded-md transition'>
								Get Started
							</button>
                    </div>
				</div>
			</div>
		</div>
	)
}

export default Main

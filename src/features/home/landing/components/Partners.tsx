import { CustomButton } from '../../../../components/custom-btn'
import AWS from '../../../../assets/aws.webp'
import Brandlogo from '../../../../assets/brandlogo.webp'
import Forbes from '../../../../assets/forbes.webp'
import Spotify from '../../../../assets/spotify.webp'
import Trustpilot from '../../../../assets/trustpilot.webp'

const Partners = () => {
	return (
		<div className='w-full min-h-180 flex gap-8 flex-col items-center'>
			{/* title */}
			<div className='text-[#321270] text-center mx-4 lg:mx-0 text-2xl font-semibold mt-38'>
				Trusted by nearly 5000+ customers & startups
			</div>
			{/* logos */}
			<div className='flex w-full flex-wrap justify-center lg:flex-row items-center gap-26 md:gap-20 lg:gap-26 mt-10 pb-28 border-b border-zinc-300'>
				<img src={Trustpilot} />
				<img src={AWS} />
				<img src={Spotify} />
				<img src={Brandlogo} />
				<img src={Forbes} />
			</div>
			{/* another section */}
			<div className='w-full mt-16 mb-22 flex flex-col gap-12 items-center'>
				{/* title */}
				<div className='hidden md:block text-5xl leading-14 font-semibold text-[#321270] text-center'>
					Plan for big expenses, manage profits, <br /> vendors, and much more
				</div>
				<div className='block md:hidden text-4xl leading-14 font-semibold text-[#321270] text-center'>
					Plan for big expenses, manage profits, vendors, and much more
				</div>
				{/* desc */}
				<div className='text-lg text-zinc-400 text-center'>
					We work with organizations of all sizes, from early start-ups to
					global brands, in <br /> the private, public, and social sector.
				</div>
				{/* btn */}
				<CustomButton title='Get Started' onClick={() => {}} />
			</div>
		</div>
	)
}

export default Partners

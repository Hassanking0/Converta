import Trustpilot from '../../../assets/trustpilot.webp'
import AWS from '../../../assets/aws.webp'
import Spotify from '../../../assets/spotify.webp'
import Brandlogo from '../../../assets/brandlogo.webp'
import Forbes from '../../../assets/forbes.webp'


const partnershipLogos = () => {
  return (

   <div className='flex flex-wrap justify-center lg:flex-row items-center gap-26 md:gap-20 lg:gap-26 mt-10 pb-28'>
				<img src={Trustpilot} />
				<img src={AWS} />
				<img src={Spotify} />
				<img src={Brandlogo} />
				<img src={Forbes} />
        
			</div>
  )
}

export default partnershipLogos
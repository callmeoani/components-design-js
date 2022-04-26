
import './HrManagement.css'


const HrManagement = ({mainTiming, description, subTiming, subTimingDescription, emoji}) => {

  return (
      <div className='card'>
        <div className='top-part'>
          <div className='emoji-container'><p className='emoji-styles'>{emoji}</p></div>
          <div className='top-wordings'>
            <p>{mainTiming} Days</p>
            <p>{description}</p>
          </div>
        </div>
        <p><span>{subTiming} days</span> {subTimingDescription}</p>
      </div>
  )
}

export default HrManagement
import './EnclosingBox.css'

import logo from '../../../../logo.svg';

const EnclosingBox = ({title, subtitle}) => {
  return (
    <div className='containing-box'>
      <div className='heading'>
        <img src={logo} alt="heading-logo" className='heading-logo' />
        <div className='heading-title'>
          <p className='heading-title-main'>{title}</p>
          <p className='heading-title-subtitle'>{subtitle}</p>
        </div>
      </div>
      <div className="details-box">
        {/* <div className='details-box-content'>
          <div className='details-box-content-main'>
            <img src={logo} alt="logo" className='details-box-content-icon' />
            <p className='details-box-content-number'>23</p>
            <p className='details-box-content-description'>Critical</p>
          </div>
          <p className='details-box-content-arrow'>&#x2BC8;</p>
        </div>

        <div className='details-box-content'>
          <div className='details-box-content-main'>
            <img src={logo} alt="logo" className='details-box-content-icon' />
            <p className='details-box-content-number'>23</p>
            <p className='details-box-content-description'>Notification</p>
          </div>
          <p className='details-box-content-arrow'>&#x2BC8;</p>
        </div>

        <div className='details-box-content last'>
          <div className='details-box-content-main'>
            <img src={logo} alt="logo" className='details-box-content-icon' />
            <p className='details-box-content-number'>3</p>
            <p className='details-box-content-description'>To Review</p>
          </div>
          <p className='details-box-content-arrow'>&#x2BC8;</p>
        </div> */}

      </div>
    </div>
  )
}

export default EnclosingBox
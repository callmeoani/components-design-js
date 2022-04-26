import './EnclosingBox.css'

import logo from '../../../../logo.svg';
// import ProductivityContent from '../productivity/ProductivityContent';
// import BaseMetricsContent from '../baseMetricsComponent/BaseMetricsContent';

const EnclosingBox = ({title, subtitle, children}) => {
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
        {/* <BaseMetricsContent /> */}
        {/* <ProductivityContent /> */}
        {children}
      </div>
    </div>
  )
}

export default EnclosingBox
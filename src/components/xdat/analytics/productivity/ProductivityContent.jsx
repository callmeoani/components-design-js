import './ProductivityContent.css'

import logo from '../../../../logo.svg'


const ProductivityContent = () => {
  return (
    <div className='main-body'>
      <div className='logo-container'>
        <img src={logo} alt="graph" className='graph'/>
      </div>
      <div className='graph-information'>
        <p className='timing'><span className='timing-number'>7</span>hrs <span className='timing-number'>32</span> m</p>
        <div className='graph-information-labelling'>
          <p><span className='labelling-1'>&#x2B24;</span>Design</p>
          <p><span className='labelling-2'>&#x2B24;</span>Development</p>
          <p><span className='labelling-3'>&#x2B24;</span>Quality Assurance</p>
        </div>
      </div>
    </div>
  )
}

export default ProductivityContent
import './CompaniesCard.css'

const CompaniesCard = ({companyName, totalUsers, tested, logoIcon}) => {
  
  
  return (
    <div className='card-container'>
      <div className='companies-details'>
        <div className='name-and-logo'>
          <img src={logoIcon} alt="company" className='company-icon'/>
            {companyName}
        </div>
        <div className='information first'>
          <p className='value-display'>{totalUsers}</p>
          <p className='value-description'>Total Users</p>
        </div>
        <div className='information'>
          <p className='value-display'>{tested}%</p>
          <p className='value-description'>Tested</p>
        </div>
      </div>
    </div>
  )
}

export default CompaniesCard
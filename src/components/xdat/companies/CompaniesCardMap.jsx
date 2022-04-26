import CompaniesCard from './CompaniesCard'
import './CompaniesCardMap.css'
import logo from '../../../logo.svg';




const CompaniesCardMap = () => {
  const information = [
    {
      companyName: 'Intercom',
      logoIcon: logo,
      id: 1,
      totalUsers: 329,
      tested: 93.5,
    },
    {
      companyName: 'Asana',
      logoIcon: logo,
      id: 2,
      totalUsers: 216,
      tested: 13.4,
    },
    {
      companyName: 'Hubstaff',
      logoIcon: logo,
      id: 3,
      totalUsers: 251,
      tested: 25.0,
    },
    {
      companyName: 'Walmart',
      logoIcon: logo,
      id: 4,
      totalUsers: 200,
      tested: 100,
    }
  
  ]
  return (
    <div className='card-mapping'>
      {
        information.map((data) => {
          return (
            <CompaniesCard key={data.id} {...data} />
          )
        })
      }
    </div>
  )
}

export default CompaniesCardMap
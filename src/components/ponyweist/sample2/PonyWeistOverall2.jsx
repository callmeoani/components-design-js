import './PonyWeistOverall2.css'

const PonyWeistOverall2 = () => {
  return (
    <div className='ponyweistoverall'>
      <div className='up-part'>
        <div className='up-part-leftSide'>
          <div className='up-part-leftSide-top'>
            <p>Financial</p>
            <p>Aug 1, 2021 - Nov 1, 2021</p>
          </div>
          <div className='up-part-leftSide-down'>
            <p>Total Revenue <span>+9.78%</span></p>
            <p>$8,240,00</p>
            <p>Increase increase <span>15</span>% from last month</p>
          </div>
        </div>
        <div className='up-part-rightSide'>Chronich Condition Graph</div>
      </div>  
      <div className='bottom-part'>
        <div>
          <ul className='unordered-list'>
            <li className='bulleted-list'>Selling Product</li>
            <li>$7,950,00</li>
            <li><span>1,298</span> Sold in a month</li>
          </ul>
        </div>

        <div className='bordered-container'>
          <ul className='unordered-list'>
            <li className='bulleted-list'>Followers</li>
            <li>2,500+</li>
            <li>Add in one month</li>
          </ul>

        </div>

        <div>
        <ul className='unordered-list'>
            <li className='bulleted-list'>Campaign</li>
            <li>340</li>
            <li>Installed Campaign</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PonyWeistOverall2


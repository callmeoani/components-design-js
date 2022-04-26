import 'emoji-regex'


import './HrManagementMap.css'

import HrManagement from './HrManagement'

const HrManagementMap = () => {

  const temperature = "\u{1F912}";
  const wink = "\u{1F609}";
  const grin = "\u{1F601}";

  const datas = [
    {
      id: 1,
      emoji: temperature,
      mainTiming: 2,
      description: 'Request Time Off',
      subTiming: 10,
      subTimingDescription: 'left for request time off',
    },
    
    {
      id: 2,
      emoji: wink,
      mainTiming: 1,
      description: 'Logged Time',
      subTiming: 2,
      subTimingDescription: 'left to reach the target working hours',
    },

    {
      id: 3,
      emoji: grin,
      mainTiming: 18,
      description: 'Total Attendance',
      subTiming: 2,
      subTimingDescription: 'already used for permission',
    },

  ]

  return (
    <div className='card-container'>
      {
        datas.map((data) => {
          return <HrManagement key={data.id} {...data} />
        })
      }
    </div>
  )
}

export default HrManagementMap
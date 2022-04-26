import './App.css';
import BaseMetrics from './components/xdat/analytics/baseMetrics/BaseMetrics';
import BaseMetricsContent from './components/xdat/analytics/baseMetricsComponent/BaseMetricsContent';
import EnclosingBox from './components/xdat/analytics/enclosingComponent/EnclosingBox';
import ProductivityContent from './components/xdat/analytics/productivity/ProductivityContent';
// import CompaniesCardMap from './components/xdat/companies/CompaniesCardMap';
// import HrManagementMap from './components/hrManagementCard/HrManagementMap';
// import PonyWeistOverall1 from './components/ponyweist/sample1/PonyWeistOverall1';
// import PonyWeistOverall2 from './components/ponyweist/sample2/PonyWeistOverall2';

function App() {
  return (
    <div className="App">
      {/* <div className='app1'>
        <HrManagementMap />
      </div> */}

      {/* <div className='app2'> */}
        {/* <PonyWeistOverall1 /> */}
        {/* <p /> */}
        {/* <PonyWeistOverall2 /> */}
      {/* </div> */}

      {/* <div className='app3'>
        <CompaniesCardMap />
      </div> */}
      
      <div className='app4'>
        <BaseMetrics />
      </div>

      <div className='app5'>
        <EnclosingBox title={'Productivity'} subtitle={'By Department'} />
      </div>

      <div className='app5-ii'>
        <EnclosingBox title={'Base Metrics'} subtitle={'1AM - 6PM'} >
          <BaseMetricsContent />
        </EnclosingBox>
      </div>

      <div className='app5-iii'>
        <EnclosingBox title={'Productivity'} subtitle={'By Department'} >
          <ProductivityContent />
        </EnclosingBox>
      </div>
    </div>
  );
}

export default App;

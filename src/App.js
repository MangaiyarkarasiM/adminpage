import './App.css';
import Card from './Components/Card/Card';
import Wrapper from './Components/Wrapper/Wrapper';
import MediumCard from './Components/MediumCard/MediumCard';
import Progress from './Components/Progress/Progress';
import { Doughnut} from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import {Chart, ArcElement, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js'

Chart.register(ArcElement,CategoryScale,LinearScale,PointElement,LineElement);
 
function App() {
  const piechartdata = {
    datasets: [{
      label: 'My First Dataset',
      data: [55, 30, 15],
      backgroundColor: [
        '#4e73df',
        '#1cc88a',
        '#36b9cc'
      ],
      cutout: '85%',
      radius: '90%'
    }],
    labels: [
      'Direct: 55',
      'Referral: 30',
      'Social: 15'
    ],
  };

  const linechartdata={
    labels: ['Jan','','Mar','','May','','Jul','','Sep','','Nov',''],
    datasets: [{ 
        data: [0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }],
    }

  const intersect = false;
  const mode = 'index';
  const linechartoptions= {
    elements:{
      line:{
        tension: 0.3,
      },
      point:{
        backgroundColor: 'rgb(53, 53, 218)',
      }
    },
    plugins:{
      tooltip:{
        enabled: true,
      }
    },
  }

  return (
    <div>
      <Wrapper>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h5 className="text-color">Dashboard</h5>
            <a className="btn d-sm-inline-block btn-sm btn-primary" href="#">
              <i className="fa fa-download fa-sm text-white-50"></i> Generate Report
            </a>
          </div>
          <div className="row">
            <Card primaryClassName="col-xl-3 col-md-6 mb-4" className="primary" title="Earnings(Monthly)" value="$40,000" icon={<i className="cardiconcolor fa fa-briefcase fa-2x"></i>}></Card>
            <Card primaryClassName="col-xl-3 col-md-6 mb-4" className="success" title="Earnings(Annual)" value="$215,000" icon={<i className="cardiconcolor fa fa-usd fa-2x"></i>}></Card>
            <Card primaryClassName="col-xl-3 col-md-6 mb-4" className="info" title="Tasks" value="50%" icon={<i className="cardiconcolor fa fa-list-alt fa-2x"></i>}></Card>
            <Card primaryClassName="col-xl-3 col-md-6 mb-4" className="warning" title="Pending Requests" value="18" icon={<i className="cardiconcolor fa fa-comments fa-2x"></i>}></Card>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <MediumCard dropdown={true} title="Earnings Overview">
                <div>
                  <Line className='' options={linechartoptions} data={linechartdata}></Line>
                </div>
              </MediumCard>
            </div>
            <div className="col-xl-4 col-lg-5">
              <MediumCard dropdown={true} title="Revenue Sources">
                <div className='pie-chart'>
                <Doughnut className="pie-chart-render" data={piechartdata}></Doughnut>
                </div>
                <div className='mt-4 text-center small'>
                  <span className='mr-2'><i className='fa fa-circle text-primary'></i> Direct</span>
                  <span className='mr-2'><i className='fa fa-circle text-success'></i> Social</span>
                  <span className='mr-2'><i className='fa fa-circle text-info'></i> Referral</span>
                </div>
              </MediumCard>
            </div>
          </div>
          <div className="row">
            <div  className="col-lg-6 mb-4">
              <MediumCard title="Projects">
                <Progress className="bg-danger" value="20">Server Migration</Progress>
                <Progress className="bg-warning" value="40">Sales Tracking</Progress>
                <Progress className="bg-primary" value="60">Customer Database</Progress>
                <Progress className="bg-info" value="80">Payout Details</Progress>
                <Progress className="bg-success" value="100">Account Setup</Progress>
              </MediumCard>
              <div className="row">
                <Card primaryClassName="col-lg-6 mb-4" className="bg-primary" color="#4e73df">Primary</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-success" color="#1cc88a">Success</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-info" color="#36b9cc">Info</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-warning" color="#f6c23e">Warning</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-danger" color="#e74a3b">Danger</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-secondary" color="#858796">Secondary</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-light text-secondary" color="#f8f9fc">Light</Card>
                <Card primaryClassName="col-lg-6 mb-4" className="bg-dark" color="#5a5c69">Dark</Card>
                
              </div>
            </div>
            <div className="col-lg-6 mb-4">
             <MediumCard title="Illustrations">
               <div className="text-center"><img className="img-fluid px-3 px-sm-4 mb-4" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="illustration"></img></div>
               <p className="text-secondary">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
               <a target="_blank" rel="nofollow" href="https.//undraw.co/">Browse Illustrations on unDraw →</a>
             </MediumCard>
             <MediumCard title="Development Approach">
               <p className="text-secondary">SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
               <p className="text-secondary">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
             </MediumCard>
            </div>
          </div>
      </Wrapper>
    </div>
  );
}

export default App;
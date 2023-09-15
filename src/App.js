import RedContainer from './RightPanel/RightPanel';
import './App.css';
import CalendarComponent from './CalendarComponent/CalendarComponent';
import NotificationCenter from './NotificationCenter/NotificationCenter';
import NotificationCard from './NotificationCards/NotificationCards';
import SlideBar from './SlideBar/SlideBar';
import Navbar from './NavbarStudents/NavbarStudents/NavbarDashboardStudents';
import Carousel from './Carousel/Carousel';

const notification = [
  'Notificación 1',
  'Notificación 2',
  'Notificación 3',


];


function App() {
  return (

    <div style={{display:'flex'}}>
    <div>
      <SlideBar/>
    </div>
    <div class="col-11">
      <Navbar />
      <div style={{display:'flex', textAlign: 'center', marginLeft:'25px'}}>
        <div class="col-5">
          <Carousel/>
        </div>
        <div class="col-4" style={{display:'flex', textAlign: 'center'}}>
     
            <div className="right-panel" >
              <RedContainer />


              <div className="calendar-and-notifications">
                <div className="calendar">
                  <CalendarComponent />
                </div>
                <div className="notifications">
                  <NotificationCenter />
                </div>

                <div className="NotificationCard">
                <NotificationCard notifications={notification} />
                </div>
              </div>

            </div>

            </div>
        </div>
      </div>
    </div>
    

  );
}

export default App;


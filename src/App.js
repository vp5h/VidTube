import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './Screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import './_app.scss';
import Video from './components/video/Video';

function App() {
  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          <HomeScreen></HomeScreen>
        </Container>
      </div>
    </>
  );
}

export default App;

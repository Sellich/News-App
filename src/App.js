
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Nasa from './components/Nasa/Nasa';
import News from './components/News/News';
import SpaceX from './components/SpaceX/SpaceX';
import Welcome from './components/Welcome/Welcome';

function App() {
   return (
      <div className="App">
         <div className="header">
            <Header />
         </div>
         <div className="content">
            <Routes>
               <Route path="/" element={<Welcome />} />
               <Route path="/news" element={<News />} />
               <Route path="/nasa" element={<Nasa />} />
               <Route path="/spacex" element={<SpaceX />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;

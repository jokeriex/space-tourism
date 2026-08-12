import { Routes, Route } from 'react-router';
import Header from './components/organisms/Header';
import MainHome from './components/organisms/MainHome';
import MainDestination from './components/organisms/MainDestination';
import MainCrew from './components/organisms/MainCrew';
import MainTechnology from './components/organisms/MainTechnology';

function App() {

  return (
    <>
      <Header />
        <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/destination' element={<MainDestination />} />
        <Route path='/crew' element={<MainCrew />} />
        <Route path='/technology' element={<MainTechnology />} />
      </Routes>
    </>
  )
}

export default App;
import { Suspense } from 'react';
import './App.css'
import HeaderSection from './components/header/HeaderSection';
import HeroSection from './components/herosection/HeroSection';
import StatusSection from './components/StatusSection/StatusSection';
import ToogleSection from './components/toogleSection/ToogleSection';

const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
function App() {
  const fetchPromise = fetchData();
  return (
    <>
      <Suspense>
        <HeaderSection fetchPromise={fetchPromise} />
      </Suspense>
      <HeroSection />
      <StatusSection />
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <ToogleSection fetchPromise={fetchPromise} />
      </Suspense>

    </>
  )
}

export default App

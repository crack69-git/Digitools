import { Suspense, useState } from 'react';
import './App.css'
import HeaderSection from './components/header/HeaderSection';
import HeroSection from './components/herosection/HeroSection';
import StatusSection from './components/StatusSection/StatusSection';
import ToogleSection from './components/toogleSection/ToogleSection';
import GetStarted from './components/GetStarted/GetStarted';
import Subscription from './components/subscription/Subscription';
import Explore from './components/Explore/Explore';
import Footer from './components/footer/Footer';
const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
function App() {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchPromise = fetchData();
  return (
    <>
      <Suspense>
        <HeaderSection cartData={cartData} />
      </Suspense>
      <HeroSection />
      <StatusSection />
      <Suspense fallback={<div className='flex justify-center mt-5'><span className="loading loading-spinner loading-lg"></span></div>}>
        <ToogleSection fetchPromise={fetchPromise} cartData={cartData} setCartData={setCartData} total={total} setTotal={setTotal} />
      </Suspense>
      <GetStarted />
      <Subscription />
      <Explore />
      <Footer />
    </>
  )
}

export default App

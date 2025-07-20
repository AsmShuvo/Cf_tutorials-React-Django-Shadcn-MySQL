import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
  console.log("loaded");
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className="mx-auto md:ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
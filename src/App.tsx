import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterLink from './routes/routes'

export default () =>  (
  <div>
    {!(useLocation().pathname.includes('login')) && !(useLocation().pathname.includes('register')) && <Navbar />}
    <RouterLink />
  </div>
);
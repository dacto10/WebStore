import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterLink from './routes/routes'

export default () =>  (
  <>
    {!(useLocation().pathname.includes('login')) && !(useLocation().pathname.includes('register')) && <Navbar />}
    <RouterLink />
  </>
);
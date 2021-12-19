import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserContext } from './context/UserContext';
import RouterLink from './routes/routes'

export default () => {

  const { userState } = useContext(UserContext);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  useEffect(() => {
      if (!pathname.includes('login') && !pathname.includes('register') && userState.user.id === "") {
        navigate("login");
      }
  })

  return (
    <>
      {!pathname.includes('login') && !pathname.includes('register') && <Navbar />}
      <RouterLink />
    </>
  );
}
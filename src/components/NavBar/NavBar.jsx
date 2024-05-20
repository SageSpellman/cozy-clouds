import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to="/weather">Weather</Link>
      &nbsp; | &nbsp;
      <Link to="/weekly">Weekly</Link>
      &nbsp; | &nbsp;
      <Link to="/locations">Locations</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
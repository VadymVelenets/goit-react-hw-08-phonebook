import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthMenu from 'components/AuthForm';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </div>
    </header>
  );
}
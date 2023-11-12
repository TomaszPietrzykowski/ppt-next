import React, { Fragment } from 'react';
import styles from '../../_styles/user.module.scss';
import Link from 'next/link';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <div className={styles.user_layout__container}>
        <div className={styles.user_layout__sidenav}>
          <nav>
            <ul className={styles.dashboard__nav}>
              <Link href="/user/edit">
                <li>STREFA AUTORA</li>
              </Link>
              <Link href="/">
                <li>WYLOGUJ</li>
              </Link>
              tymczasowe:
              <Link href="/login">
                <li>ZALOGUJ</li>
              </Link>
              <Link href="/register">
                <li>UTWORZ KONTO</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className={styles.user_layout__content}>{children}</div>
      </div>
    </Fragment>
  );
};

export default UserLayout;

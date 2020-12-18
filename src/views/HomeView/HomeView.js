import React from 'react';
import styles from './HomeView.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HomeView = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bgc}></div>
            <div className={styles.modal}>
                <h1>FlashCards</h1>
            </div>
            <Link className={styles.link} to="/login" >Login</Link>
            <Link className={styles.link} to="/register" >Register</Link>

        </div>
    );
}

export default HomeView;
import React from 'react';
import Form from 'components/Form/Form'
import styles from './RegisterView.module.scss';
import fire from 'data/firebase/firebase'
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyWithAuth } from 'assets/functions/notifications'


const RegisterView = () => {
    const history = useHistory();


    const showData = (data) => {
        console.log(data);
    };


    const singUp = (email, password) => {
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                notifyWithAuth("usedEmail")
                console.log(err);
            })

        // return history.push('/login');

    };



    return (
        <div className={styles.wrapper}>
            <h1>Register</h1>
            <Form type="register" singUp={singUp} />

            <button onClick={() => console.log(process.env)}>test</button>
            <ToastContainer />
        </div>
    );
}

export default RegisterView;




    // const singIn = () => {
    //     fire
    //         .auth()
    //         .signInWithEmailAndPassword("konradgorni@gmail.com", "test123123")
    //         .catch((err) => console.log(err));


    // };

    // const handleLogout = () => {
    //     fire.auth().signOut();
    // };

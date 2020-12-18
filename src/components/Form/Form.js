import React, { useState } from 'react';
import styles from './Form.module.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Form = ({ type, singUp }) => {

    const [formStatus, setFormStatus] = useState(false)
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string()
            .min(8, 'Your password must be longer than 7 characters.')
            .required('Required')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                "Must Contain One Uppercase and LowerCase,One Number and One Special Case Character"),

        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')


    });




    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    });





    const onSubmit = (data) => {

        setFormStatus(true);
        singUp(data.email, data.password)
        reset();

    };

    return (
        <div className={type === "register" ? styles.wrapperRegister : styles.wrapperLogin}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.test}>
                <input type="text" placeholder="Email" name="email" ref={register} />
                <div><p>{errors.email?.message}</p></div>
                <input type="password" placeholder="Password" name="password" ref={register} />
                <div><p>{errors.password?.message}</p></div>

                {type === "register" ? (
                    <>
                        <input type="password" placeholder="Confirm Password" name="passwordConfirmation" ref={register} />
                        <div><p>{errors.passwordConfirmation?.message}</p></div>
                    </>
                ) : null}


                {formStatus ? <button className={styles.buttonCorrect} type="submit">Sent</button> : <button type="submit">Send</button>}

            </form>
        </div>
    );
}

export default Form;


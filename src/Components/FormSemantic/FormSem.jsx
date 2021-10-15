import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import styles from './../../view/LoginView/LoginView.module.css';

export default function FormValidation(){
    const { register, handleSubmit, formState:{ errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        
            <Form className={styles.form} onSubmit = {handleSubmit(onSubmit)}>
            <Form.Field>
                    <label className={styles.label}>First Name</label>
                    <input className={styles.input}
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p className="text-error">Please check the First Name</p>}
                <Form.Field>
                    <label className={styles.label}>Last Name</label>
                    <input className={styles.input} type="text" placeholder="Last Name"{...register("lastName", { required: true, maxLength: 10})}/>
                </Form.Field>
                {errors.lastName && <p>Please check the Last Name</p>}
                <Form.Field>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} type="text" placeholder="Email"{...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type="text" placeholder="Password"{...register("password", { required: true, SVGClipPathElementern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}/>
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Button className={styles.button} type="submit">Submit</Button>
            </Form>
    )
}
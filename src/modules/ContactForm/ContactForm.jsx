import React from 'react';
import Div from '../../components/Div/Div'
import Span from '../../components/Span/Span'
import Label from '../../components/Label/Label'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import emailjs from 'emailjs-com'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {


    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm()
        .then((result)=>{
            console.log(result.text)
        },(error) => {
            console.log(error.text)
        })

    }


    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Campo obligatorio.'),

        email: Yup.string()
            .email('Dirección de correo inválida.')
            .required('Campo obligatorio.'),
            
        phone: Yup.string()
            .matches(/^\d{9}$/, 'Debe ser un número de 9 dígitos.'),
        
        message: Yup.string()
            .required('Campo obligatorio.'),
        
        policy: Yup.boolean()
            .oneOf([true], 'Debes aceptar la política de privacidad.')
    })

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
                policy: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("Esto enviara un correo a la asociación de vecinos segunda aguada")
            }}
        >
            {
                ({handleChange, handleSubmit, errors, touched}) => 
                <Form onSubmit={handleSubmit} className='form'>
                    <Label htmlFor='name'>
                        {
                            (errors.name && touched.name) && (
                                <Span className='error'>{errors.name}</Span>
                            )
                        }
                        <Field 
                            type='text' 
                            name='name' 
                            id='name' 
                            placeholder='tu nombre' 
                            onChange={handleChange}
                            className='form-input'
                        />
                        <Span className='form-label'>Nombre y apellidos</Span>
                    </Label>
                    <Label htmlFor='email'>
                        {
                            (errors.email && touched.email) && (
                                <Span className='error'>{errors.email}</Span>
                            )
                        }
                        <Field 
                            type='text' 
                            name='email' 
                            id='email' 
                            placeholder='dirección de correo' 
                            onChange={handleChange}
                            className='form-input'
                        />
                        <Span className='form-label'>Dirección de correo</Span>
                    </Label>
                    <Label htmlFor='phone'>
                        {
                            (errors.phone && touched.phone) && (
                                <Span className='error'>{errors.phone}</Span>
                            )
                        }
                        <Field 
                            type='text' 
                            name='phone' 
                            id='phone' 
                            placeholder='número de teléfono' 
                            onChange={handleChange}
                            className='form-input'
                        />
                        <Span className='form-label'>Número de teléfono</Span>
                    </Label>
                    <Label htmlFor='message'>
                        {
                            (errors.message && touched.message) && (
                                <Span className='error'>{errors.message}</Span>
                            )
                        }
                        <Textarea 
                            name='message' 
                            id='message' 
                            placeholder='escribe aquí tu mensaje...' 
                            onChange={handleChange}
                            className='form-input'
                        />
                        <Span className='form-label'>Mensaje</Span>
                    </Label>
                    <Label htmlFor='policy' className='label-policy'>
                        <Div className='checkbox-content'>
                            <Field type='checkbox' name='policy' id='policy' className='checkbox'/>
                            <Span className='checkbox-span'>He leído y acepto la <Link className='contact-policy' href='#'>política de privacidad</Link>.</Span>
                        </Div>
                        {
                            (errors.policy && touched.policy) && (
                                <Span className='error error-checkbox'>{errors.policy}</Span>
                            )
                        }
                    </Label>
                    <Button 
                        type='submit' 
                        value='Enviar mensaje'
                    >
                        Enviar mensaje
                    </Button>
                </Form>
            }
        </Formik>
    )
}

export default ContactForm;
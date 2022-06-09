import React, { useState, useEffect } from 'react'
import {Formik, Form, Field} from 'formik'
import Textarea from '../../components/Textarea/Textarea'
import Label from '../../components/Label/Label'
import Span from '../../components/Span/Span'
import Button from '../../components/Button/Button'
import * as Yup from 'yup'
import axios from 'axios'

const NewsForm = ({user, changeModalState, changeAddedNews, initialValue}) => {

    const [date, setDate] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (initialValue) {
            const date = new Date(initialValue.date)
            setDate(`${date.getFullYear()}-${date.getMonth().toString().length === 2 ? date.getMonth() : '0'+date.getMonth()}-${date.getDate().toString().length === 2 ? date.getDate() : '0'+date.getDate()}`)
        }
    }, [])
    
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Campo obligatorio.'),
        content: Yup.string()
            .required('Campo obligatorio.'),
        date: Yup.string()
            .required('Campo obligatorio.'),
        image: Yup.mixed()
            .required('Campo obligatorio.')
    })

    return (
        <Formik
            initialValues={{
                title: initialValue ? initialValue.title : '',
                content: initialValue ? initialValue.content.join('\n') : '',
                author: `${user.name} ${user.surname}`,
                association: user.association,
                image: initialValue ? initialValue.image : '',
                date: initialValue ? date : ''
            }}
            validationSchema={validationSchema}
            onSubmit={ async (values)=> {
                    try {

                        // console.log(values)
                        const response = await axios.post("/api/news", values, 
                            {
                                headers: { 
                                    Authorization: `Bearer ${user.token}`,
                                    'Content-Type': 'multipart/form-data' 
                                },
                            },
                            {
                                "image": values.image
                            },
                        )
                        
                        if (response.status === 201) {
                            changeAddedNews(values)
                            changeModalState(false)
                        }
    
                    }
                    catch (error) {
                        console.log(error)
                        setError('No se pudo agregar la noticia.')
                    }
            }}
        >
            {
                ({handleChange, handleSubmit, errors, touched, setFieldValue}) =>
                <Form
                    onSubmit={handleSubmit}
                    className="auth-form"
                    encType="multipart/form-data"
                >
                    <Label
                        htmlFor = "title"
                        className="auth-label"
                    >
                        {
                            (errors.title && touched.title) && (
                                <Span className="error">{errors.title}</Span>
                            )
                        }
                        <Field
                            inputValue={initialValue ? initialValue.title : ''}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="título"
                            className="form-input"
                            onChange={handleChange}
                        />
                        <Span className="form-label">Título</Span>
                    </Label>
                    <Label
                        htmlFor = "image"
                        className="auth-label"
                    >
                        {
                            (errors.image && touched.image) && (
                                <Span className="error">{errors.image}</Span>
                            )
                        }
                        <Field
                            // para que se pueda asignar la imagen al valor del input
                            value={undefined}
                            type="file"
                            name="image"
                            id="image"
                            className="form-input"
                            onChange={(event) => {                     
                                setFieldValue('image', event.target.files[0]);
                            }}
                        />
                        <Span className="form-label">Imagen</Span>
                    </Label>
                    <Label
                        htmlFor = "date"
                        className="auth-label"
                    >
                        {
                            (errors.date && touched.date) && (
                                <Span className="error">{errors.date}</Span>
                            )
                        }
                        <Field 
                            inputValue={initialValue ? date : ''}
                            type="date"
                            name="date"
                            id="date"
                            className="form-input"
                            onChange={handleChange}
                        />
                        <Span className="form-label">Fecha</Span>
                    </Label>
                    <Label
                        htmlFor = "content"
                        className="auth-label"
                    >
                        {
                            (errors.content && touched.content) && (
                                <Span className="error">{errors.content}</Span>
                            )
                        }
                        <Textarea 
                            inputValue={initialValue ? initialValue.content.join('\n',) : ''}
                            name='content' 
                            id='content' 
                            placeholder='contenido...' 
                            onChange={handleChange}
                            className='form-input'
                        />
                        <Span className="form-label">Contenido</Span>
                    </Label>
                    {
                        error && <Span className='error'>{error}</Span>
                    }

                    <Button
                        type='submit'
                        value='agregar'
                    >
                        Agregar
                    </Button>

                </Form>
                            
            }

        </Formik>
    )
}

export default NewsForm
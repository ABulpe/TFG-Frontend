import React, { useState } from 'react'
import {Formik, Form, Field} from 'formik'
import Label from '../../components/Label/Label'
import Span from '../../components/Span/Span'
import Button from '../../components/Button/Button'
import * as Yup from 'yup'
import axios from 'axios'

const ImagesForm = ({user, changeModalState, redirect}) => {

    const [error, setError] = useState('')

    const validationSchema = Yup.object().shape({
        image: Yup.mixed().required('Campo obligatorio.')
    })

    return (
        <Formik
            initialValues={{
                association: user.association,
                image: '',
            }}
            validationSchema={validationSchema}
            onSubmit={ async (values)=> {
                try {
                    const response = await axios.post("/api/images", values, 
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
                        redirect(values)
                        changeModalState(false)
                    }

                }
                catch (error) {
                    console.log(error)
                    setError('No se pudo agregar la imagen.')
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

export default ImagesForm
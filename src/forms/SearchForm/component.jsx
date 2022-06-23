import React from 'react';
import './style.scss'

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchForm = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{
                search: ''
            }}

            validationSchema={Yup.object({
                search: Yup.string()
                    .required('Required')
                    .min(3, 'WARNING! Query is too short - should be 3 chars minimum.')
            })}

            onSubmit={async (values, { setSubmitting, resetForm }) => {
                navigate("/search/" + values.search, { replace: true });
                setSubmitting(false);
                resetForm();
            }}
        >
            <Form className="searchForm">
                <Field name="search" type="search" placeholder="Search..." onBlur={(e) => e.preventDefault()}/>
                <Field className="searchButton" type="submit" value="Search"/>
                <ErrorMessage name="search" render={msg =>
                    <div className="alert">{msg}</div>} />
            </Form>
        </Formik>
    )
};

export default SearchForm;
import React, { useContext } from 'react'
import uniqid from 'uniqid';
import * as Yup from 'yup';
import { Context } from './context/AddTodo'
import { Formik, Field, Form } from 'formik'


const SignupSchema = Yup.object().shape({
    todo: Yup.string().min(3, "todo must be min 3 character").required("Input is not empty"),
})

function Todos() {
    const { todo, setTodo } = useContext(Context)


    return (
        <div >
            <Formik
                initialValues={{
                    todo: '',
                    id: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    if (values.todo.trim() === '') {
                        alert("fill input")
                    }
                    else {
                        let copy = [...todo, { todo: values.todo, id: uniqid() }]
                        setTodo(copy)

                    }
                    resetForm({ values: '' });
                }}

            >
                {
                    ({ values, errors, touched }) => (
                        <Form className='app'>
                            <div>

                                <Field name="todo" />
                                <br />
                                {errors.todo && touched.todo ? <div style={{ color: "red", fontSize: 12 }}>{errors.todo}</div> : null}
                            </div>



                            <button type="Submit" className='btn btn-warning'>Send</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}

export default Todos

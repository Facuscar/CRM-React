import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Alert from './Alert';

function ClientForm() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const newClientSchema = Yup.object().shape({
        name: Yup.string().min(2).required(),
        company: Yup.string().required(),
        email: Yup.string().required().email(),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),

    })

    const handleSubmit = async (values) => {
        try {
            
        } catch (error) {
            
        }
    }

    return ( 
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
           <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Add new cient</h1>

           <Formik
                initialValues={{
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    notes: '',
                }}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
                validationSchema = {newClientSchema}
           >
                {({errors, touched}) => {

                    return (
                        <Form className='mt-10'>

                            <div className='mb-4'>
                                <label htmlFor="name" className='text-gray-800 mt-2'>Name:</label>
                                <Field name="name" id="name" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's name"></Field>

                                {errors.name && touched.name && <Alert error={errors.name}></Alert>}
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="company" className='text-gray-800 mt-2'>Company:</label>
                                <Field name="company" id="company" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's company"></Field>

                                {errors.company && touched.company && <Alert error={errors.company}></Alert>}
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="email" className='text-gray-800 mt-2'>Email:</label>
                                <Field name="email" id="email" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's email"></Field>

                                {errors.email && touched.email && <Alert error={errors.email}></Alert>}
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="phone" className='text-gray-800 mt-2'>Phone:</label>
                                <Field name="phone" id="phone" type="tel" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's phone"></Field>
                                
                                {errors.phone && touched.phone && <Alert error={errors.phone}></Alert>}
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="notes" className='text-gray-800 mt-2'>Notes:</label>
                                <Field name="notes" id="notes" as="textarea" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's notes"></Field>
                            </div>

                            <input type="submit"  value={"Add client"} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"/>
                        </Form>
                    );
                }}
            </Formik>
        </div>

     );
}

export default ClientForm;
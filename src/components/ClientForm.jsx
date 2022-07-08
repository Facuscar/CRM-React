import { Formik, Form, Field } from 'formik';

function ClientForm() {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return ( 
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
           <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Add new cient</h1>

           <Formik
                initialValues={{
                    name: 'Facu',
                    company: '',
                    email: '',
                    phone: '',
                    notes: '',
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
           >
                {() => (

                
                <Form className='mt-10'>

                    <div className='mb-4'>
                        <label htmlFor="name" className='text-gray-800 mt-2'>Name:</label>
                        <Field name="name" id="name" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's name"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="company" className='text-gray-800 mt-2'>Company:</label>
                        <Field name="company" id="company" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's company"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='text-gray-800 mt-2'>Email:</label>
                        <Field name="email" id="email" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's email"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="phone" className='text-gray-800 mt-2'>Phone:</label>
                        <Field name="phone" id="phone" type="tel" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's phone"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="notes" className='text-gray-800 mt-2'>Phone:</label>
                        <Field name="notes" id="notes" as="textarea" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's notes"></Field>
                    </div>

                    <input type="submit"  value={"Add client"} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"/>
                </Form>
                )}
            </Formik>
        </div>

     );
}

export default ClientForm;
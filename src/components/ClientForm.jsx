import { Formik, Form, Field } from 'formik';

function ClientForm() {
    return ( 
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
           <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Add new cient</h1>

           <Formik>
                <Form className='mt-10'>

                    <div className='mb-4'>
                        <label htmlFor="name" className='text-gray-800 mt-2'>Name:</label>
                        <Field id="name" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's name"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="company" className='text-gray-800 mt-2'>Company:</label>
                        <Field id="company" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's company"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="email" className='text-gray-800 mt-2'>Email:</label>
                        <Field id="email" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's email"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="tel" className='text-gray-800 mt-2'>Phone:</label>
                        <Field id="tel" type="tel" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's phone"></Field>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="notes" className='text-gray-800 mt-2'>Phone:</label>
                        <Field id="notes" as="textarea" type="text" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Client's notes"></Field>
                    </div>

                    <input type="submit"  value={"Add client"} className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"/>
                </Form>
            </Formik>
        </div>

     );
}

export default ClientForm;
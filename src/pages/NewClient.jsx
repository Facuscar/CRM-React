import { Form, useActionData } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Alert from "../components/Alert";

export const action = async ({request}) => {
    const formData = await request.formData();

    const errors = [];

    if(Object.values(Object.fromEntries(formData)).includes('')) {
        errors.push('All fields are required');
    }

    if(errors.length) {
        return errors;
    }
}

function NewClient() {
    const errors = useActionData();

    console.log(errors);
    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900">New client</h1>
            <p className="mb-5">Complete the following fields to add a new client</p>
            
            {errors?.length && errors.map( (error, i) => <Alert error={error} key={i}/>)}

            <Form 
                method="POST"
            >
                <ClientForm></ClientForm>

                <input 
                    type="submit" 
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" 
                    value='Add client'
                />
            </Form>
        </>
     );
}

export default NewClient;
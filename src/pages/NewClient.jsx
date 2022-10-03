import { Form, useActionData, redirect } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Alert from "../components/Alert";

export const action = async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const errors = [];

    const email = formData.get('email');

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)) {
        errors.push('The emails format is invalid');
    }

    if(Object.values(Object.fromEntries(formData)).includes('')) {
        errors.push('All fields are required');
    }

    if(errors.length) {
        return errors;
    }

    const saveNewClient = async (client) => {
        try {
            const url = import.meta.env.VITE_BASE_URL
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(client),
            }

            const res = await fetch(url, config);
            const data = await res.json();
            console.log('hi');
        } catch (error) {
          console.log(error);  
        }
    }

    await saveNewClient(data);

    return redirect('/');
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
                noValidate
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
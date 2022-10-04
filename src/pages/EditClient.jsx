import { Form, useLoaderData, useActionData, redirect } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Alert from "../components/Alert";

export const loader = async ({ params }) => {
    const { clientId } = params;

    const getAPIClient = async () => {
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/${clientId}`

            const res = await fetch(url)
            const data = await res.json()

            if(Object.values(data).length === 0) {
                throw new Response('' , {
                    status: 404,
                    statusText: 'No results found with this id',
                });
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    }
    const client = getAPIClient();
    return client;
}

export const action = async ({request, params}) => {
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

    const editClient = async (clientId, client) => {
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/${clientId}`
            const config = {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(client),
            }

            const res = await fetch(url, config);
            const data = await res.json();
            return data;
        } catch (error) {
          console.log(error);  
        }
    }
    console.log(data);
    editClient(params.clientId, data);
    return redirect('/');
}

function EditClient() {
    const client = useLoaderData();
    const errors = useActionData();

    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900">Edit client</h1>
            <p className="mb-5">Modify the following fields to edit the client</p>
            
            {errors?.length && errors.map( (error, i) => <Alert error={error} key={i}/>)}

            <Form 
                method="PUT"
                noValidate
            >
                <ClientForm client={client}></ClientForm>

                <input 
                    type="submit" 
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" 
                    value='Edit client'
                />
            </Form>
        </>
     );
}

export default EditClient;
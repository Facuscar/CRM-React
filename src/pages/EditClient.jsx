import { Form, useLoaderData, useActionData } from "react-router-dom";
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

function EditClient() {
    const client = useLoaderData();
    const errors = useActionData();
    
    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900">Edit client</h1>
            <p className="mb-5">Modify the following fields to edit the client</p>
            
            {errors?.length && errors.map( (error, i) => <Alert error={error} key={i}/>)}

            <Form 
                method="POST"
                noValidate
            >
                <ClientForm client={client}></ClientForm>

                <input 
                    type="submit" 
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg" 
                    value='Add client'
                />
            </Form>
        </>
     );
}

export default EditClient;
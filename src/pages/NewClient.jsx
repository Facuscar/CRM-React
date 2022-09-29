import { Form } from "react-router-dom";
import ClientForm from "../components/ClientForm";

export const action = async ({request}) => {
    const formData = await request.formData();

    console.log(formData.get('name'));
}

function NewClient() {
    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900">New client</h1>
            <p className="mb-5">Complete the following fields to add a new client</p>
            
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
import { useState } from "react";
import { useParams } from "react-router-dom";

import ClientForm from "../components/ClientForm";

export const loader = async ({ params }) => {
    const { id } = params;

    const getAPIClient = async () => {
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/${id}`

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
}

function EditClient() {
        
    return (
        error ? <h3>No data was found with the id {id}</h3> : (
            <div>
            <h1 className="font-black text-4xl text-blue-900">Edit client</h1>
            <p className="mt-3">Use the following form to edit clients info</p>
            <ClientForm client={client} loading={loading} ></ClientForm>
            </div>
        )
        
     );
}

export default EditClient;
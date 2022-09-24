import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ClientForm from "../components/ClientForm";

function EditClient() {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const getAPIClient = async () => {
            try {
                const url = `${import.meta.env.VITE_BASE_URL}/${id}`
                const res = await fetch(url)
                const data = await res.json()
                if(Object.keys(data).length === 0) {
                    setError(true);
                }
                setClient(data);
                if(data) {
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getAPIClient();
    }, []);
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
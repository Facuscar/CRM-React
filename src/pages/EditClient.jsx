import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ClientForm from "../components/ClientForm";

function EditClient() {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getAPIClient = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const res = await fetch(url)
                const data = await res.json()
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
        <div>
            <h1 className="font-black text-4xl text-blue-900">Edit client</h1>
            <p className="mt-3">Use the following form to edit clients info</p>
            <ClientForm client={client} loading={loading} ></ClientForm>
        </div>
     );
}

export default EditClient;
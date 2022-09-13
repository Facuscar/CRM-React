import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ClientInfo() {
    
    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(!loading);
        const getAPIClient = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const res = await fetch(url)
                const data = await res.json()
                setClient(data);
                
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        getAPIClient();
    }, []);
    
    const { name, company, email, phone, notes } = client
    console.log(client);

    return ( 
        <div>
            {loading ? <h1>Loading</h1> : 
            <>
            {
                Object.keys(client).length === 0 ? <h1>404 Client not found</h1> : 
                <> 
                    <h1 className='font-black text-4xl text-blue-900'>Client: {id}</h1>
                    <p className='text-2xl mt-10 text-gray-600'><span className='text-gray-800 uppercase font-bold' >Name:</span> {name}</p>
                    <p className='text-2xl mt-4 text-gray-600'><span className='text-gray-800 uppercase font-bold' >Company:</span> {company}</p>
                    <p className='text-2xl mt-4 text-gray-600'><span className='text-gray-800 uppercase font-bold' >Email:</span> {email}</p>
                    {phone && <p className='text-2xl mt-4 text-gray-600'><span className='text-gray-800 uppercase font-bold' >Phone:</span> {phone}</p>}
                    {notes && <p className='text-2xl mt-4 text-gray-600'><span className='text-gray-800 uppercase font-bold' >Notes:</span> {notes}</p>}
                </>
            }
            </> 
        }
            
        </div>
     );
}

export default ClientInfo;
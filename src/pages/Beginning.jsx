import { useState, useEffect } from 'react';

import Client from '../components/Client';

function Beginning() {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const getClientsAPI = async () => {
            try {
                const url = import.meta.env.VITE_BASE_URL;
                const resp = await fetch(url);

                const result = await resp.json();

                setClients(result);
            } catch (error) {
                
            }
        }

        getClientsAPI();
    }, []);

    const handleDelete = async (id) => {
        const accepts = confirm(`You are about to delete ${name}. This action is irreversible`)

        if (accepts) {
            try {
                const url = `${import.meta.env.VITE_BASE_URL}/${id}`;

                const config = {
                    method: 'DELETE',
                }
                
                const res = await fetch(url, config);
                await res.json();
                
                setClients( () => {
                    return clients.filter( client => client.id !== id)
                })
            } catch (error) {
               console.log(error); 
            }
        }
    }

    return ( 
        <>
            <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
            <p className='mt-3'>Manage your clients</p>

            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Name:</th>
                        <th className='p-2'>Contact:</th>
                        <th className='p-2'>Company:</th>
                        <th className='p-2'>Actions:</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map ( client => (
                        <Client key={client.id} client={client} handleDelete={handleDelete}></Client>
                    ) )}
                </tbody>
            </table>
        </>
     );
}

export default Beginning;
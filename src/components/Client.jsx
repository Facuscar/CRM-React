import { useNavigate, Form, redirect } from 'react-router-dom';

export const action = async ({params}) => {
    const deleteClient = async () => {
        const { clientId } = params;
        try {
            const url = `${import.meta.env.VITE_BASE_URL}/${clientId}`
            const config = {
                method: 'DELETE',
            }
            const res = await fetch(url, config);
        } catch (error) {
            
        }
    }
    await deleteClient();
    return redirect('/');
}

function Client({client}) {
    const navigate = useNavigate();

    const { name, company, email, phone, id } = client;

    return ( 
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3">{name}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span> {email} </p>
                <p><span className="text-gray-800 uppercase font-bold">Phone: </span> {phone} </p>
            </td>
            <td className="p-3">{company}</td>
            <td className="p-3">
                <button type="button" className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs" onClick={() =>  navigate(`/clients/${id}`)}>More..</button>

                <button 
                type="button" 
                onClick={() => navigate(`/client/${id}/edit`)} 
                className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                >
                    Edit
                </button>

                <Form method='POST' action={`clients/${id}/delete`} onSubmit={(e) => {
                    if(!confirm('You are about to delete a client. This action is irreversible.')) {
                        e.preventDefault();
                    }
                }}>
                    <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    >
                        Delete
                    </button>
                </Form>
            </td>
            
        </tr>
     );
}

export default Client;
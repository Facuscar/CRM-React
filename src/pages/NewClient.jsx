import ClientForm from "../components/ClientForm";

function NewClient() {
    return ( 
        <>
            <h1 className="font-black text-4xl text-blue-900">New client</h1>
            <p>Complete the following fields to add a new client</p>

            <ClientForm></ClientForm>
        </>
     );
}

export default NewClient;
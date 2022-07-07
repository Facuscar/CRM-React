import { Outlet } from 'react-router-dom';

function StartSession() {
    return ( 
        <div>
            <h1>From Login.jsx</h1>

            <Outlet></Outlet>
        </div>
     );
}

export default StartSession;
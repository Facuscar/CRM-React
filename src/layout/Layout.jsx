import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>From layout</h1>
            <Outlet></Outlet>
        </div>
        
     );
}

export default Layout;
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>From layout</h1>
            <p>Before outlet</p>
            <Outlet></Outlet>
            <p>After outlet</p>
        </div>
        
     );
}

export default Layout;
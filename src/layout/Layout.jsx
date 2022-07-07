import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {

    const location = useLocation();
    const url = location.pathname;
    console.log(url);

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clients</h2>
                
                <nav className='mt-10'>
                    <Link to="/clients" className={` ${url === '/clients' ? 'text-blue-300' : 'text-white' } text-2xl block mt-2 hover:text-blue-300`}>Clients</Link>
                    <Link to="/clients/new" className={` ${url === '/clients/new' ? 'text-blue-300' : 'text-white' } text-white text-2xl block mt-2 hover:text-blue-300`}>New client</Link>
                </nav>
            </div>
            <div className='md:w-3/4'>
                2
            </div>
        </div>
        
     );
}

export default Layout;
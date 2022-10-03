import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {

    const location = useLocation();
    const url = location.pathname;

    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM - Clients</h2>
                
                <nav className='mt-10'>
                    <Link 
                        to="/" 
                        className={` ${url === '/' ? 'text-blue-300' : 'text-white' } text-2xl block mt-2 hover:text-blue-300`}
                    >
                        Clients
                    </Link>
                    <Link 
                        to="/new" 
                        className={` ${url === '/new' ? 'text-blue-300' : 'text-white' } text-white text-2xl block mt-2 hover:text-blue-300`}
                    >
                        New client
                    </Link>
                </nav>
            </aside>
            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet></Outlet>
            </div>
        </div>
        
     );
}

export default Layout;
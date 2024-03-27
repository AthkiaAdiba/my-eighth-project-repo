import { NavLink, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-center items-center mt-48 lg:mt-56">
            <p className="text-7xl font-bold text-rose-950">
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink to='/' className='mt-10 font-semibold btn btn-outline hover:bg-[#23BE0A] border-[#23BE0A] text-[#23BE0A] mr-6'><button className="text-lg">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;
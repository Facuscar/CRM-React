import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clients</h1>
            <h3 className="text-center">{error.statusText || error.message}</h3>
        </div>
    )
}

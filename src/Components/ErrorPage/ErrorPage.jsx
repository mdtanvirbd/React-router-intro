import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Opss!!!</h2>
            <p>
                <i>{error.statusText || error.massage}</i>
            </p>
            {
                error.status == 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go Back you from</p>
                    <Link to="/"><button>Home</button></Link>
                    </div>

            }
        </div>
    );
};

export default ErrorPage;
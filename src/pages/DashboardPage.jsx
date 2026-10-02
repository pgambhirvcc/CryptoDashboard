import React from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={handleClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Go Back!
            </button>


            <h1>Welcome to Dashboard!</h1>
        </div>
    )
}

export default DashboardPage
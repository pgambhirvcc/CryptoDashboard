import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const DashboardPage = () => {

    const [cryptoData, setCryptoData] = useState([]);

    const getCryptoData = async () => {
        const data = await fetch(URL);
        const dataInJson = await data.json();
        setCryptoData(dataInJson);
        console.log(dataInJson);
    }

    useEffect(() => {
        getCryptoData();
    }, []);

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
            <Table data={cryptoData} />

        </div>
    )
}

export default DashboardPage
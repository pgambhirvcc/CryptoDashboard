import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const URL = 'https://api.coingecko.com/api/v3/coins/';

const CoinDetailPage = () => {
    const data = useParams();
    const [coinInfo, setCoinInfo] = useState({});

    const coinDetailData = async () => {
        const result = await fetch(URL + data.coinName.toLowerCase());
        const resultInJson = await result.json();
        setCoinInfo(resultInJson);
        console.log(resultInJson);
    }

    useEffect(() => {
        coinDetailData();
    }, [data]);

    return (
        <div className="rounded overflow-hidden shadow-lg w-screen">
            <img className="w-20" src={coinInfo.image?.large} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{coinInfo.name}</div>
                <p className="text-gray-700 text-base">
                    {coinInfo.description?.en}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    coinInfo.categories?.map((category) => {
                        return (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoinDetailPage;

// We cannot use props here

// Parent -> Child

// DashboardPage

// CoinDetailPage
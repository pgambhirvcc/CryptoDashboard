import React from 'react'
import PricePercentage from './PricePercentage';
import { Link, useNavigate } from 'react-router-dom';



// ath
// : 
// 4946.05
// ath_change_percentage
// : 
// -45.92414
// ath_date
// : 
// "2025-08-24T11:21:03.000Z"
// atl
// : 
// 0.432979
// atl_change_percentage
// : 
// 617624.89162
// atl_date
// : 
// "2015-10-19T16:00:00.000Z"
// circulating_supply
// : 
// 122098689.50213154
// current_price
// : 
// 2674.62
// fully_diluted_valuation
// : 
// 326550778061
// high_24h
// : 
// 2768.44
// id
// : 
// "ethereum"
// image
// : 
// "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
// last_updated
// : 
// "2026-10-03T00:42:20.000Z"
// low_24h
// : 
// 2652.62
// market_cap
// : 
// 326550778061
// market_cap_change_24h
// : 
// -3706675332.6104126
// market_cap_change_percentage_24h
// : 
// -1.12236
// market_cap_rank
// : 
// 2
// max_supply
// : 
// null
// name
// : 
// "Ethereum"
// price_change_24h
// : 
// -30.28668564108466
// price_change_percentage_24h
// : 
// -1.1197
// roi
// : 
// {times: 41.14489732843168, currency: 'btc', percentage: 4114.489732843168}
// symbol
// : 
// "eth"
// total_supply
// : 
// 122098689.5021315
// total_volume
// : 
// 19020360858

const Table = (props) => {
    const data = props.data;

    const navigate = useNavigate();

    return (
        <div className="overflow-x-auto px-4 md:px-8 mt-6">
            <table className="w-full max-w-7xl mx-auto">
                <thead
                    className="text-slate-900 text-left text-sm font-semibold border-b border-slate-300 whitespace-nowrap">
                    <tr>
                        <th scope="col" className="pl-0 px-3 py-3.5">ID</th>
                        <th scope="col" className="px-3 py-3.5">Name</th>
                        <th scope="col" className="px-3 py-3.5">Market Capital</th>
                        <th scope="col" className="px-3 py-3.5">Image</th>
                        <th scope="col" className="pr-0 px-3 py-3.5">Price Change (24 Hours)</th>
                    </tr>
                </thead>

                <tbody className="text-sm divide-y divide-slate-200">
                    {
                        data.map((coin) => {
                            return (
                                <tr>
                                    <td className="pl-0 px-3 py-4 font-medium text-slate-900 whitespace-nowrap">
                                        {coin.id}
                                    </td>
                                    <td className="px-3 py-4 text-slate-500 underline">
                                        <Link to={`/dashboard/coin/${coin.id}`}>{coin.name}</Link>
                                    </td>
                                    <td className="px-3 py-4 text-slate-500">
                                        {coin.market_cap}
                                    </td>
                                    <td className="px-3 py-4 text-slate-500">
                                       <img width={30} src={coin.image} alt="" />
                                    </td>
                                    <td className="pr-0 px-3 py-4 flex gap-3">
                                        <PricePercentage value={coin.price_change_percentage_24h} />                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table
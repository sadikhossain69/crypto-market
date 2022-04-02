import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {

    const [coins, setCoins] = useState([])

    useEffect( () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then( (res) => {
            setCoins(res.data);
        } )
    } , [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center'>
            {
                coins.map(coin => <Coin key={coin.id} coin={coin} />)
            }
        </div>
    );
};

export default Coins;
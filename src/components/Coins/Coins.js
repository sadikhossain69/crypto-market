import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Coins = () => {

    const [coins, setCoins] = useState([])

    useEffect( () => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then( (res) => {
            setCoins(res.data);
        } )
    } , [])

    return (
        <div>
            <h2>This is Coins {coins.length} </h2>
        </div>
    );
};

export default Coins;
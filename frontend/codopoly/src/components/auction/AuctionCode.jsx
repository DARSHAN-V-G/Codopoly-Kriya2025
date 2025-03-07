import { useState, useEffect } from 'react';
import styles from '../../styles/bidding.module.css';
import axios from 'axios';
import {io} from 'socket.io-client';
const AuctionCode  = ()=>{
    const [currentPOCForSale, setCurrentPOCForSale] = useState('');
    useEffect(()=>{
        const socket = io('http://localhost:3000');
        socket.on('updatePOCSuccess',async (data)=>{
            console.log(data.message);
            console.log('POC NAME : ',data.poc);
            const response = await axios.get(`http://localhost:3000/question/getPOC/${data.poc}`);
            console.log(response.data.poc);
            setCurrentPOCForSale(response.data.poc);
        })

    })
    return(
        <>
            <div className={styles.auctioncodecontainer}>
                <p style={{"margin":10}} className={styles.maintext}>Auction Code</p>
                <div className={styles.auctioncodesubcontainer}>
                    {currentPOCForSale}
                </div>
            </div>

        </>
    )
}

export default AuctionCode;
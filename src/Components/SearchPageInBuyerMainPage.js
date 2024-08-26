import { React, useState, useEffect } from 'react'
import { Box } from '@mui/joy';
import SellerProfileSearchBuyer from './SellerProfileSearchBuyer';
import { getSellers } from '../Backend/Data';


async function CallSellers(seller, sellerf) {
    let s = await getSellers()
    console.log(s)
    sellerf(seller = s)
}


function SearchPageInBuyerMainPage({ GoSellerProfilePage }) {
    const [seller, sellerf] = useState([])


    useEffect(() => {
        CallSellers(seller, sellerf)
    }, [])


    return (
        <Box bgcolor={'black'} maxHeight={'87%'} height={'87%'} width={'75vw'} display={'flex'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} sx={{ overflowY: 'auto', '&::-webkit-scrollbar': { width: '12px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: '#13121D', borderRadius: '10px' }, '&::-webkit-scrollbar-track': { backgroundColor: '#070C12', borderRadius: '10px' }, position: 'absolute', top: '11%', zIndex: 2, borderRadius: '10px' }}>

            {Array.from(seller).map((data, index) => (
                <SellerProfileSearchBuyer puid={data.id} GoSellerProfilePage={GoSellerProfilePage} show={true} Name={data.name} UserName={data.user_name} key={index} ></SellerProfileSearchBuyer>
            ))}
        </Box>
    )
}

export default SearchPageInBuyerMainPage





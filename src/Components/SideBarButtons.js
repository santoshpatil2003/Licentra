// import React from 'react'
// import {Box, Button} from '@mui/joy';
// import "./SideBarButtons.css";


// function SideBarButtons({name}) {
//   return (
//     <Box width={'100%'} height={'12%'} display={'flex'} justifyContent={'center'}>
//         {/* <button className="MuiButton-root" type="button"  style={{backgroundColor:'#13121D', width: '100%', color:'white', border: 'None', cursor: "pointer"}}>
//             {name}
//         </button> */}
//         <button className={"MuiButton"} type="button">
//             {name}
//         </button>

//         {/* <Button variant='plain' fullWidth>
//           {name}
//         </Button> */}
//     </Box>
//   )
// }

// export default SideBarButtons


import {React, useState} from 'react';
import { Box, Button } from '@mui/joy';

const clic = (select_click, selected, index) => {
    select_click(selected = index);
    // cf(true)
}

function SideBarButtons({ name, select_click, selected, index }) {
    // const [c, cf] = useState(false)

    const bclick = {
        backgroundColor: '#13121D',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#1F1F2D',
        },
    }

    const aclick = {
        backgroundColor: '#1F1F2D',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#1F1F2D',
        },
    }

    return (
        <Box width="100%" height="12%" display="flex" justifyContent="center">
            <Button
                variant="plain"
                fullWidth
                sx={index === selected?aclick :bclick}
                onClick={()=>clic(select_click, selected, index)}
            >
                {name}
            </Button>
        </Box>
    );
}

export default SideBarButtons;


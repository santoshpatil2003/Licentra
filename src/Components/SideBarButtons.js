import {React} from 'react';
import { Box, Button } from '@mui/joy';

const clic = (select_click, selected, index) => {
    select_click(selected = index);
    // cf(true)
}

function SideBarButtons({ name, select_click, selected, index }) {

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


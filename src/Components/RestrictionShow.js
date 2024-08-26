import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function RestrictionShow({text}) {
    
    return (
        <Textarea
            placeholder="Type in here…"
            value={text}
            disabled
            
            maxRows={8}
            
            sx={{ minWidth: '100%', backgroundColor: '#111923', border: 'none', color: "white", outline: 'none' }}
        />
    );
}


// '#13121D'

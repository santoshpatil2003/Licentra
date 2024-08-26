import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function RestrictionsInput({restriction, restrictionf}) {
    
    return (
        <Textarea
            placeholder="Type in here…"
            // value={text}
            onChange={(event) => restrictionf(event.target.value)}
            minRows={2}
            maxRows={2}
            endDecorator={
                <Typography level="body-xs" sx={{ ml: 'auto' }}>
                    {restriction.length} character(s)
                </Typography>
            }
            sx={{ minWidth: '100%', backgroundColor: '#13121D', border: 'none', color: "white", outline: 'none' }}
        />
    );
}

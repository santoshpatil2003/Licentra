import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function RestrictionShow({text}) {
    // const [text, setText] = React.useState('');
    // const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
    return (
        <Textarea
            placeholder="Type in here…"
            value={text}
            disabled
            // onChange={(event) => restrictionf(event.target.value)}
            minRows={2}
            maxRows={8}
            // endDecorator={
            //     <Typography level="body-xs" sx={{ ml: 'auto' }}>
            //         {text.length} character(s)
            //     </Typography>'#111923'
            // }
            sx={{ minWidth: '100%', backgroundColor: '#111923', border: 'none', color: "white", outline: 'none' }}
        />
    );
}


// '#13121D'

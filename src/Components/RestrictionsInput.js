import * as React from 'react';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

export default function RestrictionsInput({restriction, restrictionf}) {
    // const [text, setText] = React.useState('');
    // const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
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

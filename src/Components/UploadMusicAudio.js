import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function UploadMusicAudio({ variant, AudioFilef }) {
    const [fileAdded, setFileAdded] = useState(false);


    const handleFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            if (file.type.startsWith('audio/')) {
                if (typeof AudioFilef === 'function') {
                    AudioFilef(file);
                    console.log(`the size of the file is ${file.size}`)
                } else {
                    console.error('AudioFilef is not a function');
                }
                setFileAdded(true);
            } else {
                console.error('Selected file is not an audio file.');
                event.target.value = ''; 
            }
        }
    };

    return (
        <Button
            component="label"
            role={undefined}
            variant={variant}
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ zIndex: 1 }}
        >
            {fileAdded ? 'File Added' : 'Upload Music'}
            {!fileAdded && <VisuallyHiddenInput type="file" accept="audio/*" onChange={handleFileChange} />}
        </Button>
    );
}

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/joy/Box'; 

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

export default function UploadMusicPic({ variant, ImageFilef }) {
    const [fileAdded, setFileAdded] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    
    const handleFileChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            if (file.type.startsWith('image/')) {
                if (typeof ImageFilef === 'function') {
                    ImageFilef(file);
                } else {
                    console.error('ImageFilef is not a function');
                }
                setFileAdded(true);

                const url = URL.createObjectURL(file);
                setImageUrl(url);
            } else {
                console.error('Selected file is not an image.');
                event.target.value = ''; 
            }
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {fileAdded && imageUrl?<div></div>: <Button
                disabled={fileAdded}
                component="label"
                role={undefined}
                variant={variant}
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                {fileAdded ? 'File Added' : 'Upload Music Pic'}
                {!fileAdded && <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />}
            </Button>}
            {fileAdded && imageUrl && (
                <Box
                    sx={{
                        marginTop: 2,
                        width: 200,
                        height: 200,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        backgroundColor: 'grey.200',
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Preview"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            )}
        </div>
    );
}














// import {React, useState} from 'react';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const VisuallyHiddenInput = styled('input')({
//     clip: 'rect(0 0 0 0)',
//     clipPath: 'inset(50%)',
//     height: 1,
//     overflow: 'hidden',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     whiteSpace: 'nowrap',
//     width: 1,
// });

// export default function UploadMusicPic({ variant, ImageFilef }) {
//     const [file2, Filef] = useState(false);
//     // Change handler function
//     const handleFileChange = (event) => {
//         const file = event.target.files[0]; // Get the selected file

//         if (file) {
//             if (file.type.startsWith('image/')) {
//                 ImageFilef(file)
//                 Filef(true);
//                 // Process the image file
//                 // console.log('Selected image file:', file);

//                 // // Example: Create a URL for the file
//                 // // const fileUrl = URL.createObjectURL(file);
//                 // // console.log('Image file URL:', fileUrl);

//                 // // You can also read the file content using FileReader if needed
//                 // const reader = new FileReader();
//                 // reader.onload = (e) => {
//                 //     console.log('Image file content:', e.target.result);
//                 // };
//                 // // reader.readAsDataURL(file); // Read as Data URL to display the image
//             } else {
//                 console.error('Selected file is not an image.');
//                 // Optionally, clear the file input or show an error message
//                 event.target.value = ''; // Clear the input
//             }
//         }
//     };

//     return (
//         // {file2?}
//         <Button disabled={file2} component="label" role={undefined} variant={variant} tabIndex={-1} startIcon={<CloudUploadIcon />}>
//             { file2?'File Added': 'Upload Music Pic'}
//             { file2? <div></div> : <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange}/>}
//         </Button>
//         // <Button disabled={true} component="label" role={undefined} variant={variant} tabIndex={-1} startIcon={<CloudUploadIcon />}>
//         //     Upload Music Pic
//         //     <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange}/>
//         // </Button>
        
//     );
// }

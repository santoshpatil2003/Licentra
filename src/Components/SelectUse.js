// import * as React from 'react';
// import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
// import Select, { selectClasses } from '@mui/joy/Select';
// import Option from '@mui/joy/Option';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

// const theme = extendTheme({
//     components: {
//         JoySelect: {
//             defaultProps: {
//                 indicator: '↕',
//             },
//             styleOverrides: {
//                 listbox: {
//                     backgroundColor: '#111923',
//                     borderColor: '#111923',
//                     '& .MuiOption-root': {
//                         backgroundColor: '#111923',
//                         '&:hover': {
//                             backgroundColor: '#1e2a3a', // Slightly lighter shade for hover
//                         },
//                         '&.Mui-selected': {
//                             backgroundColor: '#1e2a3a', // Same color for selected state
//                             '&:hover': {
//                                 backgroundColor: '#2a3a4a', // Even lighter shade for hover on selected
//                             },
//                         },
//                     },
//                 },
//             },
//         },
//     },
// });

// export default function SelectUse({use_case,use_casef}) {
//     return (
//         <CssVarsProvider theme={theme}>
//             <Select
//                 placeholder="Select Use Case"
//                 indicator={<KeyboardArrowDown />}
//                 value={use_case}
//                 onChange={(event) => use_casef(event.target.value)}
//                 sx={{
//                     height: '100%',
//                     width: '100%',
//                     backgroundColor: '#111923',
//                     border: 'none',
//                     '&:hover': { backgroundColor: '#111923' },
//                     [`& .${selectClasses.indicator}`]: {
//                         transition: '0.2s',
//                         [`&.${selectClasses.expanded}`]: {
//                             transform: 'rotate(-180deg)',
//                         },
//                     },
//                 }}

                
//             >
//                 <Option value="Video">Video</Option>
//                 <Option value="AI">AI</Option>
//                 <Option value="Stream">Stream</Option>
//             </Select>
//         </CssVarsProvider>
//     );
// }


import * as React from 'react';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const theme = extendTheme({
    components: {
        JoySelect: {
            defaultProps: {
                indicator: '↕',
            },
            styleOverrides: {
                listbox: {
                    backgroundColor: '#111923',
                    borderColor: '#111923',
                    '& .MuiOption-root': {
                        backgroundColor: '#111923',
                        '&:hover': {
                            backgroundColor: '#1e2a3a', // Slightly lighter shade for hover
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#1e2a3a', // Same color for selected state
                            '&:hover': {
                                backgroundColor: '#2a3a4a', // Even lighter shade for hover on selected
                            },
                        },
                    },
                },
            },
        },
    },
});

export default function SelectUse({ use_case, use_casef }) {
    return (
        <CssVarsProvider theme={theme}>
            <Select
                placeholder="Select Use Case"
                indicator={<KeyboardArrowDown />}
                value={use_case}
                onChange={(event, newValue) => use_casef(newValue)}
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#111923',
                    border: 'none',
                    '&:hover': { backgroundColor: '#111923' },
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                }}
            >
                <Option value="Video">Video</Option>
                <Option value="AI">AI</Option>
                <Option value="Stream">Stream</Option>
            </Select>
        </CssVarsProvider>
    );
}

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
                            backgroundColor: '#1e2a3a', 
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#1e2a3a', 
                            '&:hover': {
                                backgroundColor: '#2a3a4a', 
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

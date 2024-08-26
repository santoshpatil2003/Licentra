// import React from 'react'

// function CostInput() {
//   return (
//     <FormLabel>React number format</FormLabel>
//     <Input
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//         placeholder="Placeholder"
//         slotProps={{
//             input: {
//                 component: NumericFormatAdapter,
//             },
//         }}
//     />
//   )
// }

// export default CostInput

import {React, forwardRef} from 'react';
import {Input, FormControl, FormHelperText, FormLabel} from '@mui/joy'
import { NumericFormat } from 'react-number-format';

const NumericFormatAdapter = forwardRef(
    function NumericFormatAdapter(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                prefix="$"
            />
        );
    },
);


function CostInput({costf}) {
    return (
        <FormControl>
            <FormLabel sx={{ color: 'white' }}>Synchronization License’s Price</FormLabel>
            <Input
                sx={{backgroundColor: '#13121D', border: 'none', color: "white", outline: 'none'}}
                onChange={(event) => costf(event.target.value)}
                placeholder="Add Price"
                slotProps={{
                    input: {
                        component: NumericFormatAdapter,
                    },
                }}
            />
            <FormHelperText sx={{color: '#808080'}} >Synchronization License: Needed if you want to use music in a visual context, like in a film, TV show, or video game. It covers the right to sync the music with the visuals.</FormHelperText>
        </FormControl>
    );
}

export default CostInput

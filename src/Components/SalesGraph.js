// import * as React from 'react';
// import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

// const uData = [0, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// const xLabels = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export default function SimpleAreaChart() {
//     return (
//         <LineChart
//             width={920}
//             height={450}
//             series={[{ data: uData }]}
//             xAxis={[{ scaleType: 'point', data: xLabels, showMark: false }]}
//             sx={{
//                 [`& .${lineElementClasses.root}`]: {
//                     display: 'none',
//                 },
//             }}
//         />
//     );
// }



import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const uData = [0, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const xLabels = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SimpleAreaChart() {
    return (
        <LineChart
            width={920}
            height={450}
            series={[{ data: uData }]}
            xAxis={[{ scaleType: 'point', data: xLabels, showMark: false }]}
            sx={{
                [`& .${lineElementClasses.root}`]: {
                    // display: 'none',
                },
                '& .MuiChartsAxis-line': {
                    stroke: 'white',
                },
                '& .MuiChartsAxis-tick': {
                    stroke: 'white',
                },
                '& .MuiChartsAxis-tickLabel': {
                    fill: 'white',
                },
            }}
        />
    );
}








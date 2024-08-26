// import { React, useState, useEffect } from 'react';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { getSales } from '../Backend/Data';

// const dataset2 = [
//     {
//         amount: 0,
//         month: 'January',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'February',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'March',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'April',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'May',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'June',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'July',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'August',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'September',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'October',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'November',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'December',
//         year: '2024'
//     },
// ];

// const valueFormatter = (value) => `${value}$`;

// // const otherSetting = {
// //     height: 450,
// //     yAxis: [{ label: 'Sales ($)' }],
// //     grid: { horizontal: true },
// //     sx: {
// //         [`& .${axisClasses.left} .${axisClasses.label}`]: {
// //             transform: 'translateX(-10px)',
// //         },
// //         '& .MuiChartsAxis-line': {
// //             stroke: 'white',
// //         },
// //         '& .MuiChartsAxis-tick': {
// //             stroke: 'white',
// //         },
// //         '& .MuiChartsAxis-tickLabel': {
// //             fill: 'white',
// //         },
// //         '& .MuiChartsAxis-label': {
// //             fill: 'white',
// //         },
// //     },
// // };

// const otherSetting = {
//     height: 450,
//     yAxis: [{ label: 'Sales ($)' }],
//     grid: { horizontal: true },
// sx: {
//     [`& .${axisClasses.left} .${axisClasses.label}`]: {
//         transform: 'translateX(-10px)',
//     },
//     '& .MuiChartsAxis-line': {
//         stroke: 'white',
//     },
//     '& .MuiChartsAxis-tick': {
//         stroke: 'white',
//     },
//     '& .MuiChartsAxis-tickLabel': {
//         fill: 'white',
//     },
//     '& .MuiChartsAxis-label': {
//         fill: 'white',
//     },
//     // Add these lines to ensure all axis elements are white
//     '& .MuiChartsAxis-root': {
//         color: 'white',
//     },
//     '& .MuiChartsAxis-axisTick': {
//         stroke: 'white',
//     },
//     '& .MuiChartsAxis-axisLine': {
//         stroke: 'white',
//     },
//     },
// };

// function replaceByMonth(array1, array2) {
//     array1.forEach((element1, index1) => {
//         const match = array2.find(element2 => element2.month === element1.month.slice(0, 3));
//         if (match) {
//             array1[index1] = match; 
//         }
//     });
// }

// export default function SalesBarGraph({ uid, totalsales, totalsalesf }) {
//     let [dataset, datasetf] = useState(dataset2)
//     const [chartSettings, setChartSettings] = useState(otherSetting);


//     async function fetchSales() {
//         let sales = await getSales(uid)
//         console.log(sales.songs)
//         let datase = sales.songs
//         let a = 0
//         datase.forEach((e) => {
//             e.amount = Number(e.amount)
//             a = Number(e.amount) + a
//         })
//         replaceByMonth(dataset2, datase)
//         totalsalesf(a)
//         datasetf(dataset2)
//     }

//     useEffect(() => {
//         fetchSales()
//         setChartSettings(otherSetting)
//     }, [uid])


//     return (
//         <BarChart
//             dataset={dataset}
//             xAxis={[
//                 {
//                     scaleType: 'band',
//                     dataKey: 'month',
//                     valueFormatter: (month, context) =>
//                         context.location === 'tick'
//                             ? `${month.slice(0, 3)} \n2024`
//                             : `${month} 2024`,
//                 },
//             ]}
//             series={[{ dataKey: 'amount', label: 'Sales', valueFormatter }]}
//             {...chartSettings}
//         />
//     );
// }




import { React, useState, useEffect } from 'react';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';
import { getSales } from '../Backend/Data';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const dataset2 = [
    {
        amount: 0,
        month: 'January',
        year: '2024'
    },
    {
        amount: 0,
        month: 'February',
        year: '2024'
    },
    {
        amount: 0,
        month: 'March',
        year: '2024'
    },
    {
        amount: 0,
        month: 'April',
        year: '2024'
    },
    {
        amount: 0,
        month: 'May',
        year: '2024'
    },
    {
        amount: 0,
        month: 'June',
        year: '2024'
    },
    {
        amount: 0,
        month: 'July',
        year: '2024'
    },
    {
        amount: 0,
        month: 'August',
        year: '2024'
    },
    {
        amount: 0,
        month: 'September',
        year: '2024'
    },
    {
        amount: 0,
        month: 'October',
        year: '2024'
    },
    {
        amount: 0,
        month: 'November',
        year: '2024'
    },
    {
        amount: 0,
        month: 'December',
        year: '2024'
    },
];

const valueFormatter = (value) => `${value}$`;

// const theme = createTheme({
//     components: {
//         MuiChartsAxis: {
//             styleOverrides: {
//                 root: {
//                     color: 'white',
//                 },
//             },
//         },
//     },
// });

const theme = createTheme({
    components: {
        MuiChartsAxis: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
    },
});

// const CustomAxisContent = (props) => <g {...props} style={{ fill: 'white', stroke: 'white' }} />;
// const CustomAxisLabel = (props) => <text {...props} style={{ fill: 'white' }} />;
// const CustomAxisLine = (props) => <line {...props} style={{ stroke: 'white' }} />;
// const CustomAxisTick = (props) => <line {...props} style={{ stroke: 'white' }} />;
// const CustomAxisTickLabel = (props) => <text {...props} style={{ fill: 'white' }} />;

// const otherSetting = {
//     height: 450,
//     yAxis: [{ label: 'Sales ($)' }],
//     grid: { horizontal: true },
//     sx: {
//         [`& .${axisClasses.left} .${axisClasses.label}`]: {
//             transform: 'translateX(-10px)',
//         },
//     },
// };

const CustomAxisLine = (props) => <line {...props} style={{ stroke: 'white' }} />;
const CustomAxisTick = (props) => <line {...props} style={{ stroke: 'white' }} />;

// const otherSetting = {
//     height: 450,
//     yAxis: [{ label: 'Sales ($)' }],
//     grid: { horizontal: true },
//     sx: {
//         [`& .${axisClasses.left} .${axisClasses.label}`]: {
//             transform: 'translateX(-10px)',
//         },
//         '& .MuiChartsAxis-tickLabel': {
//             fill: 'white', // or any color that contrasts with your background
//         },
//         '& .MuiChartsAxis-label': {
//             fill: 'white', // or any color that contrasts with your background
//         },
//         '& .MuiChartsLegend-label': {
//             fill: 'white',
//         },
//     },
// };

function replaceByMonth(array1, array2) {
    array1.forEach((element1, index1) => {
        const match = array2.find(element2 => element2.month === element1.month.slice(0, 3));
        if (match) {
            array1[index1] = match;
        }
    });
}

export default function SalesBarGraph({ uid, totalsales, totalsalesf }) {
    let [dataset, datasetf] = useState(dataset2);

    // const otherSetting = {
    //     height: 450,
    //     yAxis: [{ label: 'Sales ($)' }],
    //     grid: { horizontal: true },
    //     sx: {
    //         [`& .${axisClasses.left} .${axisClasses.label}`]: {
    //             transform: 'translateX(-10px)',
    //         },
    //         '& .MuiChartsAxis-tickLabel': {
    //             fill: 'white', // or any color that contrasts with your background
    //         },
    //         '& .MuiChartsAxis-label': {
    //             fill: 'white', // or any color that contrasts with your background
    //         },
    //         '& .MuiChartsLegend-label': {
    //             fill: 'white',
    //         },
    //     },
    // };

    const otherSetting = {
        height: 450,
        yAxis: [{ label: 'Sales ($)' }],
        grid: { horizontal: true },
        sx: {
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translateX(-10px)',
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
            '& .MuiChartsAxis-label': {
                fill: 'white',
            },
            // Add these lines to ensure all axis elements are white
            '& .MuiChartsAxis-root': {
                color: 'white',
            },
            '& .MuiChartsAxis-axisTick': {
                stroke: 'white',
            },
            '& .MuiChartsAxis-axisLine': {
                stroke: 'white',
            }
        }
    };

    async function fetchSales() {
        let sales = await getSales(uid)
        console.log(sales.songs)
        let datase = sales.songs
        let a = 0
        datase.forEach((e) => {
            e.amount = Number(e.amount)
            a = Number(e.amount) + a
        })
        replaceByMonth(dataset2, datase)
        totalsalesf(a)
        datasetf(dataset2)
    }

    useEffect(() => {
        fetchSales();
    }, [uid]);

    return (
        <ThemeProvider theme={theme}>
            <BarChart
                dataset={dataset}
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'month',
                        valueFormatter: (month, context) =>
                            context.location === 'tick'
                                ? `${month.slice(0, 3)} \n2024`
                                : `${month} 2024`,
                                
                    },
                ]}
                series={[{ dataKey: 'amount', label: 'Sales', valueFormatter }]}
                {...otherSetting}
                slots={{
                    axisLine: CustomAxisLine,
                    axisTick: CustomAxisTick,
                    // axisLabel: CustomAxisLabel,
                    // axisContent: CustomAxisContent
                }}
            />
        </ThemeProvider>
    );
}

// import { React, useState, useEffect } from 'react';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { getSales } from '../Backend/Data';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const dataset2 = [
//     {
//         amount: 0,
//         month: 'January',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'February',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'March',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'April',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'May',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'June',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'July',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'August',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'September',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'October',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'November',
//         year: '2024'
//     },
//     {
//         amount: 0,
//         month: 'December',
//         year: '2024'
//     },
// ];

// const valueFormatter = (value) => `${value}$`;

// const theme = createTheme({
//   components: {
//     MuiChartsAxis: {
//       styleOverrides: {
//         root: {
//           color: 'white',
//         },
//       },
//     },
//   },
// });

// const CustomAxisContent = (props) => <g {...props} style={{ fill: 'white', stroke: 'white' }} />;
// const CustomAxisLabel = (props) => <text {...props} style={{ fill: 'white' }} />;
// const CustomAxisLine = (props) => <line {...props} style={{ stroke: 'white' }} />;
// const CustomAxisTick = (props) => <line {...props} style={{ stroke: 'white' }} />;
// const CustomAxisTickLabel = (props) => <text {...props} style={{ fill: 'white' }} />;

// const otherSetting = {
//   height: 450,
//   yAxis: [{ label: 'Sales ($)' }],
//   grid: { horizontal: true },
//   sx: {
//     [`& .${axisClasses.left} .${axisClasses.label}`]: {
//       transform: 'translateX(-10px)',
//     },
//   },
// };

// function replaceByMonth(array1, array2) {
//     array1.forEach((element1, index1) => {
//         const match = array2.find(element2 => element2.month === element1.month.slice(0, 3));
//         if (match) {
//             array1[index1] = match;
//         }
//     });
// }

// export default function SalesBarGraph({ uid, totalsales, totalsalesf }) {
//     let [dataset, datasetf] = useState(dataset2);

//     async function fetchSales() {
//         let sales = await getSales(uid);
//         console.log(sales.songs);
//         let datase = sales.songs;
//         let a = 0;
//         datase.forEach((e) => {
//             e.amount = Number(e.amount);
//             a = Number(e.amount) + a;
//         });
//         replaceByMonth(dataset2, datase);
//         totalsalesf(a);
//         datasetf(dataset2);
//     }

//     useEffect(() => {
//         fetchSales();
//     }, [uid]);

//     return (
//         <ThemeProvider theme={theme}>
//             <BarChart
//                 dataset={dataset}
//                 xAxis={[
//                     {
//                         scaleType: 'band',
//                         dataKey: 'month',
//                         valueFormatter: (month, context) =>
//                             context.location === 'tick'
//                                 ? `${month.slice(0, 3)} \n2024`
//                                 : `${month} 2024`,
//                     },
//                 ]}
//                 series={[{ dataKey: 'amount', label: 'Sales', valueFormatter }]}
//                 {...otherSetting}
//                 slots={{
//                     axisContent: CustomAxisContent,
//                     axisLabel: CustomAxisLabel,
//                     axisLine: CustomAxisLine,
//                     axisTick: CustomAxisTick,
//                     axisTickLabel: CustomAxisTickLabel,
//                 }}
//             />
//         </ThemeProvider>
//     );
// }
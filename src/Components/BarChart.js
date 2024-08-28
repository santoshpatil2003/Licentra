// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );

// const BarChart = () => {
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Bar Chart Example',
//             },
//         },
//     };

//     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: labels.map(() => Math.random() * 1000),
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             },
//             // {
//             //     label: 'Dataset 2',
//             //     data: labels.map(() => Math.random() * 1000),
//             //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//             // },
//         ],
//     };

//     return <Bar options={options} data={data} />;
// };

// export default BarChart;

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { getSales } from '../Backend/Data'; // Assuming this import exists in your project

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const initialDataset = [
    { month: 'January', amount: 0, year: '2024' },
    { month: 'February', amount: 0, year: '2024' },
    { month: 'March', amount: 0, year: '2024' },
    { month: 'April', amount: 0, year: '2024' },
    { month: 'May', amount: 0, year: '2024' },
    { month: 'June', amount: 0, year: '2024' },
    { month: 'July', amount: 0, year: '2024' },
    { month: 'August', amount: 0, year: '2024' },
    { month: 'September', amount: 0, year: '2024' },
    { month: 'October', amount: 0, year: '2024' },
    { month: 'November', amount: 0, year: '2024' },
    { month: 'December', amount: 0, year: '2024' },
];

function replaceByMonth(array1, array2) {
    array1.forEach((element1, index1) => {
        const match = array2.find(element2 => element2.month === element1.month.slice(0, 3));
        if (match) {
            array1[index1] = { ...element1, ...match };
        }
    });
}

export default function BarChart({ uid, totalsalesf }) {
    const [dataset, setDataset] = useState(initialDataset);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Sales Bar Graph',
                color: 'white'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Sales: ${context.parsed.y}$`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white'
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                ticks: {
                    color: 'white',
                    callback: function (value) {
                        return value + '$';
                    }
                },
                title: {
                    display: true,
                    text: 'Sales ($)',
                    color: 'white'
                }
            }
        }
    };

    async function fetchSales() {
        try {
            const sales = await getSales(uid);
            let totalSales = 0;
            const updatedSales = sales.songs.map(sale => {
                const amount = Number(sale.amount);
                totalSales += amount;
                return { ...sale, amount };
            });
            replaceByMonth(initialDataset, updatedSales);
            setDataset(initialDataset);
            totalsalesf(totalSales);
        } catch (error) {
            console.error("Error fetching sales data:", error);
        }
    }
    // async function fetchSales() {
    //     let sales = await getSales(uid)
    //     console.log(sales.songs)
    //     let datase = sales.songs
    //     let a = 0
    //     datase.forEach((e) => {
    //         e.amount = Number(e.amount)
    //         a = Number(e.amount) + a
    //     })
    //     replaceByMonth(initialDataset, datase)
    //     totalsalesf(a)
    //     setDataset(initialDataset)
    // }

    useEffect(() => {
        fetchSales();
    }, [uid]);

    const data = {
        labels: dataset.map(item => `${item.month.slice(0, 3)} \n2024`),
        datasets: [
            {
                label: 'Sales',
                data: dataset.map(item => item.amount),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div style={{ height: '450px', width: '100%' }}>
            <Bar options={options} data={data} />
        </div>
    );
}
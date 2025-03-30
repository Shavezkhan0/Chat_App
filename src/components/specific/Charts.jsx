import React from 'react';
import { Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend, Tooltip, Filler, Scale } from "chart.js";
import { blue, blueLite, orange, orangeLite } from '../../constants/color';
import { getLast7Days } from '../../lib/feature';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend, Tooltip, Filler);



const labels = getLast7Days();


const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            grid: {
                display: false,
            },
            // display:false,
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
            // display:false,
        },
    }
}

const LineChart = ({ value = [] }) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Revenu",
                fill: true,
                backgroundColor: blueLite,
                borderColor: blue,
            },

        ],
    };

    return (
        <Line data={data} options={lineChartOptions} />

    )
}


const doughtchartOption={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },
    cutout: 80,
}

const DoughnutChart = ({value=[], labels=[]}) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Total Chats VS Group Chats",
                backgroundColor: [blueLite, orangeLite],
                hoverBackgroundColor: [blue, orange],
                borderColor: [blue,orange],
                offset:15,
            },

        ],
    };


    return (
       <Doughnut  data={data} options={doughtchartOption} style={{zIndex:2}} />
    )
}

export { LineChart, DoughnutChart }
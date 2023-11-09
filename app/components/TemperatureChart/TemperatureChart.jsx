'use client'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";



const findAverage = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
  }


const Temperature = ({temp}) => {
    const morningTemp=Math.round(findAverage(temp.slice(6,12)))
    const afternoonTemp=Math.round(findAverage(temp.slice(12,16)))
    const eveningTemp=Math.round(findAverage(temp.slice(16,19)))
    const nightTemp=Math.round(findAverage(temp.slice(19,23)))
    // console.log(temp)
    // console.log(morningTemp,afternoonTemp,eveningTemp,nightTemp)

    const chartdata = [
        {
            name: "Morning",
            Temp: morningTemp
        },
        {
            name: "Afternoon",
            Temp: afternoonTemp
        },
        {
            name: "Evening",
            Temp: eveningTemp
        },
        {
            name: "Night",
            Temp: nightTemp
        }
    ];

    return (
        <div className="flex justify-center items-center w-full h-full">
            
            <LineChart
            {...{
                overflow: 'visible'
              }}
               width={350} height={200} data={chartdata} >
                <Tooltip  contentStyle={{backgroundColor: "black"}} itemStyle={{ color: "white" }}/>
                <CartesianGrid horizontal={false} vertical={true} />

                <Line dot={{ strokeWidth: 2, r: 5 }} type="monotone" dataKey="Temp" stroke="white" strokeWidth={3} />
                <XAxis
                
                    tickLine={false}
                    axisLine={false}
                    xAxisId="0"
                    interval={0}
                    dataKey="name"
                    
                    tick={{ fill: 'white' }}
                    
                />
                <XAxis
                    tickLine={false}
                    axisLine={false}
                    xAxisId="1"
                    interval={0}
                    dataKey="Temp"
                    tickFormatter={(label) => `${label}°c`}
                    tick={{ fill: 'white' }}
                />
            </LineChart>
            
        </div>
    );
}

export default Temperature;

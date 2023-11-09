'use client'
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { BsCloudSunFill } from "react-icons/bs"

const TodayForecast = ({ data }) => {

    const [todaysTemp, setTodaysTemp] = useState([])
    const [upCommingTime, setUpcommingTime] = useState([])
    const times = data?.time
    const temp = data?.temperature_2m
    useEffect(() => {
        const clientTime = new Date()
        clientTime.setMinutes(0)
        clientTime.setSeconds(0)
        clientTime.setMilliseconds(0)
        const clientTimestamp = clientTime.getTime();

        // Find the index of the current time in the array
        const currentTimeIndex = times.findIndex(time => {
            const extractedTime = new Date(time);
            extractedTime.setMinutes(0)
            extractedTime.setSeconds(0)
            extractedTime.setMilliseconds(0)
            const extractedTimeStamp = extractedTime.getTime()
            return extractedTimeStamp == clientTimestamp;
        });

        if (currentTimeIndex) {
            const allFourTemp = temp.slice(currentTimeIndex+1, currentTimeIndex + 5)
            const allFourTime = times.slice(currentTimeIndex+1, currentTimeIndex + 5)
            setTodaysTemp(allFourTemp)
            setUpcommingTime(allFourTime)
        }
    }, [times,temp])
    return (
        <div className="ml-4 my-4">
            <h3 className="text-lg font-medium mb-2">Today</h3>
            <div className="flex gap-1 justify-between">
            
                {
                    todaysTemp.length > 0 ?
                        todaysTemp.map((temp, idx) => {
                            if (idx == 0) {
                                return (
                                    <div key={idx} className="flex flex-col items-center bg-[#C4E2FF] w-[20%] rounded-lg py-4 space-y-2">
                                        <p>{moment(upCommingTime[idx]).format('h a')}</p>
                                        <BsCloudSunFill size={28} color="#FED402" />
                                        <h3 className="text-lg">{Math.round(temp)}&deg;C</h3>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={idx} className="flex flex-col items-center w-[20%] rounded-lg py-4 space-y-2">
                                        <p>{moment(upCommingTime[idx]).format('h a')}</p>
                                        <BsCloudSunFill size={28} color="#FED402" />
                                        <h3 className="text-lg">{Math.round(temp)}&deg;C</h3>
                                    </div>
                                )
                            }
                        }
                        )
                        :
                        <>
                            <div className="flex flex-col items-center w-[20%] rounded-lg py-4 space-y-2 animate-pulse border border-gray-300 ">
                                <div className="min-w-[80%] min-h-[20px] bg-gray-300 rounded-xl"/>
                                <div className="min-w-[40%] min-h-[30px] bg-gray-300 rounded-md"/>
                                <div className="min-w-[50%] min-h-[15px] bg-gray-300 rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-[20%] rounded-lg py-4 space-y-2 animate-pulse">
                                <div className="min-w-[80%] min-h-[20px] bg-gray-300 rounded-xl"/>
                                <div className="min-w-[40%] min-h-[30px] bg-gray-300 rounded-md"/>
                                <div className="min-w-[50%] min-h-[15px] bg-gray-300 rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-[20%] rounded-lg py-4 space-y-2 animate-pulse">
                                <div className="min-w-[80%] min-h-[20px] bg-gray-300 rounded-xl"/>
                                <div className="min-w-[40%] min-h-[30px] bg-gray-300 rounded-md"/>
                                <div className="min-w-[50%] min-h-[15px] bg-gray-300 rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-[20%] rounded-lg py-4 space-y-2 animate-pulse">
                                <div className="min-w-[80%] min-h-[20px] bg-gray-300 rounded-xl"/>
                                <div className="min-w-[40%] min-h-[30px] bg-gray-300 rounded-md"/>
                                <div className="min-w-[50%] min-h-[15px] bg-gray-300 rounded-md"/>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default TodayForecast;
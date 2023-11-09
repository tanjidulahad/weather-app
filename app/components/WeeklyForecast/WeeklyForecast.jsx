import moment from "moment";
import {BsFillSunFill} from "react-icons/bs"

const WeeklyForecast = ({day,temp,index}) => {
    return (
        <div className="flex items-center justify-between ml-4">
            <div className="w-[50%]">
                <h3 className="text-lg font-medium">{index==0?"Tomorrow":moment(day).format("dddd")}</h3>
                <p className="text-gray-500">{moment(day).format("D MMM")}</p>
            </div>
            <div className="w-[40%]"> <h3 className="text-xl">{Math.round(temp[index])}&deg;C</h3></div>
            <div className="w-[10%]"><BsFillSunFill size={30} color="#FED402"/></div>
        </div>
    );
};

export default WeeklyForecast;
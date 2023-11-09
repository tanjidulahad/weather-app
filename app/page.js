import { Toaster } from 'react-hot-toast';
import Banner from "./components/Banner/Banner";
import Search from "./components/Search/Search";
import TodayForecast from "./components/TodayForecast/TodayForecast";
import WeatherPropertyCard from "./components/WeatherPropertyCard/WeatherPropertyCard";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";

async function getWeatherData(lat,long){
  const response=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,is_day,precipitation,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m&hourly=temperature_2m,rain,snowfall&daily=temperature_2m_max,rain_sum,snowfall_sum&timezone=auto`,{cache:"no-store"})

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}


export default async function Home({searchParams}) {
  const searchParam=searchParams.country || ""
  const country=searchParams.country || "Bangladesh"
  const latitude=searchParams.lat || 24
  const longitude=searchParams.long || 90
  const data = await getWeatherData(latitude,longitude)
  const dailyUpdateTime=data.daily.time.slice(1)
  const dailyUpdateTemp=data.daily.temperature_2m_max.slice(1)

  return (
    <div className="flex flex-col md:flex-row h-screen md:px-8 px-2 mb-8">
      <Toaster/>
      <div className="md:w-[70%] md:border-r-2 py-2">
        <Search searchTerm={searchParam}></Search>
        <Banner country={country} data={data}/>
        <div className="md:my-8 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 md:mr-4 mt-8">
          <WeatherPropertyCard title={"wind"} data={data?.current}/>
          <WeatherPropertyCard title={"rain chance"} data={data?.current}/>
          <WeatherPropertyCard title={"pressure"} data={data?.current}/>
          <WeatherPropertyCard title={"Temperature"} data={data?.current}/>
        </div>
      </div>
      <div className=" md:w-[30%] md:py-8 pb-8">
        <h3 className="text-center text-lg font-bold md:font-normal">This Week</h3>
        <TodayForecast data={data?.hourly}/>
        <div className="space-y-4 mt-8">
          {
            dailyUpdateTime?.map((day,idx)=>(
              <WeeklyForecast key={idx} day={day} temp={dailyUpdateTemp} index={idx}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

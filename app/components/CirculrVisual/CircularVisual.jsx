'use client'
import { useEffect, useState } from "react";
import "./CircularVisual.css"
import GaugeChart from "react-gauge-chart";


export const SemiCircle = ({ progress }) => {
  const [start, setStart] = useState(0)
  const [stop, setStop] = useState(progress * 3.6)
  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prevCount => {
        if (prevCount === stop) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 5);


    return () => {
      clearInterval(interval);
    };
  }, [stop]);




  return (
    <div className="semi-circle-progress">
      <div className="progress-bar"
        style={{ "background-image": `conic-gradient(#3498db ${start}deg ,#C4E2FF 0deg)` }}
      >
        <span className="relative">{progress}%</span>
      </div>
    </div>
  )
}

export const WindDirection = ({direction}) => {
  // const value=Math.abs(direction-90)
  const [start, setStart] = useState(0)
  const [stop, setStop] = useState(Math.abs(direction-90))

  useEffect(()=>{
    setStart(0)
    setStop(Math.abs(direction-90))
  },[direction])

  useEffect(() => {
    const interval = setInterval(() => {
      setStart(prevCount => {
        if (prevCount === stop) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 2);

    return () => {
      clearInterval(interval);
    };
  }, [stop]);



  return (
    <>
      <div className="airpressurecontainer">
        {
          Array.from({ length: 60 }).map((item, index) => (
            <div key={index} className={`tick`}
              style={{
                '--angle': `${(360 / 60) * index}deg`,
                '--position-number': `${130 + (-13.5 * index)}deg`,
              }}
            >{item}</div>

          ))
        }

        <div className="handcontainer">
          <div className="direction directionN"><span>N</span></div>
          <div className="direction directionE"><span>E</span></div>
          <div className="direction directionS"><span>S</span></div>
          <div className="direction directionW"><span>W</span></div>
          <div className="hand" style={{rotate:`${start}deg`}}>
            <div className="toptriangle"></div>
            <div className="bottomcircle"></div>
          </div>
        </div>
      </div>
    </>
  )
}



export const AirPressureIndicatior = () => {

  return (
    <>
      <div className="airpressurecontainer">
        {
          Array.from({ length: 40 }).map((item, index) => (
            <div key={index} className={`tick`}
              style={{
                '--angle': `${(265 / 40) * index}deg`,
                '--position-number': `${130 + (-13.5 * index)}deg`,
              }}
            >{item}</div>

          ))
        }
        <div className="top-line"></div>

        <div className="air-handcontainer">
          <div className="air-hand" >
            <div className="air-toptriangle" />
          </div>
          <div className="air-bottomcircle" />
        </div>
      </div>
    </>
  );
}

export const UVindicator = ({temp}) => {
  const percent=(temp<50 && temp>=0)?temp/50:temp<0?0:1
  const rounded=percent.toFixed(2)
  return (
    <div className="w-40"> 
      <GaugeChart id="gauge-chart1"
      arcWidth={0.1}
      nrOfLevels={50} 
      arcPadding={0}
      cornerRadius={0}
      needleColor="#2E67A0"
      needleBaseColor="#2E67A0"
      textColor="black"
      hideText={true}
      percent={rounded}
      />
      <p className="text-center">{temp<20?"Low":temp<40?"Medium":"High"}</p>
    </div>
  )
}


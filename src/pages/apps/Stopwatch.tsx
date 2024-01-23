import { useEffect, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const formatTime = (timeinseconds:number)=>{
    const hours = String(Math.floor(timeinseconds/3600))
    const minutes =String( Math.floor((timeinseconds%3600)/60))
    const seconds = String(timeinseconds %60)
    return  `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`
}

const Stopwatch = () => {
    const [time, settime] = useState(0)
    const [isRunning, setisRunning] = useState(false)
    useEffect(() => {
      let IntervalID:number
      if(isRunning) 
      IntervalID  = window.setInterval(()=>{
        settime((prev)=>prev+1)
      },1000)
        
      return () => {
        clearInterval(IntervalID)
      }
    }, [isRunning])
    

    const resetHandler =()=>{
        settime(0)
        setisRunning(false)

    }


  return (
    <div className="adminContainer">
    <AdminSidebar/>
      <main className="dashboard-app-containter">
        <h1>Stopwatch</h1>
        <section className="stopwatch">
         <h2>{formatTime(time)}</h2>
         <button onClick={()=>setisRunning(prev=>!prev)} >{isRunning?"stop":"start"}</button>
         <button onClick={resetHandler}>Reset</button>

        </section>


      </main>
    
    </div>
  )
}

export default Stopwatch
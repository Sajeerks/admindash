import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const Toss = () => {
    const [angle, setangle] = useState(0)
    
    const flipCoin = ()=>{
        console.log("cloced");
        if(Math.random() > 0.5) setangle((prev)=>prev+180)
        else setangle((prev)=>prev+360)
console.log({angle});
    }

  return (
    <div className="adminContainer">
    <AdminSidebar/>
      <main className="dashboard-app-containter">
        <h1>Toss</h1>
        <article className="tosscoin" onClick={flipCoin} 
        
        style={{
            transform: `rotateY(${angle}deg)`,
          }}
        
        
        >

            <div>
 
            </div>
            <div>

         
            </div>

       
        </article>


      </main>
    
    </div>
  )
}

export default Toss
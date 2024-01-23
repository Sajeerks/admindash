// import moment from "moment"
import AdminSidebar from "../../components/AdminSidebar"
import {  DonutChart, PieChart } from "../../components/Charts"
import data from "../../assets/data.json"


const PieCharts = () => {
    // const months = moment.months() //
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main className="chart-container">
        <h1>Pie Chart</h1>
        <section>
            <div>

 
             <PieChart
          labels={["Processing", "Shipping", "Delivered"]}
          data={[12,13, 19]}
          backgroundColor={[
            "hsl(110,50%,50%)",
            "hsl(211,50%,50%)",
            "hsl(10,50%,50%)",
          ]}
          offset={[0,0,50]}
             />
    
    </div>


<h2>Fullfillment Ratio</h2>
        </section>


        <section>
            <div>

 
             <DonutChart
          labels={data.categories.map(i=>i.heading)}
          data={data.categories.map(i=>i.value)}
          backgroundColor={data.categories.map((i)=>`hsl(${i.value*4},50%,50%)`)}
          offset={[0,0,0,80]}
          legend={false}

             />
    
    </div>


<h2>Categories Ratio</h2>
        </section>

        <section>
            <div>

 
             <DonutChart
          labels={["in-stock", "outof STock"]}
          data={[40,20]}
          backgroundColor={["red", "green"]}
          offset={[0,80]}
          legend={false}
        cutout={"70%"}
             />
    
    </div>


<h2>InStock Ratio</h2>
        </section>
        

        
        <section>
            <div>

 
             <DonutChart
          labels={["Manufacturing", "Transport", "Tax"]}
          data={[40,20, 30]}
          backgroundColor={["red", "green", "blue"]}
          offset={[0,80, 30]}
          legend={true}

             />
    
    </div>


<h2>Value Ratio</h2>
        </section>

    </main>
    </div>

  )
}

export default PieCharts


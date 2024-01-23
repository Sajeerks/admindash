import moment from "moment"
import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"


const BarCharts = () => {
    const months = moment.months() //
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main className="chart-container">
        <h1>Bar Chart</h1>
        <section>
             <BarChart
  data_1={[200,514,235,325,254,140]}
  data_2={[145,15,254,434,211,311]}
  title_1="Products"
  title_2="Users"
  bg_Color_1="hsl(260,50%,50%)"
  bg_Color_2="hsl(150,50%,50%)"


/>
<h2>Top selling prouducts and top customers</h2>
        </section>

        <section>
             <BarChart
             horizontal={true}
  data_1={[200,514,235,325,254,140,200,514,235,325,254,140,  ]}
  data_2={[]}
  title_1="Products"
  title_2=""
  bg_Color_1="hsl(150,50%,50%)"
  bg_Color_2=""

label ={months}
/>
<h2>Orders Thoughout the year </h2>
        </section>
        


    </main>
    </div>

  )
}

export default BarCharts
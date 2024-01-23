import moment from "moment"
import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts"


const LineCharts = () => {

    const months = moment.months()
  return (
    <div className="adminContainer">
    <AdminSidebar/>
    <main className="chart-container">
    <section>
             <LineChart
             
  data={[200,514,235,325,254,140,325,250, 12, 14, 18, 1, 5,6]}
 backgroundColor="hsl(300,50%,50%)"
 borderColor="hsl(211,50%,50%)"

     label="Users"
  labels={months}

/>
<h2>Users Growth</h2>
        </section>



        <section>
             <LineChart
             
  data={[2000,514344,23543,325443,25334,14330,333,250, 1332, 33314, 33333, 3331, 333335,333336]}
 backgroundColor="hsl(150,50%,50%)"
 borderColor="hsl(180,50%,50%)"

     label="products sold"
  labels={months}

/>
<h2>sales Growth</h2>
        </section>
</main>



    </div>

  )
}

export default LineCharts
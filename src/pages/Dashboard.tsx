import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar"
import { CiSearch } from "react-icons/ci";
import userimg from "../assets/userpic.png"
import { IoIosTrendingDown,IoIosTrendingUp } from "react-icons/io";
import data from "../assets/data.json"
import { BarChart, DonutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
    <AdminSidebar/>
<main className="dashboard">

     <div className="bar">
      <CiSearch/>
      <input type="text" placeholder="Search for data , users"/>
      <FaRegBell/>
      <img src={userimg} alt="user"/>
     </div>
     <section className="widgetcontainer">
      <WidgetItem percent={14} amount={100} value={140800} heading={"Revenue"}
      
      color={'rgba(1,155,255,.9)'}
      />

<WidgetItem percent={58} amount={100} value={1405500} heading={"Revenue"}
      
      color={'rgba(142,155,255,.9)'}
      />
            <WidgetItem percent={40} amount={80} value={14000} heading={"Revenue"}
      
      color={'rgba(195,155,255,.9)'}
      />
            <WidgetItem percent={70} amount={107} value={14000} heading={"Revenue"}
      
      color={'rgba(255,0,150,0.9)'}
      />
     </section>

     <section className="graph_contianer">
         <div className="revenue_chart">
            <h2>Revenue & Transactions</h2>
            <BarChart   
            data_1= {[100, 200, 200, 54,540,587]}
            data_2= {[200, 343, 24, 534,343, 187]}
            title_1="Revenue"
            title_2="transaction"
            bg_Color_1="hsl(25,50%,50%)"
            bg_Color_2="hsl(224,50%,50%)"



            
            
            
            />
            
         </div>
         <div className="dashboard_categories">
          <h2>Inventories</h2>
          <div>

            {data.categories.map((item)=>(
    <CategoryItem 
           key={item.heading}
    heading={item.heading} 
    value={item.value}
    color={`hsl(${item.value*4},50%,50%)`}
    
    
    />
            ))}
      

          </div>

         </div>

     </section>
     <section className="transaction_container">
         <div className="gender_chart">
            <h2>Gender Ratio</h2>
            <DonutChart 
              labels={["Female","Male"]}
              data={[12,19]}
              backgroundColor={["hsl(201, 50%, 50%)", "hsl(300, 50%, 50%)"]}
            cutout={90}
            
            />
              <p><BiMaleFemale/></p>
         </div>
   
         <DashboardTable  data={data.transaction}/>
         
      

     </section>

</main>


    </div>
  )
}

interface CategoryItemPROPS{
  heading:string;
  color:string;
  value:number
}
const CategoryItem =({color, heading, value}:CategoryItemPROPS)=>{

  return (
    <div className="category_item">
    <h2>{heading}</h2>
    <div>
    <div style={{backgroundColor:color, width:`${value}%`}}> </div>
    </div>
 
      <span>{value}%</span>
    </div>

  )
}

interface WidgetItemProps{
   heading:string;
   value:number;
   percent:number;
   color:string;
   amount?:number;
}

const WidgetItem =({heading,
  value,
  percent,
  color,
  amount,}:WidgetItemProps)=> <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount?`$${value}`:value}</h4>
      {percent>0?<span className="green"><IoIosTrendingUp/> +{percent}{" "}</span> : <span className="red"><IoIosTrendingDown/>-{percent} {" "}</span>}
 
    </div>
    <div className="widgetCircle" style={{background:`conic-gradient(${color} ${Math.abs(percent)/100*360}deg ,white 0deg)`}}>
      <span style={{color:color}} > {percent}%</span>

    </div>

</article>

export default Dashboard
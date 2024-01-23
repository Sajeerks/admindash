import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { RiCustomerService2Fill, RiDashboardFill } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";
import { RiCoupon3Line } from "react-icons/ri";

import { CiCoinInsert } from "react-icons/ci";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const links = [
  {
    url: "/admin/dashboard",
    Icon: RiDashboardFill,
    text: "Dashboard",
    location: location,
  },
  {
    url: "/admin/customers",
    Icon: RiCustomerService2Fill,
    text: "customers",
    location: location,
  },
  {
    url: "/admin/products",
    Icon: MdProductionQuantityLimits,
    text: "products",
    location: location,
  },
  {
    url: "/admin/transactions",
    Icon: GrTransaction,
    text: "transactions",
    location: location,
  },
];



const links2 = [
  {
    url: "/admin/chart/bar",
    Icon: AiOutlineBarChart,
    text: "Bar",
    location: location,
  },
  {
    url: "/admin/chart/pie",
    Icon: FaChartPie,
    text: "Pie",
    location: location,
  },
  {
    url: "/admin/chat/area",
    Icon: FaChartArea,
    text: "Area",
    location: location,
  },

];

const links3 = [
  {
    url: "/admin/app/watch",
    Icon: FaStopwatch,
    text: "StopWatch",
    location: location,
  },
  {
    url: "/admin/app/toss",
    Icon: CiCoinInsert,
    text: "Toss",
    location: location,
  },
  {
    url: "/admin/app/coupon",
    Icon: RiCoupon3Line,
    text: "Coupon",
    location: location,
  },

];


const DivOne =({location}:{location:Location})=>{
  
  return  ( <div>
    <h5>Dashboard.</h5>
  
    <ul>
      {links.map((single) => {
        return (
          <LI
            key={single.url}
            url={single.url}
            text={single.text}
            // location={single.location}
            location={location}
  
            
            Icon={single.Icon}
          />
        );
      })}
    </ul>
  </div>)
  }


const DivTwo =({location}:{location:Location})=>{
  
return  ( <div>
  <h5>Charts.</h5>

  <ul>
    {links2.map((single) => {
      return (
        <LI
          key={single.url}
          url={single.url}
          text={single.text}
          // location={single.location}
          location={location}

          
          Icon={single.Icon}
        />
      );
    })}
  </ul>
</div>)
}

const DivThree =({location,phoneactive, setshowmodal}:{location:Location,phoneactive:boolean, setshowmodal:React.Dispatch<React.SetStateAction<boolean>> },)=>{
  
  return  ( <div>
    <h5>stats.</h5>
  
    <ul>
      {links3.map((single) => {
        return (
          <LI
            key={single.url}
            url={single.url}
            text={single.text}
            // location={single.location}
            location={location}
  
            
            Icon={single.Icon}
          />
        );
      })}
    </ul>
    {phoneactive && <button id="close-sidebar" onClick={()=>{setshowmodal(false)}}>Close</button>}
  </div>)
  }
  
const AdminSidebar = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const [showmodal, setshowmodal] = useState(false)
const [phoneactive, setphoneactive] = useState(window.innerWidth< 1100)


 const resizeHandler =()=>{
  setphoneactive(window.innerWidth < 1100)
  console.log({phoneactive});

 }

useEffect(() => {
  window.addEventListener("resize", resizeHandler)


  return () => {
    window.removeEventListener("resize", resizeHandler)
  }
}, [resizeHandler])


  return (

    <>
    {
phoneactive && 

<button id="hamburger" onClick={()=>setshowmodal(true)}><GiHamburgerMenu/> </button>


    }
      <aside
       style={
          phoneactive?{
             width:"20rem",
             height:"100vh",
             top:0,
             left: showmodal?"0":"-20rem",
             transition:"all 0.5s",
             position:"fixed",
          }:{

          }
            
       }
      >
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location} phoneactive={phoneactive} setshowmodal={setshowmodal}/>


      
    </aside>
    
    
    </>
  
  );
};



interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const LI = ({ url, text, Icon, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,114,255,0.5)"
        : "white",
    }}
  >
    <Link to={url}>
      {" "}
      <Icon /> {text}
    </Link>
  </li>
);

export default AdminSidebar;

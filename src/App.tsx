import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom"

import { lazy, Suspense } from "react"
import Loader from "./components/Loader"


const Dashboard = lazy(()=>import("./pages/Dashboard"))
const Products = lazy(()=>import("./pages/Products"))
const Customers = lazy(()=>import("./pages/Customers"))
const Transactions = lazy(()=>import("./pages/Transactions"))
const NewProuct = lazy(()=>import("./pages/management/NewProuct"))
const ProductManagement = lazy(()=>import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(()=>import("./pages/management/TransactionManagement"))


const BarCharts = lazy(()=>import("./pages/charts/BarCharts"))
const LineCharts = lazy(()=>import("./pages/charts/LineCharts"))
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"))



const Coupon = lazy(()=>import("./pages/apps/Coupon"))
const Toss = lazy(()=>import("./pages/apps/Toss"))
const Stopwatch = lazy(()=>import( "./pages/apps/Stopwatch"))




const App = () => {
  return (
     <Router>
      <Suspense fallback={<Loader/>} >  
       <Routes>
       <Route  path="/"  element={<Link to="/admin/dashboard">GOto dahboard</Link>} />
             <Route  path="/admin/dashboard"  element={<Dashboard/>} />
             <Route  path="/admin/Products"  element={<Products/>} />
             <Route  path="/admin/Transactions"  element={<Transactions/>} />
             <Route  path="/admin/Customers"  element={<Customers/>} />


             <Route  path="/admin/chart/bar"  element={<BarCharts/>} />
             <Route  path="/admin/chat/area"  element={<LineCharts/>} />
             <Route  path="/admin/chart/pie"  element={<PieCharts/>} />


             <Route  path="/admin/product/new"  element={<NewProuct/>} />
             <Route  path="/admin/product/:id"  element={<ProductManagement/>} />
             <Route  path="/admin/transaction/:id"  element={<TransactionManagement/>} />

        

             <Route  path="/admin/app/toss"  element={<Toss/>} />
             <Route  path="/admin/app/watch"  element={<Stopwatch/>} />
             <Route  path="/admin/app/coupon"  element={<Coupon/>} />

        
       </Routes>
       </Suspense>
     </Router>
  )
}

export default App
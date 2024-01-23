import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img = "https://randomuser.me/api/portraits/women/54.jpg";


const TransactionManagement = () => {
    const orderItemssamole: OrderItemType[] = [
        {
          name: "Puma shoes",
          photo: img,
          _id: "sdafSDfsaf",
          price: 444,
          quantity: 100,
        },
      ];
      
  const [order, setOrder] = useState<OrderType>({
    name: "abi munna",
    address: "77 balck street",
    city: "new yore",
    state: "nevaa",
    country: "indai",
    pinCode: 14444,
    status: "Processing",
    subtotal: 4000,
    shippingCharges: 0,
    discount: 211,
    tax: 500,
    total: 44444,
    orderItems: orderItemssamole,
    _id: "dsaaaaaaaaaa",
  });

  const {
  name,
    address,
    city,
    state,
    country,
    pinCode,
    status,
    subtotal,
    shippingCharges,
    discount,
    tax,
    total,
    orderItems,
    _id,
  } = order;

  const updateHandler =()=>{
    setOrder((prev)=>(
      {
        ...prev,status:prev.status === "Processing"?"Shipped":"Delivered"
      }
    ))
  }
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
         <section>
          <h2>Order Items</h2>
            {order.orderItems.map((i)=>(
              <ProductCard 
              key={i._id}
               name={i.name}
               photo={i.photo}
               _id={i._id}
               quantity={i.quantity}
               price={i.price}

              
              
              />
            ))}

         </section>
         <article className="shipping-info-card">
              <h1>Order Info</h1>
               <h5>User Info</h5>
               <p>Name : {name}</p>
               <p>Address:{`${address}, ${city} , ${state}, ${country}, ${pinCode}`}</p>
               <h5>Amount Info</h5>
                <p>subtotal:{subtotal}</p>
                <p>shippingCharges:{shippingCharges}</p>
                <p>discount:{discount}</p>
                <p>tax:{tax}</p>
                <p>total:{total}</p>


                <h5>Status Info</h5>
              <span className={
                status === "Delivered" ?
              "purple":
              status ==="Shipped"
              ?"green"
              :"red"
            
            
            }>{status}</span>
               
            
<button onClick={updateHandler}>Process Handler</button>
         </article>
      </main>
    </div>
  );
};


const ProductCard= ({name,photo, price, quantity, _id}:OrderItemType)=>(
    <div className="transaction-product-card"> 
    <img src={photo} alt={name}/>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X {quantity}= {quantity *  price}</span>

    </div>
)



export default TransactionManagement;

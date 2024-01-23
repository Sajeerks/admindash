import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"


const ProductManagement = () => {
  const img = "https://randomuser.me/api/portraits/women/54.jpg";

    const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [photo, setPhoto] = useState<string>(img);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };
  return (
    <div className="adminContainer">
    <AdminSidebar/>
<main className="product-management">
  <section>
     <strong>ID---Sample ID</strong>
     <img src= {photo} alt="product imge"/>
     <p>{name}</p>
   {
    stock!>0?(
      <span className="green">Avaliable</span>
    ):(<span className="red">Not Avaliable</span>)
   }
   <h3>price: {price}</h3>
  </section>

<article>
          <form>
            <h2>MANAGE</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>

            <div>
              <label>Photo</label>
              <input required type="file" accept="image/*" onChange={changeImageHandler} />
            </div>

            {photo && <img src={photo} alt="New Image" />}

            <button type="submit">Update</button>
          </form>
        </article>





</main>


    </div>
  )
}



export default ProductManagement
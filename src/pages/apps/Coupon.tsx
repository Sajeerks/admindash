import { FormEvent, useEffect, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
    const [size, setsize] = useState(8)
    const [prefix, setprefix] = useState("")
    const [includenumbers, setincludenumbers] = useState(false)
    const [includecharacters, setincludecharacters] = useState(false)
    const [includesymbols, setincludesymbols] = useState(false)
    const [iscopied, setiscopied] = useState(false)
    const [coupon, setcoupon] = useState("")


    const copyText =async(coupon:string)=>{
        await window.navigator.clipboard.writeText(coupon);
        setiscopied(true);
    }

    const submitHandler =(e:FormEvent)=>{
        e.preventDefault()
        if(!includenumbers && !includecharacters && !includesymbols){
       return alert("Please select one at least")
        }
        
        let result:string  = prefix || ""
        const loopLength:number = size -result.length

        for (let i = 0; i < loopLength; i++) {
         let entireString:string = ""
         if (includecharacters) entireString += allLetters;
         if (includenumbers) entireString += allNumbers;
         if (includesymbols) entireString += allSymbols;
   
         const randomNum: number = ~~(Math.random() * entireString.length);
         result += entireString[randomNum];
         setcoupon(result);
       }
   
     
        
    }
    useEffect(() => {
        setiscopied(false);
      }, [coupon]);
    
  return (
    <div className="adminContainer">
    <AdminSidebar/>
      <main className="dashboard-app-containter">
        <h1>Coupoun</h1>
        <section>
            <form   className="coupon-form" onSubmit={submitHandler}>
                <input type="text" 
                placeholder="Text to include"  
                value={prefix}
                onChange={(e)=>setprefix(e.target.value)}
                maxLength={size}
                />
              <input type="number" 
                placeholder="Coupon length"  
                value={size}
                onChange={(e)=>setsize(Number(e.target.value))}
                min={8}
                max={25}
                />

<fieldset>
    <legend>Include</legend>
    <input type="checkbox"  
     checked={includenumbers}
     onChange={()=>setincludenumbers(prev=>!prev)}
    />
    <span>Numbers</span>
    <input type="checkbox"  
     checked={includesymbols}
     onChange={()=>setincludesymbols(prev=>!prev)}
    />
    <span>Symbols</span>

    <input type="checkbox"  
     checked={includecharacters}
     onChange={()=>setincludecharacters(prev=>!prev)}
    />
    <span>Characters</span>

</fieldset>

<button type="submit">Generate</button>


            </form>
            {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {iscopied ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
               
        </section>


      </main>
    
    </div>
  )
}

export default Coupon
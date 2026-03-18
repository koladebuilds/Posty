import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from "./Blogger.jsx"
import Bank from './Bank.jsx'
import Inventory from './Inventory.jsx'
import Practice from './Practice.jsx'
import { AppNameProvider } from './context/AppNameContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from "./Meal"


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AppNameProvider>
      <ProductProvider>
        {/* <Meal/> */}
          {/* <Inventory/> */}
      </ProductProvider>

     {/* <Practice/> */}
    
    {/* <App /> */}
    <Blogger/>
    {/* <Bank/> */}
    </AppNameProvider>
  </StrictMode>,
  // <div>
  //     <h1 className='text-success'>Hello World</h1>
  //     <p>i am about to rule yall</p>
  // </div>
)

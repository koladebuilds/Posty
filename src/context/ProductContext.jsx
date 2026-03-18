import{createContext, useState} from "react";
//stage 1: create the context
export const ProductContext = createContext()

//stage 2: create the provider: a super component: all componenet must return something
export const ProductProvider = ({children}) => {

     const defaultProducts = [
        {
            id: 197656,
            name: "product1",
            price:1200
        },
        {
            id: 122656,
            name: "product2",
            price:2400
        }

    ]
    const [products, setProducts] = useState(defaultProducts);
    function delete_product(idToDelete){
        // alert("product with  id :"+id+"deleted")
        //delete a product with id of id parameter: filter our state: products and exculd a product with id of id parameter
        const filteredProducts = products.filter((prod)=>{
          return  prod.id !== idToDelete;
        });
        setProducts(filteredProducts);
    }

        return <ProductContext.Provider value={{products, setProducts, delete_product}}>{children}</ProductContext.Provider>
}
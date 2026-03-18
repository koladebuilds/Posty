import {useState, useContext} from "react"
import { ProductContext } from "../context/ProductContext";

const Create = () => {
    // these data: products and setProducts are coming from our ProductContext
        const{products, setProducts}  = useContext(ProductContext);
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [id, setId] = useState("");

        const[form, setForm] = useState({
            id: "",
            name: "",
            price: "",
        });

        function updateFormState(e){
            setForm({...form, [e.target.name] : e.target.value})
        }

        // const [form, setForm] = useState(); // a state to manage all form elements and id
        // a function that respon when the form is submitted
        function handle_submit(e){
                e.preventDefault();
                if(form.name == "" || form.price == ""){
                    alert("Please fill all the fields")
                }else{
                    // generate a random id
                    let id = Date.now();
                    setForm({...form, id: id});
                    
                    //console.log(data)
                    /// send what we collected from the form to an api that will insert it into daabase.the api sends a response and 
                    setProducts([...products, form]);
                }

        }

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 pb-2">
                <form onSubmit={handle_submit}>
                    <input type="text" className="form-control mb-2" name="name" placeholder="product name" value={form.name} onChange={updateFormState} />
                    <input type="number" className="form-control mb-2" name="price" placeholder="product price" value={form.price} onChange={updateFormState} />
                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create
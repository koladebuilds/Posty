import {useState} from "react"
const Create = ({products, setProducts}) => {
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        const [id, setId] = useState("");

         // a state to manage all form elements and id
        // a function that respon when the form is submitted
        function handle_submit(e){
                e.preventDefault();
                if(name == "" || price == ""){
                    alert("Please fill all the fields")
                }else{
                    // generate a random id
                    let id = Date.now();
                    setId(id)
                    // combne evertyhing to form an object
                    const data = {
                        id: id,
                        name:name, 
                        price: price  
                    }
                    //console.log(data)
                    setProducts([...products, data]);
                }

        }

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2 pb-2">
                <form onSubmit={handle_submit}>
                    <input type="text" className="form-control mb-2" placeholder="product name" value={name} onChange={(e) => {setName(e.target.value)}} />
                    <input type="number" className="form-control mb-2" placeholder="product price" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                    <button className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create
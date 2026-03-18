

    const Footer = (props) => {
        //props.wb = 500;// props cannot be changed or mutated by a child componenent
        return (
        <div>
             <div className="col-md-12">
                <h1>Footer</h1>
                  <h2>Wallet Balance:{props.wb}</h2>
            </div>
        </div>
           
        )
    }

    export default Footer

    const Dashboard = () => {
            let appmode = "dark";
            //conditional rendering using if else statement
        if(appmode == "dark"){
                return (
                        <div className="row bg-dark text-primary">
                            <h1>Dashboard</h1>
                            <p>You are welcome</p>
                        </div>
                    )
        }else{
                return (
                        <div className="row bg-white">
                            <h1>Dashboard</h1>
                            <p>You are welcome</p>
                        </div>
                    )
        }
    }

    export default Dashboard
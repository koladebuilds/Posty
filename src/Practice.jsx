
import Practice1 from './practice_components/Practice1'
import Practice2 from './practice_components/Practice2'
import { useState } from 'react';

const Practice = () => {

       let totalvisit = 30;
        function calculateScore(){
        console.log('result is ready');
        }

        adjustedPrice=[
            {"product":"Diesel","price":1320},
            {"product":"PMS","price":680},
            {"product":"Kerosene","price":670}
            ]

    return(
        <div className="container">
            <div className="row">
                <Practice1 total ={totalvisit} fxn = {calculateScore} sponsor="Ibrahim Babangida" />
                <Practice2 adjustedPrice={adjustedPrice}/>
            </div>
        </div>
    )
}


export default Practice
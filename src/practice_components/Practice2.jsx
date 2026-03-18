

const Practice2 = ({adjustedPrice}) => {
        let prices = adjustedPrice.map(function(value, index){
            return  <p key={index}>{value.product}</p>
        });
    return (
        {prices}
    )
}

export default Practice2
const Temperatura = () => {

    let c = 18
    let f = 0
    let k = 0

    const celsiusFahrenheit = (celsius) => (9*celsius/5 + 32)
    
    const fahrenheitCelsius = (fahrenheit) => (fahrenheit-32)*5/9
    
    function kelvin(kelvin){
        let celsius = kelvin - 273
        let fahrenheit = (kelvin - 273)*9/5 + 32
        //return {celsius: c, fahrenheit: f}
        return {celsius, fahrenheit}
    }

    //let {celsius, fahrenheit} = kelvin(k)

    return (
        <div>
            <h2>{c} celsius para fahrenheit: {celsiusFahrenheit(c)}</h2>
            <h2>{f} fahrenheit para celsius: {fahrenheitCelsius(f).toFixed(2)}</h2>
            <h2>{k} kelvin para celsius e fahrenheit: { JSON.stringify(kelvin(k))}</h2>
        </div>
    )
}

export default Temperatura
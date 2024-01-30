const myPromise = new Promise(
    (resolve,reject) => {
        setTimeout(
            () => {
                const rand = Math.floor(Math.random()*10)+1
                return (rand % 2 === 0)? resolve("ok") : reject("nok") 
            },
            2000
        )
    }
)

export default myPromise
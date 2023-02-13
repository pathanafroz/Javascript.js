
const Findmax=(...arg)=>{
    return(
        arg.reduce((a,c)=>a>c ? a:c)
        
        )
    }
    Findmax(10,20,200,30,777)
console.log(Findmax)
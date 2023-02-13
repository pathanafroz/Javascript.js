let note=[2000,500,200,100,50,20,10]
let notesArray=new Array(10).fill(0)

function CountCurrency(amount){
    note.forEach((item,index)=>{
        if(amount>=item){
            notesArray[index]=Math.floor(amount/item)
            amount=amount%item
        }
    })
    notesArray.forEach((item,index)=>{
        if (item !=0){
            console.log(note[index]+":"+item);
        }
    })
}
CountCurrency(4580)


/**
 * param Array<number>
 * return number
 */
const repeatNumer = (data)=>{
    let temp=0;
    if(data== null || data.length ==0 ){
        return false;
    }
    for(let item of data){
        if(item <0 || item>data.length -1){
            return false;
        }
    }
    for(let i =0;i<data.length;i++){
        while(data[i]!=i){
            if(data[i] == data[data[i]]){
                temp = data[i];
                return true;
            }
            let tempData = data[i];
            data[i] = data[tempData];
            data[tempData]= tempData;

        }
    }
}
console.log("repeatNumer([2,3,1,0,2,5,3]):", repeatNumer([2,3,1,0,2,5,3]));
console.log("repeatNumer([2,3,1,0,4,5,13]):", repeatNumer([2,3,1,0,4,5,13]));
repeatNumer([2,3,1,0,4,5,13])
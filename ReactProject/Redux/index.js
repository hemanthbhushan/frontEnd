
const BUY_LAPTOP = "BUY_LAPTOP"
const initialState = {
     noOfLaptops:100
} 
const buyLaptops = ()=>{
    return {
        type: BUY_LAPTOP
    }
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "BUY_LAPTOP":
             return {numOfLaptops: state.noOfLaptops-1}
        default:
             return state;     
    }
}


const store = createStore();

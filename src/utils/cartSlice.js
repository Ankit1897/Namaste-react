import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        additem: (state,action)=>{
            state.item.push(action.payload);
        },

        removeitem : (state,action)=>{
            const x = state.item.filter((items)=>items[0]?.card.info.id!=(action.payload[0]?.card.info.id));
            
            return {item:x};
        },
        clearcart : (state,action)=>{
            return {item:[]};
        },
        updateitem :(state,action)=>{
            const data=action.payload[0];
            const data1=action.payload[1];
            
            for(var i=0;i<state.item.length;i++)
            {
                if(state.item[i][0].card.info.id==data.card.info.id)
                {
                    state.item[i][1]=data1;
                    
                }
              
            }
          
           
        },

    },
})

export const {additem,removeitem,clearcart,updateitem}=cartSlice.actions;

export default cartSlice.reducer;


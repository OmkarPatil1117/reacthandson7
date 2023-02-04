import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
name : 'dataSlice',
initialState : [
    {name:'Jadeja',age:'38',course:'Cricketer',batch:'EA2005'},
    {name:'Omkar',age:'20',course:'CS',batch:'EA17'},
    {name:'Virat',age:'38',course:'Cricketer',batch:'EA2005'},
],
reducers : {
    editData:(state, action)=>{
        console.log(state)
       console.log(action.payload)
        state[action.payload.index] = action.payload.newObj;
        return(state)
    },
    addData:(state, action)=>{
      
      console.log(state)
      console.log(action.payload)
      state.push(action.payload)
      console.log(state)
      return (state)

    }
}
})
export const { editData, addData } = dataSlice.actions
export default dataSlice.reducer;
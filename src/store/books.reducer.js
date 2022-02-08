const initialState = {
  books:[]
}
const booksReducer = (state,action)=>{
  if(action.type==='UPDATE_BOOKS'){
    return {...state,books:[...action.payload]}
  }
  return state;
}
export default booksReducer;
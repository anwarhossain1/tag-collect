const initialState={
    countries:[
        "America",
        "Bangladesh",
        "Canada",
        "Denmark",
        "Ethiopia",
        "Finland",
        "Greece",
        "Haiti",
        "Italy",
        "Japan",
        "Kenya"
    ],
    updatedCountries:[]

}


const reducer=(state=initialState,action)=>{
    if(action.type==='SOME'){
        return {
            ...state,
            updatedCountries:state.updatedCountries.concat(state.countries)
        }

    }
    return state;
}

export default reducer;
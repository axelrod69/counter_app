const Refresh_Recycle = (state = 0, action) => {
    switch(action.type) {
        case "Refresh":
            return 0;
        case "Recycle":
            return 0;
        default:
            return state;    
    }
}

export default Refresh_Recycle;
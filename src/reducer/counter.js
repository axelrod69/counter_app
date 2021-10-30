const Counter = (state = 0, action) => {
    switch (action.type) {
        case "IncrementCounter":
            return state + 1;
        case "DecrementCounter":
            return state - 1;
        case "DeleteCounter":
            return 0;
        default:
            return state;
    }
}

export default Counter;
const defaultSate = {
    input: "你好",
    list: [1, 2, 3]
}
export default (state = defaultSate, action) => {

    if (action.type === "chagne_input") {
        const newState = JSON.parse(JSON.stringify(state))
        newState.input=action.data
        return newState
    }
    return state
}
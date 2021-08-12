//all states here
export const initialState = {
    usernameInput: "",
    passwordInput: "",
    // songData: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_USERNAME_INPUT":
            return {...state, usernameInput: action.payload}
        break
        case "CHANGE_PASSWORD_INPUT":
            return {...state, passwordInput: action.payload}
        break
        // case "SET_SONG_DATA":
        //     return {...state, songData: action.payload}
        // break
    }
    return state
}
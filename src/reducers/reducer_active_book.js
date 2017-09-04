// State argument is not application state, only the state
// this reducer is responsible for
export default (state = null, action) => { //if the argument comes in as undefined set the state to null
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    
    return state //case where we dont care about the action
}
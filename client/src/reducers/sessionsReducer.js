const initialState = {
    currentUser: {
        id: 1, 
        username: 'john'
    },
    loggedIn: true
}

const sessionsReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }

}

export default sessionsReducer;

// export default (state = initialState, { type, payload }) => {
//   switch (type) {

//   case first:
//     return { ...state, ...payload }

//   default:
//     return state
//   }
// }

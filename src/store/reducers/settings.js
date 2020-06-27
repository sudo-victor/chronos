const INITIAL_STATE = {
    awaitingTime: 5,
};
let newState;

export default function settings(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "AWAITING_TIME":
            newState = state;
            newState.awaitingTime = action.payload.awaitingTime;
            return newState;

        default:
            return state;
    }
}

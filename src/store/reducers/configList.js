let newState;

export default function configList(state = [], action) {
    switch (action.type) {
        case "ADD_CONFIG":
            return [
                ...state,
                {
                    id: Math.random(),
                    name: action.payload.name,
                    sets: action.payload.sets,
                    workingTime: action.payload.workingTime,
                    restingTime: action.payload.restingTime,
                },
            ];

        case "DESTROY_CONFIG":
            newState = [...state];
            const filteredState = newState.filter(
                (item) => item.id !== action.payload.id
            );

            return filteredState;

        case "UPDATE_CONFIG":
            newState = state.map((item) => {
                if (item.id === action.payload.id) {
                    const newItem = {
                        id: item.id,
                        name: item.name,
                        sets: action.payload.sets,
                        workingTime: action.payload.workingTime,
                        restingTime: action.payload.restingTime,
                    };

                    return newItem;
                }

                return item;
            });
            return newState;

        default:
            return state;
    }
}

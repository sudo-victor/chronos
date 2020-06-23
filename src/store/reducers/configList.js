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
                    workTime: action.payload.workTime,
                    restTime: action.payload.restTime,
                },
            ];

        case "DESTROY_CONFIG":
            newState = [...state];
            const filteredState = newState.filter(
                (item) => item.id !== action.payload.id
            );

            return filteredState;

        default:
            return state;
    }
}

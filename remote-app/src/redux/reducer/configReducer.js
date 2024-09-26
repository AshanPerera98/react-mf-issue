import ACION_TYPES from "../../constants/ACTION_TYPES";

const configReducer = (state = {}, action = undefined) => {
  switch (action.type) {
    case ACION_TYPES.CONFIG_ACTIONS.SET_CONFIG_SATE:
      return Object.assign({}, state, action.data);

    default:
      return state;
  }
};

export default configReducer;

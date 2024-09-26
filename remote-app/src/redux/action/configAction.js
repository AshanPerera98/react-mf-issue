import ACION_TYPES from "../../constants/ACTION_TYPES";

let configActions = {
  setAppConfigs: (APP_CONFIG) => {
    return {
      type: ACION_TYPES.CONFIG_ACTIONS.SET_CONFIG_SATE,
      data: { APP_CONFIG },
    };
  },
};

export default configActions;

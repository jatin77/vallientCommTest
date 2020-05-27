import { alertActionType } from "./alert.actionType";

export const showAlert = (alert) => {
  return {
    type: alertActionType.SHOW_ALERT,
    payload: alert,
  };
};

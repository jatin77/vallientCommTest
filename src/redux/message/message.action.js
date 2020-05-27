import { MessageActionTypes } from "./message.actionType";
import { messages } from "./message";

export const saveAllMessages = (allMessages) => ({
  type: MessageActionTypes.GET_ALL_MESSAGE,
  payload: allMessages,
});

export const setEditMessage = (message) => ({
  type: MessageActionTypes.SET_EDIT_MESSAGE,
  payload: message,
});

export const deleteMessage = (messageID) => ({
  type: MessageActionTypes.DELETE_MESSAGE,
  payload: messageID,
});

export const addMessage = (message) => ({
  type: MessageActionTypes.ADD_MESSAGE,
  payload: message,
});

export const updateMessage = (message) => ({
  type: MessageActionTypes.UPDATE_MESSAGE,
  payload: message,
});

export const fetchAllMessages = () => {
  return (dispatch) => dispatch(saveAllMessages(messages));
};

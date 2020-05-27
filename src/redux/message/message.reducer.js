import { MessageActionTypes } from "./message.actionType";
import { updateMessageToMessageList } from "./message.utils";

const INITIAL_STATE = {
  messageList: null,
  editMessage: null,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageActionTypes.GET_ALL_MESSAGE:
      return {
        ...state,
        messageList: action.payload,
      };
    case MessageActionTypes.DELETE_MESSAGE:
      return {
        ...state,
        messageList: state.messageList.filter(
          (message) => message.id !== action.payload
        ),
      };
    case MessageActionTypes.SET_EDIT_MESSAGE:
      return {
        ...state,
        editMessage: action.payload,
      };
    case MessageActionTypes.ADD_MESSAGE:
      return {
        ...state,
        messageList: [action.payload, ...state.messageList],
      };
    case MessageActionTypes.UPDATE_MESSAGE:
      return {
        ...state,
        messageList: updateMessageToMessageList(
          state.messageList,
          action.payload
        ),
        editMessage: null,
      };
    default:
      return state;
  }
};

export default messageReducer;

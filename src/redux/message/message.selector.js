import { createSelector } from "reselect";

const selectAllMessages = (state) => state.message;

export const selectAllMessageList = createSelector(
  [selectAllMessages],
  (messages) => messages
);

export const updateMessageToMessageList = (messageList, messageToUpdate) => {
  return messageList.map((message) =>
    message.id === messageToUpdate.id
      ? {
          ...message,
          desc: messageToUpdate.desc,
          date: messageToUpdate.date,
        }
      : message
  );
};

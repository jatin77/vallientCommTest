import React, { Component } from "react";
import MessageItem from "./messageItem/MessageItem";
import { fetchAllMessages } from "../../redux/message/message.action";
import { selectAllMessageList } from "../../redux/message/message.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export class MessageList extends Component {
  componentDidMount() {
    this.props.fetchAllMessages();
  }
  render() {
    const { messageList } = this.props.message;
    return (
      <div className="mx-4">
        {messageList &&
          messageList.map((message) => (
            <div key={message.id} className="my-10">
              <MessageItem message={message} />
            </div>
          ))}
      </div>
    );
  }
}

// Fetch Global/Redux States
const mapStateToProps = createStructuredSelector({
  message: selectAllMessageList,
});

// Call Global/Redux Actions
const mapDispatchToProps = (dispatch) => ({
  fetchAllMessages: () => dispatch(fetchAllMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

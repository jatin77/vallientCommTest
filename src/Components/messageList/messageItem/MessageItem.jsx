import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import { showAlert } from "../../../redux/alert/alert.action";
import {
  deleteMessage,
  setEditMessage,
} from "../../../redux/message/message.action";
import { connect } from "react-redux";

export class MessageItem extends Component {
  handleDelete = (id) => {
    const { deleteMessage, showAlert } = this.props;
    deleteMessage(id);
    showAlert({ msg: "Message Deleted Successfully", alertType: "success" });
  };

  handleEdit = () => {
    const { setEditMessage, message } = this.props;
    setEditMessage(message);
  };
  render() {
    const { desc, id, date } = this.props.message;
    return (
      <div className=" w-full max-w-full lg:flex">
        <div className="w-full border-r border-b border-l border-gray-400  border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{date}</div>
            <p className="text-gray-700 text-base">{desc}</p>
          </div>
          <div className="flex items-center">
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete message"
                onClick={() => this.handleDelete(id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit message"
                onClick={() => this.handleEdit()}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }
}
// Call Global/Redux Actions
const mapDispatchToProps = (dispatch) => ({
  deleteMessage: (messageID) => dispatch(deleteMessage(messageID)),
  showAlert: (alert) => dispatch(showAlert(alert)),
  setEditMessage: (message) => dispatch(setEditMessage(message)),
});

export default connect(null, mapDispatchToProps)(MessageItem);

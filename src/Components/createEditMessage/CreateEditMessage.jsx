import React, { Component } from "react";
import FormInput from "../Shared/inputField/InputField";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { addMessage, updateMessage } from "../../redux/message/message.action";
import { showAlert } from "../../redux/alert/alert.action";
import Grid from "@material-ui/core/Grid";
import { v4 as uuidv4 } from "uuid";
import { createStructuredSelector } from "reselect";
import { selectAllMessageList } from "../../redux/message/message.selector";

export class CreateEditMessage extends Component {
  state = {
    messageDescription: "",
    messageDescriptionError: false,
    editMessageID: null,
    editMode: false,
  };
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { editMessage } = this.props.message;
      if (editMessage) {
        this.setState({
          editMode: true,
          messageDescription: editMessage.desc,
          editMessageID: editMessage.id,
          messageDescriptionError: false,
        });
      }
    }
  }

  // Form Submit Handle for Update and Create Message
  handleSubmit = (e) => {
    e.preventDefault();

    let invalidMessageDescription = this.validateInput("messageDescription");
    if (!invalidMessageDescription) {
      if (!this.state.editMode) {
        // Add Message
        this.handleCreateUpdateMessage("onAdd");
      } else {
        // Update Message
        this.handleCreateUpdateMessage("OnEdit");
      }
    }
  };

  handleCreateUpdateMessage = (submitType) => {
    const { addMessage, showAlert, updateMessage } = this.props;
    let alertMsg;
    const message = {
      id: submitType === "OnEdit" ? this.state.editMessageID : uuidv4(),
      desc: this.state.messageDescription,
      date: new Date().toDateString(),
    };
    if (submitType === "OnEdit") {
      updateMessage(message);
      alertMsg = "Message Updated Successfully";
    } else {
      alertMsg = "Message Added Successfully";
      addMessage(message);
    }
    showAlert({ msg: alertMsg, alertType: "success" });
    this.handleResetForm();
  };

  handleResetForm = () => {
    this.setState({
      messageDescription: "",
      messageDescriptionError: false,
      editMessageID: null,
      editMode: false,
    });
  };

  // Validate Input Text Fields
  validateInput = (field) => {
    let error = false;

    let stateName = field + "Error";

    if (!this.state[field]) {
      error = true;
      this.setState({
        [stateName]: true,
      });
    } else {
      error = false;
      this.setState({
        [stateName]: false,
      });
    }

    return error;
  };

  // Store Input Text Values On Change to Local State
  handleChange = (e) => {
    let name = e.target.name;
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.validateInput([name])
    );
  };

  render() {
    return (
      <div>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
          ref={(el) => (this.myFormRef = el)}
        >
          <Grid container direction="row" spacing={2}>
            <Grid item xs={8}>
              {/* Message Description */}
              <FormInput
                value={this.state.messageDescription}
                handleChange={this.handleChange}
                error={this.state.messageDescriptionError}
                label="Message"
                name="messageDescription"
              />
            </Grid>

            <Grid item xs={4}>
              <div className="mt-2">
                <Button
                  className="w-full "
                  type="submit"
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  {this.state.editMode ? "Update" : "Create"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
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
  addMessage: (message) => dispatch(addMessage(message)),
  updateMessage: (message) => dispatch(updateMessage(message)),
  showAlert: (alert) => dispatch(showAlert(alert)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEditMessage);

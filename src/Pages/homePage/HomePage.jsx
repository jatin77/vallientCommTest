import React, { Component } from "react";
import CreateEditMessage from "../../Components/createEditMessage/CreateEditMessage";
import Grid from "@material-ui/core/Grid";
import MessageList from "../../Components/messageList/MessageList";

export class HomePage extends Component {
  render() {
    return (
      <>
        <Grid container justify="center">
          <Grid item xs={12} sm={6}>
            <div className="mx-4 mt-5">
              <CreateEditMessage />
            </div>
            <div>
              <MessageList />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default HomePage;

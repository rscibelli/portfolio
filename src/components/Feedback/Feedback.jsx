import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { sendFeedback, getAllFeedback } from '../../services/APICalls.js';

export default function Feedback() {

  const [state, setState] = React.useState({
    feedbackMessage: 'noMessage'
  });

  function handleChange(event) {
    setState({feedbackMessage: event.target.value});
  }

  return (
    <div className="feedback">
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Type feedback here"
        onChange={handleChange}
      />
      <Button variant="outlined" onClick={() => sendFeedback(state.feedbackMessage)}>Submit</Button>
      <h2>{state.feedbackMessage}</h2>
    </div>
  );
}
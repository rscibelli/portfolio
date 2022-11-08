import React, { makeStyles, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import { sendFeedback, getAllFeedback } from '../../services/APICalls.js';

// const useStyles = makeStyles(() => ({
//   feedbackBody: {
//     textAlign: 'center'
//   }
// }));

export default function Feedback() {
  // const classes = useStyles();

  const [state, setState] = useState({
    feedbackMessage: 'noMessage',
    feedback: 'No Feedback Yet!'
  });

  function handleChange(event) {
    setState({feedbackMessage: event.target.value});
  }

 function getFeedback() {
    setState({feedback: getAllFeedback()})
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Type feedback here"
        onChange={handleChange}
      />
      <Button variant="outlined" onClick={() => sendFeedback(state.feedbackMessage)}>Submit</Button>
      <Button variant="outlined" onClick={() => getFeedback()}>Get All Feedback</Button>
      <h2>{state.feedback}</h2>
    </div>
  );
}
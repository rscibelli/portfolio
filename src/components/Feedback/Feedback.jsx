import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
// import { sendFeedback, getAllFeedback } from '../../services/APICalls.js';

export default function Feedback() {

  const [state, setState] = useState({
    feedbackMessage: 'noMessage',
    feedback: 'No Feedback Yet!'
  });

//   function handleChange(event) {
//     setState({feedbackMessage: event.target.value});
//   }

//  function getFeedback() {
//     setState({feedback: getAllFeedback()})
//   }

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Type feedback here"
        // onChange={handleChange}
      />
      <Button variant="contained">Submit</Button>
      <Button variant="contained">Get All Feedback</Button>
      <h2>{state.feedback}</h2>
    </div>
  );
}
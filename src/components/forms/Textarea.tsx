import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControl from '@mui/material/FormControl';

export default function Textarea() {
  return (
    <FormControl variant="filled" sx={{ mt:1, minWidth: 120 }}>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={5}
        placeholder="TextArea"
        style={{ width: 300 }}
      />
    </FormControl>
  );
}

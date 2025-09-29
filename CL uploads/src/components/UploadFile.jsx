import Button from '@mui/material/Button';
import React from 'react'
import axios from 'axios'

export default function UploadFile() {

  const _handleUpload = (e) => {
    const dataForm = new FormData();
    dataForm.append('file', e.target.files[0]);
    console.log(dataForm)
    axios
      .post('http://localhost:4000/test', dataForm)
      .then(res => {

      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      {/* <Button
        component="label"
        variant="contained"
        color="primary"
        size="small"
        sx={{ alignItems: 'center' }}
        onChange={_handleUpload}
        type="file">
        Upload
      </Button> */}
      <Button
        component="label"
        variant="contained"
        color="primary"
        size="small"
        sx={{ alignItems: 'center' }}
        onChange={_handleUpload}
      >
        Upload
        <input
          type="file"
          hidden
        />
      </Button>
    </div>
  )
}


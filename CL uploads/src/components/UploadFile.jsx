import Button from '@mui/material/Button';
import React from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material';

export default function UploadFile() {
  const [loading, setLoading] = React.useState(false);

  const _handleUpload = (e) => {
    const dataForm = new FormData();
    dataForm.append('file', e.target.files[0]);
    console.log(dataForm)
    axios
      .post('http://localhost:8063/api/users/upload', dataForm)
      .then(res => {
        setLoading(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      {loading
        ? <CircularProgress size={40} />
        : <Button
          component="label"
          variant="contained"
          color="primary"
          size="large"
          sx={{ alignItems: 'center' }}
          onChange={_handleUpload}
        >
          Upload
          <input
            type="file"
            hidden
          />
        </Button>}
    </div>
  )
}


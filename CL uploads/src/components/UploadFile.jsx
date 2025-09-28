import React from 'react'

export default function UploadFile() {

const _handleUpload = (e) => {
    const dataForm = new FormData();
    dataForm.append('file', e.target.files[0]);  
      axios
        .post('http://localhost:4000/test', dataForm)
        .then(res => {

        })
        .catch(err => console.log(err));      
}

  return (
    <div className="App">
      <input
      onChange={_handleUpload}
      type="file"
      />    
    </div>
  )
}


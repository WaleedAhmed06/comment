import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


export default function Addproject() {
  const navigate = useNavigate()

  const [model, setModel] = useState<any>({});
  const baseApi = "https://jsonplaceholder.typicode.com/posts";
  const params = useParams();

  const getPostById = () => {
    axios
      .get(`${baseApi}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    axios
      .put(`${baseApi}/${params.id}`, model)
      .then((res) => {
        console.log("Post Updated Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitPost = () => {
    model.userId = 11;
    axios
      .post(baseApi, model)
      .then((res) => {
        console.log("Post Added Successfully ==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostById();
    }
  }, []);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column", // Change to column to stack elements vertically
      alignItems: "center", // Center elements vertically
      gap: "16px", // Add some spacing between elements
      padding: "16px", // Add padding to the container
      border: "1px solid #ccc", // Add a border for styling
      borderRadius: "8px", // Add rounded corners
      maxWidth: "300px", // Limit the container width
      margin: "0 auto", // Center the container horizontally
      marginTop:"10%"
    }}>
      
      <TextField
      value={model.title}
      onChange={(e) => setModel({ ...model, title: e.target.value })}
        label="Name"
        variant="standard"
        color="error"
        focused
      />
      <br/>
       <TextField
       value={model.email}
       onChange={(e) => setModel({ ...model, email: e.target.value })}
       label="email" color="error" focused />
       <br/>
       <TextField
       value={model.body}
       onChange={(e) => setModel({ ...model, body: e.target.value })}
        label="Descript"
        variant="standard"
        color="error"
        focused
      />
<br/>
<div>
            {params.id ? (
              <Button variant="contained" color="error" onClick={updatePost}>Update</Button>
            ) : (
              <Button variant="contained" color="error" onClick={submitPost}>Submit</Button>
            )}
          </div>
          <Button  variant="contained" color="error" onClick={() => { navigate(`/`); }}>RETURN TO THE COMMENT</Button>
             
    </div>
  )
}

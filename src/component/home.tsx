import { useEffect, useState } from 'react';
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from 'react-router-dom';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Home() {
  const [listData, setlistData] = useState<Comment[]>([]);
  const navigate = useNavigate();
 
  const getData = () => {
    axios
      .get<Comment[]>(`https://jsonplaceholder.typicode.com/comments`)
      .then((res : any) => {
        setlistData(res.data);
      })
      .catch((err : any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
let PageAdd = () => {
  navigate(`/Addproject`)
}

const deletePost = (id: any) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => {
      console.log("Post Deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
    <div >
      <h1 style={{textAlign:"center",fontFamily:"initial",}}>COMMENTS</h1>
      <Button onClick={PageAdd} variant="contained" color="error" style={{marginLeft:"5%"}}>Comment Add</Button>
     {listData.map((x) => (
      <div style={{
        width:"80%",
        textTransform:"capitalize",
        borderRadius: "10px",
        margin: "2%",
        padding:"1%",
        boxShadow: "1px 1px 8px 1px red",
      }} className='comment' key={x.id}>
        <h1>NAME: {x.name}</h1>
        <h5>EMAIL: {x.email}</h5>
        <p>{x.body}</p>
        <IconButton>
          <EditIcon  onClick={() => {
                  navigate(`/addproject/${x.id}`);
                }} style={{color:"blue"}}/>
        </IconButton>
        <IconButton onClick={() => deletePost(x.id)}>
          <DeleteIcon style={{color:"red"}}/>
        </IconButton>
      </div>
       ))}; 
    </div>
  );
}

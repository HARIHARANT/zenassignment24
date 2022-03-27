import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import UserData from './CreateUser';

export default function ImageAvatars() {
  const imgArr = ["https://mui.com/static/images/avatar/2.jpg","/static/images/avatar/2.jpg","/static/images/avatar/3.jpg"];
  const [imageData, setImgData] = React.useState(imgArr[0]);
  console.log(imageData);
  return (  
      <>
      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src={imageData} />   
      <UserData></UserData>   
    </Stack>
      </>    
    
  );
}
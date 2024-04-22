  import Counter from "./Components/Counter";
import {Box} from '@mui/material';
import UserForm from "./Components/UserForm";
import RichTextEditor from "./Components/RichTextEditor";
import { useState } from "react";
function App() { 
  const counterKey = 'counterValue';
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(counterKey);
    return savedCount ? parseInt(savedCount) : 0;
});
const maxCount = 100; 
const colorIntensity = Math.min(count / maxCount, 1);
const backgroundColor = `rgba(255, 0, 0, ${colorIntensity})`;
    return(
      <Box sx={{width:'100vw',height:"100%",backgroundColor,display:'flex',justifyContent:"space-between", alignItems:"center",padding:"2rem",flexWrap:"wrap",gap:5}}>
      <Counter setCount={setCount} count={count} counterKey={counterKey}/>
      <UserForm/>
      <RichTextEditor/>
      </Box>
  )
}

export default App;

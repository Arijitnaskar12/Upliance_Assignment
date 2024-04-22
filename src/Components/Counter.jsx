import React, {useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';

function Counter({setCount,count,counterKey}) {
   
    useEffect(() => {
        localStorage.setItem(counterKey, count);
    }, [count]);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    
    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    
    const handleReset = () => {
        setCount(0);
    };
    const buttonStyle={ marginBottom: 1,color:"black",fontWeight:"bold",border:"2.5px solid #000352"};
    return (
        <Box
            sx={{
                width:"27rem",
                height:"25rem",
                padding: 2,
                display: 'flex',
                gap:5,
                justifyContent:"center",
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Counter: {count}
            </Typography>
            <Box sx={{display:"flex",gap:5}} >
            <Button variant="outlined" onClick={handleIncrement} sx={buttonStyle}>
                +
            </Button>
            <Button variant="contained" onClick={handleReset} sx={{marginBottom:1}}>
                Reset
            </Button>
            <Button variant="outlined" onClick={handleDecrement} sx={buttonStyle}>
                -
            </Button>

            </Box>
           
        </Box>
    );
}

export default Counter;

import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function UserForm() {
    const userId = uuidv4();
    const[id,setID]=useState(userId);
    const [formData, setFormData] = useState({
        id:id,
        name: '',
        address: '',
        email: '',
        phone: ''
    });
    const [unsavedChanges, setUnsavedChanges] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setUnsavedChanges(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let userDataArray = localStorage.getItem('userData');
        userDataArray = userDataArray ? JSON.parse(userDataArray) : [];
        userDataArray.push(formData);
        localStorage.setItem('userData', [JSON.stringify(userDataArray)]);
        setFormData({
            name: '',
            address: '',
            email: '',
            phone: ''
        });
        setUnsavedChanges(false);

       
        alert('Form submitted and data saved!');
    };

    
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (unsavedChanges) {
             
                const confirmLeave = window.alert(
                    'You have unsaved changes. Are you sure you want to leave?'
                );
                
                if (!confirmLeave) {
                   
                    e.preventDefault();
                    e.returnValue = '';
                }
            }
        };

       
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [unsavedChanges]);

    return (
        <Box
            sx={{
                padding: 2,
                width:"50rem",
                height:"25rem",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#f7f7f7'
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                User Data Form(ID-{id})
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <Button variant="contained" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Box>
    );
}

export default UserForm;

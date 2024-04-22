import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Typography } from '@mui/material';

function RichTextEditor() {
    const [content, setContent] = useState('');

    
    const handleEditorChange = (value) => {
        setContent(value);
        localStorage.setItem('editorContent', value); // Save the editor content in localStorage
    };

    
    useEffect(() => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
            const userDataObj = JSON.parse(savedUserData);
            const formattedContent = userDataObj.map((userData, index) => {
               
                return `User ${index + 1}: Name: ${userData.name}, Address: ${userData.address}, Email: ${userData.email}, Phone: ${userData.phone}<br>`;
            }).join('');
            localStorage.setItem('editorContent', formattedContent); // Save formatted content in localStorage
            setContent(formattedContent);
        }
    }, []);

   
    useEffect(() => {
        const storedContent = localStorage.getItem('editorContent');
        if (storedContent !== null) {
            setContent(storedContent);
        }
    }, []);

    return (
        <Box
            sx={{
                padding: 2,
                width: "92rem",
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#f7f7f7'
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Rich Text Editor
            </Typography>
            <ReactQuill
                value={content}
                onChange={handleEditorChange}
                theme="snow"
                style={{ marginBottom: 30, height: "15rem" }}
            />
        </Box>
    );
}

export default RichTextEditor;

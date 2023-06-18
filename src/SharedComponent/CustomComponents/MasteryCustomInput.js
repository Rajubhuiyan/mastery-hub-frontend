import { TextField, styled } from '@mui/material';
import React from 'react';

const Input = styled(TextField)({
    '&': {
        backgroundColor: 'white',
    },

    '& .MuiInputBase-input': {
        fontSize: '0.9rem',
    },

    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
            display: 'none',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
            display: 'none'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
            display: 'none'
        },
        borderRadius: '0.4rem',
        border: '1px solid #e3e3e3'
    },
});
const MasteryCustomInput = (props) => {
    return (
        <Input
            {...props}
        />
    );
};

export default MasteryCustomInput;
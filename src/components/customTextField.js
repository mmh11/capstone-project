import React from 'react'
import TextField from "@mui/material/TextField";

const CustomTextField = ({...props}) => {
    const SXStyle = {
        "& .MuiInputBase-root": { //input text
            color: "#cccccc"
        },
        " .MuiInputLabel-root": { //label
            color: "#cccccc"
        },
        "& label.Mui-focused": {
            color: "#b135ff"
        },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#b135ff",
            }
        },
        "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "#b135ff" },
            "&.Mui-focused fieldset": {
                borderColor: "#b135ff"
            }
        }
    }
    return (
        <TextField 
            sx={SXStyle}
            id="outlined-basic" 
            label="Input here..." 
            variant="outlined" 
            multiline="true"
            {...props}
            onChange={(e) => props.onChange(e.target.value)}
        />
    )
}

export default CustomTextField
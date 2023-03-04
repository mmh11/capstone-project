import React from 'react'
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomSelect = ({...props}) => {
    const SXStyle = {
        border: "2px solid #cccccc",
        color: "#cccccc",
        "&:hover": {
            border: "2px solid #b135ff",
            color: "#b135ff"
        }
    }
    return(
        <Select
            value
            onChange={(e)=>props.onChange(e.target.value)}
            sx={SXStyle}
            style={{maxHeight:"40px"}}
            disableRipple
            {...props}
        >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
        </Select>
    )
}

export default CustomSelect
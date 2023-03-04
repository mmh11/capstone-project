import React from 'react'
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomSelect = ({...props}) => {
    return(
        <Select
            value
            label="difficulty"
            onChange={(e)=>props.onChange(e.target.value)}
            {...props}
        >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
        </Select>
    )
}

export default CustomSelect
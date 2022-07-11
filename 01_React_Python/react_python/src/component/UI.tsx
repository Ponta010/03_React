import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';
import { Button } from "@material-ui/core";
import { useState } from "react";
import { ApiLink } from "../ts/api_link";

const UI = () =>{

    const [fileName, setFileName] = useState("");

    const handleChangeFile = (event:SelectChangeEvent) =>{
        setFileName(event.target.value);
    }

    const handleSend = () =>{
        if(fileName == ""){
            alert("ファイルが選択されていません。");
            return;
        }

        const api = new ApiLink();
        api.handleSubmit(fileName);
    }

    return(
        <div>
            <FormControl style={{width:"25vw"}}>
                <InputLabel id="demo-simple-select-label">走行データ選択</InputLabel>
                <Select autoWidth onChange={handleChangeFile} labelId="demo-simple-select-label">
                    <MenuItem value={"test_1.csv"}>Aさん **年**月**日</MenuItem>
                    <MenuItem value={"test_2.csv"}>Bさん **年**月**日</MenuItem>
                    <MenuItem value={"test_3.csv"}>Cさん **年**月**日</MenuItem>
                </Select>
            </FormControl>
            <div>
                <Button variant="contained" color="primary" onClick={handleSend}>評価する</Button>
            </div>
        </div>
    )
}

export default UI;
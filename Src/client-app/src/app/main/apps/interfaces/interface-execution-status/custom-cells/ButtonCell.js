import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import SvgIcon from 'src/baseComponents/core/SvgIcon/SvgIcon';
export const ButtonCell = (props) => {    
    const navigate = useNavigate();
    const field = props.field || "";
    const value = props.dataItem[field];
  return (
    <td className="k-command-cell">
        <Button className="mx-8 whitespace-nowrap" color="secondary" onClick={() => navigate('/apps/interfaces/interface-execution-status/' + value)}>
            <SvgIcon size={20}>heroicons-outline:eye</SvgIcon>
        </Button>
    </td>
  )
};

export default ButtonCell
import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import SvgIcon from 'src/baseComponents/core/SvgIcon/SvgIcon';
export const ErrorCell = (props) => {    
    const navigate = useNavigate();
    const field = props.field || "";
    const value = props.dataItem[field];

    async function CallBack()
    {
        props.OpenModal();
    }

    return (
        <td className="k-command-cell">
            {
                value > 0 ?
                <Button className="mx-8 whitespace-nowrap" color="error" onClick={CallBack}>
                    <SvgIcon className="text-red" size={20}>
                        heroicons-outline:minus-circle
                    </SvgIcon>
                </Button>
                :
                <Button className="mx-8 whitespace-nowrap" color="success" disabled>
                    <SvgIcon className="text-green" size={20}>
                        heroicons-outline:check-circle
                    </SvgIcon>
                </Button>            
            }
        </td>
    )
};

export default ErrorCell
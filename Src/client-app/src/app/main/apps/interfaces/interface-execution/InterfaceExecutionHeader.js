import Typography from '@mui/material/Typography';
import _ from '@lodash';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector } from "react-redux";
import { setInterfaces } from './store/interfaceSlice';

function InterfaceExecutionHeader(props) {
    const [interfaceId, setInterfaceId] = useState("1");
    let interfaces = useSelector(setInterfaces);

    const handleChange = (event) => {
        setInterfaceId(event.target.value);
    };

  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              Interface Execution
            </Typography>
          </div>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
            <Select value={interfaceId} onChange={handleChange} label="Interface">
              {
                interfaces?.map(inter => (
                  <MenuItem key={inter.id} value={inter.id}>{inter.name}</MenuItem>
                ))
              }
            </Select>
        </div>
      </div>
    </div>
  );
}

export default InterfaceExecutionHeader;

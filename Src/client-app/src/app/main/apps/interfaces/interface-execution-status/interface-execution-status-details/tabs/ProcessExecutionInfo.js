import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";

function ProcessExecutionInfo(props) {
console.log(props)
  return (
    <div>
        <TextField
            className="mt-8 mb-16"
            label="Interface"
            id="Interface"
            variant="outlined"
            fullWidth
            disabled
            value={props.interface}
          />
          <TextField
            className="mt-8 mb-16"
            label="Started On"
            id="Interface"
            variant="outlined"
            fullWidth
            disabled
            value={props.startedOn}
          />
          <TextField
            className="mt-8 mb-16"
            label="Finished On"
            id="Interface"
            variant="outlined"
            fullWidth
            disabled
            value={props.finishedOn}
          />
          <TextField
            className="mt-8 mb-16"
            label="Started By"
            id="Interface"
            variant="outlined"
            fullWidth
            disabled
            value={props.startedBy}
          />
    </div>
  );
}

export default ProcessExecutionInfo;

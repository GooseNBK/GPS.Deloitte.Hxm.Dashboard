import clsx from "clsx";

const { Typography } = require("@mui/material");

const StatusCell = (props) => {
    const field = props.field || "";
    const value = props.dataItem[field];
    return (
      <td>
            <Typography className={clsx(
                'inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase',
                value === 'Pending' &&
                'bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50',
                value === 'Completed' &&
                'bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50',
                value === 'Completed With Errors' &&
                'bg-yellow-50 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-50'
            )}
            >
            {value}
            </Typography>
      </td>
    );
  };

  export default StatusCell
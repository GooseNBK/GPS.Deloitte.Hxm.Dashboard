import Typography from '@mui/material/Typography';
import _ from '@lodash';

function ToolsHeader(props) {
  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              OpXpress
            </Typography>
            <Typography className="text-1xl md:text-1xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              A One-Stop-Shop for GPS Tools
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsHeader;

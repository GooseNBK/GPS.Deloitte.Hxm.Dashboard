import Typography from '@mui/material/Typography';
import _ from '@lodash';
import { Button } from '@mui/material';
import SvgIcon from 'src/baseComponents/core/SvgIcon';

function CompanyHeader(props) {
  async function CallBack()
  {
      props.OpenModal();
  }
  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              Company (REF_Company)
            </Typography>
          </div>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
          <Button className="whitespace-nowrap mx-4" variant="contained" color="secondary" onClick={CallBack} startIcon={<SvgIcon className="hidden sm:flex">material-solid:add_box</SvgIcon>}>
            Add new
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;

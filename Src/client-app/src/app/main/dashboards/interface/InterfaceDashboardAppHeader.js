import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import _ from '@lodash';
import Button from '@mui/material/Button';
import SvgIcon from 'src/BaseTemplate/core/SvgIcon';
import { selectUser } from 'app/store/userSlice';

function InterfaceDashboardAppHeader(props) {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <Avatar className="flex-0 w-64 h-64" alt="user photo" src={user?.data?.photoURL}>
            {user?.data?.displayName[0]}
          </Avatar>
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              {`Welcome back, ${user.data.displayName}!`}
            </Typography>

            <div className="flex items-center">
              <SvgIcon size={20} color="action">
                heroicons-solid:bell
              </SvgIcon>
              <Typography className="mx-6 leading-6 truncate" color="text.secondary">
                You have 4 new notifications
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
          <Button
            className="whitespace-nowrap"
            variant="contained"
            color="secondary"
            startIcon={<SvgIcon size={20}>heroicons-solid:cog</SvgIcon>}
          >
            Configure Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InterfaceDashboardAppHeader;

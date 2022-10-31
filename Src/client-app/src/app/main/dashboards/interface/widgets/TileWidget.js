import { Box } from '@mui/system';
import SvgIcon from 'src/BaseTemplate/core/SvgIcon';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import _ from '@lodash';

function TileWidget(props) {

  const bg = props.backgroundColor
  const c = props.color

  return (
    <Card component={Link} to={props.url} role="button" className="flex flex-col items-start w-full p-24 rounded-lg shadow rounded-lg hover:shadow-xl transition-shadow duration-150 ease-in-out" >
      <div className="flex flex-col flex-auto justify-start items-start w-full">
        <Box sx={{ backgroundColor: '#67bd00', color: '#ffffff', }} className="flex items-center justify-center p-16 rounded-full" >
          <SvgIcon>{props.icon}</SvgIcon>
        </Box>

        <Typography className="mt-20 text-lg font-medium leading-5">{props.title}</Typography>

        <Typography className="mt-2 line-clamp-2 text-secondary">{props.description}</Typography>
      </div>
    </Card>
  );
}

export default TileWidget;

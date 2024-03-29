import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from '@lodash';
import SvgIcon from 'src/baseComponents/core/SvgIcon/SvgIcon';

function InterfaceExecutionStatusDetailHeader(props) {
  const theme = useTheme();
  const currentProcessExecution = useSelector((store) => store.interfaceExecution);
  console.log(currentProcessExecution);

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }} >
          <Typography className="flex items-center sm:mb-12" component={Link} role="button" to="/apps/interfaces/interface-execution-status" color="inherit">
            <SvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </SvgIcon>
            <span className="flex mx-4 font-medium">Process Execution Status</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div className="hidden sm:flex" initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
            <img className="w-32 sm:w-48 rounded" src="assets/images/etc/process.png"/>
          </motion.div>
          <motion.div className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16" initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {currentProcessExecution?.interface} ({currentProcessExecution?.status})
            </Typography>
            <Typography variant="caption" className="font-medium">
              Process Execution Details (EmpStgHist)
            </Typography>
          </motion.div>
        </div>
      </div>
      <motion.div className="flex" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }} >
        <Button className="whitespace-nowrap mx-4" variant="contained" color="secondary" startIcon={<SvgIcon className="hidden sm:flex">heroicons-solid:document-report</SvgIcon>}>
          Report
        </Button>
      </motion.div>
    </div>
  );
}

export default InterfaceExecutionStatusDetailHeader;

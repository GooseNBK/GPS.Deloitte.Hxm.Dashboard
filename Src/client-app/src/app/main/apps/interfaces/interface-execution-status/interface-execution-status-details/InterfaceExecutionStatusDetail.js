import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from '@lodash';
import useThemeMediaQuery from 'src/baseComponents/hooks/useThemeMediaQuery';
import ProcessExecutionInfo from './tabs/ProcessExecutionInfo';
import RecordList from './tabs/RecordList';
import ErrorList from './tabs/ErrorList';
import InterfaceExecutionStatusDetailHeader from './InterfaceExecutionStatusDetailHeader';
import getInterfaceExecutionById from '../store/interfaceExecutionSlice';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded';

function InterfaceExecutionStatusDetail(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const { processExecutionId } = routeParams;
  const currentProcessExecution = useSelector((store) => store.interfaceExecution);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    return () => {
        //dispatch(getInterfaceExecutionById(processExecutionId));
    };
  }, [dispatch]);

  function handleTabChange(event, value) {
    setTabValue(value);
  }

  return (
    <PageCarded header={<InterfaceExecutionStatusDetailHeader />}
        content={
          <>
            <Tabs value={tabValue} onChange={handleTabChange} indicatorColor="secondary" textColor="secondary" variant="scrollable" scrollButtons="auto" classes={{ root: 'w-full h-64 border-b-1' }}>
              <Tab className="h-64" label="Process Execution" />
              <Tab className="h-64" label="Records" />
              <Tab className="h-64" label="Errors" />
            </Tabs>
            <div className="p-16 sm:p-24 max-w-3xl">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <ProcessExecutionInfo />
              </div>

              <div className={tabValue !== 1 ? 'hidden' : ''}>
                <RecordList />
              </div>
              <div className={tabValue !== 2 ? 'hidden' : ''}>
                <ErrorList />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
  );
}

export default InterfaceExecutionStatusDetail;

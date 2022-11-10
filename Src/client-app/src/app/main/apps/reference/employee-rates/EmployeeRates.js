import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import EmployeeRatesHeader from './EmployeeRatesHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import getEmployeeRates from './store/employeeRatesSlice';
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material';
import SvgIcon from 'src/baseComponents/core/SvgIcon';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import moment from 'moment/moment';

const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function EmployeeRates(props) {
  const dispatch = useDispatch();  
  const employeeRates = useSelector((store) => store.employeeRates);
  const [openModal, setOpenModal] = useState(false);

  let [id, setId] = useState(0);
  let [rate, setRate] = useState("");
  let [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  let [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
  let [timestampCreated, setTimestampCreated] = useState("");
  let [createdBy, setCreatedBy] = useState("");
  let [timestampUpdated, setTimestampUpdated] = useState("");
  let [updatedBy, setUpdatedBy] = useState("");

  async function handleOpenModal()
  {
    setOpenModal(true);
  }

  async function handleCloseModal()
  {
    setOpenModal(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    useEffect(() => {
      //dispatch(getEmployeeRates());
  }, [dispatch]);
  
    const initialDataState = {
    skip: 0,
    take: 10,
    };;

    const [page, setPage] = useState(initialDataState);

    const pageChange = (event) => {
        setPage(event.page);
    };

  return (
    <Root header={<EmployeeRatesHeader OpenModal={handleOpenModal}/>} content={
      <>
          <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
              <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                  <PageCarded
                      content={
                      <>
                          <Grid
                              style={{
                                  height: "650px",
                              }}
                              data={employeeRates?.slice(page.skip, page.take + page.skip)}
                              sortable={true}
                              skip={page.skip}
                              take={page.take}
                              total={employeeRates?.length}
                              pageable={true}
                              pageSize={8}
                              onPageChange={pageChange}
                              >
                              <Column title='ID' width={80} field="id"/>
                              <Column title='Start Date' width={150} field="startDate" />
                              <Column title='End Date' width={150} field="endDate" />     
                              <Column title='Rate' width={150} field="rate" />
                              <Column title='Created On' width={150} field="timestampCreated" />
                              <Column title='Created By' width={150} field="createdBy" />
                              <Column title='Updated On' width={150} field="timestampUpdated" />
                              <Column title='Updated By' width={150} field="updatedBy" />
                          </Grid>
                          <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                              <Box component="form" sx={style}>
                                  <div className="flex items-center mt-16 mb-12">
                                      <SvgIcon size={20}>material-solid:fiber_new</SvgIcon>
                                      <Typography className="font-semibold text-16 mx-8">Add Employee Rates (REF_EmplRates)</Typography>
                                  </div>
                                  <div>    
                                  <TextField
                                    className="mt-8 mb-16"
                                    label="Rate"
                                    id="rate"
                                    variant="outlined"
                                    fullWidth
                                    value={rate}
                                    autoFocus
                                    onChange={(e) => setRate(e.target.value)}
                                  />                              
                                  <FormControl sx={{minWidth: 120 }}>
                                    <DesktopDatePicker
                                        label="Start Date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                  </FormControl>
                                  <FormControl sx={{ ml: 2, mb:5, minWidth: 120 }}>
                                    <DesktopDatePicker
                                        label="End Date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                  </FormControl>
                                  
                                  <div align="right">
                                    <Button className="whitespace-nowrap mx-4" variant="contained" color="secondary" startIcon={<SvgIcon className="hidden sm:flex">material-solid:save</SvgIcon>}>
                                      Save
                                    </Button>
                                  </div>
                                  </div>
                              </Box>
                          </Modal>
                      </>
                      }
                  />
              </div>
          </div>
      </>        
      }
    />
  );
}

export default EmployeeRates;

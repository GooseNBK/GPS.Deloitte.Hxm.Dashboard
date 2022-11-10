import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import CompanyHeader from './CompanyHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import getCompanies from './store/CompaniesSlice';
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

function Company(props) {
  const dispatch = useDispatch();  
  const companies = useSelector((store) => store.companies);
  const [openModal, setOpenModal] = useState(false);

  let [id, setId] = useState(0);
  let [code, setCode] = useState("");
  let [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  let [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
  let [costPointOrganizacion, setCostPointOrganizacion] = useState("");
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
      //dispatch(getCompanies());
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
    <Root header={<CompanyHeader OpenModal={handleOpenModal}  />} content={
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
                              data={companies?.slice(page.skip, page.take + page.skip)}
                              sortable={true}
                              skip={page.skip}
                              take={page.take}
                              total={companies?.length}
                              pageable={true}
                              pageSize={8}
                              onPageChange={pageChange}
                              >
                              <Column title='ID' width={100} field="id"/>
                              <Column title='Code' width={200} field="code"/>
                              <Column title='Start Date' width={150} field="startDate" />
                              <Column title='End Date' width={150} field="endDate" />     
                              <Column title='Cost Point Organization' width={150} field="costPointOrganization" />
                              <Column title='Created On' width={150} field="timestampCreated" />
                              <Column title='Created By' width={150} field="createdBy" />
                              <Column title='Updated On' width={150} field="timestampUpdated" />
                              <Column title='Updated By' width={150} field="updatedBy" />
                          </Grid>
                          <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                              <Box component="form" sx={style}>
                                  <div className="flex items-center mt-16 mb-12">
                                      <SvgIcon size={20}>material-solid:fiber_new</SvgIcon>
                                      <Typography className="font-semibold text-16 mx-8">Add New Company (REF_Company)</Typography>
                                  </div>
                                  <div>
                                  <TextField
                                    className="mt-8 mb-16"
                                    label="Code"
                                    id="code"
                                    variant="outlined"
                                    fullWidth
                                    value={code}
                                    autoFocus
                                    onChange={(e) => setCode(e.target.value)}
                                  />
                                  <FormControl sx={{minWidth: 120 }}>
                                    <DesktopDatePicker
                                        label="Start Date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                  </FormControl>
                                  <FormControl sx={{ ml: 2, minWidth: 120 }}>
                                    <DesktopDatePicker
                                        label="End Date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        renderInput={(params) => <TextField {...params} />}
                                      />
                                  </FormControl>
                                  <TextField
                                    className="mt-8 mb-16"
                                    label="Cost Point Organization"
                                    id="cpOrganization"
                                    variant="outlined"
                                    fullWidth
                                    value={costPointOrganizacion}
                                    onChange={(e) => setCostPointOrganizacion(e.target.value)}
                                  />
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

export default Company;

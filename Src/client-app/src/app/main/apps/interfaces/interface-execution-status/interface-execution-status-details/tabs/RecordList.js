import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import ErrorCell from "../../custom-cells/ErrorCell";
import { Box, Modal, Typography } from '@mui/material';
import SvgIcon from "src/baseComponents/core/SvgIcon";

function RecordList(props) {
  const processExecutionDetails = useSelector((store) => store.interfaceExecutionDetails);
  const interfaceExecutionDetailErrors = useSelector((store) => store.interfaceExecutionDetailErrors);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  async function handleOpenModal()
  {
    setOpenErrorModal(true);
  }

  async function handleCloseModal()
  {
    setOpenErrorModal(false);
  }

  const initialSort = [
    {
        field: "id",
        dir: "asc",
    },
    ];

    const initialDataState = {
    skip: 0,
    take: 10,
    };
    
    const [sort, setSort] = useState(initialSort);

    const [page, setPage] = useState(initialDataState);

    const pageChange = (event) => {
        setPage(event.page);
    };

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

    const MyErrorCell = (props) => <ErrorCell {...props} OpenModal={handleOpenModal} />;

    return (
        <>
            <Grid
                style={{
                    height: "650px",
                    maxWidth: "100%",
                }}
                data={processExecutionDetails?.slice(page.skip, page.take + page.skip)}
                sortable={true}
                sort={sort}
                onSortChange={(e) => {
                    setSort(e.sort);
                }}
                skip={page.skip}
                take={page.take}
                total={processExecutionDetails?.length}
                pageable={true}
                pageSize={8}
                onPageChange={pageChange}
                >
                <Column title='Id' width={80} field="id" locked={true} />
                <Column title='Process ID' width={100} field="processExecutionId" locked={true} />                
                <Column title='Global Employee ID' width={160} field="globalEmployeeId" locked={true} />
                <Column title='Has Errors?' width={110} field="hasErrors" key="id" cell={MyErrorCell} />
                <Column title='First Name' width={150} field="firstName"/>
                <Column title='Last Name' width={150} field="lastName"/>
                <Column title='Name Suffix Code' width={150} field="nameSuffixCode"/>
                <Column title='Preferred Name' width={150} field="preferredName"/>
                <Column title='Original Hire Date' width={150} field="originalHireDate"/>
                <Column title='Email Id' width={150} field="emailId"/>
                <Column title='Cost Center' width={150} field="costCenter"/>
                <Column title='Annual Working Hours' width={150} field="annualWorkingHours"/>
                <Column title='Annual Salary' width={150} field="annualSalary"/>
                <Column title='Currency' width={150} field="currency"/>
                <Column title='Birth Date' width={150} field="birthDt"/>
                <Column title='Time Sheet Schedule' width={150} field="timeSheetSchedule"/>
                <Column title='Labor Location Code' width={150} field="laborLocationCode"/>
                <Column title='Contractor Flag' width={150} field="contractorFlag"/>
                <Column title='Employee Status Code' width={150} field="employeeStatusCode"/>
                <Column title='Annual Amount' width={150} field="annualAmount"/>
                <Column title='Salary Rate Type' width={150} field="salaryRateType"/>
                <Column title='Service Area Description' width={150} field="serviceAreaDescription"/>
                <Column title='Service Line Description' width={150} field="serviceLineDescription"/>
                <Column title='Nationality' width={150} field="nationality"/>
                <Column title='Personal Area Country' width={150} field="personalAreaCountry"/>
                <Column title='Personal Area City' width={150} field="personalAreaCity"/>
                <Column title='Personal Area State' width={150} field="personalAreaState"/>
                <Column title='Personal Area State Description' width={150} field="personalAreaStateDescription"/>
                <Column title='Preferred Contact' width={150} field="preferredContact"/>
                <Column title='Phone Desk' width={150} field="phoneDesk"/>
                <Column title='Standard Hours' width={150} field="standardHours"/>
                <Column title='Wage Type' width={150} field="wageType"/>
                <Column title='Activity Type' width={150} field="activityType"/>
                <Column title='Country Grouping' width={150} field="countryGrouping"/>
                <Column title='Organization Unit' width={150} field="organizationUnit"/>
                <Column title='EEGroup' width={150} field="eEGroup"/>
                <Column title='EEGroup Code' width={150} field="eEGroupCode"/>
                <Column title='Employee Subgroup Code' width={150} field="employeeSubgroupCode"/>
                <Column title='Employee Status Description' width={150} field="employeeStatusDescription"/>
                <Column title='Manager Id' width={150} field="managerId"/>
                <Column title='Job Key' width={150} field="jobKey"/>
                <Column title='Job Description' width={150} field="jobDescription"/>
                <Column title='Company Code' width={150} field="companyCode"/>
                <Column title='Company Code Description' width={150} field="companyCodeDescription"/>
            </Grid>
            <Modal open={openErrorModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className="flex items-center mt-16 mb-12">
                        <SvgIcon size={20}>material-solid:nearby_error</SvgIcon>
                        <Typography className="font-semibold text-16 mx-8">Error List (ErrorLog)</Typography>
                    </div>
                    <div>
                        <Grid
                            style={{
                                height: "300px",
                                maxWidth: "100%",
                            }}
                            data={interfaceExecutionDetailErrors}
                            >
                            <Column title='Record ID' width={100} field="stgEmpHistId"/>                
                            <Column title='Sequence' width={100} field="sequenceNo"/>
                            <Column title='Message' width={400} field="message"/>
                        </Grid>
                    </div>
                </Box>
            </Modal>
        </>
    );
  }
  
  export default RecordList;
  
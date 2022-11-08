import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import EmployeeStagingHeader from './EmployeeStagingHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import getEmployeeStagings from './store/employeeStagingsSlice';
import { useDispatch, useSelector } from "react-redux";


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function EmployeeStaging(props) {
  const dispatch = useDispatch();  
  const employeeStagings = useSelector((store) => store.employeeStagings);

    useEffect(() => {
      //dispatch(getEmployeeStagings());
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
    <Root header={<EmployeeStagingHeader />} content={
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
                              data={employeeStagings?.slice(page.skip, page.take + page.skip)}
                              sortable={true}
                              skip={page.skip}
                              take={page.take}
                              total={employeeStagings?.length}
                              pageable={true}
                              pageSize={8}
                              onPageChange={pageChange}
                              >
                              <Column title='Id' width={80} field="id" locked={true} />
                              <Column title='Process ID' width={100} field="processExecutionId" locked={true} />                
                              <Column title='Global Employee ID' width={160} field="globalEmployeeId" locked={true} />
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

export default EmployeeStaging;

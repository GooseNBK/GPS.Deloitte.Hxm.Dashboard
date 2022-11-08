import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import SuccessFactorsHeader from './SuccessFactorsHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import getSuccessFactors from './store/successFactorsSlice';
import { useDispatch, useSelector } from "react-redux";


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function SuccessFactors(props) {
  const dispatch = useDispatch();  
  const successFactors = useSelector((store) => store.successFactors);

    useEffect(() => {
      //dispatch(getSuccessFactors());
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
    <Root header={<SuccessFactorsHeader />} content={
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
                              data={successFactors?.slice(page.skip, page.take + page.skip)}
                              sortable={true}
                              skip={page.skip}
                              take={page.take}
                              total={successFactors?.length}
                              pageable={true}
                              pageSize={8}
                              onPageChange={pageChange}
                              >
                              <Column title='ID' width={80} field="id" locked="true" />
                              <Column title='Global Employee ID' width={150} field="globalEmployeeId" locked="true"  />
                              <Column title='First Name' width={150} field="firstName" />
                              <Column title='Middle Name' width={150} field="middleName" />
                              <Column title='Last Name' width={150} field="lastName" />
                              <Column title='Activity Type' width={150} field="activityType" />
                              <Column title='Annual Salary' width={150} field="annualSalary" />
                              <Column title='Annual Working Hours' width={150} field="annualWorkingHours" />
                              <Column title='Birth Date' width={150} field="birthDate" />
                              <Column title='Service Area Description' width={150} field="ccServiceAreaDescription" />
                              <Column title='Service Line' width={150} field="ccServiceLine" />
                              <Column title='ServiceLine Description' width={150} field="ccServiceLineDescription" />
                              <Column title='Citizenship Country Of Birth' width={150} field="citizenshipCountryOfBirth" />
                              <Column title='Citizenship Nationality' width={150} field="citizenshipNationality" />
                              <Column title='Company Code' width={150} field="companyCode" />
                              <Column title='Company Code Desc' width={150} field="companyCodeDesc" />
                              <Column title='Cost Center' width={150} field="costCenter" />
                              <Column title='Cost Center Office Code' width={150} field="costCenterOfficeCode" />
                              <Column title='Cost Center Office Desc' width={150} field="costCenterOfficeDesc" />
                              <Column title='Cost Center Region' width={150} field="costCenterRegion" />
                              <Column title='Cost Center Region Desc' width={150} field="costCenterRegionDesc" />
                              <Column title='Country Grouping' width={150} field="countryGrouping" />
                              <Column title='Directors Yn' width={150} field="directorsYn" />
                              <Column title='eeGroup' width={150} field="eeGroup" />
                              <Column title='eeGroupCode' width={150} field="eeGroupCode" />
                              <Column title='Email' width={150} field="emailId" />
                              <Column title='Employee Status Code' width={150} field="employeeStatusCode" />
                              <Column title='Employee Status Code Description' width={150} field="employeeStatusCodeDescription" />
                              <Column title='Employee Sub Group Code' width={150} field="employeeSubGroupCode" />
                              <Column title='Federal Status' width={150} field="federalStatus" />                              
                              <Column title='Indicator Part Time Employee' width={150} field="indicatorPartTimeEmployee" />
                              <Column title='Job Description' width={150} field="jobDescription" />
                              <Column title='Job Key' width={150} field="jobKey" />
                              <Column title='Manager Id' width={150} field="managerId" />
                              <Column title='Partner Yn' width={150} field="partnerYn" />
                              <Column title='Payroll Area' width={150} field="payrollArea" />
                              <Column title='Pay Scale Area' width={150} field="payScaleArea" />
                              <Column title='Pay Scale Group' width={150} field="payScaleGroup" />
                              <Column title='Personnel Area' width={150} field="personnelArea" />
                              <Column title='Personnel Number' width={150} field="personnelNumber" />
                              <Column title='Phone Desk' width={150} field="phoneDesk" />
                              <Column title='Phone Office' width={150} field="phoneOffice" />
                              <Column title='Preferred Contract' width={150} field="preferredContract" />
                              <Column title='SAP Legacy Person Id' width={150} field="sapLegacyPersonId" />
                              <Column title='SAP Legacy Personnel Number' width={150} field="sapLegacyPersonnelNumber" />
                              <Column title='Service Area' width={150} field="serviceArea" />
                              <Column title='Standard Hours' width={150} field="standardHours" />
                              <Column title='Suffix' width={150} field="suffix" />   
                              <Column title='Textfield' width={150} field="textfield" />
                              <Column title='Waers' width={150} field="waers" />                           
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

export default SuccessFactors;

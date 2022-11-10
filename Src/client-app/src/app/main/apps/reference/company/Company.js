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


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function Company(props) {
  const dispatch = useDispatch();  
  const companies = useSelector((store) => store.companies);

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
    <Root header={<CompanyHeader />} content={
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
                              <Column title='ID' width={100} field="id" locked="true" />
                              <Column title='Code' width={200} field="code"/>
                              <Column title='Start Date' width={150} field="startDate" />
                              <Column title='End Date' width={150} field="endDate" />     
                              <Column title='Cost Point Organization' width={150} field="costPointOrganization" />
                              <Column title='Created On' width={150} field="timestampCreated" />
                              <Column title='Created By' width={150} field="createdBy" />
                              <Column title='Updated On' width={150} field="timestampUpdated" />
                              <Column title='Updated By' width={150} field="updatedBy" />
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

export default Company;

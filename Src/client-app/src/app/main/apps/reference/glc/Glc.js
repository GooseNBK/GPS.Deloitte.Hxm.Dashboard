import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import GlcHeader from './GlcHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import getGlcs from './store/glcsSlice';
import { useDispatch, useSelector } from "react-redux";


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function Glc(props) {
  const dispatch = useDispatch();  
  const glcs = useSelector((store) => store.glcs);

    useEffect(() => {
      //dispatch(getGlcs());
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
    <Root header={<GlcHeader />} content={
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
                              data={glcs?.slice(page.skip, page.take + page.skip)}
                              sortable={true}
                              skip={page.skip}
                              take={page.take}
                              total={glcs?.length}
                              pageable={true}
                              pageSize={8}
                              onPageChange={pageChange}
                              >
                              <Column title='ID' width={100} field="id" locked="true" />
                              <Column title='Description' width={300} field="description" />
                              <Column title='Cost Point Role' width={150} field="costPointRole" />
                              <Column title='Level' width={150} field="level" />
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

export default Glc;

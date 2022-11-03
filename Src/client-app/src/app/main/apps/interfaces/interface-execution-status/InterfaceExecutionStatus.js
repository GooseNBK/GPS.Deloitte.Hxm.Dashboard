import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import InterfaceExecutionStatusHeader from './InterfaceExecutionStatusHeader';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useState } from 'react';
import { orderBy } from "@progress/kendo-data-query";
import '@progress/kendo-theme-default/dist/all.css';


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function InterfaceExecutionStatus(props) {

    const rowsInterface = [
        { id: 1, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 2, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 3, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 4, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 5, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 6, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 7, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 8, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 9, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 10, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 11, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 12, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 13, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 14, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 15, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 16, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 17, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 18, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 19, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 20, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 21, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 22, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 23, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 24, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 25, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 26, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
        { id: 27, interface: 'SF OnDemand', status: 'Completed', startedBy: 'gborjas', startedOn: '2022/01/01 13:20:20', finishedOn: '2022/01/01 13:22:20', processed: 15, succeded: 15, failed: 0 },
      ];

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

  return (
    <Root header={<InterfaceExecutionStatusHeader />} content={
        <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
            <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                <PageCarded
                    content={
                    <>
                        <Grid
                            style={{
                                height: "650px",
                            }}
                            data={rowsInterface.slice(page.skip, page.take + page.skip)}
                            sortable={true}
                            sort={sort}
                            onSortChange={(e) => {
                                setSort(e.sort);
                            }}
                            skip={page.skip}
                            take={page.take}
                            total={rowsInterface.length}
                            pageable={true}
                            pageSize={8}
                            onPageChange={pageChange}
                            >
                            <Column field="id" />
                            <Column field="interface" filter={"text"}/>
                            <Column field="status"/>
                            <Column field="startedBy"/>
                            <Column field="startedOn"/>
                            <Column field="finishedOn"/>
                            <Column field="processed"/>
                            <Column field="succeded"/>
                            <Column field="failed"/>
                        </Grid>
                    </>
                    }
                />
            </div>
        </div>
      }
    />
  );
}

export default InterfaceExecutionStatus;

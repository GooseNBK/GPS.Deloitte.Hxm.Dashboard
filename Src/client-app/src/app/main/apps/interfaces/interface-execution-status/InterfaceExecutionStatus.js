import { useEffect, useState } from 'react';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded'
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import InterfaceExecutionStatusHeader from './InterfaceExecutionStatusHeader';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';
import StatusCell from './custom-cells/StatusCell';
import ButtonCell from './custom-cells/ButtonCell';
import getInterfaceExecutions from './store/interfaceExecutionsSlice';
import { useDispatch, useSelector } from "react-redux";


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function InterfaceExecutionStatus(props) {
  const dispatch = useDispatch();
  const interfaceExecutions = useSelector((store) => store.interfaceExecutions);
  console.log(interfaceExecutions);

    useEffect(() => {
      //dispatch(getInterfaceExecutions());
  }, [dispatch]);

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

    const MyStatusCell = (props) => <StatusCell {...props} />;
    const MyButtonCell = (props) => <ButtonCell {...props} />;

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
                            data={interfaceExecutions?.slice(page.skip, page.take + page.skip)}
                            sortable={true}
                            sort={sort}
                            onSortChange={(e) => {
                                setSort(e.sort);
                            }}
                            skip={page.skip}
                            take={page.take}
                            total={interfaceExecutions?.length}
                            pageable={true}
                            pageSize={8}
                            onPageChange={pageChange}
                            >
                            <Column title='ID' width={80} field="id" />
                            <Column title='Interface' width={150} field="interface" filter={"text"}/>
                            <Column title='Status' width={150} field="status" cell={MyStatusCell}/>
                            <Column title='Started By' field="startedBy"/>
                            <Column title='Started On' field="startedOn"/>
                            <Column title='Finished On' field="finishedOn"/>
                            <Column title='Processed' field="processed"/>
                            <Column title='Succeded' field="succeded"/>
                            <Column title='Failed' field="failed"/>
                            <Column title='Details' field="id" cell={MyButtonCell}/>
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

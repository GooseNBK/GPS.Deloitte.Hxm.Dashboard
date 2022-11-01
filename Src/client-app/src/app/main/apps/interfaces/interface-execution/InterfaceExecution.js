import PageSimple from 'src/BaseTemplate/core/SimplePage/PageSimple';
import PageCarded from 'src/BaseTemplate/core/CardedPage/PageCarded';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import InterfaceExecutionHeader from './InterfaceExecutionHeader';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Select, TextField, Typography, MenuItem } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SvgIcon from 'src/BaseTemplate/core/SvgIcon/SvgIcon';
import { useDispatch } from "react-redux";

const Root = styled(PageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function InterfaceExecution(props) {    
    const [tabValue, setTabValue] = useState(0);
    const [employeeCodes, setEmployeeCodes] = useState("");
    const [apiMethod, setApiMethod] = useState("GET");
    const dispatch = useDispatch();

    // useEffect(() => {
    //     async function fetchData(){
    //         const result = await axios.get("api/InterfaceSetups");
    //         dispatch(setInterfaceSetups(result.data));
    //     }
    //     fetchData();
    // }, [dispatch]);


    function handleTabChange(event, value) {
        setTabValue(value);
    }

    function InputEmployeeCodes(e)
    {
        e.preventDefault();
        var content = e.target.value;
        var dataArray = content.split("\n");
        console.log(dataArray);
        console.log(dataArray.join(","));
        setEmployeeCodes(dataArray.join(","));
    }
    
  return (
    <Root header={<InterfaceExecutionHeader />} content={
        <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
            <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                <PageCarded
                    content={
                    <>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor="secondary"
                            textColor="secondary"
                            variant="scrollable"
                            scrollButtons="auto"
                            classes={{ root: 'w-full h-64 border-b-1' }}
                            >
                            <Tab className="h-64" label="Execution" />
                            <Tab className="h-64" label="Setup" />
                        </Tabs>
                        <div className="p-16 sm:p-24 max-w-3x2">
                            <div className={tabValue !== 0 ? 'hidden' : ''}>
                                <div className="flex items-center mt-16 mb-12">
                                    <SvgIcon size={20}>material-outline:people</SvgIcon>
                                    <Typography className="font-semibold text-16 mx-8">Employee Codes</Typography>
                                </div>
                                <div className="flex -mx-3">
                                    <TextField
                                        className="mt-8 mb-16"
                                        required
                                        label="Parameters"
                                        autoFocus
                                        variant="outlined"
                                        fullWidth
                                        multiline
                                        rows={5}
                                        onChange={InputEmployeeCodes}
                                        value={employeeCodes}
                                    />
                                    <Button className="mx-8 whitespace-nowrap" variant="contained" color="secondary">
                                        <SvgIcon size={20}>material-outline:bolt</SvgIcon>
                                        <span className="mx-8">RUN</span>
                                    </Button>
                                </div>                                
                            </div>
                            <div className={tabValue !== 1 ? 'hidden' : ''}>
                                <div className="flex items-center mt-16 mb-12">
                                    <SvgIcon size={20}>material-outline:cloud</SvgIcon>
                                    <Typography className="font-semibold text-16 mx-8">Endpoint</Typography>
                                </div>
                                <div className="flex flex-col md:flex-row justify-center md:items-end my-24 xs:flex-col md:space-x-24">
                                    <Select className="mt-8 mb-16" value={apiMethod} label="Methods">
                                        <MenuItem value={"GET"}>GET</MenuItem>
                                        <MenuItem value={"HEAD"}>HEAD</MenuItem>
                                        <MenuItem value={"POST"}>POST</MenuItem>
                                        <MenuItem value={"PUT"}>PUT</MenuItem>
                                        <MenuItem value={"DELETE"}>DELETE</MenuItem>
                                    </Select>
                                    <TextField
                                        className="mt-8 mb-16"
                                        required
                                        label="URL"
                                        autoFocus
                                        variant="outlined"
                                        fullWidth
                                        disabled
                                        value={"http://localhost:5000"}
                                    /> 
                                    <TextField
                                            className="mt-8 mb-16"
                                            required
                                            label="Endpoint"
                                            autoFocus
                                            variant="outlined"
                                            fullWidth
                                            disabled
                                            value={"/SuccessFactors/OnDemand"}
                                        />                          
                                </div>
                            </div>
                        </div>
                    </>
                    }
                />
            </div>
        </div>
      }
    />
  );
}

export default InterfaceExecution;

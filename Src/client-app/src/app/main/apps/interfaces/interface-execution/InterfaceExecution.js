import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple';
import PageCarded from 'src/baseComponents/core/CardedPage/PageCarded';
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import InterfaceExecutionHeader from './InterfaceExecutionHeader';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Select, TextField, Typography, MenuItem } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import SvgIcon from 'src/baseComponents/core/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from "react-redux";
import { getInterfaces } from './store/interfacesSlice';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

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
    const [severity, setSeverity] = useState("success");
    const [alertMessage, setAlertMessage] = useState("This is a success message!");
    const dispatch = useDispatch();
    const selectedInterface = useSelector((store) => store.interface);
    console.log("selectedInterface");
    console.log(selectedInterface);
    console.log(Object.keys(selectedInterface).length);

    useEffect(() => {
        dispatch(getInterfaces());
    }, [dispatch]);

    function handleTabChange(event, value) {
        setTabValue(value);
    }

    function InputEmployeeCodes(e)
    {
        e.preventDefault();
        var content = e.target.value;
        var dataArray = content.split("\n");
        setEmployeeCodes(dataArray.join(","));
    }

    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
        setOpenBackdrop(false);
    };

    async function RunInterface(e)
    {
        e.preventDefault();
        if(employeeCodes !== "")
        {
            setEmployeeCodes("");
            setOpenBackdrop(true);
            setOpenSnackbar(true);
        }
        else
        {
            setSeverity("error");
            setAlertMessage("You need to add some employee codes!");
            setOpenSnackbar(true);
        }
    }
    
    return (
        <Root header={<InterfaceExecutionHeader />} content={
            <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                <div className="w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0">
                    <PageCarded
                        content={
                        <>
                            {
                                Object.keys(selectedInterface).length > 0 ?
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
                                                <Button className="mx-8 whitespace-nowrap" onClick={RunInterface} variant="contained" color="secondary">
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
                                                <Select disabled className="mt-8 mb-16" value={selectedInterface?.method} label="Methods">
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
                                                    value={selectedInterface?.url}
                                                /> 
                                                <TextField
                                                        className="mt-8 mb-16"
                                                        required
                                                        label="Endpoint"
                                                        autoFocus
                                                        variant="outlined"
                                                        fullWidth
                                                        disabled
                                                        value={selectedInterface?.endpoint}
                                                    />                          
                                            </div>
                                        </div>
                                    </div>
                                    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openBackdrop} onClick={handleCloseBackdrop} >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                    <Stack spacing={2} sx={{ width: '100%' }}>
                                        <Snackbar style={{paddingBottom: "60px"}} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                                            <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                                                {alertMessage}
                                            </Alert>
                                        </Snackbar>
                                    </Stack>
                                </>
                                :
                                <></>
                            }
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

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import NavLinkAdapter from 'src/BaseTemplate/core/NavLinkAdapter';
import SvgIcon from 'src/BaseTemplate/core/SvgIcon';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';


function MapInfoHeader(props) {
    const [displayModal, setDisplayModal] = useState(false);

    function ShowModal()
    {
        setDisplayModal(true);
    }

    function HideModal()
    {
        setDisplayModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <>
            <div className="flex flex-col sm:flex-row flex-1 w-full space-y-8 sm:space-y-0 items-center justify-between py-32 px-24 md:px-32">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-12">
                    <Typography
                    component={motion.span}
                    initial={{ x: -20 }}
                    animate={{ x: 0, transition: { delay: 0.2 } }}
                    delay={300}
                    className="text-24 md:text-32 font-extrabold tracking-tight leading-none"
                    >
                    Map Info
                    </Typography>
                    <Typography
                    component={motion.span}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                    delay={500}
                    className="text-14 font-medium ml-2"
                    color="text.secondary"
                    >
                    {`Reference Table Maintenance`}
                    </Typography>
                </div>

                <div className="flex items-center -mx-8">
                    <Button className="mx-8 whitespace-nowrap" variant="contained" color="secondary" onClick={ShowModal}>
                        <SvgIcon size={20}>heroicons-outline:plus</SvgIcon>
                        <span className="mx-8">Add Map Info</span>
                    </Button>
                </div>            
            </div>
            <Modal open={displayModal} onClose={HideModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Box sx={style}>                    
                    <div className="mb-24">
                        <div className="pb-16 flex items-center">
                            <SvgIcon color="inherit">material-outline:map</SvgIcon> &nbsp;                       
                            <Typography className="text-2xl font-bold tracking-tight">
                                Add New Map Info
                            </Typography>
                        </div>
                        <Typography color="text.secondary">
                            Attention. This configurations could affect the transformation process on the Staging table
                        </Typography>
                    </div>
                    <div>
                        <div className="flex -mx-3">
                            <TextField
                                className="mt-8 mb-16 mx-4"
                                label="Key 1"
                                type="text"
                                multiline
                                rows={1}
                                variant="outlined"
                            />
                            <TextField
                                className="mt-8 mb-16 mx-4"
                                label="Key 2"
                                type="text"
                                multiline
                                rows={1}
                                variant="outlined"
                            />
                            <TextField
                                className="mt-8 mb-16 mx-4"
                                label="Key 3"
                                type="text"
                                multiline
                                rows={1}
                                variant="outlined"
                            />
                        </div>
                        <div className="flex -mx-4">
                            <TextField
                                className="mt-8 mb-16"
                                label="Value"
                                type="text"
                                multiline
                                rows={3}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="flex items-center justify-end mt-32">
                            <Button className="mx-8 whitespace-nowrap" variant="contained" color="secondary" onClick={ShowModal}>
                                <SvgIcon size={20}>heroicons-outline:save</SvgIcon>
                                <span className="mx-8">Save</span>
                            </Button>
                        </div>
                            
                    </div>
                </Box>
            </Modal>
        </>        
    );
}

export default MapInfoHeader;

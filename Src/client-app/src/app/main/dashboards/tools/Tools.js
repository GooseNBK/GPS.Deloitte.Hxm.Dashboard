import { useEffect, useState } from 'react';
import PageSimple from 'src/baseComponents/core/SimplePage/PageSimple'
import _ from '@lodash';
import { styled } from '@mui/material/styles';
import ToolsHeader from './ToolsHeader';
import { useDispatch, useSelector } from "react-redux";


const Root = styled(PageSimple)(({ theme }) => ({
  '& .PageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px  ${theme.palette.divider}`,
  },
}));

function SuccessFactors(props) {
  const dispatch = useDispatch(); 

    useEffect(() => {
      //dispatch(getSuccessFactors());
  }, [dispatch]);
  
  return (
    <Root header={<ToolsHeader />} content={
      <>
          
      </>        
      }
    />
  );
}

export default SuccessFactors;

import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeDialog,
  selectFuseDialogOptions,
  selectFuseDialogState,
} from 'app/store/common/dialogSlice';

function DialogBox(props) {
  const dispatch = useDispatch();
  const state = useSelector(selectFuseDialogState);
  const options = useSelector(selectFuseDialogOptions);

  return (
    <Dialog
      open={state}
      onClose={(ev) => dispatch(closeDialog())}
      aria-labelledby="dialog-title"
      classes={{
        paper: 'rounded-8',
      }}
      {...options}
    />
  );
}

export default DialogBox;

import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFuseCurrentLayoutConfig, selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import AdjustFontSize from '../../shared-components/AdjustFontSize';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import NotificationPanelToggleButton from '../../shared-components/notificationPanel/NotificationPanelToggleButton';
import UserMenu from '../../shared-components/UserMenu';

function ToolbarLayout2(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const toolbarTheme = useSelector(selectToolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow-md', props.className)}
        color="default"
        style={{ backgroundColor: toolbarTheme.palette.background.paper }}
      >
        <Toolbar className="container p-0 lg:px-24 min-h-48 md:min-h-64">

          <div className="flex flex-1">
            
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">

            <AdjustFontSize />

            <FullScreenToggle />

            <NotificationPanelToggleButton />

            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout2);

import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import PageSimpleHeader from './PageSimpleHeader';
import Scrollbars from '../Scrollbars/Scrollbars';

const Root = styled('div')(({ theme, ...props }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: '100%',
  position: 'relative',
  flex: '1 1 auto',
  width: '100%',
  height: 'auto',
  backgroundColor: theme.palette.background.default,

  '&.PageSimple-scroll-content': {
    height: '100%',
  },

  '& .PageSimple-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    zIndex: 2,
    minWidth: 0,
    height: '100%',
    backgroundColor: theme.palette.background.default,

    ...(props.scroll === 'content' && {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflow: 'hidden',
    }),
  },

  '& .PageSimple-header': {
    display: 'flex',
    flex: '0 0 auto',
    backgroundSize: 'cover',
  },

  '& .PageSimple-topBg': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    pointerEvents: 'none',
  },

  '& .PageSimple-contentWrapper': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: '1 1 auto',
    overflow: 'hidden',
    //    WebkitOverflowScrolling: 'touch',
    zIndex: 9999,
  },

  '& .PageSimple-toolbar': {
    height: toolbarHeight,
    minHeight: toolbarHeight,
    display: 'flex',
    alignItems: 'center',
  },

  '& .PageSimple-content': {
    display: 'flex',
    flex: '1 1 auto',
    alignItems: 'start',
    minHeight: 0,
    overflowY: 'auto',
  },

  '& .PageSimple-sidebarWrapper': {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    position: 'absolute',
    '&.permanent': {
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
        marginLeft: 0,
        marginRight: 0,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        '&.closed': {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),

          '&.PageSimple-leftSidebar': {
            marginLeft: -props.leftsidebarwidth,
          },
          '&.PageSimple-rightSidebar': {
            marginRight: -props.rightsidebarwidth,
          },
        },
      },
    },
  },

  '& .PageSimple-sidebar': {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,

    '&.permanent': {
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
      },
    },
    maxWidth: '100%',
    height: '100%',
  },

  '& .PageSimple-leftSidebar': {
    width: props.leftsidebarwidth,

    [theme.breakpoints.up('lg')]: {
      borderRight: `1px solid ${theme.palette.divider}`,
      borderLeft: 0,
    },
  },

  '& .PageSimple-rightSidebar': {
    width: props.rightsidebarwidth,

    [theme.breakpoints.up('lg')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: 0,
    },
  },

  '& .PageSimple-sidebarHeader': {
    height: headerHeight,
    minHeight: headerHeight,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },

  '& .PageSimple-sidebarHeaderInnerSidebar': {
    backgroundColor: 'transparent',
    color: 'inherit',
    height: 'auto',
    minHeight: 'auto',
  },

  '& .PageSimple-sidebarContent': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },

  '& .PageSimple-backdrop': {
    position: 'absolute',
  },
}));

const headerHeight = 120;
const toolbarHeight = 64;

const PageSimple = forwardRef((props, ref) => {
  const leftSidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);
  const rootRef = useRef(null);

  useImperativeHandle(ref, () => ({
    rootRef,
    toggleLeftSidebar: (val) => {
      leftSidebarRef.current.toggleSidebar(val);
    },
    toggleRightSidebar: (val) => {
      rightSidebarRef.current.toggleSidebar(val);
    },
  }));

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          ...(props.scroll !== 'page' && {
            '#fuse-toolbar': {
              position: 'static',
            },
            '#fuse-footer': {
              position: 'static',
            },
          }),
          ...(props.scroll === 'page' && {
            '#fuse-toolbar': {
              position: 'sticky',
              top: 0,
            },
            '#fuse-footer': {
              position: 'sticky',
              bottom: 0,
            },
          }),
        })}
      />
      <Root
        className={clsx(
          'PageSimple-root',
          `PageSimple-scroll-${props.scroll}`,
          props.className
        )}
        ref={rootRef}
        scroll={props.scroll}
        leftsidebarwidth={props.leftSidebarWidth}
        rightsidebarwidth={props.rightSidebarWidth}
      >
        <div className="flex flex-auto flex-col z-10 h-full">
          <div className="PageSimple-wrapper">
            <div
              className="PageSimple-contentWrapper"
              // enable={props.scroll === 'page'}
            >
              {props.header && <PageSimpleHeader header={props.header} />}
              {props.content && (
                <Scrollbars
                  enable={props.scroll === 'content'}
                  className={clsx('PageSimple-content container')}
                >
                  {props.content}
                </Scrollbars>
              )}
            </div>
          </div>
        </div>
      </Root>
    </>
  );
});

PageSimple.propTypes = {
  leftSidebarContent: PropTypes.node,
  leftSidebarVariant: PropTypes.node,
  rightSidebarContent: PropTypes.node,
  rightSidebarVariant: PropTypes.node,
  header: PropTypes.node,
  content: PropTypes.node,
  scroll: PropTypes.oneOf(['normal', 'page', 'content']),
  leftSidebarOpen: PropTypes.bool,
  rightSidebarOpen: PropTypes.bool,
  leftSidebarWidth: PropTypes.number,
  rightSidebarWidth: PropTypes.number,
  rightSidebarOnClose: PropTypes.func,
  leftSidebarOnClose: PropTypes.func,
};

PageSimple.defaultProps = {
  classes: {},
  scroll: 'page',
  leftSidebarOpen: false,
  rightSidebarOpen: false,
  rightSidebarWidth: 240,
  leftSidebarWidth: 240,
};

export default memo(styled(PageSimple)``);

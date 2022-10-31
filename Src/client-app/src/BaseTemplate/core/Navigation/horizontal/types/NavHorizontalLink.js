import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import withRouter from 'src/BaseTemplate/core/WithRouter';
import NavBadge from '../../NavBadge';
import SvgIcon from 'src/BaseTemplate/core/SvgIcon';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none!important',
  minHeight: 48,
  '&.active': {
    backgroundColor: `${theme.palette.secondary.main}!important`,
    color: `${theme.palette.secondary.contrastText}!important`,
    pointerEvents: 'none',
    '& .list-item-text-primary': {
      color: 'inherit',
    },
    '& .list-item-icon': {
      color: 'inherit',
    },
  },
  '& .list-item-icon': {},
  '& .list-item-text': {
    padding: '0 0 0 16px',
  },
}));

function NavHorizontalLink(props) {
  const { item } = props;

  return useMemo(
    () => (
      <StyledListItem
        button
        component="a"
        href={item.url}
        target={item.target ? item.target : '_blank'}
        className={clsx('list-item')}
        role="button"
        sx={item.sx}
        disabled={item.disabled}
      >
        {item.icon && (
          <SvgIcon
            className={clsx('list-item-icon shrink-0', item.iconClass)}
            color="action"
          >
            {item.icon}
          </SvgIcon>
        )}

        <ListItemText
          className="list-item-text"
          primary={item.title}
          classes={{ primary: 'text-13 list-item-text-primary truncate' }}
        />

        {item.badge && <NavBadge className="ltr:ml-8 rtl:mr-8" badge={item.badge} />}
      </StyledListItem>
    ),
    [item.badge, item.icon, item.iconClass, item.target, item.title, item.url]
  );
}

NavHorizontalLink.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
};

NavHorizontalLink.defaultProps = {};

const NavHorizontalLink1 = withRouter(memo(NavHorizontalLink));

export default NavHorizontalLink;

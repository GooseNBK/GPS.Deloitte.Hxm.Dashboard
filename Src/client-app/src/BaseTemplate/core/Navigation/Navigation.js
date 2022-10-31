import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { memo } from 'react';
import _ from '@lodash';
import GlobalStyles from '@mui/material/GlobalStyles';
import FuseNavHorizontalLayout1 from './horizontal/NavHorizontalLayout1';
import FuseNavHorizontalCollapse from './horizontal/types/NavHorizontalCollapse';
import FuseNavHorizontalGroup from './horizontal/types/NavHorizontalGroup';
import FuseNavHorizontalItem from './horizontal/types/NavHorizontalItem';
import FuseNavHorizontalLink from './horizontal/types/NavHorizontalLink';
import { registerComponent } from './NavItem';

const inputGlobalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      '.popper-navigation-list': {
        '& .fuse-list-item': {
          padding: '8px 12px 8px 12px',
          height: 40,
          minHeight: 40,
          '& .fuse-list-item-text': {
            padding: '0 0 0 8px',
          },
        },
        '&.dense': {
          '& .fuse-list-item': {
            minHeight: 32,
            height: 32,
            '& .fuse-list-item-text': {
              padding: '0 0 0 8px',
            },
          },
        },
      },
    })}
  />
);

/*
Register Fuse Navigation Components
 */
registerComponent('horizontal-group', FuseNavHorizontalGroup);
registerComponent('horizontal-collapse', FuseNavHorizontalCollapse);
registerComponent('horizontal-item', FuseNavHorizontalItem);
registerComponent('horizontal-link', FuseNavHorizontalLink);
registerComponent('vertical-divider', () => <Divider className="my-16" />);
registerComponent('horizontal-divider', () => <Divider className="my-16" />);

function Navigation(props) {
  const options = _.pick(props, [
    'navigation',
    'layout',
    'active',
    'dense',
    'className',
    'onItemClick',
    'firstLevel',
    'selectedId',
  ]);
  if (props.navigation.length > 0) {
    return (
      <>
        {inputGlobalStyles}
        {props.layout === 'horizontal' && <FuseNavHorizontalLayout1 {...options} />}
      </>
    );
  }
  return null;
}

Navigation.propTypes = {
  navigation: PropTypes.array.isRequired,
};

Navigation.defaultProps = {
  layout: 'vertical',
};

export default memo(Navigation);

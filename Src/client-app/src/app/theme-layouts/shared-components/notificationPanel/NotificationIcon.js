import SvgIcon from 'src/BaseTemplate/core/SvgIcon';

const NotificationIcon = ({ value }) => {
  switch (value) {
    case 'error': {
      return (
        <SvgIcon className="mr-8 opacity-75" color="inherit">
          heroicons-outline:minus-circle
        </SvgIcon>
      );
    }
    case 'success': {
      return (
        <SvgIcon className="mr-8 opacity-75" color="inherit">
          heroicons-outline:check-circle
        </SvgIcon>
      );
    }
    case 'warning': {
      return (
        <SvgIcon className="mr-8 opacity-75" color="inherit">
          heroicons-outline:exclamation-circle
        </SvgIcon>
      );
    }
    case 'info': {
      return (
        <SvgIcon className="mr-8 opacity-75" color="inherit">
          heroicons-outline:information-circle
        </SvgIcon>
      );
    }
    default: {
      return null;
    }
  }
};

export default NotificationIcon;

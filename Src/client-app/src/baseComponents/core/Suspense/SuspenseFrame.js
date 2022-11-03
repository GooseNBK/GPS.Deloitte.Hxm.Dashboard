import Loading from 'src/baseComponents/core/Loading';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */ function SuspenseFrame(props) {
  return <Suspense fallback={<Loading {...props.loadingProps} />}>{props.children}</Suspense>;
}

SuspenseFrame.propTypes = {
  loadingProps: PropTypes.object,
};

SuspenseFrame.defaultProps = {
  loadingProps: {
    delay: 0,
  },
};

export default SuspenseFrame;

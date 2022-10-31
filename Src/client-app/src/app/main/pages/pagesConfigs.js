import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
const pagesConfigs = [
  ...authenticationPagesConfig,
  errorPagesConfig,
];

export default pagesConfigs;

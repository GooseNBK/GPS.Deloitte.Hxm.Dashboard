import './api/dashboards/analytics-api';
import './api/ui/icons-api';
import './api/countries-api';
import './api/auth-api';
import './api/notifications-api';
import history from '@history';
import mock from './mock';

mock.onAny().passThrough();

if (module?.hot?.status() === 'apply') {
  const { pathname } = history.location;
  history.push('/loading');
  history.push({ pathname });
}

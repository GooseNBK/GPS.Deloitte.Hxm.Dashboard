
const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.interface',
        title: 'Interface',
        type: 'item',
        icon: 'heroicons-outline:clipboard-check',
        url: '/dashboards/interface',
      },
      {
        id: 'dashboards.analytics',
        title: 'Analytics',
        type: 'item',
        icon: 'heroicons-outline:chart-pie',
        url: '/dashboards/analytics',
      },
    ],
  },
  {
    id: 'app-content',
    title: 'App Content',
    subtitle: 'App Content',
    type: 'group',
    icon: 'heroicons-outline:cube',
    url: '/dashboards/analytics',
  },
  {
    id: 'user-management',
    title: 'User Management',
    subtitle: 'User Management',
    type: 'group',
    icon: 'heroicons-outline:user',
    url: '/dashboards/analytics',
  },
  {
    id: 'master-data',
    title: 'Master Data',
    subtitle: 'Master Data',
    type: 'group',
    icon: 'heroicons-outline:server',
    url: '/dashboards/analytics',
  },
  {
    id: 'grid-ui',
    title: 'Grid UI',
    subtitle: 'Grid UI',
    type: 'group',
    icon: 'heroicons-outline:table',
    url: '/dashboards/analytics',
  },
  {
    id: 'app-settings',
    title: 'App Settings',
    subtitle: 'App Settings',
    type: 'group',
    icon: 'heroicons-outline:adjustments',
    url: '/dashboards/analytics',
  },
];

export default navigationConfig;

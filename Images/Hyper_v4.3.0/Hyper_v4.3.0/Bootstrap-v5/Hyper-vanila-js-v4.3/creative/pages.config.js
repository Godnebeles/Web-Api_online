'use strict';

// entries
const _entries = {
  app: './src/js/app.js',
  dashboardEcommerce: './src/js/dashboard/ecommerce.js',
  dashboardAnalytics: './src/js/dashboard/analytics.js',
  dashboardCRM: './src/js/dashboard/crm.js',
  dashboardProjects: './src/js/dashboard/projects.js',
  calendarApp: './src/js/apps/calendar.js',
  chatApp: './src/js/apps/chat.js',
  ecommerceApp:'./src/js/apps/ecommerce/app.js',
  ecommerceProducts:'./src/js/apps/ecommerce/products.js',
  ecommerceOrders:'./src/js/apps/ecommerce/orders.js',
  ecommerceCustomers:'./src/js/apps/ecommerce/customers.js',
  ecommerceSellers:'./src/js/apps/ecommerce/sellers.js',
  email:'./src/js/apps/email.js',
  projectApp:'./src/js/apps/project.js',
  taskApp:'./src/js/apps/task.js',
  profilePage:'./src/js/pages/profile.js',
  baseUi:'./src/js/ui/base-ui.js',
  widgets:'./src/js/ui/widgets.js',
  materialDesignIcons:'./src/js/ui/material-design-icons.js',
  apexArea:'./src/js/ui/charts/apex-area.js',
  apexBar:'./src/js/ui/charts/apex-bar.js',
  apexBubble:'./src/js/ui/charts/apex-bubble.js',
  apexCandlestick:'./src/js/ui/charts/apex-candlestick.js',
  apexColumn:'./src/js/ui/charts/apex-column.js',
  apexHeatmap:'./src/js/ui/charts/apex-heatmap.js',
  apexLine:'./src/js/ui/charts/apex-line.js',
  apexMixed:'./src/js/ui/charts/apex-mixed.js',
  apexPie:'./src/js/ui/charts/apex-pie.js',
  apexRadar:'./src/js/ui/charts/apex-radar.js',
  apexRadialbar:'./src/js/ui/charts/apex-radialbar.js',
  apexScatter:'./src/js/ui/charts/apex-scatter.js',
  apexSparklines:'./src/js/ui/charts/apex-sparklines.js',
  brite:'./src/js/ui/charts/brite.js',
  chartJS:'./src/js/ui/charts/chartjs.js',
  gridDataTable:'./src/js/ui/grid-datatable.js',
  googleMap:'./src/js/ui/maps/google-map.js',
  vectorMap:'./src/js/ui/maps/vector-map.js',
  dragula:'./src/js/ui/dragula.js',
  advancedForm:'./src/js/ui/forms/advanced.js',
  editorsForm:'./src/js/ui/forms/editors.js',
  fileUploadForm:'./src/js/ui/forms/file-upload.js',
  wizardForm:'./src/js/ui/forms/wizard.js',
  validationForm:'./src/js/ui/forms/validation.js',

};

// pages
const _pages = [
  {
    template: 'index.html',
    name: 'index',
    filename: 'index.html',
    chunks: ['dashboardEcommerce'],
  }, {
    template: 'dashboard-analytics.html',
    name: 'dashboard-analytics',
    filename: 'dashboard-analytics.html',
    chunks: ['dashboardAnalytics'],
  }, {
    template: 'dashboard-crm.html',
    name: 'dashboard-crm',
    filename: 'dashboard-crm.html',
    chunks: ['dashboardCRM'],
  }, {
    template: 'dashboard-projects.html',
    name: 'dashboard-projects',
    filename: 'dashboard-projects.html',
    chunks: ['dashboardProjects'],
  }, {
    template: 'apps-calendar.html',
    name: 'apps-calendar',
    filename: 'apps-calendar.html',
    chunks: ['calendarApp'],
  }, {
    template: 'apps-chat.html',
    name: 'apps-chat',
    filename: 'apps-chat.html',
    chunks: ['chatApp'],
  },{
    template: 'apps-ecommerce-products.html',
    name: 'apps-ecommerce-products',
    filename: 'apps-ecommerce-products.html',
    chunks: ['ecommerceProducts'],
  },
  {
    template: 'apps-ecommerce-products-details.html',
    name: 'apps-ecommerce-products-details',
    filename: 'apps-ecommerce-products-details.html',
    chunks: ['ecommerceApp'],
  },
  {
    template: 'apps-ecommerce-orders.html',
    name: 'apps-ecommerce-orders',
    filename: 'apps-ecommerce-orders.html',
    chunks: ['ecommerceOrders'],
  },
  {
    template: 'apps-ecommerce-orders-details.html',
    name: 'apps-ecommerce-orders-details',
    filename: 'apps-ecommerce-orders-details.html',
    chunks: ['ecommerceApp'],
  },
  {
    template: 'apps-ecommerce-customers.html',
    name: 'apps-ecommerce-customers',
    filename: 'apps-ecommerce-customers.html',
    chunks: ['ecommerceCustomers'],
  },
  {
    template: 'apps-ecommerce-shopping-cart.html',
    name: 'apps-ecommerce-shopping-cart',
    filename: 'apps-ecommerce-shopping-cart.html',
    chunks: ['ecommerceApp'],
  },
  {
    template: 'apps-ecommerce-checkout.html',
    name: 'apps-ecommerce-checkout',
    filename: 'apps-ecommerce-checkout.html',
    chunks: ['ecommerceApp'],
  },
  {
    template: 'apps-ecommerce-sellers.html',
    name: 'apps-ecommerce-sellers',
    filename: 'apps-ecommerce-sellers.html',
    chunks: ['ecommerceSellers'],
  },
  {
    template: 'apps-email-inbox.html',
    name: 'apps-email-inbox',
    filename: 'apps-email-inbox.html',
    chunks: ['email'],
  },
  {
    template: 'apps-email-read.html',
    name: 'apps-email-read',
    filename: 'apps-email-read.html',
    chunks: ['email'],
  },
  {
    template: 'apps-projects-add.html',
    name: 'apps-projects-add',
    filename: 'apps-projects-add.html',
    chunks: ['projectApp'],
  },
  {
    template: 'apps-projects-list.html',
    name: 'apps-projects-list',
    filename: 'apps-projects-list.html',
    chunks: [],
  },
  {
    template: 'apps-projects-details.html',
    name: 'apps-projects-details',
    filename: 'apps-projects-details.html',
    chunks: ['projectApp'],
  },
  {
    template: 'apps-projects-gantt.html',
    name: 'apps-projects-gantt',
    filename: 'apps-projects-gantt.html',
    chunks: ['projectApp'],
  },
  {
    template: 'apps-social-feed.html',
    name: 'apps-social-feed',
    filename: 'apps-social-feed.html',
    chunks: [],
  },
  {
    template: 'apps-tasks.html',
    name: 'apps-tasks',
    filename: 'apps-tasks.html',
    chunks: ['taskApp'],
  },
  {
    template: 'apps-tasks-details.html',
    name: 'apps-tasks-details',
    filename: 'apps-tasks-details.html',
    chunks: ['taskApp'],
  },
  {
    template: 'apps-kanban.html',
    name: 'apps-kanban',
    filename: 'apps-kanban.html',
    chunks: ['taskApp'],
  },
  {
    template: 'apps-file-manager.html',
    name: 'apps-file-manager',
    filename: 'apps-file-manager.html',
    chunks: [],
  },
  {
    template: 'apps-file-manager.html',
    name: 'apps-file-manager',
    filename: 'apps-file-manager.html',
    chunks: [],
  },
  {
    template: 'pages-profile.html',
    name: 'pages-profile',
    filename: 'pages-profile.html',
    chunks: ['profilePage'],
  },
  {
    template: 'pages-profile-2.html',
    name: 'pages-profile-2',
    filename: 'pages-profile-2.html',
    chunks: ['profilePage'],
  },
  {
    template: 'pages-invoice.html',
    name: 'pages-invoice',
    filename: 'pages-invoice.html',
    chunks: [],
  },
  {
    template: 'pages-faq.html',
    name: 'pages-faq',
    filename: 'pages-faq.html',
    chunks: [],
  },
  {
    template: 'pages-pricing.html',
    name: 'pages-pricing',
    filename: 'pages-pricing.html',
    chunks: [],
  },
  {
    template: 'pages-maintenance.html',
    name: 'pages-maintenance',
    filename: 'pages-maintenance.html',
    chunks: [],
  },
  {
    template: 'pages-login.html',
    name: 'pages-login',
    filename: 'pages-login.html',
    chunks: [],
  },
  {
    template: 'pages-login-2.html',
    name: 'pages-login-2',
    filename: 'pages-login-2.html',
    chunks: [],
  },
  {
    template: 'pages-register.html',
    name: 'pages-register',
    filename: 'pages-register.html',
    chunks: [],
  },
  {
    template: 'pages-register-2.html',
    name: 'pages-register-2',
    filename: 'pages-register-2.html',
    chunks: [],
  },
  {
    template: 'pages-logout.html',
    name: 'pages-logout',
    filename: 'pages-logout.html',
    chunks: [],
  },
  {
    template: 'pages-logout-2.html',
    name: 'pages-logout-2',
    filename: 'pages-logout-2.html',
    chunks: [],
  },
  {
    template: 'pages-recoverpw.html',
    name: 'pages-recoverpw',
    filename: 'pages-recoverpw.html',
    chunks: [],
  },
  {
    template: 'pages-recoverpw-2.html',
    name: 'pages-recoverpw-2',
    filename: 'pages-recoverpw-2.html',
    chunks: [],
  },
  {
    template: 'pages-lock-screen.html',
    name: 'pages-lock-screen',
    filename: 'pages-lock-screen.html',
    chunks: [],
  },
  {
    template: 'pages-lock-screen-2.html',
    name: 'pages-lock-screen-2',
    filename: 'pages-lock-screen-2.html',
    chunks: [],
  },
  {
    template: 'pages-confirm-mail.html',
    name: 'pages-confirm-mail',
    filename: 'pages-confirm-mail.html',
    chunks: [],
  },
  {
    template: 'pages-confirm-mail-2.html',
    name: 'pages-confirm-mail-2',
    filename: 'pages-confirm-mail-2.html',
    chunks: [],
  },
  {
    template: 'pages-404.html',
    name: 'pages-404',
    filename: 'pages-404.html',
    chunks: [],
  },
  {
    template: 'pages-404-alt.html',
    name: 'pages-404-alt',
    filename: 'pages-404-alt.html',
    chunks: [],
  },{
    template: 'pages-500.html',
    name: 'pages-500',
    filename: 'pages-500.html',
    chunks: [],
  },{
    template: 'pages-starter.html',
    name: 'pages-starter',
    filename: 'pages-starter.html',
    chunks: [],
  },{
    template: 'pages-preloader.html',
    name: 'pages-preloader',
    filename: 'pages-preloader.html',
    chunks: ['dashboardCRM'],
  },{
    template: 'pages-timeline.html',
    name: 'pages-timeline',
    filename: 'pages-timeline.html',
    chunks: [],
  },{
    template: 'landing.html',
    name: 'landing',
    filename: 'landing.html',
    chunks: [],
  },{
    template: 'layouts-detached.html',
    name: 'layouts-detached',
    filename: 'layouts-detached.html',
    chunks: ['dashboardEcommerce'],
  },{
    template: 'layouts-vertical.html',
    name: 'layouts-vertical',
    filename: 'layouts-vertical.html',
    chunks: ['dashboardEcommerce'],
  },
  {
    template: 'ui-accordions.html',
    name: 'ui-accordions',
    filename: 'ui-accordions.html',
    chunks: [],
  },
  {
    template: 'ui-alerts.html',
    name: 'ui-alerts',
    filename: 'ui-alerts.html',
    chunks: [],
  },
  {
    template: 'ui-avatars.html',
    name: 'ui-avatars',
    filename: 'ui-avatars.html',
    chunks: [],
  },
  {
    template: 'ui-badges.html',
    name: 'ui-badges',
    filename: 'ui-badges.html',
    chunks: [],
  },
  {
    template: 'ui-breadcrumb.html',
    name: 'ui-breadcrumb',
    filename: 'ui-breadcrumb.html',
    chunks: [],
  },
  {
    template: 'ui-buttons.html',
    name: 'ui-buttons',
    filename: 'ui-buttons.html',
    chunks: [],
  },
  {
    template: 'ui-cards.html',
    name: 'ui-cards',
    filename: 'ui-cards.html',
    chunks: [],
  },
  {
    template: 'ui-carousel.html',
    name: 'ui-carousel',
    filename: 'ui-carousel.html',
    chunks: [],
  },
  {
    template: 'ui-dropdowns.html',
    name: 'ui-dropdowns',
    filename: 'ui-dropdowns.html',
    chunks: [],
  },
  {
    template: 'ui-embed-video.html',
    name: 'ui-embed-video',
    filename: 'ui-embed-video.html',
    chunks: [],
  },
  {
    template: 'ui-grid.html',
    name: 'ui-grid',
    filename: 'ui-grid.html',
    chunks: [],
  },
  {
    template: 'ui-list-group.html',
    name: 'ui-list-group',
    filename: 'ui-list-group.html',
    chunks: [],
  },
  {
    template: 'ui-modals.html',
    name: 'ui-modals',
    filename: 'ui-modals.html',
    chunks: [],
  },
  {
    template: 'ui-notifications.html',
    name: 'ui-notifications',
    filename: 'ui-notifications.html',
    chunks: ['baseUi'],
  },
  {
    template: 'ui-offcanvas.html',
    name: 'ui-offcanvas',
    filename: 'ui-offcanvas.html',
    chunks: [],
  },
  {
    template: 'ui-pagination.html',
    name: 'ui-pagination',
    filename: 'ui-pagination.html',
    chunks: [],
  },
  {
    template: 'ui-popovers.html',
    name: 'ui-popovers',
    filename: 'ui-popovers.html',
    chunks: [],
  },
  {
    template: 'ui-progress.html',
    name: 'ui-progress',
    filename: 'ui-progress.html',
    chunks: [],
  },
  {
    template: 'ui-ribbons.html',
    name: 'ui-ribbons',
    filename: 'ui-ribbons.html',
    chunks: [],
  },
  {
    template: 'ui-spinners.html',
    name: 'ui-spinners',
    filename: 'ui-spinners.html',
    chunks: [],
  },
  {
    template: 'ui-tabs.html',
    name: 'ui-tabs',
    filename: 'ui-tabs.html',
    chunks: [],
  },
  {
    template: 'ui-tooltips.html',
    name: 'ui-tooltips',
    filename: 'ui-tooltips.html',
    chunks: [],
  },
  {
    template: 'ui-typography.html',
    name: 'ui-typography',
    filename: 'ui-typography.html',
    chunks: [],
  },
  {
    template: 'widgets.html',
    name: 'widgets',
    filename: 'widgets.html',
    chunks: ['widgets'],
  },
  {
    template: 'icons-dripicons.html',
    name: 'icons-dripicons',
    filename: 'icons-dripicons.html',
    chunks: [],
  },
  {
    template: 'icons-mdi.html',
    name: 'icons-mdi',
    filename: 'icons-mdi.html',
    chunks: ['materialDesignIcons'],
  },
  {
    template: 'icons-unicons.html',
    name: 'icons-unicons',
    filename: 'icons-unicons.html',
    chunks: [],
  },
  {
    template: 'charts-apex-area.html',
    name: 'charts-apex-area',
    filename: 'charts-apex-area.html',
    chunks: ['apexArea'],
  },
  {
    template: 'charts-apex-bar.html',
    name: 'charts-apex-bar',
    filename: 'charts-apex-bar.html',
    chunks: ['apexBar'],
  },
  {
    template: 'charts-apex-bubble.html',
    name: 'charts-apex-bubble',
    filename: 'charts-apex-bubble.html',
    chunks: ['apexBubble'],
  },
  {
    template: 'charts-apex-candlestick.html',
    name: 'charts-apex-candlestick',
    filename: 'charts-apex-candlestick.html',
    chunks: ['apexCandlestick'],
  },
  {
    template: 'charts-apex-column.html',
    name: 'charts-apex-column',
    filename: 'charts-apex-column.html',
    chunks: ['apexColumn'],
  },
  {
    template: 'charts-apex-heatmap.html',
    name: 'charts-apex-heatmap',
    filename: 'charts-apex-heatmap.html',
    chunks: ['apexHeatmap'],
  },
  {
    template: 'charts-apex-line.html',
    name: 'charts-apex-line',
    filename: 'charts-apex-line.html',
    chunks: ['apexLine'],
  },
  {
    template: 'charts-apex-mixed.html',
    name: 'charts-apex-mixed',
    filename: 'charts-apex-mixed.html',
    chunks: ['apexMixed'],
  },
  {
    template: 'charts-apex-pie.html',
    name: 'charts-apex-pie',
    filename: 'charts-apex-pie.html',
    chunks: ['apexPie'],
  },
  {
    template: 'charts-apex-radar.html',
    name: 'charts-apex-radar',
    filename: 'charts-apex-radar.html',
    chunks: ['apexRadar'],
  },
  {
    template: 'charts-apex-radialbar.html',
    name: 'charts-apex-radialbar',
    filename: 'charts-apex-radialbar.html',
    chunks: ['apexRadialbar'],
  },
  {
    template: 'charts-apex-scatter.html',
    name: 'charts-apex-scatter',
    filename: 'charts-apex-scatter.html',
    chunks: ['apexScatter'],
  },
  {
    template: 'charts-apex-sparklines.html',
    name: 'charts-apex-sparklines',
    filename: 'charts-apex-sparklines.html',
    chunks: ['apexSparklines'],
  },
  {
    template: 'charts-brite.html',
    name: 'charts-brite',
    filename: 'charts-brite.html',
    chunks: ['brite'],
  },
  {
    template: 'charts-chartjs.html',
    name: 'charts-chartjs',
    filename: 'charts-chartjs.html',
    chunks: ['chartJS'],
  },
  {
    template: 'tables-basic.html',
    name: 'tables-basic',
    filename: 'tables-basic.html',
    chunks: [],
  },
  {
    template: 'tables-datatable.html',
    name: 'tables-datatable',
    filename: 'tables-datatable.html',
    chunks: ['gridDataTable'],
  },
  {
    template: 'maps-google.html',
    name: 'maps-google',
    filename: 'maps-google.html',
    chunks: ['googleMap'],
  },
  {
    template: 'maps-vector.html',
    name: 'maps-vector',
    filename: 'maps-vector.html',
    chunks: ['vectorMap'],
  },
  {
    template: 'extended-dragula.html',
    name: 'extended-dragula',
    filename: 'extended-dragula.html',
    chunks: ['dragula'],
  },
  {
    template: 'extended-scrollbar.html',
    name: 'extended-scrollbar',
    filename: 'extended-scrollbar.html',
    chunks: [],
  },
  {
    template: 'extended-scrollspy.html',
    name: 'extended-scrollspy',
    filename: 'extended-scrollspy.html',
    chunks: [],
  },
  {
    template: 'form-advanced.html',
    name: 'form-advanced',
    filename: 'form-advanced.html',
    chunks: ['advancedForm'],
  },
  {
    template: 'form-editors.html',
    name: 'form-editors',
    filename: 'form-editors.html',
    chunks: ['editorsForm'],
  },
  {
    template: 'form-elements.html',
    name: 'form-elements',
    filename: 'form-elements.html',
    chunks: [],
  },
  {
    template: 'form-fileuploads.html',
    name: 'form-fileuploads',
    filename: 'form-fileuploads.html',
    chunks: ['fileUploadForm'],
  },
  {
    template: 'form-validation.html',
    name: 'form-validation',
    filename: 'form-validation.html',
    chunks: ['validationForm'],
  },
  {
    template: 'form-wizard.html',
    name: 'form-wizard',
    filename: 'form-wizard.html',
    chunks: ['wizardForm'],
  },
];

// Hyper config class
class HyperConfig {
  static get entries() {
    return _entries;
  }

  static get pages() {
    return _pages.map(p => ({...p, chunks: [...p.chunks,'app']}));
  }
}

module.exports = HyperConfig;

const express = require('express');
const healthRoute = require('./health.route');
const overviewRoute = require('./overview.route');
const patientsRoute = require('./patients.route');
const scansRoute = require('./scans.route');
const reportsRoute = require('./reports.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/health',
    route: healthRoute,
  },
  {
    path: '/overview',
    route: overviewRoute,
  },
  {
    path: '/patients',
    route: patientsRoute,
  },
  {
    path: '/scans',
    route: scansRoute,
  },
  {
    path: '/reports',
    route: reportsRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { protect, requireRole } = require('../middleware/auth');
const {
  getDashboardStats,
  listUsers,
  getUserDetail,
  setUserStatus,
  setUserRole,
  deleteUser,
  listAllReports,
} = require('../controllers/adminController');

router.use(protect, requireRole('admin'));

router.get('/stats', getDashboardStats);
router.get('/users', listUsers);
router.get('/users/:id', getUserDetail);
router.put('/users/:id/status', setUserStatus);
router.put('/users/:id/role', setUserRole);
router.delete('/users/:id', deleteUser);
router.get('/reports', listAllReports);

module.exports = router;

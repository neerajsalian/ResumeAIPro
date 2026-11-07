const User = require('../models/User');
const Resume = require('../models/Resume');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const Interview = require('../models/Interview');
const Report = require('../models/Report');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError');

// @route GET /api/admin/stats
const getDashboardStats = asyncHandler(async (req, res) => {
  const [totalUsers, totalCandidates, totalResumes, totalInterviews, completedInterviews, totalReports] =
    await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: 'candidate' }),
      Resume.countDocuments(),
      Interview.countDocuments(),
      Interview.countDocuments({ status: 'completed' }),
      Report.countDocuments(),
    ]);

  const avgAts = await ResumeAnalysis.aggregate([
    { $group: { _id: null, avg: { $avg: '$atsScore' } } },
  ]);

  const interviewsByType = await Interview.aggregate([
    { $group: { _id: '$interviewType', count: { $sum: 1 } } },
  ]);

  const avgInterviewScore = await Interview.aggregate([
    { $match: { status: 'completed' } },
    { $group: { _id: null, avg: { $avg: '$overallScore' } } },
  ]);

  const usersOverTime = await User.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
    { $limit: 90 },
  ]);

  res.json({
    success: true,
    data: {
      totalUsers,
      totalCandidates,
      totalResumes,
      totalInterviews,
      completedInterviews,
      totalReports,
      averageAtsScore: avgAts[0]?.avg || 0,
      averageInterviewScore: avgInterviewScore[0]?.avg || 0,
      interviewsByType,
      usersOverTime,
    },
  });
});

// @route GET /api/admin/users
const listUsers = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, search = '' } = req.query;
  const query = search
    ? { $or: [{ name: new RegExp(search, 'i') }, { email: new RegExp(search, 'i') }] }
    : {};

  const users = await User.find(query)
    .sort({ createdAt: -1 })
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));
  const total = await User.countDocuments(query);

  res.json({ success: true, data: { users, total, page: Number(page), limit: Number(limit) } });
});

// @route GET /api/admin/users/:id
const getUserDetail = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');
  const [resumes, interviews] = await Promise.all([
    Resume.find({ user: user._id }).sort({ createdAt: -1 }),
    Interview.find({ user: user._id }).sort({ createdAt: -1 }),
  ]);
  res.json({ success: true, data: { user: user.toSafeObject(), resumes, interviews } });
});

// @route PUT /api/admin/users/:id/status
// Body: { isActive: boolean }
const setUserStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');
  user.isActive = !!req.body.isActive;
  await user.save();
  res.json({ success: true, message: `User ${user.isActive ? 'activated' : 'deactivated'}`, data: { user: user.toSafeObject() } });
});

// @route PUT /api/admin/users/:id/role
// Body: { role: 'candidate' | 'admin' }
const setUserRole = asyncHandler(async (req, res) => {
  if (!['candidate', 'admin'].includes(req.body.role)) throw new ApiError(400, 'Invalid role');
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');
  user.role = req.body.role;
  await user.save();
  res.json({ success: true, message: 'Role updated', data: { user: user.toSafeObject() } });
});

// @route DELETE /api/admin/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError(404, 'User not found');
  await user.deleteOne();
  res.json({ success: true, message: 'User deleted' });
});

// @route GET /api/admin/reports
const listAllReports = asyncHandler(async (req, res) => {
  const reports = await Report.find().sort({ createdAt: -1 }).populate('user', 'name email').limit(200);
  res.json({ success: true, data: { reports } });
});

module.exports = {
  getDashboardStats,
  listUsers,
  getUserDetail,
  setUserStatus,
  setUserRole,
  deleteUser,
  listAllReports,
};

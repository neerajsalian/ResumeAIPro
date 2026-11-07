const mongoose = require('mongoose');

// Separate lightweight collection for admin-specific config/audit data,
// distinct from the `users` collection where role === 'admin' lives.
const adminSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    permissions: {
      type: [String],
      default: ['manage_users', 'manage_reports', 'view_analytics'],
    },
    lastAction: { type: String, default: '' },
    lastActionAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Admin', adminSchema);

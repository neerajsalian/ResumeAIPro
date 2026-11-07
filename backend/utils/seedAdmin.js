/**
 * Creates (or updates) the initial admin user from ADMIN_EMAIL / ADMIN_PASSWORD in .env.
 * Run with: npm run seed:admin
 */
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Admin = require('../models/Admin');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = (process.env.ADMIN_EMAIL || 'admin@resumeaipro.com').toLowerCase();
    const password = process.env.ADMIN_PASSWORD || 'Admin@12345';

    let user = await User.findOne({ email });
    if (user) {
      user.role = 'admin';
      user.isActive = true;
      await user.save();
      console.log(`[seedAdmin] Existing user ${email} promoted to admin.`);
    } else {
      user = await User.create({ name: 'Platform Admin', email, password, role: 'admin' });
      console.log(`[seedAdmin] Admin user created: ${email} / ${password}`);
    }

    const adminDoc = await Admin.findOne({ user: user._id });
    if (!adminDoc) {
      await Admin.create({ user: user._id, permissions: ['manage_users', 'manage_reports', 'view_analytics'] });
    }

    console.log('[seedAdmin] Done.');
    process.exit(0);
  } catch (err) {
    console.error('[seedAdmin] Failed:', err.message);
    process.exit(1);
  }
})();

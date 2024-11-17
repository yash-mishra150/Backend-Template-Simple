module.exports = {
    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/your-database',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
    PORT: process.env.PORT || 5000,
  };
  
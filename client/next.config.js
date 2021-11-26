/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/projects',
        destination: 'http://localhost:3001/api/projects',
      },
      {
        source: '/api/todos',
        destination: 'http://localhost:3001/api/todos',
      },
    ];
  },
};

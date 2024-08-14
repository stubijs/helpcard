module.exports = {
  apps: [
    {
      name: 'helpcard',
      exec_mode: 'cluster',
      instances: '1', // max or a number of instances
      script: '.output/server/index.mjs',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 4400
      }
    }
  ]
}

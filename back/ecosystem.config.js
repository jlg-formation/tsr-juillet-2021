module.exports = {
  apps: [
    {
      script: 'build/src/index.js',
      name: 'mendeleev',
      env: {
        PORT: 5555,
      },
      env_qualif: {
        PORT: 3333,
      },
    },
  ],
};

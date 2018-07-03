module.exports = {
  middleware: [

    'timing',

    // koa-middleware example with complex args
    {
      name: 'koa-morgan',
      args: [
        'combined',
        {
          skip: function (req, res) {
            return false;
          }
        }
      ],
    },
  ],

  static: { },

  logger: {
    directory: __dirname + '/logs',
    level: 'DEBUG',
  },
};

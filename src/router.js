module.exports = ({ router, controller }) => {
  router.get('/', controller.index.index);
};


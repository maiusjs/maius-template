module.exports = ({ router, controller }) => {
  router.get('/', controller.home.info);
};

// module.exports = [
//   { match: '/', handle: ['home.info'] }
// ];
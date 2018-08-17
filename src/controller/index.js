const { Controller } = require('maius');

module.exports = class IndexController extends Controller {
  async index(ctx, next) {
    const str = await this.service.home.say('coolboy');
    ctx.body = str;
  }
};

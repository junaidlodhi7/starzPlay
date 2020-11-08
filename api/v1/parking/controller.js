const slotModel = require('./model');
const util = require('./../../../Util/methods');
const fetch = require('node-fetch');
const Joi = require('joi');

const Schema = Joi.object().keys({
  filter: Joi.required(),
  level: Joi.required()
});

exports.pingMe = async (req, res) => {
  const result = Schema.validate(req.query);
  if (result.error) {
    console.log(result.error);
    return res.status(422).json({
      errors: result.error
    });
  }
  const isExist = util.ValidFilters(req.query.filter);
  if (!isExist) {
    return res.status(422).json({
      error: 'Not a Valid value for Filter'
    });
  }
try {
  let movies = await fetch('https://api.jsonbin.io/b/5f7f29107243cd7e824ce063', { method: 'GET', headers: { 'secret-key': '$2b$10$fNoHh3O2w6Wz9mn6Q0yS2eFeHby9IU17hPnmD6mcB1jGVAYosR3D.' } });
  let resp = await util.fetchFilteredMovies(movies,req.query.filter,req.query.level);
  return res.json(resp);
} catch (error) {
   return res.status(500).json({
      error: error.message
    });
}


}

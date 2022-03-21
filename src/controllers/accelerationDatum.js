const database = require('../database');

exports.list = async (ctx) => {
  const options = {};

  const datum = await database.accelerationData.findAll(options);

  const response = {
    results: datum,
  };

  ctx.body = response;
};

exports.create = async (ctx) => {
  const params = ctx.request.body;

  const datum = await database.accelerationData.create({ x: params.x, y: params.y, z: params.z });

  ctx.body = datum;
  ctx.status = 201;
};

exports.clear = async (ctx) => {
  const result = await database.accelerationData.destroy({
    where: {},
    truncate: true
  });
    
  ctx.body = "Removed everything succesfully";
  ctx.status = 201;
}
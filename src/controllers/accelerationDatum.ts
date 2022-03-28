import { accelerationData } from "../database";

let list = async (ctx) => {
  const options = {};

  const datum = await accelerationData.findAll(options);

  const response = {
    results: datum,
  };

  ctx.body = response;
};

let create = async (ctx) => {
  const params = ctx.request.body;

  const datum = await accelerationData.create({
    x: params.x,
    y: params.y,
    z: params.z,
  });

  ctx.body = datum;
  ctx.status = 201;
};

let clear = async (ctx) => {
  const result = await accelerationData.destroy({
    where: {},
    truncate: true,
  });

  ctx.body = "Removed everything succesfully";
  ctx.status = 201;
};

export default { list, create, clear };

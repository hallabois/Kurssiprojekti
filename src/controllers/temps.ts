import { temperatureData } from "../database";

let list = async (ctx) => {
  const options = {};

  const datum = await temperatureData.findAll(options);

  const response = {
    results: datum,
  };

  ctx.body = response;
};

let create = async (ctx) => {
  const params = ctx.request.body;

  const datum = await temperatureData.create({
    temp: params.temp,
  });

  ctx.body = datum;
  ctx.status = 201;
};

let clear = async (ctx) => {
  const result = await temperatureData.destroy({
    where: {},
    truncate: true,
  });

  ctx.body = "Removed everything succesfully";
  ctx.status = 201;
};

export default { list, create, clear };

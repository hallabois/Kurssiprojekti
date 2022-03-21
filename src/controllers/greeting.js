exports.greet = async (ctx) => {
  const greetings = ['Hello!', 'Guten Tag!', 'Bonjour!', 'Moro!', 'Tere!'];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  const response = {
    greeting,
  };

  ctx.body = response;
};

module.exports.one = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "ONEEEE!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.two = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "TWOOOOO!",
        input: event,
      },
      null,
      2
    ),
  };
};

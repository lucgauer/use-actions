const useActions = (actions, dispatch) => Object
  .entries(actions)
  .filter(([, action]) => typeof action === 'function')
  .reduce(
    (acc, [index, action]) => ({
      ...acc,
      [index]: (...args) => action(...args)(dispatch),
    }),
    {},
  );

module.exports = useActions;

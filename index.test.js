const useActions = require('./index.js');

describe('useActions', () => {
  it('exports a function', () => {
    expect(useActions).toBeInstanceOf(Function);
  });

  it('receives a object and returns a remapping also as a object', () => {
    expect(useActions({})).toBeInstanceOf(Object);
  });

  it('binds actions currying the dispatch function', () => {
    const ACTION_TYPE = 'ACTION_TYPE';
    const mockAction = argAsPayload => dispatch => {
      // Action code
      dispatch({ type: ACTION_TYPE, payload: argAsPayload });
    };
    const dispatch = jest.fn();
    const boundActions = useActions({ mockAction }, dispatch);

    expect(boundActions).toHaveProperty('mockAction');
    expect(boundActions.mockAction).toBeInstanceOf(Function);

    boundActions.mockAction(123);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty('type', ACTION_TYPE);
    expect(dispatch.mock.calls[0][0]).toHaveProperty('payload', 123);
  });
});

// import checkPropTypes from 'check-prop-types';
// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './../src/reducers';
// import { middlewares } from './../src/createStore';

export const findByTest = (component, attr) => {
   const wrapper = component.find(`[data-test-id='${attr}']`);
   return wrapper.hostNodes();
};

// export const checkProps = (component, expectedProps) => {
//    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//    return propsErr;
// };

// export const testStore = (initialState) => {
//    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//    return createStoreWithMiddleware(rootReducer, initialState);
// };
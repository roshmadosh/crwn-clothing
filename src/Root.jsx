import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';

export default function Root(props) {
    return (
        <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            {props.children}
        </Provider>
    )
}

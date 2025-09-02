
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';
import store from './components/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
   <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
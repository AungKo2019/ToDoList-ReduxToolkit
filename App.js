import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, padding: 20,marginTop:30 }}>
        <TaskList />
        <AddTaskForm />
      </View> 
    </Provider>
  );
};

export default App;

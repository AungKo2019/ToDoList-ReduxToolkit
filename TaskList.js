import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from './reducers/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <View>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.title}</Text>
          <Button
            title="Remove"
            onPress={() => dispatch(removeTask(task.id))}
          />
        </View>
      ))}
    </View>
  );
};

export default TaskList;

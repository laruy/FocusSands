// Focused.js
import React from 'react';
import { Text } from 'react-native';
import { Container, Wrap, Wrap2 } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Task {
  id: string;
  title: string;
}

interface FocusedProps {
  taskId: string;
  tasks: Task[];
}

export function Focused({ taskId, tasks }: FocusedProps) {

  const task = tasks.find((task) => task.id === taskId);

  if (!task) return null; 

  return (
    <Container>
      <Wrap>
        <Text>Em foco</Text>
        <Text>|</Text>
        <FontAwesome size={26} color="#014BA0" name="play" />
      </Wrap>

      <Wrap2>
        <Text style={{ fontSize: 22 }}>{task.title}</Text>
        <Text style={{ fontSize: 26 }}>00:00</Text>
      </Wrap2>
    </Container>
  );
}

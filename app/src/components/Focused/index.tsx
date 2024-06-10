import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Wrap, Wrap2 } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { updateTask } from '../../services/TaskService';

interface Task {
  id: string;
  title: string;
  timer: string;
}

interface FocusedProps {
  taskId: string;
  tasks: Task[];
}

export function Focused({ taskId, tasks }: FocusedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState('25:00');
  const task = tasks.find((task) => task.id === taskId);

  useEffect(() => {
    if (task) {
      setTimeLeft(task.timer); // Inicializar o temporizador com o valor da tarefa
    }
  }, [task]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const [minutes, seconds] = prevTime.split(':').map(Number);
          const totalSeconds = minutes * 60 + seconds - 1;
          if (totalSeconds < 0) {
            clearInterval(interval);
            handlePlayClick()
            updateTaskConcluded(taskId);
            return '00:00';
          }
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return newMinutes + ":" + newSeconds;
        });
      }, 1000);
     }
    return () => clearInterval(interval);
  }, [isPlaying, task, timeLeft]);

  const updateTaskConcluded = async (taskId: string) => {

    const data = {
      concluded: 'FINISHED',
    };
    
    try {
      await updateTask(taskId, data);
    } catch (error) {
      console.log("id",taskId)
      console.error('Erro ao atualizar a task', error);
    }
  };

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
  }

  if (!task) return null;

  return (
    <Container>
      <Wrap>
        <Text>Em foco</Text>
        <Text>|</Text>
        <TouchableOpacity onPress={handlePlayClick}>
          <FontAwesome size={26} color="#014BA0" name={isPlaying ? 'pause' : 'play'} />
        </TouchableOpacity>
      </Wrap>

      <Wrap2>
        <Text style={{ fontSize: 22 }}>{task.title}</Text>
        <Text style={{ fontSize: 26 }}>{timeLeft}</Text>
      </Wrap2>
    </Container>
  );
}

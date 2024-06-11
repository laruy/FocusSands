import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Wrap, Wrap2 } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { updateConcludedTask } from '../../services/TaskService';
import { msgError } from '../../shared/utils/error';
import { TaskType } from '../../shared/types/TaskType';
import { useSession } from '../../shared/providers/ctx';

interface Task {
  id: string;
  title: string;
  timer: string;
}

interface FocusedProps {
  taskId: string;
  tasks: Task[];
  onConcludedTask: () => void;
}

export function Focused({ taskId, tasks, onConcludedTask }: FocusedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState('25:00');
  const task = tasks.find((task) => task.id === taskId);
  const { visibleDialog } = useSession();

  useEffect(() => {
    if (task) {
      setTimeLeft(task.timer); // Inicializar o temporizador com o valor da tarefa
    }
  }, [task]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const [minutes, seconds] = prevTime.split(':').map(Number);
          const totalSeconds = minutes * 60 + seconds - 1;
          if (totalSeconds < 0) {
            clearInterval(interval);
            handlePlayClick();
            updateTaskConcluded(taskId);
            return '00:00';
          }
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return newMinutes + ':' + newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, task, timeLeft]);

  const updateTaskConcluded = async (taskId: string) => {
    await updateConcludedTask(taskId, TaskType.UNFINISHED)
      .then(() => {
        visibleDialog({
          title: 'Successo!',
          message: 'Tarefa concluída com sucesso.',
          icon: 'check-circle',
        });
        onConcludedTask();
      })
      .catch((err) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
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
          <FontAwesome
            size={26}
            color="#014BA0"
            name={isPlaying ? 'pause' : 'play'}
          />
        </TouchableOpacity>
      </Wrap>

      <Wrap2>
        <Text style={{ fontSize: 22 }}>{task.title}</Text>
        <Text style={{ fontSize: 26 }}>{timeLeft}</Text>
      </Wrap2>
    </Container>
  );
}

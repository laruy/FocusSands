import { useEffect, useState } from 'react';
import { Text, TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { View, StyleSheet, Keyboard } from 'react-native';
import { LayoutPage } from '../../../../components/global/Layout';
import { Form } from '../../../../components/Form';
import StyledButton from '../../../../components/Button';
import {
  findTask,
  createTask,
  updateTask,
} from '../../../../services/TaskService';
import { useSession } from '../../../../shared/providers/ctx';
import { msgError } from '../../../../shared/utils/error';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AxiosErrorException } from '../../../../shared/interfaces/responses/Global.config';
import { TaskInterface } from '../../../../shared/interfaces/Task';

const Index = () => {
  const [titlePage, setTitlePage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const { visibleDialog } = useSession();
  const { taskId } = useLocalSearchParams<{ taskId?: string }>();
  const router = useRouter();

  async function findTaskById(taskId: string) {
    await findTask(taskId)
      .then(({ data }) => {
        setTitlePage(`Editando: ${data?.title}`);
        setTitle(data?.title);
        setDescription(data?.description);
        setTime(data?.timer);
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  }

  useEffect(() => {
    if (taskId) {
      findTaskById(taskId as string);
    }
  }, [taskId]);

  const handleBlur = () => {
    Keyboard.dismiss();
  };

  const handleCreateTask = async (task: TaskInterface) => {
    await createTask(task)
      .then((data) => {
        if (data) {
          visibleDialog({
            title: 'Successo!',
            message: 'Tarefa cadastrada com sucesso.',
            icon: 'check-circle',
          });
          setTitle('');
          setDescription('');
          setTime('');
        }
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

  const handleUpdateTask = async (_task: TaskInterface) => {
    const { id, ...task } = _task;
    await updateTask(id || '', task)
      .then((data) => {
        if (data) {
          visibleDialog({
            title: 'Successo!',
            message: 'Tarefa Editada com sucesso.',
            icon: 'check-circle',
          });
          setTitle('');
          setDescription('');
          setTime('');
          router.push({ pathname: '/(tabs)' });
        }
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

  const handleSave = async () => {
    if (!title || title.length < 2) {
      visibleDialog({
        title: 'Erro!',
        message: 'O título precisa ter pelo menos 2 caracteres.',
        icon: 'alert',
      });
      return;
    }

    if (!description || description.length < 5 || description.length > 225) {
      visibleDialog({
        title: 'Erro!',
        message: 'A descrição precisa ter entre 5 e 225 caracteres.',
        icon: 'alert',
      });
      return;
    }

    const task: TaskInterface = {
      id: taskId || undefined,
      title,
      description,
      timer: time || undefined,
    };

    if (task?.id) {
      handleUpdateTask(task);
    } else {
      handleCreateTask(task);
    }
  };

  return (
    <LayoutPage>
      {titlePage && (
        <View>
          <Text
            variant="headlineMedium"
            style={{ color: '#FFF', marginVertical: 16 }}
          >
            {titlePage}
          </Text>
        </View>
      )}

      <Form>
        <TextInput
          label="No que está trabalhando?"
          value={title}
          onChangeText={(text) => setTitle(text)}
          onBlur={handleBlur}
        />

        <TextInput
          label="Descrição"
          value={description}
          multiline
          onChangeText={(text) => setDescription(text)}
          onBlur={handleBlur}
        />
      </Form>

      <View style={styles.timeContainer}>
        <Text variant="labelLarge" style={{ color: '#FFF' }}>
          Tempo:
        </Text>
        <TextInputMask
          style={styles.timeInput}
          placeholder="25:00"
          type="datetime"
          options={{
            format: 'mm:ss',
          }}
          value={time}
          onChangeText={(text) => setTime(text)}
          onBlur={handleBlur}
        />
        <Text variant="labelLarge" style={{ color: '#FFF' }}>
          Minutos
        </Text>
      </View>

      <View style={{ paddingTop: 22 }}>
        <StyledButton icon="clock-plus-outline" onPress={() => handleSave()}>
          Salvar tarefa
        </StyledButton>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: 'row', // Display items horizontally
    justifyContent: 'space-between', // Create space between items
    alignItems: 'center', // Center items vertically
  },
  timeInput: {
    width: 80,
    height: 43,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    margin: 10,
    backgroundColor: '#F0EBEB',
    color: '#014BA0',
    textAlign: 'center', // Center text horizontally
  },
});

export default Index;

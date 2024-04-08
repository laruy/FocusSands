import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E1E1E',
      }}
    >
      <Tabs.Screen
        name="task"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tasks" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Adicionar Tarefa',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="format-list-bulleted-add" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bar-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

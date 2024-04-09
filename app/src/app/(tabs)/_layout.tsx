import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E1E1E',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="task"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="checklist" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          title: 'Adicionar Tarefa',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="format-list-bulleted-add"
              size={28}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="report"
        options={{
          title: 'Relatórios',
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="bar-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

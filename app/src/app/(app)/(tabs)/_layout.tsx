import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { BG_DEFAULT } from '../../../shared/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E1E1E',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarInactiveBackgroundColor: BG_DEFAULT,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="[taskId]/index"
        options={{
          unmountOnBlur: true,
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
        name="index"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="checklist" size={28} color={color} />
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

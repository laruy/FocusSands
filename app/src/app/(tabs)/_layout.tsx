import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E1E1E',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explicação',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="question-circle" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="task"
        options={{
          title: 'Lista',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="list" color={color} />
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

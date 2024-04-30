import React from 'react';
import { Button } from 'react-native-paper';

interface StyledButtonProps {
    onPress?: () => void; // Tipando onPress como uma função que não retorna nada
    children?: React.ReactNode; // Tipando children como React.ReactNode
    icon?: string; // Ícone a ser exibido no botão
    style?: object; // Definindo o tipo da propriedade style
}

const StyledButton: React.FC<StyledButtonProps> = ({ icon, onPress, children, ...props }) => {
  return (
    <Button
      onPress={onPress}
      mode="contained"
      icon={icon}
      style={{
        backgroundColor: '#014BA0', 
        borderRadius: 4,
        ...props.style
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;


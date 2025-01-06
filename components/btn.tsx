import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

type SecondaryButtonProps = {
  onPress: () => void;
  text: string;
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  iconColor?: string;
  textColor?: string;
  buttonStyle?: object;
  textStyle?: object;
  iconStyle?: object;
  enabledStyle?: any,
  disabledStyle?: any,
  disabled?: boolean,
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onPress,
  text,
  iconName,
  disabled = false,
  iconSize = 24,
  iconColor = '#000',
  textColor = '#000',
  buttonStyle,
  textStyle,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle,
        disabled ? [styles.disabled] : [styles.enabled],
      ]}
      disabled={disabled}
    >
      {iconName && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={iconStyle}
        />
      )}
      <Text style={[styles.text, { color: textColor }, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondaryButton;

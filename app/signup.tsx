import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { signupSchema } from '@/schema/signupSchema';
import { useRouter } from 'expo-router';
import SecondaryButton from '@/components/btn';

type SignupFormData = z.infer<typeof signupSchema>;
const Page = () => {
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });
  const watchAllFields = watch();

  const isButtonDisabled =
  !watchAllFields.firstName &&
  !watchAllFields.lastName &&
  !watchAllFields.email &&
  !watchAllFields.password &&
  !watchAllFields.confirmPassword
  const onSignup = async () => {
    router.push({
      pathname: '/login',
    });
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior="padding"
    keyboardVerticalOffset={keyboardVerticalOffset}
  >
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={[defaultStyles.descriptionText, { marginBottom: 10 }]}>
        Enter your details below. We will send a confirmation code to your email.
      </Text>

      {/* First Name */}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.firstName && styles.errorInput]}
              placeholder="First Name"
              placeholderTextColor={Colors.gray}
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.lastName && styles.errorInput]}
              placeholder="Last Name"
              placeholderTextColor={Colors.gray}
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.errorInput]}
              placeholder="Email address"
              placeholderTextColor={Colors.gray}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.password && styles.errorInput]}
              placeholder="Password"
              placeholderTextColor={Colors.gray}
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.confirmPassword && styles.errorInput]}
              placeholder="Confirm Password"
              placeholderTextColor={Colors.gray}
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
      </View>
      <SecondaryButton
          onPress={handleSubmit(onSignup)}
          text="Sign up"
          disabled={isButtonDisabled}

          buttonStyle={[styles.button, isButtonDisabled ? styles.disabled : styles.enabled]}
          textStyle={defaultStyles.buttonText}
        />
    </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 4,
    fontSize: 16,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Page;

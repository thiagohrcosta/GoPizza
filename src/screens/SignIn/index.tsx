import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native'

import { Input } from '@components/Input';

import { Container } from './styles';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
        <Input
          placeholder='E-mail'
          type="secondary"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          placeholder='Senha'
          type="secondary"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Button
          title="Entrar"
          type="secondary"
        />
      </KeyboardAvoidingView>
    </Container>
  );
}

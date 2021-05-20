import React, {useState} from "react";
import {Text} from "react-native";

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from "./styles";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleLogin() {
    setLogin(!login);
    // Deixar campos vázios ao registrar
    setName('');
    setEmail('');
    setPassword('');
  }

  function handleLogin() {
    // Se email/senha for vázio quando usuário logar
    if (email === '' || password === '') {
      // mostrar um alerta
      console.log('Preencha todos os campos!');
      return;
    }
    alert('LOGIN');
  }

  function handleRegisterAccount() {
    // Se name/email/senha for vázio quando usuário logar
    if (name === '' || email === '' || password === '') {
      // mostrar um alerta
      console.log('Preencha todos os campos!');
      return;
    }
    alert('CADASTROU');
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#e52246'}}>Post</Text>
        </Title>

        <Input
          placeholder="email@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="******"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <Button onPress={handleLogin}>
          <ButtonText>Entrar agora</ButtonText>
        </Button>

        <SignUpButton onPress={() => toggleLogin()}>
          <SignUpText>Criar minha conta</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Dev
        <Text style={{color: "#e52246"}}>Post</Text>
      </Title>

      <Input
        placeholder="Digite seu nome aqui..."
        value={name}
        onChangeText={text => setName(text)}
      />
      <Input
        placeholder="Digite um email válido..."
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="******"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Button onPress={handleRegisterAccount}>
        <ButtonText>Cadastrar conta</ButtonText>
      </Button>

      <SignUpButton onPress={() => toggleLogin()}>
        <SignUpText>Já tenho uma conta?</SignUpText>
      </SignUpButton>
    </Container>
  );
}

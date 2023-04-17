import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input';
import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Logo } from '../../components/Logo';

// import { useAuth } from '../../hooks/auth';

 import { Container, Form, LoginWrapper} from './styles';

export function SignIn() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const { signIn } = useAuth();

    // function handleSignIn() {
    //     signIn({ email, password });
    // }

    return (
        <Container>
            <Logo id="logo"/>

        <LoginWrapper>  


            <h1>Faça login</h1>

            <Form>

                <InputLabel
                  title="E-mail"
                  />
                <Input 
                    placeholder="E-mail"
                    type="text"
                    // onChange={e => setEmail(e.target.value)}
                    />
                <InputLabel
                  title="Senha"
                  />
                <Input 
                    placeholder="Senha"
                    type="password"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Entrar"
                    // onClick={handleSignIn}
                />

            </Form>

            <ButtonText 
                  title="Criar uma conta"
                  to="/register"
            />

        </LoginWrapper>

        </Container>
    )
}
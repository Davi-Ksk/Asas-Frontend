import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input';
import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Logo } from '../../components/Logo';

// import { useAuth } from '../../hooks/auth';

 import { Container, Form, LoginWrapper, InputWrapper, InputGrid} from './styles';

export function SignUp() {
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


            <h1>Crie sua conta</h1>

            <Form>
                <InputGrid>
                {/* First Line */}
                    <InputWrapper>
                        <InputLabel
                        title="Seu nome"
                        />

                        <Input 
                            placeholder="Maria da Silva"
                            type="text"
                            // onChange={e => setPassword(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel
                        title="E-mail"
                        />

                        <Input 
                            placeholder="exemplo@exemplo.com.br"
                            type="text"
                            // onChange={e => setEmail(e.target.value)}
                            />
                    </InputWrapper>

                    <InputWrapper>
                        <InputLabel
                        title="Celular"
                        />
                        <Input 
                            placeholder="(00) 00000-0000"
                            type="tel"
                            // onChange={e => setPassword(e.target.value)}
                        />
                    </InputWrapper>
                {/* Second Column */}
                    <InputWrapper>
                        <InputLabel
                        title="Seu CPF"
                        />

                        <Input 
                            placeholder="000.000.000-00"
                            type="number"
                            // onChange={e => setPassword(e.target.value)}
                        />

                    </InputWrapper>
                    <InputWrapper>

                        <InputLabel
                        title="Sua Senha"
                        />

                        <Input 
                            placeholder="No mínimo 8 caracteres"
                            type="password"
                            // onChange={e => setEmail(e.target.value)}
                        />

                    </InputWrapper>
                    <InputWrapper>
                            
                        <InputLabel
                        title="Confirme sua Senha"
                        />
                        <Input 
                            placeholder="No mínimo 8 caracteres"
                            type="password"
                            // onChange={e => setPassword(e.target.value)}
                        />

                    </InputWrapper>
                </InputGrid>


                <Button 
                    id="button"
                    title="Criar conta"
                    // onClick={handleSignIn}
                />

            </Form>

            <ButtonText 
                  title="Já tenho uma conta"
                  to="/"
            />

        </LoginWrapper>

        </Container>
    )
}
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { InputLabel } from '../../components/InputLabel';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Logo } from '../../components/Logo';

// import { useAuth } from '../../hooks/auth';

 import { Container, Form, LoginWrapper, InputWrapper, InputGrid} from './styles';

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

    const navigate = useNavigate(); //Usado para levar para outra página

    function handleSignUp() {
        if (!name || !email || !password || !password_confirmation || !cpf || !phone) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", {
            name, email, password, cpf, phone, password_confirmation
        })
        .then(() => {
            alert("Usuário criado com sucesso!");
            navigate("/"); //Vai para a página inicial
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar o usuário!");
            }
        });
    }

    return (
        <Container>
            <Logo id="logo"/>

        <LoginWrapper>  


            <h1>Crie sua conta</h1>

            <Form>
                <InputGrid>
                {/* First row */}
                    <InputWrapper>
                        <InputLabel
                        title="Seu nome"
                        />

                        <Input 
                            placeholder="Maria da Silva"
                            type="text"
                            onChange={e => setName(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel
                        title="E-mail"
                        />

                        <Input 
                            placeholder="exemplo@exemplo.com.br"
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                            />
                    </InputWrapper>
                    
                {/* Second row */}
                    <InputWrapper>
                        <InputLabel
                        title="Celular"
                        />
                        <Input 
                            placeholder="(00) 00000-0000"
                            type="tel"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputLabel
                        title="Seu CPF"
                        />

                        <Input 
                            placeholder="000.000.000-00"
                            type="number"
                            onChange={e => setCpf(e.target.value)}
                        />

                    </InputWrapper>

                {/* Third row */}
                    <InputWrapper>

                        <InputLabel
                        title="Sua Senha"
                        />

                        <Input 
                            placeholder="No mínimo 8 caracteres"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />

                    </InputWrapper>
                    <InputWrapper>
                            
                        <InputLabel
                        title="Confirme sua Senha"
                        />
                        <Input 
                            placeholder="No mínimo 8 caracteres"
                            type="password"
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />

                    </InputWrapper>
                </InputGrid>


                <Button 
                    className="button"
                    title="Criar conta"
                    onClick={handleSignUp}
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
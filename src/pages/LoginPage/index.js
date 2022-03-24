import React, { useContext, useState } from 'react';
import { Button, Container, Input, LinkStyled, LogoCard, LogoWrapper, SignUpCard, SignUpWrapper, Subtitle, Title } from '../../styles/formUser';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router';
import UserContext from '../../Providers/UserContext';
import axios from 'axios';

function LoginPage() {
    const navigate = useNavigate();
    const { userInfos, setUserInfos } = useContext(UserContext);
    console.log(userInfos);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled");
        if (email === "" || password == "") {
            alert("Preencha todos os campos!");
            setIsLoading(false);
            setInputLoading("");
        }
        else {
            const promise = axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });

            promise.then(response => {
                setUserInfos(response.data)
                navigate('/timeline')

            })
            promise.catch(error => {
                if (error.response.status === 401) {
                    alert("Email ou senha incorretos! Tente novamente")
                }
                else {
                    alert("Erro no sistema! Tente novamente.")
                }
                console.log(error.response.status)
                setIsLoading(false);
                setInputLoading("");
            })
        }
    }
    
    return (
        <Container>
            <LogoWrapper >
                <motion.LogoCard initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{
                    stiffness: 260,
                    damping: 20,
                    duration: 1
                }}>
                    <Title>linkr</Title>
                    <Subtitle>save, share and discover</Subtitle>
                    <Subtitle>the best links on the web</Subtitle>
                </motion.LogoCard>
            </LogoWrapper>
            <SignUpWrapper>
                <SignUpCard >
                    <motion.form onSubmit={handleLogin} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{
                            stiffness: 260,
                            damping: 20,
                            duration: 1
                        }}>
                        <Input
                            type="email"
                            placeholder="e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled={inputLoading}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            disabled={inputLoading}
                        />
                        <Button>{isLoading ? ("loading...") : ("Sign Up")} </Button>


                        <LinkStyled to="/sign-up" > First time?Create an account! </LinkStyled>
                    </motion.form>
                </SignUpCard>

            </SignUpWrapper>

        </Container >
    )
}

export default LoginPage;
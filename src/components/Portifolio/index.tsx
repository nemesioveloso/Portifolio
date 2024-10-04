import { Box, Grid, Typography } from "@mui/material"
import './style.css'
import { NeonCard } from "../Card"
import { Github } from "../../models/github";
import { useEffect, useState } from "react";
import axios from "axios";
import { SocialMedia } from "../SocialMedia";

export const Portifolio = () => {
    const [repositories, setRepositories] = useState<Github[]>([]);
    console.log(repositories);


    const fetchRepositories = async () => {
        try {
            const response = await axios.get('https://api.github.com/users/nemesioveloso/repos');
            setRepositories(response.data);
        } catch (error) {
            console.error('Erro ao buscar os repositórios:', error);
        }
    };

    // useEffect para buscar os dados quando o componente é montado
    useEffect(() => {
        fetchRepositories();
    }, []);


    return (
        <Box>
            <Grid container justifyContent='space-between' alignItems='center' textAlign='center'>
                <Grid item xs={12}>
                    <Typography variant="h2" textAlign='center' sx={{
                        textShadow: `
            0 0 10px rgba(128, 0, 128, 0.8),
            0 0 20px rgba(128, 0, 128, 0.6),
            0 0 30px rgba(128, 0, 255, 0.5),
            0 0 40px rgba(128, 0, 255, 0.4),
            0 0 50px rgba(128, 0, 255, 0.3)
            `,
                        color: '#ffffff'
                    }}>SOBRE MIM</Typography>

                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign='center' sx={{
                        textShadow: `
                    0 0 10px rgba(128, 0, 128, 0.8),
                    0 0 20px rgba(128, 0, 128, 0.6),
                    0 0 30px rgba(128, 0, 255, 0.5),
                    0 0 40px rgba(128, 0, 255, 0.4),
                    0 0 50px rgba(128, 0, 255, 0.3)
                `,
                        color: '#ffffff'
                    }}>EXPLORADOR FULL STACK</Typography>

                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                    <Typography variant="body1" sx={{
                        textShadow: `
                0 0 10px rgba(128, 0, 128, 0.8),
                0 0 20px rgba(128, 0, 128, 0.6),
                0 0 30px rgba(128, 0, 255, 0.5),
                0 0 40px rgba(128, 0, 255, 0.4),
                0 0 50px rgba(128, 0, 255, 0.3)
            `,
                        color: '#ffffff'  // Cor do texto central
                    }}>
                        Nemésio Veloso Martins de Castro Grandson
                    </Typography>
                    <img style={{ borderRadius: '50%' }} src="https://avatars.githubusercontent.com/u/72142731?v=4" height="130" alt="spring logo" />
                </Grid>
                <Grid item xs={5} sm={6} md={3} lg={3}>
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        height="130"
                        alt="react logo"
                        style={{
                            animation: 'spin 5s linear infinite'
                        }}
                    />
                    <Typography variant="subtitle1" textAlign='center' sx={{
                        textShadow: `
                    0 0 10px rgba(128, 0, 128, 0.8),
                    0 0 20px rgba(128, 0, 128, 0.6),
                    0 0 30px rgba(128, 0, 255, 0.5),
                    0 0 40px rgba(128, 0, 255, 0.4),
                    0 0 50px rgba(128, 0, 255, 0.3)
                `,
                        color: '#ffffff'
                    }}>REACT-TS</Typography>
                </Grid>
                <Grid item xs={5} sm={12} md={4} lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <Typography variant="body1" sx={{
                        textShadow: `
                0 0 10px rgba(128, 0, 128, 0.8),
                0 0 20px rgba(128, 0, 128, 0.6),
                0 0 30px rgba(128, 0, 255, 0.5),
                0 0 40px rgba(128, 0, 255, 0.4),
                0 0 50px rgba(128, 0, 255, 0.3)
            `,
                        color: '#ffffff'  // Cor do texto central
                    }}>
                        Nemésio Veloso Martins de Castro Grandson
                    </Typography>
                    <img style={{ borderRadius: '50%' }} src="https://avatars.githubusercontent.com/u/72142731?v=4" height="130" alt="spring logo" />
                </Grid>
                <Grid item xs={5} sm={6} md={3} lg={3}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" height="130" alt="spring logo" />
                    <Typography variant="subtitle1" textAlign='center' sx={{
                        textShadow: `
                    0 0 10px rgba(128, 0, 128, 0.8),
                    0 0 20px rgba(128, 0, 128, 0.6),
                    0 0 30px rgba(128, 0, 255, 0.5),
                    0 0 40px rgba(128, 0, 255, 0.4),
                    0 0 50px rgba(128, 0, 255, 0.3)
                `,
                        color: '#ffffff'
                    }}>SPRING</Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent='center' p={3}>
                <Grid item xs={12} sm={12} md={10} lg={6} sx={{ color: '#dbbaeb' }}>
                    <Typography
                        variant="h6"
                        textAlign='center'
                        sx={{
                            textShadow: `
                0 0 10px rgba(128, 0, 128, 0.8),
                0 0 20px rgba(128, 0, 128, 0.6),
                0 0 30px rgba(128, 0, 255, 0.5),
                0 0 40px rgba(128, 0, 255, 0.4),
                0 0 50px rgba(128, 0, 255, 0.3)
            `,
                            color: '#ffffff'  // Cor do texto central
                        }}
                    >
                        Programador Full Stack com sólida experiência em desenvolvimento web, especializado em React e Vue.js para criação de interfaces dinâmicas e responsivas no front-end. No back-end, possui proficiência em Java com Spring para construção de APIs robustas e escaláveis, além de expertise em PHP para desenvolvimento de sistemas e integrações. Capaz de atuar em todas as camadas do desenvolvimento, desde a arquitetura do servidor até a interface do usuário, com foco em soluções eficientes e de alto desempenho.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SocialMedia />
                </Grid>
            </Grid>

            <Grid container spacing={3} p={4}>
                {repositories.map((repo) => (
                    // Verificação para não renderizar o card se a linguagem for null
                    repo.language && (
                        <Grid key={repo.id} item xs={12} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <NeonCard
                                title={repo.language === 'TypeScript' ? 'React' : repo.language || 'Sem linguagem definida'}
                                description={repo.name}
                                link={repo.html_url}
                            />
                        </Grid>
                    )
                ))}
            </Grid>

        </Box>
    )
}
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
interface NeonCardProps {
    title: string;
    description: string;
    link: string;
}

export const NeonCard: React.FC<NeonCardProps> = ({ title, description, link }) => {

    console.log(link);


    const handleClick = () => {
        window.open(link, '_blank');
    };

    const imageUrl = title === 'React'
        ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        : title === 'Java'
            ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
            : title === 'Vue'
                ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
                : '';

    return (
        <Card sx={{
            width: '100%',
            maxWidth: 250,
            minWidth: 150,
            background: '#141313',
            borderRadius: '16px',
            position: 'relative',
            padding: '20px',
            boxShadow: `0 0 10px rgba(255, 0, 255, 0.8),
                0 0 20px rgb(60, 0, 255),
                0 0 40px rgba(74, 131, 229, 0.582),
                0 0 60px rgba(0, 195, 255, 0.2)`,
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '16px',
                padding: '2px',
                'WebkitMask': 'linear-gradient(to bottom, #000 20%, transparent 90%)',
                mask: 'linear-gradient(to bottom, #000 20%, transparent 90%)',
            }
        }}>
            <CardMedia sx={{ textAlign: 'center' }}>
                <img
                    src={imageUrl}
                    height="150"
                    alt={`${title} logo`}

                />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h4" color='#f7f7f7' component="div" textAlign='center'>
                    {title}
                </Typography>
                <Typography variant="subtitle2" color='#dc26cd' textAlign='center'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button fullWidth variant='contained' color="secondary" onClick={handleClick}>
                    Visualizar
                </Button>
            </CardActions>
        </Card>
    );
}

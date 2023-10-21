import { Card, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material';
import { POSTER_URL } from '../constants/api';

export const ItemList = ({ filteredList, setHeaderData }) => {
    return (
        <Container maxWidth="false" sx={{ minHeight: '60vh' }}>
            <Stack direction="row" justifyContent="center" mb={4} sx={{ flexWrap: 'wrap', gap: '2rem' }}>
                {filteredList.map((item) => (
                    <Card
                        key={item.name}
                        onClick={() => setHeaderData(item)}
                        sx={{
                            width: '300px',
                            height: '450px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            ':hover': { border: 'solid 2px #F00' },
                        }}
                        raised={true}>
                        <CardMedia sx={{ height: '80%' }} image={POSTER_URL + item.poster_path} title={item.name} />
                        <CardContent sx={{ background: '#000', height: '20%' }}>
                            <Typography variant="h5" sx={{ color: '#fff' }}>
                                {item.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
};

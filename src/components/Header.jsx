import { Container, Stack, Typography, Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Header = ({ imgUrl, headerData }) => {
    return (
        <Container
            maxWidth="false"
            disableGutters={true}
            sx={{
                margin: "0 auto",
                width: "100%",
                maxHeight: {xs:"100vh",md: "70vh"},
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="absoluteContainer">
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        margin: "1rem 0 0 2rem",
                        color: "#f00",
                        position: "absolute",
                        textShadow: "4px 2px 6px rgba(0, 0, 0, 0.92)",
                    }}
                >
                    Notflix
                </Typography>
                <Stack
                    
                    direction="column"
                    spacing={2}
                    sx={{
                        position: "absolute",
                        top: "30%",
                        padding: "1rem 2rem",
                        width: {xs:"90%",md: "50%"},
                    }}
                >
                    <Typography className="hero-text" variant="h3" sx={{ fontWeight: "700" }}>
                        {headerData.name}
                    </Typography>
                    <Typography className="hero-text" variant="body1" sx={{fontSize:"1.1rem", display:{xs:"none", md:"inherit"}} }>
                        {headerData.overview}
                    </Typography>
                    <Button variant="contained" sx={{background:"#F00", width:"200px",zIndex:"2"}}><PlayArrowIcon /> Reproducir</Button>
                </Stack>
            </div>
            <img
                src={imgUrl + headerData?.backdrop_path}
                alt="random"
                style={{ width: "100%", objectFit: "cover" }}
            />
        </Container>
    );
};

export default Header;

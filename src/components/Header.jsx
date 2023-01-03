import { Container, Stack, Typography } from "@mui/material";

const Header = ({ imgUrl, randomData }) => {
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
                    className="hero-text"
                    direction="column"
                    spacing={2}
                    sx={{
                        position: "absolute",
                        top: "30%",
                        padding: "1rem 2rem",
                        width: {xs:"90%",md: "50%"},
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "700" }}>
                        {randomData.name}
                    </Typography>
                    <Typography variant="body1" sx={{fontSize:"1.1rem"}}>
                        {randomData.overview}
                    </Typography>
                </Stack>
            </div>
            <img
                src={imgUrl + randomData?.backdrop_path}
                alt="random"
                style={{ width: "100%", objectFit: "cover" }}
            />
        </Container>
    );
};

export default Header;

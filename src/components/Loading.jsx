import { CircularProgress, Stack, Typography } from "@mui/material"

export const Loading = () => {
  return (
    <Stack
    justifyContent="center"
    alignItems="center"
    gap="3rem"
    sx={{ margin: "5rem auto" }}
>
    <CircularProgress size={200} color="error" />
    <Typography variant="h3" component="span" color="error">
        Cargando series...
    </Typography>
</Stack>
  )
}
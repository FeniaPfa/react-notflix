import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";

const SortFilter = ({ filteredList, setFilteredList }) => {
    const handleSort = (type) => {
        let sortedList = [...filteredList];

        if (type === "title") {
            sortedList.sort((a, b) => (a.name > b.name) - (a.name < b.name));
            setFilteredList(sortedList);
        }
        if (type === "titleReverse") {
            sortedList.sort((a, b) => (b.name > a.name) - (b.name < a.name));
            setFilteredList(sortedList);
        }
        if (type === "best") {
            sortedList.sort((a, b) => b.vote_average - a.vote_average);
            setFilteredList(sortedList);
        }
        if (type === "worst") {
            sortedList.sort((a, b) => a.vote_average - b.vote_average);
            setFilteredList(sortedList);
        }
        // console.log(filteredList);
    };

    return (
        <>
            {/* <select
                name="select-order"
                id="order"
                onChange={(e) => handleSort(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled hidden>
                    Seleccione orden
                </option>
                <option value="title">A - Z</option>
                <option value="titleReverse">Z - A</option>
                <option value="best">Mejor puntuación</option>
                <option value="worst">Peor puntuación</option>
            </select> */}
            {/* <InputLabel id="demo-simple-select-label">Selecciona Orden</InputLabel> */}
            <FormControl sx={{ minWidth: "16rem" }}>
                {/* <InputLabel id="Select order">Selecciona orden</InputLabel> */}
                <Select
                    color="error"
                    labelId="Select order"
                    // label="Selecciona Orden"
                    value={"x"}
                    onChange={(e) => handleSort(e.target.value)}
                    inputProps={{ 'aria-label': 'Seleccionar Orden' }}
                    sx={{
                        backgroundColor: "#FFFFFF59",
                        borderRadius: "5px",
                        fontSize: "1.2rem",
                        color: "#fff",
                    }}
                >
                    <MenuItem disabled value="x">
                        <em>Ordenar</em>
                    </MenuItem>
                    <MenuItem value={"title"}>A - Z</MenuItem>
                    <MenuItem value={"titleReverse"}>Z - A</MenuItem>
                    <MenuItem value={"best"}>Mejor puntuación</MenuItem>
                    <MenuItem value={"worst"}>Peor puntuación</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};

export default SortFilter;

import React, { useEffect } from "react";
import { OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setFilteredList, data }) => {
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        setFilteredList(
            data.results.filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    };

    useEffect(() => {
        setFilteredList(data.results);
    }, []);

    return (
        <form>
            {/* <input
                onChange={handleSearch}
                type="text"
                placeholder="Buscar"
            /> */}
            <OutlinedInput
                onChange={handleSearch}
                placeholder="Busca una serie..."
                color="error"
                sx={{
                  width:"30rem",
                    backgroundColor: "#FFFFFF59",
                    borderRadius: "5px",
                    fontSize: "1.2rem",
                    color: "#fff",
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{ mr: 1, color: "#fff" }} />
                    </InputAdornment>
                }
            />
        </form>
    );
};

export default Search;

import React, { useEffect } from "react";

const Search = ({ setFilteredList, data }) => {

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setFilteredList(data.results.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())))
  }

  useEffect(() => {
    setFilteredList(data.results)
  }, [])

    return (
        <form>
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Buscar"
            />
        </form>
    );
};

export default Search;

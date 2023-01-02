const SortFilter = ({ filteredList, setFilteredList }) => {


    const handleSort = (type) => {
        let sortedList = [...filteredList]

        if (type === "title") {

            sortedList.sort((a, b) => (a.name > b.name) - (a.name < b.name));
            setFilteredList(sortedList)
        }
        if (type === "titleReverse") {
            sortedList.sort((a, b) => (b.name > a.name) - (b.name < a.name))
            setFilteredList(sortedList)
        }
        if (type === "best") {
            sortedList.sort((a, b) => b.vote_average - a.vote_average);
            setFilteredList(sortedList)
        }
        if (type === "worst") {
            sortedList.sort((a, b) => a.vote_average - b.vote_average);
            setFilteredList(sortedList)
        }
        // console.log(filteredList);
    };

    return (
        <form>
            <select
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
            </select>
        </form>
    );
};

export default SortFilter;

import React, { useEffect, useState } from "react";

const SortFilter = ({ filteredList, setFilteredList }) => {


    const handleSort = (type) => {
        let sortedList = [...filteredList]
        const sortByName = (a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            // sort in an ascending order
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        };

        if (type === "title") {

            sortedList.sort((a, b) => sortByName(a, b));
            setFilteredList(sortedList)
        }
        if (type === "titleReverse") {
            const newList = sortedList.sort((a, b) => sortByName(a, b));
            sortedList = newList.reverse();
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
        console.log(filteredList);
    };

    return (
        <form>
            <select
                name="select-order"
                id="order"
                // onChange={(e) => handleSort(e.target.value)}
                onChange={(e) =>handleSort(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled hidden>
                    Seleccione orden
                </option>
                <option value="best">Mejor puntuacion</option>
                <option value="worst">Peor puntuacion</option>
                <option value="title">A -Z</option>
                <option value="titleReverse">Z - A</option>
            </select>
        </form>
    );
};

export default SortFilter;

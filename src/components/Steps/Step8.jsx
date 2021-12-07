import React, { useState } from "react";

export default function Step8( { color, setColor }) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const BASE_URL =
      "http://colormind.io/api/";
  
    function search(evt) {
      const newSearch = evt.target.value;
      setSearchTerm(newSearch);
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
      console.log(searchTerm);
      getColor(searchTerm);
    }
    async function getColor(searchTerm) {
      const color = await fetch(BASE_URL + searchTerm).then((res) => res.json());
      setColor(color.data);
    }
  return (
    <>
      <h1>The Design in Mind</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={search} value={searchTerm} required />
        <button type="submit" value="submit">
          Search
        </button>
      </form>
    </>
  );
}

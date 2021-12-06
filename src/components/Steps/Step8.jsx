import { useState } from "react";

export default function Step8( { color, setColor }) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const BASE_URL =
      "http://colormind.io/api/";
    // this has my specific api key in it, and i added the limit=8 thing to only get back 8 gifs (that was in the giphy docs)
  
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
      // you have to look at the .data property to get the actual gif info... i just found this out by console logging what gifs was set to once it was fetched
    }
  return (
    <>
      <h1>Step 8: The Design in Mind</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={search} value={searchTerm} required />
        <button type="submit" value="submit">
          Search
        </button>
      </form>
    </>
  );
}

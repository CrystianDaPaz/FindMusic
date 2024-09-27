import axios from "axios";

export async function getFilms() {
   const response = await axios.get("http://localhost:4000/films");
   return response.data;
}
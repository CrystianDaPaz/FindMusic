import axios from "axios";

export async function getMusics() {
   const response = await axios.get("http://localhost:4000/musics");
   return response.data;
}
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.nasa.gov/",
});

const key = "DMyXxR1tdvS9DfJ1hS4e30NoPCTHgfA68LdnEYVd";

export const nasaAPI = {
  getAPOD() {
    return instance.get(`planetary/apod?api_key=${key}`).then(response => response)
  }
} ;
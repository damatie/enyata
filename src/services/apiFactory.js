import { AxiosHost } from './axiosGlobal';

// Get Films
export const getFilms = () => {
  const url = `/films`;
  return AxiosHost.get(url);
};


// GetOneFilm
export const getOneFilm = (id) => {
  const url = `/films/${id}`;
  return AxiosHost.get(url);
};

// GetOnePeople
export const getOnePeople = (id) => {
  const url = `/people/${id}`;
  return AxiosHost.get(url);
};

// Get People
export const getPeople = () => {
  const url = `/people/`;
  return AxiosHost.get(url);
};

// Get Starships
export const getStarships = () => {
  const url = `/starships/`;
  return AxiosHost.get(url);
};

// Get OneStarship
export const getOneStarship = (id) => {
  const url = `/starships/${id}`;
  return AxiosHost.get(url);
};

// Get Species
export const getSpecies = () => {
  const url = `/species/`;
  return AxiosHost.get(url);
};

// Get OneSpecies
export const getOneSpecies = (id) => {
  const url = `/species/${id}`;
  return AxiosHost.get(url);
};

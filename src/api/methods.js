import axios from 'axios';
const apiUrl = 'https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get';

export const useAPIFetch = {
  getUnloadAll: () => axios.get(apiUrl),
  getUnloadItem: (id) => axios.get(`${apiUrl}&unload_id=${id}`),
};

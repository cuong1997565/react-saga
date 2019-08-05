import axiosService from '../commans/AxiosService';
import { API_END_POINT } from '../constants/index';
const url = 'tasks';

export const fetchListTask = () => {
  return axiosService.get(`${API_END_POINT}/${url}`);
};

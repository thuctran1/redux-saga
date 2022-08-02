import axiosClient from "./axiosClient";
import { Student, ListResponse, Params } from "models";

const baseUrl = "/students";
const studentApi = {
  getAll(params: Params): Promise<ListResponse<Student>> {
    return axiosClient.get(baseUrl, { params });
  },

  getById(id: string): Promise<Student> {
    const url = baseUrl + "/" + id;
    return axiosClient.get(url);
  },

  add(data: Student): Promise<Student> {
    return axiosClient.post(baseUrl, data);
  },

  update(data: Student): Promise<Student> {
    return axiosClient.patch(baseUrl, data);
  },

  remove(id: string): Promise<any> {
    const url = baseUrl + "/" + id;
    return axiosClient.delete(url);
  },
};

export default studentApi;

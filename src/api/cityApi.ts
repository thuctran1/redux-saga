import axiosClient from "./axiosClient";
import { City, ListResponse } from "models";

const baseUrl = "/cities";
const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    return axiosClient.get(baseUrl, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;

import { APIResponse } from "@types";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError,
} from "axios";

type Headers = {
  Accept: string;
  "Content-type": string;
};

export default class API {
  headers: Headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
      headers: this.headers,
    } as AxiosRequestConfig);

    this.api.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("access_token");
        const refreshToken = localStorage.getItem("refresh_token");
        const uuid = localStorage.getItem("uuid");

        if (accessToken) {
          config.headers["access_token"] = accessToken;
        }
        if (refreshToken) {
          config.headers["refresh_token"] = refreshToken;
        }
        if (uuid) {
          config.headers["uuid"] = uuid;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.api.interceptors.response.use((response) => {
      const accessToken = response.headers["access_token"];
      const refreshToken = response.headers["refresh_token"];
      const uuid = response.headers["uuid"];

      if (accessToken) {
        localStorage.setItem("access_token", accessToken);
      }
      if (refreshToken) {
        localStorage.setItem("refresh_token", refreshToken);
      }
      if (uuid) {
        localStorage.setItem("uuid", uuid);
      }

      return response;
    });
  }

  setHeader(key: string, value: string) {
    this.api.defaults.headers.common[key] = value;
  }

  async GET<T>(path: string): Promise<APIResponse<T>> {
    try {
      const res = await this.api.get(path);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error",
        } as APIResponse<T>;
      }
    }
  }

  async POST<T>(path: string, data: any): Promise<APIResponse<T>> {
    try {
      const res = await this.api.post(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error",
        } as APIResponse<T>;
      }
    }
  }

  async PUT<T>(path: string, data: any): Promise<APIResponse<T>> {
    try {
      const res = await this.api.put(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error",
        } as APIResponse<T>;
      }
    }
  }

  async PATCH<T>(path: string, data: any): Promise<APIResponse<T>> {
    try {
      const res = await this.api.patch(path, data);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error",
        } as APIResponse<T>;
      }
    }
  }

  async DELETE<T>(path: string): Promise<APIResponse<T>> {
    try {
      const res = await this.api.delete(path);
      return res.data;
    } catch (err: AxiosError | any) {
      if (isAxiosError(err)) {
        return {
          status: false,
          message: err?.response?.data?.message || err?.response?.data,
          data: null,
        } as unknown as APIResponse<T>;
      } else {
        return {
          status: false,
          message: "Internal Server Error",
        } as APIResponse<T>;
      }
    }
  }
}

import { FilterParams } from "@types";
import { StateType } from "../context";

export const filterMapper = (
  filters: StateType["filters"] & StateType["pagination"],
): FilterParams => {
  return {
    params: {
      sort: filters.sort,
      order_by: filters.order_by,
      status: parseInt(filters.status) || 0,
      page: filters.page,
      limit: filters.limit,
      email: filters.email,
    },
  };
};

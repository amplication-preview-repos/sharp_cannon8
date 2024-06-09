import { CarWashWhereInput } from "./CarWashWhereInput";
import { CarWashOrderByInput } from "./CarWashOrderByInput";

export type CarWashFindManyArgs = {
  where?: CarWashWhereInput;
  orderBy?: Array<CarWashOrderByInput>;
  skip?: number;
  take?: number;
};

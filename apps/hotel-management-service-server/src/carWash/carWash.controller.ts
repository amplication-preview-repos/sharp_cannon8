import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarWashService } from "./carWash.service";
import { CarWashControllerBase } from "./base/carWash.controller.base";

@swagger.ApiTags("carWashes")
@common.Controller("carWashes")
export class CarWashController extends CarWashControllerBase {
  constructor(protected readonly service: CarWashService) {
    super(service);
  }
}

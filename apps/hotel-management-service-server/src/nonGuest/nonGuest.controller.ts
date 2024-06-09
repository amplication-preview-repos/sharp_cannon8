import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NonGuestService } from "./nonGuest.service";
import { NonGuestControllerBase } from "./base/nonGuest.controller.base";

@swagger.ApiTags("nonGuests")
@common.Controller("nonGuests")
export class NonGuestController extends NonGuestControllerBase {
  constructor(protected readonly service: NonGuestService) {
    super(service);
  }
}

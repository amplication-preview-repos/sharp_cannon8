import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MenuItemService } from "./menuItem.service";
import { MenuItemControllerBase } from "./base/menuItem.controller.base";

@swagger.ApiTags("menuItems")
@common.Controller("menuItems")
export class MenuItemController extends MenuItemControllerBase {
  constructor(protected readonly service: MenuItemService) {
    super(service);
  }
}

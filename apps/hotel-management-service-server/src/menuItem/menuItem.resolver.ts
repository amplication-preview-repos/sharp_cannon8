import * as graphql from "@nestjs/graphql";
import { MenuItemResolverBase } from "./base/menuItem.resolver.base";
import { MenuItem } from "./base/MenuItem";
import { MenuItemService } from "./menuItem.service";

@graphql.Resolver(() => MenuItem)
export class MenuItemResolver extends MenuItemResolverBase {
  constructor(protected readonly service: MenuItemService) {
    super(service);
  }
}

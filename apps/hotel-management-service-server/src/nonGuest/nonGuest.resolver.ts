import * as graphql from "@nestjs/graphql";
import { NonGuestResolverBase } from "./base/nonGuest.resolver.base";
import { NonGuest } from "./base/NonGuest";
import { NonGuestService } from "./nonGuest.service";

@graphql.Resolver(() => NonGuest)
export class NonGuestResolver extends NonGuestResolverBase {
  constructor(protected readonly service: NonGuestService) {
    super(service);
  }
}

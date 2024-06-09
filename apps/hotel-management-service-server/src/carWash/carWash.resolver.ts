import * as graphql from "@nestjs/graphql";
import { CarWashResolverBase } from "./base/carWash.resolver.base";
import { CarWash } from "./base/CarWash";
import { CarWashService } from "./carWash.service";

@graphql.Resolver(() => CarWash)
export class CarWashResolver extends CarWashResolverBase {
  constructor(protected readonly service: CarWashService) {
    super(service);
  }
}

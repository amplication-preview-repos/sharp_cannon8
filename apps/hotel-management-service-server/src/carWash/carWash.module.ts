import { Module } from "@nestjs/common";
import { CarWashModuleBase } from "./base/carWash.module.base";
import { CarWashService } from "./carWash.service";
import { CarWashController } from "./carWash.controller";
import { CarWashResolver } from "./carWash.resolver";

@Module({
  imports: [CarWashModuleBase],
  controllers: [CarWashController],
  providers: [CarWashService, CarWashResolver],
  exports: [CarWashService],
})
export class CarWashModule {}

import { Module } from "@nestjs/common";
import { NonGuestModuleBase } from "./base/nonGuest.module.base";
import { NonGuestService } from "./nonGuest.service";
import { NonGuestController } from "./nonGuest.controller";
import { NonGuestResolver } from "./nonGuest.resolver";

@Module({
  imports: [NonGuestModuleBase],
  controllers: [NonGuestController],
  providers: [NonGuestService, NonGuestResolver],
  exports: [NonGuestService],
})
export class NonGuestModule {}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NonGuestServiceBase } from "./base/nonGuest.service.base";

@Injectable()
export class NonGuestService extends NonGuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarWashServiceBase } from "./base/carWash.service.base";

@Injectable()
export class CarWashService extends CarWashServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

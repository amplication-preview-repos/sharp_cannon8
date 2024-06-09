/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReservationService } from "../reservation.service";
import { ReservationCreateInput } from "./ReservationCreateInput";
import { Reservation } from "./Reservation";
import { ReservationFindManyArgs } from "./ReservationFindManyArgs";
import { ReservationWhereUniqueInput } from "./ReservationWhereUniqueInput";
import { ReservationUpdateInput } from "./ReservationUpdateInput";

export class ReservationControllerBase {
  constructor(protected readonly service: ReservationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reservation })
  async createReservation(
    @common.Body() data: ReservationCreateInput
  ): Promise<Reservation> {
    return await this.service.createReservation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Reservation] })
  @ApiNestedQuery(ReservationFindManyArgs)
  async reservations(@common.Req() request: Request): Promise<Reservation[]> {
    const args = plainToClass(ReservationFindManyArgs, request.query);
    return this.service.reservations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reservation(
    @common.Param() params: ReservationWhereUniqueInput
  ): Promise<Reservation | null> {
    const result = await this.service.reservation({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReservation(
    @common.Param() params: ReservationWhereUniqueInput,
    @common.Body() data: ReservationUpdateInput
  ): Promise<Reservation | null> {
    try {
      return await this.service.updateReservation({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reservation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReservation(
    @common.Param() params: ReservationWhereUniqueInput
  ): Promise<Reservation | null> {
    try {
      return await this.service.deleteReservation({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MenuItem as PrismaMenuItem } from "@prisma/client";

export class MenuItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MenuItemCountArgs, "select">): Promise<number> {
    return this.prisma.menuItem.count(args);
  }

  async menuItems<T extends Prisma.MenuItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindManyArgs>
  ): Promise<PrismaMenuItem[]> {
    return this.prisma.menuItem.findMany<Prisma.MenuItemFindManyArgs>(args);
  }
  async menuItem<T extends Prisma.MenuItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemFindUniqueArgs>
  ): Promise<PrismaMenuItem | null> {
    return this.prisma.menuItem.findUnique(args);
  }
  async createMenuItem<T extends Prisma.MenuItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemCreateArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.create<T>(args);
  }
  async updateMenuItem<T extends Prisma.MenuItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemUpdateArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.update<T>(args);
  }
  async deleteMenuItem<T extends Prisma.MenuItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MenuItemDeleteArgs>
  ): Promise<PrismaMenuItem> {
    return this.prisma.menuItem.delete(args);
  }
}

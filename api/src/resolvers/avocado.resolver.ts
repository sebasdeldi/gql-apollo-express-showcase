import type { Attributes, Avocado, Prisma } from '@prisma/client'
import { prisma } from '../prisma'

export function findAll(
    parent: unknown,
    args: { skip?: number, take?: number,
    where?: Prisma.AvocadoWhereInput }
  ): Promise<Avocado[]> {
  return prisma.avocado.findMany(
    {
      skip: args.skip,
      take: args.take,
      include: { attributes: true },
      where: args.where
    }
  )
}

export function findOne(parent: unknown, args: { id: string }): Promise<Avocado> {
  return prisma.avocado.findUniqueOrThrow(
    {
      where: { id: parseInt(args.id, 10) },
      include: { attributes: true }
    }
  )
}

// No idea how to check types of a complex input
export function createAvocado(parent: unknown, {data}: any): Promise<Avocado> {
  const { name, price, imageUrl, ...attributes } = data
  return prisma.avocado.create(
    {
      data: {
        name,
        price,
        imageUrl,
        attributes: {
          create: {
            ...attributes
          }
        }
      },
      include: { attributes: true }
    }
  )
}

export const resolver: Record<keyof (Avocado & {attributes: Attributes}), (parent: Avocado & {attributes: Attributes}) => unknown> = {
  id: (parent) => parent.id,
  createdAt: (parent) => parent.createdAt,
  updatedAt: (parent) => parent.updatedAt,
  name: (parent) => parent.name,
  price: (parent) => parent.price,
  imageUrl: (parent) => parent.imageUrl,
  attributes: (parent) => ({
    size: parent.attributes.size,
    weight: parent.attributes.weight
  })
}

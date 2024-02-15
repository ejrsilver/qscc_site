/* eslint-disable */
import { z } from 'zod';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IntNullableFilter>;
export const IntNullableFilterObjectSchema: SchemaType = z
    .object({
        equals: z.union([z.number(), z.null()]).optional().nullable(),
        in: z.union([z.number().array(), z.null()]).optional().nullable(),
        notIn: z.union([z.number().array(), z.null()]).optional().nullable(),
        lt: z.number().optional(),
        lte: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        not: z
            .union([z.number(), z.lazy(() => NestedIntNullableFilterObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
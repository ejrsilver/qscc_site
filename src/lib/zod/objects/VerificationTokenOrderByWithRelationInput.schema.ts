/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput>;
export const VerificationTokenOrderByWithRelationInputObjectSchema: SchemaType = z
    .object({
        identifier: z.lazy(() => SortOrderSchema).optional(),
        token: z.lazy(() => SortOrderSchema).optional(),
        expires: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
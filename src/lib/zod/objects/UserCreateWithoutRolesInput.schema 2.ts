/* eslint-disable */
import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { CodeRunCreateNestedManyWithoutCreatedByInputObjectSchema } from './CodeRunCreateNestedManyWithoutCreatedByInput.schema';
import { LessonCreateNestedManyWithoutAuthorInputObjectSchema } from './LessonCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.UserCreateWithoutRolesInput>;
export const UserCreateWithoutRolesInputObjectSchema: SchemaType = z
    .object({
        id: z.string().optional(),
        name: z.union([z.string(), z.null()]).optional().nullable(),
        netid: z.union([z.string(), z.null()]).optional().nullable(),
        student_number: z.union([z.string(), z.null()]).optional().nullable(),
        email: z.string(),
        emailVerified: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        password: z.string(),
        image: z.union([z.string(), z.null()]).optional().nullable(),
        accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
        sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
        codeRuns: z.lazy(() => CodeRunCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
        lessons: z.lazy(() => LessonCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
    })
    .strict() as SchemaType;

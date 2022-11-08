import { z } from 'zod';

const stringZod = z.string();
const numberZod = z.number();
const booleanZod = z.boolean();
const undefinedZod = z.undefined();
const nullZod = z.null();

const result = stringZod.parse('Mauricio');

console.log(result);

const UserSchema = z.object({
    email: z.string().email(),
    fullname: z.string(),
    phone: z.number(),
});

type UserObject = z.infer<typeof UserSchema>;

const User: UserObject = {
    email: 'correo@correo.com',
    fullname: 'Mauricio',
    phone: 12345678,
};

const result2 = UserSchema.parse(User);

console.log(result2);

// SI quiero combinar dos Schemas diferentes
const UserAdrress = z.object({
    street: z.string(),
    city: z.string(),
});

const userDataSchema = UserSchema.merge(UserAdrress);

type UserComplete = z.infer<typeof userDataSchema>;

const usuarioCompleto: UserComplete = {
    fullname: 'Mauricio Corzo',
    city: 'Santiago del Estero',
    email: 'correo@correo.com',
    phone: 2233445566,
    // street: 'Av. 9 de Septiembre',
};

// EL SAFEPARSE NO CORTA LA EJECUCION POR UN ERROR, ASI LO PODEMOS MANEJAR SIN QUE SE CORTE EL PROGRAMA
const result3 = userDataSchema.safeParse(usuarioCompleto);

console.log(result3.success); // Si da false es porque no paso la validacion

// Arrays

const UserArraySchema = z.object({
    name: z.string(),
    age: z.number(),
});

const arrayDeUsersSchema = z.array(UserArraySchema);

type ArrayDeUsersSchema = z.infer<typeof arrayDeUsersSchema>;

// El orden si importa
const s1 = z.string().optional().array(); // array de strings o array de undefined
const s2 = z.string().array().optional(); // array de strings o un undefined

type s1Type = z.infer<typeof s1>;
type s2Type = z.infer<typeof s2>;

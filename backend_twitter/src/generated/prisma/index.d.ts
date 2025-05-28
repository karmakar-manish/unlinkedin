
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model userSchema
 * 
 */
export type userSchema = $Result.DefaultSelection<Prisma.$userSchemaPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserSchemas
 * const userSchemas = await prisma.userSchema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserSchemas
   * const userSchemas = await prisma.userSchema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userSchema`: Exposes CRUD operations for the **userSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSchemas
    * const userSchemas = await prisma.userSchema.findMany()
    * ```
    */
  get userSchema(): Prisma.userSchemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    userSchema: 'userSchema',
    Experience: 'Experience',
    Education: 'Education'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userSchema" | "experience" | "education"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      userSchema: {
        payload: Prisma.$userSchemaPayload<ExtArgs>
        fields: Prisma.userSchemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userSchemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userSchemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          findFirst: {
            args: Prisma.userSchemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userSchemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          findMany: {
            args: Prisma.userSchemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>[]
          }
          create: {
            args: Prisma.userSchemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          createMany: {
            args: Prisma.userSchemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userSchemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>[]
          }
          delete: {
            args: Prisma.userSchemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          update: {
            args: Prisma.userSchemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          deleteMany: {
            args: Prisma.userSchemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userSchemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userSchemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>[]
          }
          upsert: {
            args: Prisma.userSchemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userSchemaPayload>
          }
          aggregate: {
            args: Prisma.UserSchemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSchema>
          }
          groupBy: {
            args: Prisma.userSchemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.userSchemaCountArgs<ExtArgs>
            result: $Utils.Optional<UserSchemaCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userSchema?: userSchemaOmit
    experience?: ExperienceOmit
    education?: EducationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserSchemaCountOutputType
   */

  export type UserSchemaCountOutputType = {
    experience: number
    education: number
    connections: number
    connectedWith: number
  }

  export type UserSchemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | UserSchemaCountOutputTypeCountExperienceArgs
    education?: boolean | UserSchemaCountOutputTypeCountEducationArgs
    connections?: boolean | UserSchemaCountOutputTypeCountConnectionsArgs
    connectedWith?: boolean | UserSchemaCountOutputTypeCountConnectedWithArgs
  }

  // Custom InputTypes
  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSchemaCountOutputType
     */
    select?: UserSchemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSchemaWhereInput
  }

  /**
   * UserSchemaCountOutputType without action
   */
  export type UserSchemaCountOutputTypeCountConnectedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSchemaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model userSchema
   */

  export type AggregateUserSchema = {
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  export type UserSchemaAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSchemaSumAggregateOutputType = {
    id: number | null
  }

  export type UserSchemaMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    bannerImg: string | null
    headline: string | null
    location: string | null
    about: string | null
  }

  export type UserSchemaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    bannerImg: string | null
    headline: string | null
    location: string | null
    about: string | null
  }

  export type UserSchemaCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    password: number
    profilePicture: number
    bannerImg: number
    headline: number
    location: number
    about: number
    skills: number
    _all: number
  }


  export type UserSchemaAvgAggregateInputType = {
    id?: true
  }

  export type UserSchemaSumAggregateInputType = {
    id?: true
  }

  export type UserSchemaMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    profilePicture?: true
    bannerImg?: true
    headline?: true
    location?: true
    about?: true
  }

  export type UserSchemaMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    profilePicture?: true
    bannerImg?: true
    headline?: true
    location?: true
    about?: true
  }

  export type UserSchemaCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    password?: true
    profilePicture?: true
    bannerImg?: true
    headline?: true
    location?: true
    about?: true
    skills?: true
    _all?: true
  }

  export type UserSchemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSchema to aggregate.
     */
    where?: userSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSchemas to fetch.
     */
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userSchemas
    **/
    _count?: true | UserSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSchemaMaxAggregateInputType
  }

  export type GetUserSchemaAggregateType<T extends UserSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSchema[P]>
      : GetScalarType<T[P], AggregateUserSchema[P]>
  }




  export type userSchemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userSchemaWhereInput
    orderBy?: userSchemaOrderByWithAggregationInput | userSchemaOrderByWithAggregationInput[]
    by: UserSchemaScalarFieldEnum[] | UserSchemaScalarFieldEnum
    having?: userSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSchemaCountAggregateInputType | true
    _avg?: UserSchemaAvgAggregateInputType
    _sum?: UserSchemaSumAggregateInputType
    _min?: UserSchemaMinAggregateInputType
    _max?: UserSchemaMaxAggregateInputType
  }

  export type UserSchemaGroupByOutputType = {
    id: number
    name: string
    username: string
    email: string
    password: string
    profilePicture: string
    bannerImg: string
    headline: string
    location: string
    about: string
    skills: string[]
    _count: UserSchemaCountAggregateOutputType | null
    _avg: UserSchemaAvgAggregateOutputType | null
    _sum: UserSchemaSumAggregateOutputType | null
    _min: UserSchemaMinAggregateOutputType | null
    _max: UserSchemaMaxAggregateOutputType | null
  }

  type GetUserSchemaGroupByPayload<T extends userSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], UserSchemaGroupByOutputType[P]>
        }
      >
    >


  export type userSchemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bannerImg?: boolean
    headline?: boolean
    location?: boolean
    about?: boolean
    skills?: boolean
    experience?: boolean | userSchema$experienceArgs<ExtArgs>
    education?: boolean | userSchema$educationArgs<ExtArgs>
    connections?: boolean | userSchema$connectionsArgs<ExtArgs>
    connectedWith?: boolean | userSchema$connectedWithArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSchema"]>

  export type userSchemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bannerImg?: boolean
    headline?: boolean
    location?: boolean
    about?: boolean
    skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type userSchemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bannerImg?: boolean
    headline?: boolean
    location?: boolean
    about?: boolean
    skills?: boolean
  }, ExtArgs["result"]["userSchema"]>

  export type userSchemaSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    bannerImg?: boolean
    headline?: boolean
    location?: boolean
    about?: boolean
    skills?: boolean
  }

  export type userSchemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "password" | "profilePicture" | "bannerImg" | "headline" | "location" | "about" | "skills", ExtArgs["result"]["userSchema"]>
  export type userSchemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | userSchema$experienceArgs<ExtArgs>
    education?: boolean | userSchema$educationArgs<ExtArgs>
    connections?: boolean | userSchema$connectionsArgs<ExtArgs>
    connectedWith?: boolean | userSchema$connectedWithArgs<ExtArgs>
    _count?: boolean | UserSchemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userSchemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userSchemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userSchemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userSchema"
    objects: {
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      connections: Prisma.$userSchemaPayload<ExtArgs>[]
      connectedWith: Prisma.$userSchemaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      email: string
      password: string
      profilePicture: string
      bannerImg: string
      headline: string
      location: string
      about: string
      skills: string[]
    }, ExtArgs["result"]["userSchema"]>
    composites: {}
  }

  type userSchemaGetPayload<S extends boolean | null | undefined | userSchemaDefaultArgs> = $Result.GetResult<Prisma.$userSchemaPayload, S>

  type userSchemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userSchemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSchemaCountAggregateInputType | true
    }

  export interface userSchemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userSchema'], meta: { name: 'userSchema' } }
    /**
     * Find zero or one UserSchema that matches the filter.
     * @param {userSchemaFindUniqueArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userSchemaFindUniqueArgs>(args: SelectSubset<T, userSchemaFindUniqueArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSchema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userSchemaFindUniqueOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userSchemaFindUniqueOrThrowArgs>(args: SelectSubset<T, userSchemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaFindFirstArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userSchemaFindFirstArgs>(args?: SelectSubset<T, userSchemaFindFirstArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSchema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaFindFirstOrThrowArgs} args - Arguments to find a UserSchema
     * @example
     * // Get one UserSchema
     * const userSchema = await prisma.userSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userSchemaFindFirstOrThrowArgs>(args?: SelectSubset<T, userSchemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSchemas
     * const userSchemas = await prisma.userSchema.findMany()
     * 
     * // Get first 10 UserSchemas
     * const userSchemas = await prisma.userSchema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSchemaWithIdOnly = await prisma.userSchema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userSchemaFindManyArgs>(args?: SelectSubset<T, userSchemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSchema.
     * @param {userSchemaCreateArgs} args - Arguments to create a UserSchema.
     * @example
     * // Create one UserSchema
     * const UserSchema = await prisma.userSchema.create({
     *   data: {
     *     // ... data to create a UserSchema
     *   }
     * })
     * 
     */
    create<T extends userSchemaCreateArgs>(args: SelectSubset<T, userSchemaCreateArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSchemas.
     * @param {userSchemaCreateManyArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userSchemaCreateManyArgs>(args?: SelectSubset<T, userSchemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSchemas and returns the data saved in the database.
     * @param {userSchemaCreateManyAndReturnArgs} args - Arguments to create many UserSchemas.
     * @example
     * // Create many UserSchemas
     * const userSchema = await prisma.userSchema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSchemas and only return the `id`
     * const userSchemaWithIdOnly = await prisma.userSchema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userSchemaCreateManyAndReturnArgs>(args?: SelectSubset<T, userSchemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSchema.
     * @param {userSchemaDeleteArgs} args - Arguments to delete one UserSchema.
     * @example
     * // Delete one UserSchema
     * const UserSchema = await prisma.userSchema.delete({
     *   where: {
     *     // ... filter to delete one UserSchema
     *   }
     * })
     * 
     */
    delete<T extends userSchemaDeleteArgs>(args: SelectSubset<T, userSchemaDeleteArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSchema.
     * @param {userSchemaUpdateArgs} args - Arguments to update one UserSchema.
     * @example
     * // Update one UserSchema
     * const userSchema = await prisma.userSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userSchemaUpdateArgs>(args: SelectSubset<T, userSchemaUpdateArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSchemas.
     * @param {userSchemaDeleteManyArgs} args - Arguments to filter UserSchemas to delete.
     * @example
     * // Delete a few UserSchemas
     * const { count } = await prisma.userSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userSchemaDeleteManyArgs>(args?: SelectSubset<T, userSchemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userSchemaUpdateManyArgs>(args: SelectSubset<T, userSchemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSchemas and returns the data updated in the database.
     * @param {userSchemaUpdateManyAndReturnArgs} args - Arguments to update many UserSchemas.
     * @example
     * // Update many UserSchemas
     * const userSchema = await prisma.userSchema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSchemas and only return the `id`
     * const userSchemaWithIdOnly = await prisma.userSchema.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userSchemaUpdateManyAndReturnArgs>(args: SelectSubset<T, userSchemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSchema.
     * @param {userSchemaUpsertArgs} args - Arguments to update or create a UserSchema.
     * @example
     * // Update or create a UserSchema
     * const userSchema = await prisma.userSchema.upsert({
     *   create: {
     *     // ... data to create a UserSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSchema we want to update
     *   }
     * })
     */
    upsert<T extends userSchemaUpsertArgs>(args: SelectSubset<T, userSchemaUpsertArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaCountArgs} args - Arguments to filter UserSchemas to count.
     * @example
     * // Count the number of UserSchemas
     * const count = await prisma.userSchema.count({
     *   where: {
     *     // ... the filter for the UserSchemas we want to count
     *   }
     * })
    **/
    count<T extends userSchemaCountArgs>(
      args?: Subset<T, userSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSchemaAggregateArgs>(args: Subset<T, UserSchemaAggregateArgs>): Prisma.PrismaPromise<GetUserSchemaAggregateType<T>>

    /**
     * Group by UserSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userSchemaGroupByArgs['orderBy'] }
        : { orderBy?: userSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userSchema model
   */
  readonly fields: userSchemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userSchemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experience<T extends userSchema$experienceArgs<ExtArgs> = {}>(args?: Subset<T, userSchema$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends userSchema$educationArgs<ExtArgs> = {}>(args?: Subset<T, userSchema$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connections<T extends userSchema$connectionsArgs<ExtArgs> = {}>(args?: Subset<T, userSchema$connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connectedWith<T extends userSchema$connectedWithArgs<ExtArgs> = {}>(args?: Subset<T, userSchema$connectedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userSchema model
   */
  interface userSchemaFieldRefs {
    readonly id: FieldRef<"userSchema", 'Int'>
    readonly name: FieldRef<"userSchema", 'String'>
    readonly username: FieldRef<"userSchema", 'String'>
    readonly email: FieldRef<"userSchema", 'String'>
    readonly password: FieldRef<"userSchema", 'String'>
    readonly profilePicture: FieldRef<"userSchema", 'String'>
    readonly bannerImg: FieldRef<"userSchema", 'String'>
    readonly headline: FieldRef<"userSchema", 'String'>
    readonly location: FieldRef<"userSchema", 'String'>
    readonly about: FieldRef<"userSchema", 'String'>
    readonly skills: FieldRef<"userSchema", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * userSchema findUnique
   */
  export type userSchemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter, which userSchema to fetch.
     */
    where: userSchemaWhereUniqueInput
  }

  /**
   * userSchema findUniqueOrThrow
   */
  export type userSchemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter, which userSchema to fetch.
     */
    where: userSchemaWhereUniqueInput
  }

  /**
   * userSchema findFirst
   */
  export type userSchemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter, which userSchema to fetch.
     */
    where?: userSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSchemas to fetch.
     */
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSchemas.
     */
    cursor?: userSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * userSchema findFirstOrThrow
   */
  export type userSchemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter, which userSchema to fetch.
     */
    where?: userSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSchemas to fetch.
     */
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userSchemas.
     */
    cursor?: userSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userSchemas.
     */
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * userSchema findMany
   */
  export type userSchemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter, which userSchemas to fetch.
     */
    where?: userSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userSchemas to fetch.
     */
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userSchemas.
     */
    cursor?: userSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userSchemas.
     */
    skip?: number
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * userSchema create
   */
  export type userSchemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * The data needed to create a userSchema.
     */
    data: XOR<userSchemaCreateInput, userSchemaUncheckedCreateInput>
  }

  /**
   * userSchema createMany
   */
  export type userSchemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userSchemas.
     */
    data: userSchemaCreateManyInput | userSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSchema createManyAndReturn
   */
  export type userSchemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * The data used to create many userSchemas.
     */
    data: userSchemaCreateManyInput | userSchemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userSchema update
   */
  export type userSchemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * The data needed to update a userSchema.
     */
    data: XOR<userSchemaUpdateInput, userSchemaUncheckedUpdateInput>
    /**
     * Choose, which userSchema to update.
     */
    where: userSchemaWhereUniqueInput
  }

  /**
   * userSchema updateMany
   */
  export type userSchemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userSchemas.
     */
    data: XOR<userSchemaUpdateManyMutationInput, userSchemaUncheckedUpdateManyInput>
    /**
     * Filter which userSchemas to update
     */
    where?: userSchemaWhereInput
    /**
     * Limit how many userSchemas to update.
     */
    limit?: number
  }

  /**
   * userSchema updateManyAndReturn
   */
  export type userSchemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * The data used to update userSchemas.
     */
    data: XOR<userSchemaUpdateManyMutationInput, userSchemaUncheckedUpdateManyInput>
    /**
     * Filter which userSchemas to update
     */
    where?: userSchemaWhereInput
    /**
     * Limit how many userSchemas to update.
     */
    limit?: number
  }

  /**
   * userSchema upsert
   */
  export type userSchemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * The filter to search for the userSchema to update in case it exists.
     */
    where: userSchemaWhereUniqueInput
    /**
     * In case the userSchema found by the `where` argument doesn't exist, create a new userSchema with this data.
     */
    create: XOR<userSchemaCreateInput, userSchemaUncheckedCreateInput>
    /**
     * In case the userSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userSchemaUpdateInput, userSchemaUncheckedUpdateInput>
  }

  /**
   * userSchema delete
   */
  export type userSchemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    /**
     * Filter which userSchema to delete.
     */
    where: userSchemaWhereUniqueInput
  }

  /**
   * userSchema deleteMany
   */
  export type userSchemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userSchemas to delete
     */
    where?: userSchemaWhereInput
    /**
     * Limit how many userSchemas to delete.
     */
    limit?: number
  }

  /**
   * userSchema.experience
   */
  export type userSchema$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * userSchema.education
   */
  export type userSchema$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * userSchema.connections
   */
  export type userSchema$connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    where?: userSchemaWhereInput
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    cursor?: userSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * userSchema.connectedWith
   */
  export type userSchema$connectedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
    where?: userSchemaWhereInput
    orderBy?: userSchemaOrderByWithRelationInput | userSchemaOrderByWithRelationInput[]
    cursor?: userSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSchemaScalarFieldEnum | UserSchemaScalarFieldEnum[]
  }

  /**
   * userSchema without action
   */
  export type userSchemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userSchema
     */
    select?: userSchemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userSchema
     */
    omit?: userSchemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userSchemaInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    userId: number | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    company: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    userId: number | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    company: number
    startDate: number
    endDate: number
    description: number
    userId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExperienceSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    userId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    userId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    startDate?: true
    endDate?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: number
    title: string
    company: string
    startDate: Date
    endDate: Date
    description: string
    userId: number
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    userId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "company" | "startDate" | "endDate" | "description" | "userId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      User: Prisma.$userSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      company: string
      startDate: Date
      endDate: Date
      description: string
      userId: number
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends userSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userSchemaDefaultArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'Int'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly userId: FieldRef<"Experience", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    startYear: number | null
    endYear: number | null
    userId: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    startYear: number | null
    endYear: number | null
    userId: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    school: string | null
    fieldOfStudy: string | null
    startYear: number | null
    endYear: number | null
    userId: number | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    school: string | null
    fieldOfStudy: string | null
    startYear: number | null
    endYear: number | null
    userId: number | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    school: number
    fieldOfStudy: number
    startYear: number
    endYear: number
    userId: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    startYear?: true
    endYear?: true
    userId?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    startYear?: true
    endYear?: true
    userId?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    school?: true
    fieldOfStudy?: true
    startYear?: true
    endYear?: true
    userId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    school?: true
    fieldOfStudy?: true
    startYear?: true
    endYear?: true
    userId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    school?: true
    fieldOfStudy?: true
    startYear?: true
    endYear?: true
    userId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
    userId: number
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    fieldOfStudy?: boolean
    startYear?: boolean
    endYear?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    fieldOfStudy?: boolean
    startYear?: boolean
    endYear?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    fieldOfStudy?: boolean
    startYear?: boolean
    endYear?: boolean
    userId?: boolean
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    school?: boolean
    fieldOfStudy?: boolean
    startYear?: boolean
    endYear?: boolean
    userId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "school" | "fieldOfStudy" | "startYear" | "endYear" | "userId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | userSchemaDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      User: Prisma.$userSchemaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      school: string
      fieldOfStudy: string
      startYear: number
      endYear: number
      userId: number
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends userSchemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userSchemaDefaultArgs<ExtArgs>>): Prisma__userSchemaClient<$Result.GetResult<Prisma.$userSchemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly school: FieldRef<"Education", 'String'>
    readonly fieldOfStudy: FieldRef<"Education", 'String'>
    readonly startYear: FieldRef<"Education", 'Int'>
    readonly endYear: FieldRef<"Education", 'Int'>
    readonly userId: FieldRef<"Education", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserSchemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture',
    bannerImg: 'bannerImg',
    headline: 'headline',
    location: 'location',
    about: 'about',
    skills: 'skills'
  };

  export type UserSchemaScalarFieldEnum = (typeof UserSchemaScalarFieldEnum)[keyof typeof UserSchemaScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    userId: 'userId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    school: 'school',
    fieldOfStudy: 'fieldOfStudy',
    startYear: 'startYear',
    endYear: 'endYear',
    userId: 'userId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userSchemaWhereInput = {
    AND?: userSchemaWhereInput | userSchemaWhereInput[]
    OR?: userSchemaWhereInput[]
    NOT?: userSchemaWhereInput | userSchemaWhereInput[]
    id?: IntFilter<"userSchema"> | number
    name?: StringFilter<"userSchema"> | string
    username?: StringFilter<"userSchema"> | string
    email?: StringFilter<"userSchema"> | string
    password?: StringFilter<"userSchema"> | string
    profilePicture?: StringFilter<"userSchema"> | string
    bannerImg?: StringFilter<"userSchema"> | string
    headline?: StringFilter<"userSchema"> | string
    location?: StringFilter<"userSchema"> | string
    about?: StringFilter<"userSchema"> | string
    skills?: StringNullableListFilter<"userSchema">
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    connections?: UserSchemaListRelationFilter
    connectedWith?: UserSchemaListRelationFilter
  }

  export type userSchemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bannerImg?: SortOrder
    headline?: SortOrder
    location?: SortOrder
    about?: SortOrder
    skills?: SortOrder
    experience?: ExperienceOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    connections?: userSchemaOrderByRelationAggregateInput
    connectedWith?: userSchemaOrderByRelationAggregateInput
  }

  export type userSchemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userSchemaWhereInput | userSchemaWhereInput[]
    OR?: userSchemaWhereInput[]
    NOT?: userSchemaWhereInput | userSchemaWhereInput[]
    name?: StringFilter<"userSchema"> | string
    password?: StringFilter<"userSchema"> | string
    profilePicture?: StringFilter<"userSchema"> | string
    bannerImg?: StringFilter<"userSchema"> | string
    headline?: StringFilter<"userSchema"> | string
    location?: StringFilter<"userSchema"> | string
    about?: StringFilter<"userSchema"> | string
    skills?: StringNullableListFilter<"userSchema">
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    connections?: UserSchemaListRelationFilter
    connectedWith?: UserSchemaListRelationFilter
  }, "id" | "username" | "email">

  export type userSchemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bannerImg?: SortOrder
    headline?: SortOrder
    location?: SortOrder
    about?: SortOrder
    skills?: SortOrder
    _count?: userSchemaCountOrderByAggregateInput
    _avg?: userSchemaAvgOrderByAggregateInput
    _max?: userSchemaMaxOrderByAggregateInput
    _min?: userSchemaMinOrderByAggregateInput
    _sum?: userSchemaSumOrderByAggregateInput
  }

  export type userSchemaScalarWhereWithAggregatesInput = {
    AND?: userSchemaScalarWhereWithAggregatesInput | userSchemaScalarWhereWithAggregatesInput[]
    OR?: userSchemaScalarWhereWithAggregatesInput[]
    NOT?: userSchemaScalarWhereWithAggregatesInput | userSchemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userSchema"> | number
    name?: StringWithAggregatesFilter<"userSchema"> | string
    username?: StringWithAggregatesFilter<"userSchema"> | string
    email?: StringWithAggregatesFilter<"userSchema"> | string
    password?: StringWithAggregatesFilter<"userSchema"> | string
    profilePicture?: StringWithAggregatesFilter<"userSchema"> | string
    bannerImg?: StringWithAggregatesFilter<"userSchema"> | string
    headline?: StringWithAggregatesFilter<"userSchema"> | string
    location?: StringWithAggregatesFilter<"userSchema"> | string
    about?: StringWithAggregatesFilter<"userSchema"> | string
    skills?: StringNullableListFilter<"userSchema">
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringFilter<"Experience"> | string
    userId?: IntFilter<"Experience"> | number
    User?: XOR<UserSchemaScalarRelationFilter, userSchemaWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    User?: userSchemaOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringFilter<"Experience"> | string
    userId?: IntFilter<"Experience"> | number
    User?: XOR<UserSchemaScalarRelationFilter, userSchemaWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experience"> | number
    title?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    description?: StringWithAggregatesFilter<"Experience"> | string
    userId?: IntWithAggregatesFilter<"Experience"> | number
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    school?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startYear?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: IntFilter<"Education"> | number
    User?: XOR<UserSchemaScalarRelationFilter, userSchemaWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    school?: SortOrder
    fieldOfStudy?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
    User?: userSchemaOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    school?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startYear?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: IntFilter<"Education"> | number
    User?: XOR<UserSchemaScalarRelationFilter, userSchemaWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    school?: SortOrder
    fieldOfStudy?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    school?: StringWithAggregatesFilter<"Education"> | string
    fieldOfStudy?: StringWithAggregatesFilter<"Education"> | string
    startYear?: IntWithAggregatesFilter<"Education"> | number
    endYear?: IntWithAggregatesFilter<"Education"> | number
    userId?: IntWithAggregatesFilter<"Education"> | number
  }

  export type userSchemaCreateInput = {
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    connections?: userSchemaCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    connections?: userSchemaUncheckedCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaUncheckedCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    connections?: userSchemaUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    connections?: userSchemaUncheckedUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUncheckedUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaCreateManyInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
  }

  export type userSchemaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
  }

  export type userSchemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
  }

  export type ExperienceCreateInput = {
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
    User: userSchemaCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
    userId: number
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    User?: userSchemaUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceCreateManyInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
    userId: number
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationCreateInput = {
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
    User: userSchemaCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
    userId: number
  }

  export type EducationUpdateInput = {
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    User?: userSchemaUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationCreateManyInput = {
    id?: number
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
    userId: number
  }

  export type EducationUpdateManyMutationInput = {
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type UserSchemaListRelationFilter = {
    every?: userSchemaWhereInput
    some?: userSchemaWhereInput
    none?: userSchemaWhereInput
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userSchemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userSchemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bannerImg?: SortOrder
    headline?: SortOrder
    location?: SortOrder
    about?: SortOrder
    skills?: SortOrder
  }

  export type userSchemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userSchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bannerImg?: SortOrder
    headline?: SortOrder
    location?: SortOrder
    about?: SortOrder
  }

  export type userSchemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    bannerImg?: SortOrder
    headline?: SortOrder
    location?: SortOrder
    about?: SortOrder
  }

  export type userSchemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSchemaScalarRelationFilter = {
    is?: userSchemaWhereInput
    isNot?: userSchemaWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    fieldOfStudy?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    fieldOfStudy?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    fieldOfStudy?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    startYear?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type userSchemaCreateskillsInput = {
    set: string[]
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type userSchemaCreateNestedManyWithoutConnectedWithInput = {
    create?: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput> | userSchemaCreateWithoutConnectedWithInput[] | userSchemaUncheckedCreateWithoutConnectedWithInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectedWithInput | userSchemaCreateOrConnectWithoutConnectedWithInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
  }

  export type userSchemaCreateNestedManyWithoutConnectionsInput = {
    create?: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput> | userSchemaCreateWithoutConnectionsInput[] | userSchemaUncheckedCreateWithoutConnectionsInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectionsInput | userSchemaCreateOrConnectWithoutConnectionsInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type userSchemaUncheckedCreateNestedManyWithoutConnectedWithInput = {
    create?: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput> | userSchemaCreateWithoutConnectedWithInput[] | userSchemaUncheckedCreateWithoutConnectedWithInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectedWithInput | userSchemaCreateOrConnectWithoutConnectedWithInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
  }

  export type userSchemaUncheckedCreateNestedManyWithoutConnectionsInput = {
    create?: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput> | userSchemaCreateWithoutConnectionsInput[] | userSchemaUncheckedCreateWithoutConnectionsInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectionsInput | userSchemaCreateOrConnectWithoutConnectionsInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type userSchemaUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type userSchemaUpdateManyWithoutConnectedWithNestedInput = {
    create?: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput> | userSchemaCreateWithoutConnectedWithInput[] | userSchemaUncheckedCreateWithoutConnectedWithInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectedWithInput | userSchemaCreateOrConnectWithoutConnectedWithInput[]
    upsert?: userSchemaUpsertWithWhereUniqueWithoutConnectedWithInput | userSchemaUpsertWithWhereUniqueWithoutConnectedWithInput[]
    set?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    disconnect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    delete?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    update?: userSchemaUpdateWithWhereUniqueWithoutConnectedWithInput | userSchemaUpdateWithWhereUniqueWithoutConnectedWithInput[]
    updateMany?: userSchemaUpdateManyWithWhereWithoutConnectedWithInput | userSchemaUpdateManyWithWhereWithoutConnectedWithInput[]
    deleteMany?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
  }

  export type userSchemaUpdateManyWithoutConnectionsNestedInput = {
    create?: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput> | userSchemaCreateWithoutConnectionsInput[] | userSchemaUncheckedCreateWithoutConnectionsInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectionsInput | userSchemaCreateOrConnectWithoutConnectionsInput[]
    upsert?: userSchemaUpsertWithWhereUniqueWithoutConnectionsInput | userSchemaUpsertWithWhereUniqueWithoutConnectionsInput[]
    set?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    disconnect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    delete?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    update?: userSchemaUpdateWithWhereUniqueWithoutConnectionsInput | userSchemaUpdateWithWhereUniqueWithoutConnectionsInput[]
    updateMany?: userSchemaUpdateManyWithWhereWithoutConnectionsInput | userSchemaUpdateManyWithWhereWithoutConnectionsInput[]
    deleteMany?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type userSchemaUncheckedUpdateManyWithoutConnectedWithNestedInput = {
    create?: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput> | userSchemaCreateWithoutConnectedWithInput[] | userSchemaUncheckedCreateWithoutConnectedWithInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectedWithInput | userSchemaCreateOrConnectWithoutConnectedWithInput[]
    upsert?: userSchemaUpsertWithWhereUniqueWithoutConnectedWithInput | userSchemaUpsertWithWhereUniqueWithoutConnectedWithInput[]
    set?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    disconnect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    delete?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    update?: userSchemaUpdateWithWhereUniqueWithoutConnectedWithInput | userSchemaUpdateWithWhereUniqueWithoutConnectedWithInput[]
    updateMany?: userSchemaUpdateManyWithWhereWithoutConnectedWithInput | userSchemaUpdateManyWithWhereWithoutConnectedWithInput[]
    deleteMany?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
  }

  export type userSchemaUncheckedUpdateManyWithoutConnectionsNestedInput = {
    create?: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput> | userSchemaCreateWithoutConnectionsInput[] | userSchemaUncheckedCreateWithoutConnectionsInput[]
    connectOrCreate?: userSchemaCreateOrConnectWithoutConnectionsInput | userSchemaCreateOrConnectWithoutConnectionsInput[]
    upsert?: userSchemaUpsertWithWhereUniqueWithoutConnectionsInput | userSchemaUpsertWithWhereUniqueWithoutConnectionsInput[]
    set?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    disconnect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    delete?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    connect?: userSchemaWhereUniqueInput | userSchemaWhereUniqueInput[]
    update?: userSchemaUpdateWithWhereUniqueWithoutConnectionsInput | userSchemaUpdateWithWhereUniqueWithoutConnectionsInput[]
    updateMany?: userSchemaUpdateManyWithWhereWithoutConnectionsInput | userSchemaUpdateManyWithWhereWithoutConnectionsInput[]
    deleteMany?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
  }

  export type userSchemaCreateNestedOneWithoutExperienceInput = {
    create?: XOR<userSchemaCreateWithoutExperienceInput, userSchemaUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userSchemaCreateOrConnectWithoutExperienceInput
    connect?: userSchemaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userSchemaUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<userSchemaCreateWithoutExperienceInput, userSchemaUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: userSchemaCreateOrConnectWithoutExperienceInput
    upsert?: userSchemaUpsertWithoutExperienceInput
    connect?: userSchemaWhereUniqueInput
    update?: XOR<XOR<userSchemaUpdateToOneWithWhereWithoutExperienceInput, userSchemaUpdateWithoutExperienceInput>, userSchemaUncheckedUpdateWithoutExperienceInput>
  }

  export type userSchemaCreateNestedOneWithoutEducationInput = {
    create?: XOR<userSchemaCreateWithoutEducationInput, userSchemaUncheckedCreateWithoutEducationInput>
    connectOrCreate?: userSchemaCreateOrConnectWithoutEducationInput
    connect?: userSchemaWhereUniqueInput
  }

  export type userSchemaUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<userSchemaCreateWithoutEducationInput, userSchemaUncheckedCreateWithoutEducationInput>
    connectOrCreate?: userSchemaCreateOrConnectWithoutEducationInput
    upsert?: userSchemaUpsertWithoutEducationInput
    connect?: userSchemaWhereUniqueInput
    update?: XOR<XOR<userSchemaUpdateToOneWithWhereWithoutEducationInput, userSchemaUpdateWithoutEducationInput>, userSchemaUncheckedUpdateWithoutEducationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExperienceCreateWithoutUserInput = {
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutUserInput = {
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: number
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: EducationCreateManyUserInput | EducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type userSchemaCreateWithoutConnectedWithInput = {
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    connections?: userSchemaCreateNestedManyWithoutConnectedWithInput
  }

  export type userSchemaUncheckedCreateWithoutConnectedWithInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    connections?: userSchemaUncheckedCreateNestedManyWithoutConnectedWithInput
  }

  export type userSchemaCreateOrConnectWithoutConnectedWithInput = {
    where: userSchemaWhereUniqueInput
    create: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput>
  }

  export type userSchemaCreateWithoutConnectionsInput = {
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    connectedWith?: userSchemaCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaUncheckedCreateWithoutConnectionsInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    connectedWith?: userSchemaUncheckedCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaCreateOrConnectWithoutConnectionsInput = {
    where: userSchemaWhereUniqueInput
    create: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput>
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: IntFilter<"Experience"> | number
    title?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeFilter<"Experience"> | Date | string
    description?: StringFilter<"Experience"> | string
    userId?: IntFilter<"Experience"> | number
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: IntFilter<"Education"> | number
    school?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startYear?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: IntFilter<"Education"> | number
  }

  export type userSchemaUpsertWithWhereUniqueWithoutConnectedWithInput = {
    where: userSchemaWhereUniqueInput
    update: XOR<userSchemaUpdateWithoutConnectedWithInput, userSchemaUncheckedUpdateWithoutConnectedWithInput>
    create: XOR<userSchemaCreateWithoutConnectedWithInput, userSchemaUncheckedCreateWithoutConnectedWithInput>
  }

  export type userSchemaUpdateWithWhereUniqueWithoutConnectedWithInput = {
    where: userSchemaWhereUniqueInput
    data: XOR<userSchemaUpdateWithoutConnectedWithInput, userSchemaUncheckedUpdateWithoutConnectedWithInput>
  }

  export type userSchemaUpdateManyWithWhereWithoutConnectedWithInput = {
    where: userSchemaScalarWhereInput
    data: XOR<userSchemaUpdateManyMutationInput, userSchemaUncheckedUpdateManyWithoutConnectedWithInput>
  }

  export type userSchemaScalarWhereInput = {
    AND?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
    OR?: userSchemaScalarWhereInput[]
    NOT?: userSchemaScalarWhereInput | userSchemaScalarWhereInput[]
    id?: IntFilter<"userSchema"> | number
    name?: StringFilter<"userSchema"> | string
    username?: StringFilter<"userSchema"> | string
    email?: StringFilter<"userSchema"> | string
    password?: StringFilter<"userSchema"> | string
    profilePicture?: StringFilter<"userSchema"> | string
    bannerImg?: StringFilter<"userSchema"> | string
    headline?: StringFilter<"userSchema"> | string
    location?: StringFilter<"userSchema"> | string
    about?: StringFilter<"userSchema"> | string
    skills?: StringNullableListFilter<"userSchema">
  }

  export type userSchemaUpsertWithWhereUniqueWithoutConnectionsInput = {
    where: userSchemaWhereUniqueInput
    update: XOR<userSchemaUpdateWithoutConnectionsInput, userSchemaUncheckedUpdateWithoutConnectionsInput>
    create: XOR<userSchemaCreateWithoutConnectionsInput, userSchemaUncheckedCreateWithoutConnectionsInput>
  }

  export type userSchemaUpdateWithWhereUniqueWithoutConnectionsInput = {
    where: userSchemaWhereUniqueInput
    data: XOR<userSchemaUpdateWithoutConnectionsInput, userSchemaUncheckedUpdateWithoutConnectionsInput>
  }

  export type userSchemaUpdateManyWithWhereWithoutConnectionsInput = {
    where: userSchemaScalarWhereInput
    data: XOR<userSchemaUpdateManyMutationInput, userSchemaUncheckedUpdateManyWithoutConnectionsInput>
  }

  export type userSchemaCreateWithoutExperienceInput = {
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    education?: EducationCreateNestedManyWithoutUserInput
    connections?: userSchemaCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaUncheckedCreateWithoutExperienceInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    connections?: userSchemaUncheckedCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaUncheckedCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaCreateOrConnectWithoutExperienceInput = {
    where: userSchemaWhereUniqueInput
    create: XOR<userSchemaCreateWithoutExperienceInput, userSchemaUncheckedCreateWithoutExperienceInput>
  }

  export type userSchemaUpsertWithoutExperienceInput = {
    update: XOR<userSchemaUpdateWithoutExperienceInput, userSchemaUncheckedUpdateWithoutExperienceInput>
    create: XOR<userSchemaCreateWithoutExperienceInput, userSchemaUncheckedCreateWithoutExperienceInput>
    where?: userSchemaWhereInput
  }

  export type userSchemaUpdateToOneWithWhereWithoutExperienceInput = {
    where?: userSchemaWhereInput
    data: XOR<userSchemaUpdateWithoutExperienceInput, userSchemaUncheckedUpdateWithoutExperienceInput>
  }

  export type userSchemaUpdateWithoutExperienceInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    education?: EducationUpdateManyWithoutUserNestedInput
    connections?: userSchemaUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaUncheckedUpdateWithoutExperienceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    connections?: userSchemaUncheckedUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUncheckedUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaCreateWithoutEducationInput = {
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceCreateNestedManyWithoutUserInput
    connections?: userSchemaCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaUncheckedCreateWithoutEducationInput = {
    id?: number
    name: string
    username: string
    email: string
    password: string
    profilePicture?: string
    bannerImg?: string
    headline?: string
    location?: string
    about?: string
    skills?: userSchemaCreateskillsInput | string[]
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    connections?: userSchemaUncheckedCreateNestedManyWithoutConnectedWithInput
    connectedWith?: userSchemaUncheckedCreateNestedManyWithoutConnectionsInput
  }

  export type userSchemaCreateOrConnectWithoutEducationInput = {
    where: userSchemaWhereUniqueInput
    create: XOR<userSchemaCreateWithoutEducationInput, userSchemaUncheckedCreateWithoutEducationInput>
  }

  export type userSchemaUpsertWithoutEducationInput = {
    update: XOR<userSchemaUpdateWithoutEducationInput, userSchemaUncheckedUpdateWithoutEducationInput>
    create: XOR<userSchemaCreateWithoutEducationInput, userSchemaUncheckedCreateWithoutEducationInput>
    where?: userSchemaWhereInput
  }

  export type userSchemaUpdateToOneWithWhereWithoutEducationInput = {
    where?: userSchemaWhereInput
    data: XOR<userSchemaUpdateWithoutEducationInput, userSchemaUncheckedUpdateWithoutEducationInput>
  }

  export type userSchemaUpdateWithoutEducationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    connections?: userSchemaUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    connections?: userSchemaUncheckedUpdateManyWithoutConnectedWithNestedInput
    connectedWith?: userSchemaUncheckedUpdateManyWithoutConnectionsNestedInput
  }

  export type ExperienceCreateManyUserInput = {
    id?: number
    title: string
    company: string
    startDate: Date | string
    endDate: Date | string
    description: string
  }

  export type EducationCreateManyUserInput = {
    id?: number
    school: string
    fieldOfStudy: string
    startYear: number
    endYear: number
  }

  export type ExperienceUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUpdateWithoutUserInput = {
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    school?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startYear?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type userSchemaUpdateWithoutConnectedWithInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    connections?: userSchemaUpdateManyWithoutConnectedWithNestedInput
  }

  export type userSchemaUncheckedUpdateWithoutConnectedWithInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    connections?: userSchemaUncheckedUpdateManyWithoutConnectedWithNestedInput
  }

  export type userSchemaUncheckedUpdateManyWithoutConnectedWithInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
  }

  export type userSchemaUpdateWithoutConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    connectedWith?: userSchemaUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaUncheckedUpdateWithoutConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    connectedWith?: userSchemaUncheckedUpdateManyWithoutConnectionsNestedInput
  }

  export type userSchemaUncheckedUpdateManyWithoutConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: StringFieldUpdateOperationsInput | string
    bannerImg?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    skills?: userSchemaUpdateskillsInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
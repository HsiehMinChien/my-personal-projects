import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type PokemonAllUrl = {
   __typename?: 'PokemonAllUrl',
  ability?: Maybe<Scalars['String']>,
  berry?: Maybe<Scalars['String']>,
  characteristic?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  generation?: Maybe<Scalars['String']>,
  item?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  machine?: Maybe<Scalars['String']>,
  move?: Maybe<Scalars['String']>,
  nature?: Maybe<Scalars['String']>,
  pokedex?: Maybe<Scalars['String']>,
  pokemon?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  stat?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type PokemonInfo = {
   __typename?: 'PokemonInfo',
  count?: Maybe<Scalars['Int']>,
  next?: Maybe<Scalars['String']>,
  previous?: Maybe<Scalars['String']>,
  results?: Maybe<Array<Maybe<PokemonResults>>>,
};

export type PokemonResults = {
   __typename?: 'PokemonResults',
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export enum PokemonUrlPathType {
  Type = 'type',
  Pokemon = 'pokemon',
  Ability = 'ability'
}

export type Query = {
   __typename?: 'Query',
  getPokemonAllUrl?: Maybe<PokemonAllUrl>,
  getPokemonInfo?: Maybe<PokemonInfo>,
  getSystemInfo?: Maybe<System>,
};


export type QueryGetPokemonInfoArgs = {
  type: PokemonUrlPathType,
  offset?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type System = {
   __typename?: 'System',
  title?: Maybe<Scalars['String']>,
  describe?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Scalars['String']>>>,
  createdBy?: Maybe<Scalars['String']>,
};

export type GetSystemInfoQueryVariables = {};


export type GetSystemInfoQuery = (
  { __typename?: 'Query' }
  & { getSystemInfo: Maybe<(
    { __typename?: 'System' }
    & SystemFragment
  )> }
);

export type SystemFragment = (
  { __typename?: 'System' }
  & Pick<System, 'title' | 'describe' | 'createdAt' | 'tags' | 'createdBy'>
);

export const SystemFragmentDoc = gql`
    fragment System on System {
  title
  describe
  createdAt
  tags
  createdBy
}
    `;
export const GetSystemInfoDocument = gql`
    query GetSystemInfo {
  getSystemInfo {
    ...System
  }
}
    ${SystemFragmentDoc}`;
export type GetSystemInfoComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSystemInfoQuery, GetSystemInfoQueryVariables>, 'query'>;

    export const GetSystemInfoComponent = (props: GetSystemInfoComponentProps) => (
      <ApolloReactComponents.Query<GetSystemInfoQuery, GetSystemInfoQueryVariables> query={GetSystemInfoDocument} {...props} />
    );
    
export type GetSystemInfoProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetSystemInfoQuery, GetSystemInfoQueryVariables> & TChildProps;
export function withGetSystemInfo<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetSystemInfoQuery,
  GetSystemInfoQueryVariables,
  GetSystemInfoProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetSystemInfoQuery, GetSystemInfoQueryVariables, GetSystemInfoProps<TChildProps>>(GetSystemInfoDocument, {
      alias: 'getSystemInfo',
      ...operationOptions
    });
};
export type GetSystemInfoQueryResult = ApolloReactCommon.QueryResult<GetSystemInfoQuery, GetSystemInfoQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PokemonAllUrl: ResolverTypeWrapper<PokemonAllUrl>,
  String: ResolverTypeWrapper<Scalars['String']>,
  PokemonUrlPathType: PokemonUrlPathType,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  PokemonInfo: ResolverTypeWrapper<PokemonInfo>,
  PokemonResults: ResolverTypeWrapper<PokemonResults>,
  System: ResolverTypeWrapper<System>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PokemonAllUrl: PokemonAllUrl,
  String: Scalars['String'],
  PokemonUrlPathType: PokemonUrlPathType,
  Int: Scalars['Int'],
  PokemonInfo: PokemonInfo,
  PokemonResults: PokemonResults,
  System: System,
  Boolean: Scalars['Boolean'],
};

export type PokemonAllUrlResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonAllUrl'] = ResolversParentTypes['PokemonAllUrl']> = {
  ability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  berry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  characteristic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  generation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  item?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  machine?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  move?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pokedex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pokemon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  stat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PokemonInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonInfo'] = ResolversParentTypes['PokemonInfo']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  next?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  previous?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['PokemonResults']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PokemonResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonResults'] = ResolversParentTypes['PokemonResults']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPokemonAllUrl?: Resolver<Maybe<ResolversTypes['PokemonAllUrl']>, ParentType, ContextType>,
  getPokemonInfo?: Resolver<Maybe<ResolversTypes['PokemonInfo']>, ParentType, ContextType, RequireFields<QueryGetPokemonInfoArgs, 'type'>>,
  getSystemInfo?: Resolver<Maybe<ResolversTypes['System']>, ParentType, ContextType>,
};

export type SystemResolvers<ContextType = any, ParentType extends ResolversParentTypes['System'] = ResolversParentTypes['System']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  describe?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  PokemonAllUrl?: PokemonAllUrlResolvers<ContextType>,
  PokemonInfo?: PokemonInfoResolvers<ContextType>,
  PokemonResults?: PokemonResultsResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  System?: SystemResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


// Generated in 2020-10-25T11:01:21+08:00

// Demo for nextjs with typescript graphql redux
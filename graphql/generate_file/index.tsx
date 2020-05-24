import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  DateTime: any,
};

export enum _ModelMutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type _QueryMeta = {
   __typename?: '_QueryMeta',
  count: Scalars['Int'],
};

export type Auth_Provider_Email = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type AuthProviderSignupData = {
  email?: Maybe<Auth_Provider_Email>,
};

export type CreateFile = {
  name: Scalars['String'],
};

export type CreatePost = {
  title: Scalars['String'],
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type CreateUser = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
};


export type File = Node & {
   __typename?: 'File',
  contentType: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
};

export type FileFilter = {
  AND?: Maybe<Array<FileFilter>>,
  OR?: Maybe<Array<FileFilter>>,
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export enum FileOrderBy {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type FilePreviousValues = {
   __typename?: 'FilePreviousValues',
  contentType: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  name: Scalars['String'],
  secret: Scalars['String'],
  size: Scalars['Int'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
};

export type FileSubscriptionFilter = {
  AND?: Maybe<Array<FileSubscriptionFilter>>,
  OR?: Maybe<Array<FileSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<FileSubscriptionFilterNode>,
};

export type FileSubscriptionFilterNode = {
  contentType?: Maybe<Scalars['String']>,
  contentType_not?: Maybe<Scalars['String']>,
  contentType_in?: Maybe<Array<Scalars['String']>>,
  contentType_not_in?: Maybe<Array<Scalars['String']>>,
  contentType_lt?: Maybe<Scalars['String']>,
  contentType_lte?: Maybe<Scalars['String']>,
  contentType_gt?: Maybe<Scalars['String']>,
  contentType_gte?: Maybe<Scalars['String']>,
  contentType_contains?: Maybe<Scalars['String']>,
  contentType_not_contains?: Maybe<Scalars['String']>,
  contentType_starts_with?: Maybe<Scalars['String']>,
  contentType_not_starts_with?: Maybe<Scalars['String']>,
  contentType_ends_with?: Maybe<Scalars['String']>,
  contentType_not_ends_with?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  secret?: Maybe<Scalars['String']>,
  secret_not?: Maybe<Scalars['String']>,
  secret_in?: Maybe<Array<Scalars['String']>>,
  secret_not_in?: Maybe<Array<Scalars['String']>>,
  secret_lt?: Maybe<Scalars['String']>,
  secret_lte?: Maybe<Scalars['String']>,
  secret_gt?: Maybe<Scalars['String']>,
  secret_gte?: Maybe<Scalars['String']>,
  secret_contains?: Maybe<Scalars['String']>,
  secret_not_contains?: Maybe<Scalars['String']>,
  secret_starts_with?: Maybe<Scalars['String']>,
  secret_not_starts_with?: Maybe<Scalars['String']>,
  secret_ends_with?: Maybe<Scalars['String']>,
  secret_not_ends_with?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  size_not?: Maybe<Scalars['Int']>,
  size_in?: Maybe<Array<Scalars['Int']>>,
  size_not_in?: Maybe<Array<Scalars['Int']>>,
  size_lt?: Maybe<Scalars['Int']>,
  size_lte?: Maybe<Scalars['Int']>,
  size_gt?: Maybe<Scalars['Int']>,
  size_gte?: Maybe<Scalars['Int']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
};

export type FileSubscriptionPayload = {
   __typename?: 'FileSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<File>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<FilePreviousValues>,
};

export type InvokeFunctionInput = {
  name: Scalars['String'],
  input: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type InvokeFunctionPayload = {
   __typename?: 'InvokeFunctionPayload',
  result: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createFile?: Maybe<File>,
  createPost?: Maybe<Post>,
  updateFile?: Maybe<File>,
  updatePost?: Maybe<Post>,
  updateUser?: Maybe<User>,
  updateOrCreateFile?: Maybe<File>,
  updateOrCreatePost?: Maybe<Post>,
  updateOrCreateUser?: Maybe<User>,
  deleteFile?: Maybe<File>,
  deletePost?: Maybe<Post>,
  deleteUser?: Maybe<User>,
  signinUser: SigninPayload,
  createUser?: Maybe<User>,
  invokeFunction?: Maybe<InvokeFunctionPayload>,
};


export type MutationCreateFileArgs = {
  name: Scalars['String']
};


export type MutationCreatePostArgs = {
  title: Scalars['String'],
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>
};


export type MutationUpdateFileArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>
};


export type MutationUpdateUserArgs = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>
};


export type MutationUpdateOrCreateFileArgs = {
  update: UpdateFile,
  create: CreateFile
};


export type MutationUpdateOrCreatePostArgs = {
  update: UpdatePost,
  create: CreatePost
};


export type MutationUpdateOrCreateUserArgs = {
  update: UpdateUser,
  create: CreateUser
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']
};


export type MutationSigninUserArgs = {
  email?: Maybe<Auth_Provider_Email>
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  authProvider: AuthProviderSignupData
};


export type MutationInvokeFunctionArgs = {
  input: InvokeFunctionInput
};

export type Node = {
  id: Scalars['ID'],
};

export type Post = Node & {
   __typename?: 'Post',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type PostFilter = {
  AND?: Maybe<Array<PostFilter>>,
  OR?: Maybe<Array<PostFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
  votes_not?: Maybe<Scalars['Int']>,
  votes_in?: Maybe<Array<Scalars['Int']>>,
  votes_not_in?: Maybe<Array<Scalars['Int']>>,
  votes_lt?: Maybe<Scalars['Int']>,
  votes_lte?: Maybe<Scalars['Int']>,
  votes_gt?: Maybe<Scalars['Int']>,
  votes_gte?: Maybe<Scalars['Int']>,
};

export enum PostOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VotesAsc = 'votes_ASC',
  VotesDesc = 'votes_DESC'
}

export type PostPreviousValues = {
   __typename?: 'PostPreviousValues',
  createdAt?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  title: Scalars['String'],
  updatedAt?: Maybe<Scalars['DateTime']>,
  url: Scalars['String'],
  votes?: Maybe<Scalars['Int']>,
};

export type PostSubscriptionFilter = {
  AND?: Maybe<Array<PostSubscriptionFilter>>,
  OR?: Maybe<Array<PostSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<PostSubscriptionFilterNode>,
};

export type PostSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  title_not?: Maybe<Scalars['String']>,
  title_in?: Maybe<Array<Scalars['String']>>,
  title_not_in?: Maybe<Array<Scalars['String']>>,
  title_lt?: Maybe<Scalars['String']>,
  title_lte?: Maybe<Scalars['String']>,
  title_gt?: Maybe<Scalars['String']>,
  title_gte?: Maybe<Scalars['String']>,
  title_contains?: Maybe<Scalars['String']>,
  title_not_contains?: Maybe<Scalars['String']>,
  title_starts_with?: Maybe<Scalars['String']>,
  title_not_starts_with?: Maybe<Scalars['String']>,
  title_ends_with?: Maybe<Scalars['String']>,
  title_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  url?: Maybe<Scalars['String']>,
  url_not?: Maybe<Scalars['String']>,
  url_in?: Maybe<Array<Scalars['String']>>,
  url_not_in?: Maybe<Array<Scalars['String']>>,
  url_lt?: Maybe<Scalars['String']>,
  url_lte?: Maybe<Scalars['String']>,
  url_gt?: Maybe<Scalars['String']>,
  url_gte?: Maybe<Scalars['String']>,
  url_contains?: Maybe<Scalars['String']>,
  url_not_contains?: Maybe<Scalars['String']>,
  url_starts_with?: Maybe<Scalars['String']>,
  url_not_starts_with?: Maybe<Scalars['String']>,
  url_ends_with?: Maybe<Scalars['String']>,
  url_not_ends_with?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
  votes_not?: Maybe<Scalars['Int']>,
  votes_in?: Maybe<Array<Scalars['Int']>>,
  votes_not_in?: Maybe<Array<Scalars['Int']>>,
  votes_lt?: Maybe<Scalars['Int']>,
  votes_lte?: Maybe<Scalars['Int']>,
  votes_gt?: Maybe<Scalars['Int']>,
  votes_gte?: Maybe<Scalars['Int']>,
};

export type PostSubscriptionPayload = {
   __typename?: 'PostSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<Post>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<PostPreviousValues>,
};

export type Query = {
   __typename?: 'Query',
  allFiles: Array<File>,
  allPosts: Array<Post>,
  allUsers: Array<User>,
  _allFilesMeta: _QueryMeta,
  _allPostsMeta: _QueryMeta,
  _allUsersMeta: _QueryMeta,
  File?: Maybe<File>,
  Post?: Maybe<Post>,
  User?: Maybe<User>,
  user?: Maybe<User>,
  node?: Maybe<Node>,
};


export type QueryAllFilesArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllPostsArgs = {
  filter?: Maybe<PostFilter>,
  orderBy?: Maybe<PostOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAllUsersArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllFilesMetaArgs = {
  filter?: Maybe<FileFilter>,
  orderBy?: Maybe<FileOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllPostsMetaArgs = {
  filter?: Maybe<PostFilter>,
  orderBy?: Maybe<PostOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_AllUsersMetaArgs = {
  filter?: Maybe<UserFilter>,
  orderBy?: Maybe<UserOrderBy>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>,
  secret?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type SigninPayload = {
   __typename?: 'SigninPayload',
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
};

export type Subscription = {
   __typename?: 'Subscription',
  File?: Maybe<FileSubscriptionPayload>,
  Post?: Maybe<PostSubscriptionPayload>,
  User?: Maybe<UserSubscriptionPayload>,
};


export type SubscriptionFileArgs = {
  filter?: Maybe<FileSubscriptionFilter>
};


export type SubscriptionPostArgs = {
  filter?: Maybe<PostSubscriptionFilter>
};


export type SubscriptionUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>
};

export type UpdateFile = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type UpdatePost = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  votes?: Maybe<Scalars['Int']>,
};

export type UpdateUser = {
  firstName?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  lastName?: Maybe<Scalars['String']>,
};

export type User = Node & {
   __typename?: 'User',
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  id: Scalars['ID'],
  lastName: Scalars['String'],
  password?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserFilter = {
  AND?: Maybe<Array<UserFilter>>,
  OR?: Maybe<Array<UserFilter>>,
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export enum UserOrderBy {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues',
  createdAt?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  id: Scalars['ID'],
  lastName: Scalars['String'],
  password?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionFilter = {
  AND?: Maybe<Array<UserSubscriptionFilter>>,
  OR?: Maybe<Array<UserSubscriptionFilter>>,
  mutation_in?: Maybe<Array<_ModelMutationType>>,
  updatedFields_contains?: Maybe<Scalars['String']>,
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserSubscriptionFilterNode>,
};

export type UserSubscriptionFilterNode = {
  createdAt?: Maybe<Scalars['DateTime']>,
  createdAt_not?: Maybe<Scalars['DateTime']>,
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  firstName_not?: Maybe<Scalars['String']>,
  firstName_in?: Maybe<Array<Scalars['String']>>,
  firstName_not_in?: Maybe<Array<Scalars['String']>>,
  firstName_lt?: Maybe<Scalars['String']>,
  firstName_lte?: Maybe<Scalars['String']>,
  firstName_gt?: Maybe<Scalars['String']>,
  firstName_gte?: Maybe<Scalars['String']>,
  firstName_contains?: Maybe<Scalars['String']>,
  firstName_not_contains?: Maybe<Scalars['String']>,
  firstName_starts_with?: Maybe<Scalars['String']>,
  firstName_not_starts_with?: Maybe<Scalars['String']>,
  firstName_ends_with?: Maybe<Scalars['String']>,
  firstName_not_ends_with?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  lastName?: Maybe<Scalars['String']>,
  lastName_not?: Maybe<Scalars['String']>,
  lastName_in?: Maybe<Array<Scalars['String']>>,
  lastName_not_in?: Maybe<Array<Scalars['String']>>,
  lastName_lt?: Maybe<Scalars['String']>,
  lastName_lte?: Maybe<Scalars['String']>,
  lastName_gt?: Maybe<Scalars['String']>,
  lastName_gte?: Maybe<Scalars['String']>,
  lastName_contains?: Maybe<Scalars['String']>,
  lastName_not_contains?: Maybe<Scalars['String']>,
  lastName_starts_with?: Maybe<Scalars['String']>,
  lastName_not_starts_with?: Maybe<Scalars['String']>,
  lastName_ends_with?: Maybe<Scalars['String']>,
  lastName_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload',
  mutation: _ModelMutationType,
  node?: Maybe<User>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserPreviousValues>,
};

export type GetAllQueryVariables = {};


export type GetAllQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & UserFragment
  )>, allFiles: Array<(
    { __typename?: 'File' }
    & FileFragment
  )>, allPosts: Array<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

type Node_File_Fragment = (
  { __typename?: 'File' }
  & Pick<File, 'id'>
);

type Node_Post_Fragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id'>
);

type Node_User_Fragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
);

export type NodeFragment = Node_File_Fragment | Node_Post_Fragment | Node_User_Fragment;

export type FileFragment = (
  { __typename?: 'File' }
  & Pick<File, 'createdAt' | 'updatedAt' | 'contentType' | 'name' | 'secret' | 'size' | 'url'>
  & Node_File_Fragment
);

export type GetAllFilesQueryVariables = {};


export type GetAllFilesQuery = (
  { __typename?: 'Query' }
  & { allFiles: Array<(
    { __typename?: 'File' }
    & FileFragment
  )> }
);

export type PostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'createdAt' | 'title' | 'updatedAt' | 'url' | 'votes'>
  & Node_Post_Fragment
);

export type GetAllPostsQueryVariables = {};


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { allPosts: Array<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'firstName' | 'lastName'>
  & Node_User_Fragment
);

export type GetAllUsersQueryVariables = {};


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const NodeFragmentDoc = gql`
    fragment Node on Node {
  id
}
    `;
export const FileFragmentDoc = gql`
    fragment File on File {
  ...Node
  createdAt
  updatedAt
  contentType
  name
  secret
  size
  url
}
    ${NodeFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  ...Node
  createdAt
  title
  updatedAt
  url
  votes
}
    ${NodeFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...Node
  firstName
  lastName
}
    ${NodeFragmentDoc}`;
export const GetAllDocument = gql`
    query GetAll {
  allUsers {
    ...User
  }
  allFiles {
    ...File
  }
  allPosts {
    ...Post
  }
}
    ${UserFragmentDoc}
${FileFragmentDoc}
${PostFragmentDoc}`;
export type GetAllComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllQuery, GetAllQueryVariables>, 'query'>;

    export const GetAllComponent = (props: GetAllComponentProps) => (
      <ApolloReactComponents.Query<GetAllQuery, GetAllQueryVariables> query={GetAllDocument} {...props} />
    );
    
export type GetAllProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllQuery, GetAllQueryVariables> & TChildProps;
export function withGetAll<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllQuery,
  GetAllQueryVariables,
  GetAllProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllQuery, GetAllQueryVariables, GetAllProps<TChildProps>>(GetAllDocument, {
      alias: 'getAll',
      ...operationOptions
    });
};
export type GetAllQueryResult = ApolloReactCommon.QueryResult<GetAllQuery, GetAllQueryVariables>;
export const GetAllFilesDocument = gql`
    query GetAllFiles {
  allFiles {
    ...File
  }
}
    ${FileFragmentDoc}`;
export type GetAllFilesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllFilesQuery, GetAllFilesQueryVariables>, 'query'>;

    export const GetAllFilesComponent = (props: GetAllFilesComponentProps) => (
      <ApolloReactComponents.Query<GetAllFilesQuery, GetAllFilesQueryVariables> query={GetAllFilesDocument} {...props} />
    );
    
export type GetAllFilesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllFilesQuery, GetAllFilesQueryVariables> & TChildProps;
export function withGetAllFiles<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllFilesQuery,
  GetAllFilesQueryVariables,
  GetAllFilesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllFilesQuery, GetAllFilesQueryVariables, GetAllFilesProps<TChildProps>>(GetAllFilesDocument, {
      alias: 'getAllFiles',
      ...operationOptions
    });
};
export type GetAllFilesQueryResult = ApolloReactCommon.QueryResult<GetAllFilesQuery, GetAllFilesQueryVariables>;
export const GetAllPostsDocument = gql`
    query GetAllPosts {
  allPosts {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export type GetAllPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllPostsQuery, GetAllPostsQueryVariables>, 'query'>;

    export const GetAllPostsComponent = (props: GetAllPostsComponentProps) => (
      <ApolloReactComponents.Query<GetAllPostsQuery, GetAllPostsQueryVariables> query={GetAllPostsDocument} {...props} />
    );
    
export type GetAllPostsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllPostsQuery, GetAllPostsQueryVariables> & TChildProps;
export function withGetAllPosts<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllPostsQuery,
  GetAllPostsQueryVariables,
  GetAllPostsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllPostsQuery, GetAllPostsQueryVariables, GetAllPostsProps<TChildProps>>(GetAllPostsDocument, {
      alias: 'getAllPosts',
      ...operationOptions
    });
};
export type GetAllPostsQueryResult = ApolloReactCommon.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  allUsers {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type GetAllUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAllUsersQuery, GetAllUsersQueryVariables>, 'query'>;

    export const GetAllUsersComponent = (props: GetAllUsersComponentProps) => (
      <ApolloReactComponents.Query<GetAllUsersQuery, GetAllUsersQueryVariables> query={GetAllUsersDocument} {...props} />
    );
    
export type GetAllUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetAllUsersQuery, GetAllUsersQueryVariables> & TChildProps;
export function withGetAllUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetAllUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUsersQuery, GetAllUsersQueryVariables, GetAllUsersProps<TChildProps>>(GetAllUsersDocument, {
      alias: 'getAllUsers',
      ...operationOptions
    });
};
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;

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
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "File"
          },
          {
            "name": "Post"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
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
  FileFilter: FileFilter,
  String: ResolverTypeWrapper<Scalars['String']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  FileOrderBy: FileOrderBy,
  File: ResolverTypeWrapper<File>,
  Node: ResolverTypeWrapper<Node>,
  PostFilter: PostFilter,
  PostOrderBy: PostOrderBy,
  Post: ResolverTypeWrapper<Post>,
  UserFilter: UserFilter,
  UserOrderBy: UserOrderBy,
  User: ResolverTypeWrapper<User>,
  _QueryMeta: ResolverTypeWrapper<_QueryMeta>,
  Mutation: ResolverTypeWrapper<{}>,
  UpdateFile: UpdateFile,
  CreateFile: CreateFile,
  UpdatePost: UpdatePost,
  CreatePost: CreatePost,
  UpdateUser: UpdateUser,
  CreateUser: CreateUser,
  AUTH_PROVIDER_EMAIL: Auth_Provider_Email,
  SigninPayload: ResolverTypeWrapper<SigninPayload>,
  AuthProviderSignupData: AuthProviderSignupData,
  InvokeFunctionInput: InvokeFunctionInput,
  InvokeFunctionPayload: ResolverTypeWrapper<InvokeFunctionPayload>,
  Subscription: ResolverTypeWrapper<{}>,
  FileSubscriptionFilter: FileSubscriptionFilter,
  _ModelMutationType: _ModelMutationType,
  FileSubscriptionFilterNode: FileSubscriptionFilterNode,
  FileSubscriptionPayload: ResolverTypeWrapper<FileSubscriptionPayload>,
  FilePreviousValues: ResolverTypeWrapper<FilePreviousValues>,
  PostSubscriptionFilter: PostSubscriptionFilter,
  PostSubscriptionFilterNode: PostSubscriptionFilterNode,
  PostSubscriptionPayload: ResolverTypeWrapper<PostSubscriptionPayload>,
  PostPreviousValues: ResolverTypeWrapper<PostPreviousValues>,
  UserSubscriptionFilter: UserSubscriptionFilter,
  UserSubscriptionFilterNode: UserSubscriptionFilterNode,
  UserSubscriptionPayload: ResolverTypeWrapper<UserSubscriptionPayload>,
  UserPreviousValues: ResolverTypeWrapper<UserPreviousValues>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  FileFilter: FileFilter,
  String: Scalars['String'],
  DateTime: Scalars['DateTime'],
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  FileOrderBy: FileOrderBy,
  File: File,
  Node: Node,
  PostFilter: PostFilter,
  PostOrderBy: PostOrderBy,
  Post: Post,
  UserFilter: UserFilter,
  UserOrderBy: UserOrderBy,
  User: User,
  _QueryMeta: _QueryMeta,
  Mutation: {},
  UpdateFile: UpdateFile,
  CreateFile: CreateFile,
  UpdatePost: UpdatePost,
  CreatePost: CreatePost,
  UpdateUser: UpdateUser,
  CreateUser: CreateUser,
  AUTH_PROVIDER_EMAIL: Auth_Provider_Email,
  SigninPayload: SigninPayload,
  AuthProviderSignupData: AuthProviderSignupData,
  InvokeFunctionInput: InvokeFunctionInput,
  InvokeFunctionPayload: InvokeFunctionPayload,
  Subscription: {},
  FileSubscriptionFilter: FileSubscriptionFilter,
  _ModelMutationType: _ModelMutationType,
  FileSubscriptionFilterNode: FileSubscriptionFilterNode,
  FileSubscriptionPayload: FileSubscriptionPayload,
  FilePreviousValues: FilePreviousValues,
  PostSubscriptionFilter: PostSubscriptionFilter,
  PostSubscriptionFilterNode: PostSubscriptionFilterNode,
  PostSubscriptionPayload: PostSubscriptionPayload,
  PostPreviousValues: PostPreviousValues,
  UserSubscriptionFilter: UserSubscriptionFilter,
  UserSubscriptionFilterNode: UserSubscriptionFilterNode,
  UserSubscriptionPayload: UserSubscriptionPayload,
  UserPreviousValues: UserPreviousValues,
  Boolean: Scalars['Boolean'],
};

export type _QueryMetaResolvers<ContextType = any, ParentType extends ResolversParentTypes['_QueryMeta'] = ResolversParentTypes['_QueryMeta']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FilePreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['FilePreviousValues'] = ResolversParentTypes['FilePreviousValues']> = {
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  secret?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type FileSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileSubscriptionPayload'] = ResolversParentTypes['FileSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['_ModelMutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['FilePreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type InvokeFunctionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['InvokeFunctionPayload'] = ResolversParentTypes['InvokeFunctionPayload']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'name'>>,
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'title' | 'url'>>,
  updateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'id'>>,
  updatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id'>>,
  updateOrCreateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateOrCreateFileArgs, 'update' | 'create'>>,
  updateOrCreatePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationUpdateOrCreatePostArgs, 'update' | 'create'>>,
  updateOrCreateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateOrCreateUserArgs, 'update' | 'create'>>,
  deleteFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'id'>>,
  deletePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>,
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>,
  signinUser?: Resolver<ResolversTypes['SigninPayload'], ParentType, ContextType, MutationSigninUserArgs>,
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'firstName' | 'lastName' | 'authProvider'>>,
  invokeFunction?: Resolver<Maybe<ResolversTypes['InvokeFunctionPayload']>, ParentType, ContextType, RequireFields<MutationInvokeFunctionArgs, 'input'>>,
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'File' | 'Post' | 'User', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  votes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PostPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPreviousValues'] = ResolversParentTypes['PostPreviousValues']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  votes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PostSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSubscriptionPayload'] = ResolversParentTypes['PostSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['_ModelMutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['PostPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allFiles?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, QueryAllFilesArgs>,
  allPosts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, QueryAllPostsArgs>,
  allUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, QueryAllUsersArgs>,
  _allFilesMeta?: Resolver<ResolversTypes['_QueryMeta'], ParentType, ContextType, Query_AllFilesMetaArgs>,
  _allPostsMeta?: Resolver<ResolversTypes['_QueryMeta'], ParentType, ContextType, Query_AllPostsMetaArgs>,
  _allUsersMeta?: Resolver<ResolversTypes['_QueryMeta'], ParentType, ContextType, Query_AllUsersMetaArgs>,
  File?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, QueryFileArgs>,
  Post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, QueryPostArgs>,
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, QueryUserArgs>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id'>>,
};

export type SigninPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SigninPayload'] = ResolversParentTypes['SigninPayload']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  File?: SubscriptionResolver<Maybe<ResolversTypes['FileSubscriptionPayload']>, "File", ParentType, ContextType, SubscriptionFileArgs>,
  Post?: SubscriptionResolver<Maybe<ResolversTypes['PostSubscriptionPayload']>, "Post", ParentType, ContextType, SubscriptionPostArgs>,
  User?: SubscriptionResolver<Maybe<ResolversTypes['UserSubscriptionPayload']>, "User", ParentType, ContextType, SubscriptionUserArgs>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserPreviousValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreviousValues'] = ResolversParentTypes['UserPreviousValues']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserSubscriptionPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSubscriptionPayload'] = ResolversParentTypes['UserSubscriptionPayload']> = {
  mutation?: Resolver<ResolversTypes['_ModelMutationType'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  updatedFields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  previousValues?: Resolver<Maybe<ResolversTypes['UserPreviousValues']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  _QueryMeta?: _QueryMetaResolvers<ContextType>,
  DateTime?: GraphQLScalarType,
  File?: FileResolvers<ContextType>,
  FilePreviousValues?: FilePreviousValuesResolvers<ContextType>,
  FileSubscriptionPayload?: FileSubscriptionPayloadResolvers<ContextType>,
  InvokeFunctionPayload?: InvokeFunctionPayloadResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Node?: NodeResolvers,
  Post?: PostResolvers<ContextType>,
  PostPreviousValues?: PostPreviousValuesResolvers<ContextType>,
  PostSubscriptionPayload?: PostSubscriptionPayloadResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SigninPayload?: SigninPayloadResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserPreviousValues?: UserPreviousValuesResolvers<ContextType>,
  UserSubscriptionPayload?: UserSubscriptionPayloadResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


// Generated in 2020-05-24T21:34:27+08:00

// Demo for nextjs with typescript graphql redux
import Joi from 'joi';

export const GetDetailsSchema = Joi.object({
  params: Joi.object({
    username: Joi.string().required(),
  }),
}).unknown(true);

export const ListUserReposSchema = Joi.object({
  params: Joi.object({
    username: Joi.string().required(),
  }),
}).unknown(true);

export const ListUsersSchema = Joi.object({
  query: Joi.object({
    since: Joi.number().min(0).default(0),
  }),
}).unknown(true);

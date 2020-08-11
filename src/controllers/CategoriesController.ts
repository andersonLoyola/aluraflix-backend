/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import conn from '../database/connection';

async function index(req: Request, res:Response): Promise<Response> {
  try {
    const resp = await conn('categories').join('extra_links',
      'categories.extra_links_id',
      'extra_links.id').select('*');
    return res.send(resp);
  } catch (e) {
    return res.status(500).send({ error: e });
  }
}

async function create(req: Request, res:Response): Promise<Response> {
  const {
    title,
    description,
    url,
    extraLinksId,
  } = req.body();
  try {
    await conn('categories').insert({
      title,
      description,
      url,
      extraLinksId,
    });
    return res.status(200).send({ message: 'data inserted successfully' });
  } catch (e) {
    return res.status(500).send({ error: e });
  }
}

function update(req: Request, res:Response): Response {
  return res.status(200).send({ status: 'ok' });
}

function remove(req: Request, res:Response): Response {
  return res.status(200).send({ status: 'ok' });
}

export default {
  index,
  create,
  update,
  remove,
};

import {IRouterContext} from 'koa-router';
import render from '../../config/renderView'

export default async function (ctx: IRouterContext) {
    ctx.body =  await render('index');
}
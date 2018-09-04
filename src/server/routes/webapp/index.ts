import * as Router from 'koa-router';
import getFunc from './get'

const router = new Router();

router.get('/*', getFunc);

export default router
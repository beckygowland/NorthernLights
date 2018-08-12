import * as Router from 'koa-router';
import getFunc from './get'

const router = new Router();

router.get('/app', getFunc);

export default router
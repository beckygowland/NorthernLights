import webapp from './webapp'
import * as compose from 'koa-compose'

const router = compose([
    webapp.routes(),
    webapp.allowedMethods(),
  ])
  
export default router
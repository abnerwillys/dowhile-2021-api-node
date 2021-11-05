import { Router } from 'express'
import { AuthenticateUserController } from '../controllers/AuthenticateUser.controller'
import { CreateMessageController } from '../controllers/CreateMessage.controller'
import { GetLast3MessagesController } from '../controllers/GetLast3Messages.controller'
import { ProfileUserController } from '../controllers/ProfileUser.controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const AppRouter = Router()

AppRouter.post('/authenticate', new AuthenticateUserController().handle)

AppRouter.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle,
)

AppRouter.get('/messages/last3', new GetLast3MessagesController().handle)

AppRouter.get(
  '/profile',
  ensureAuthenticated,
  new ProfileUserController().handle,
)

export { AppRouter }

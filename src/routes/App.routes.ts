import { Router } from 'express'
import { AuthenticateUserController } from '../controllers/AuthenticateUser.controller'
import { CreateMessageController } from '../controllers/CreateMessage.controller'
import { GetLast3MessagesController } from '../controllers/GetLast3Messages.controller'
import { ProfileUserController } from '../controllers/ProfileUser.controller'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const AppRouter = Router()

AppRouter.get('/github', (request, response) => {
  return response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  )
})

AppRouter.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)
})

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

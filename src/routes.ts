import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUser.controller';
import { CreateMessageController } from './controllers/CreateMessage.controller';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

export { router }
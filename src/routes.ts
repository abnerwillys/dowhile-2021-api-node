import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUser.controller';
import { CreateMessageController } from './controllers/CreateMessage.controller';
import { GetLast3MessagesController } from './controllers/GetLast3Messages.controller';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

export { router }
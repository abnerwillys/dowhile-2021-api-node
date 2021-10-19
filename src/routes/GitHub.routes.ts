import { Router } from 'express'

const GitHubRouter = Router()

GitHubRouter.get('/github', (request, response) => {
  return response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  )
})

GitHubRouter.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)
})

export { GitHubRouter }

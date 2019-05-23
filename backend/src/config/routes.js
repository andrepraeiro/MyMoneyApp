const express = require('express')

module.exports = function (server) {
   //definir URL BASE
   const router = express.Router()
   server.use('/api', router)

   /*
   * Rotas protegidas por Token JWT
   */
   const protectedApi = express.Router()
   server.use('/api', protectedApi)
   protectedApi.use(auth)
   const BillingCycle = require('../api/billingCycle/billingCycleService')
   BillingCycle.register(protectedApi, '/billingCycles')

   /*
   * Rotas abertas
   */
   const openApi = express.Router()
   server.use('/oapi', openApi)
   const AuthService = require('../api/user/AuthService')
   openApi.post('/login', AuthService.login)
   openApi.post('/signup', AuthService.signup)
   openApi.post('/validateToken', AuthService.validateToken)
}

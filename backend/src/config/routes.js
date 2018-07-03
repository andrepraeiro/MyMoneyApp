const express = require('express')

module.exports = function(server) {
   //definir URL BASE
   const router = express.Router()
   server.use('/api', router)

   //Rotas Ciclo Pagamento
   const BillingCycle = require('../api/billingCycle/billingCycleService')
   BillingCycle.register(router, '/billingCycles')
}

const restfull = require('node-restful')

const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true, min: 0 }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true, min: 0 },
    status: { type: String, required: false, uppercase: true, 
            enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycle = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1 , required: true },
    year: { type: Number, min: 1970, max: 2100 , required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restfull.model('BillingCycle', billingCycle)


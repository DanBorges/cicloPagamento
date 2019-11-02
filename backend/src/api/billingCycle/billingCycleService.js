const mongoose = require('mongoose')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite de '${MIN}."
mongoose.Error.messages.Number.max = "O {VALUE} informado é menor que o limite de '${MAX}."

mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"


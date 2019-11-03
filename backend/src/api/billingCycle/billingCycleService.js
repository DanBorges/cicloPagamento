const mongoose = require('mongoose')
const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get','post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next)=>{
    BillingCycle.count((error, value)=>{
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})
BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})


module.exports = BillingCycle

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O {VALUE} informado é menor que o limite de '${MIN}."
mongoose.Error.messages.Number.max = "O {VALUE} informado é menor que o limite de '${MAX}."

mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"


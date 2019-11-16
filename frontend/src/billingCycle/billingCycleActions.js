import axios from 'axios'
import  { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { selectTab, showtabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}


export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id: ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizado com sucesso!')
                dispatch([
                    init()
                ])
            })
            .catch(e=>{
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
        console.log(values)
    }
}

export function showUpdate(billingCycle) {
    console.log('initialize', billingCycle)
    return [
        selectTab('tabUpdate'),
        showtabs('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    console.log('initialize', billingCycle)
    return [
        selectTab('tabDelete'),
        showtabs('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showtabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Sumary from './summary'


class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        return (
            <form className='box-form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' 
                            component={labelAndInput}
                            label='Nome'
                            cols='12 4' 
                            readOnly={readOnly}
                            placeholder='Informe o Nome'     />
                    <Field name='month' 
                            component={labelAndInput}
                            label='Mês'
                            cols='12 4'
                            type='number'
                            readOnly={readOnly}
                            placeholder='Informe o Mês' />
                    <Field name='year' 
                            component={labelAndInput}
                            label='Ano'
                            cols='12 4'
                            readOnly={readOnly}
                            type='number'
                            placeholder='Informe o Ano' />

                    <Sumary credit={10000} debt={500}>

                    </Sumary>
                    <ItemList cols='12 6' readOnly={readOnly} list={credits} field='credits' legend='Créditos' />
                    <ItemList cols='12 6' readOnly={readOnly} list={debts} field='debts' legend='Débitos' showStatus={true} />

                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.class}`}>
                        {this.props.label}
                    </button>
                    <button type='button' className='btn btn-default'
                    onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)

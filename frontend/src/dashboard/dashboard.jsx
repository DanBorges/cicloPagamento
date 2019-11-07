import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSumary } from '../dashboard/dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/template/row'

class Dashboard extends Component {
    
    componentWillMount() {
        this.props.getSumary()
    }

    render() {
        const {credit, debt} = this.props.sumary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Row>
                    <Content>
                        <ValueBox cols='12 4' color='green' 
                                icon='bank' value={`R$${credit}`} 
                                text='Total de Créditos' />
                        
                        <ValueBox cols='12 4' color='red' 
                                icon='credit-card' value={`R$${debt}`} 
                                text='Total de Débitos' />

                        <ValueBox cols='12 4' color='blue' 
                                icon='money' value={`R$${credit - debt}`} 
                                text='Valor Consolidade' />
                    </Content>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = state => ({sumary: state.dashboard.sumary})
const mapDispatchToProps = dispatch => bindActionCreators({getSumary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
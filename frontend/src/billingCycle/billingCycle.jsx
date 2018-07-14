import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import List from './billingCycleList'
import Form from './billingCycleForm'
import { create } from './billingCycleActions'
import consts from './billingCycleConsts'

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab(consts.tabList)
        this.props.showTabs(consts.tabList, consts.tabCreate)
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target={consts.tabList} />
                            <TabHeader label="Incluir" icon="plus" target={consts.tabCreate} />
                            <TabHeader label="Alterar" icon="pencil" target={consts.tabUpdate} />
                            <TabHeader label="Excluir" icon="trash-o" target={consts.tabDelete} />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={consts.tabList}>
                                <List />
                            </TabContent>
                            <TabContent id={consts.tabCreate}>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id={consts.tabUpdate}>
                                <Form />
                            </TabContent>
                            <TabContent id={consts.tabDelete}>
                                <h1>Excluir</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch)
export default connect(
    null,
    mapDispatchToProps
)(BillingCycle)

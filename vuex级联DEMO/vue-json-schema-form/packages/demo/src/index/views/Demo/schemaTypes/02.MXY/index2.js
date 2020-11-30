/**
 * Created by meng xian yu on 2020/10/27 14:24.
 */
export default {
    schema: {
        type: 'object',
        properties: {
            tradeType: {
                type: 'string',
                title: '交易类型',
                anyOf: [{
                    title: '期货',
                    type: 'object',
                    properties: {
                        contractId: {
                            type: 'string',
                            title: '期货合约',
                            anyOf: [{
                                title: 'a1907',
                                type: 'object'
                            }, {
                                title: 'a1908',
                                type: 'object'
                            }]
                        }
                    }
                }, {
                    title: '期权',
                    type: 'object',
                    properties: {
                        contractId: {
                            type: 'string',
                            title: '期权系列',
                            anyOf: [{
                                title: 'a1904-C-2030',
                                type: 'object'
                            }, {
                                title: 'a1905-C-2030',
                                type: 'object'
                            }]
                        }
                    }
                }]
            }
        }
    },
    formData: {
    },
    uiSchema: {
        tradeType: {
            anyOfSelect: {
                'ui:widget': 'SelectWidget',
                'ui:title': '交易类型',
                'ui:options': {}
            }
        },
        contractId: {
            anyOfSelect: {
                'ui:widget': 'SelectWidget',
                'ui:title': '交易类型',
                'ui:options': {}
            }
        }
    },
    errorSchema: {
    }
};

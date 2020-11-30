/**
 * Created by meng xian yu on 2020/10/27 14:24.
 */


export default {
    schema: {
        title: '联动测试',
        cop1: 'newType',
        properties: {
            tradeType: {
                type: 'testSelect',
                title: '交易类型',
                config: {
                    url: '/api/getTradeType', // 请求接口地址
                    method: 'POST', // 请求方式，默认'GET'
                    valueName: 'value', // value对应的字段名，默认'value'
                    labelName: 'label', // 显示的label的字段名，默认'label'
                    params: '' // 请求参数
                },
                tri: ['variety',{type: 'testSelect', name: 'aaaaa', visible: true, function() {}}]
            },
            variety: {
                type: 'testSelect',
                title: '品种',
                config: {
                    url: '/api/getVariety', // 请求接口地址
                    method: 'POST', // 请求方式，默认'GET'
                    valueName: 'value', // value对应的字段名，默认'value'
                    labelName: 'label', // 显示的label的字段名，默认'label'
                    params: '' // 请求参数
                },
                tri: ['series', 'contract']
            },
            series: {
                type: 'testSelect',
                title: '系列',
                config: {
                    url: '/api/getSeries', // 请求接口地址
                    method: 'POST', // 请求方式，默认'GET'
                    valueName: 'value', // value对应的字段名，默认'value'
                    labelName: 'label', // 显示的label的字段名，默认'label'
                    params: '' // 请求参数
                },
                tri: ['contract'],
                "ui:hidden": "{{rootFormData.tradeType === 'ftr'}}"
            },
            contract: {
                type: 'testSelect',
                title: '合约',
                config: {
                    url: '/api/getContract', // 请求接口地址
                    method: 'POST', // 请求方式，默认'GET'
                    valueName: 'value', // value对应的字段名，默认'value'
                    labelName: 'label', // 显示的label的字段名，默认'label'
                    params: '' // 请求参数
                },
                tri: []
            }
        }
    },
    formData: {
    },
    uiSchema: {
    },
    errorSchema: {
    }
};

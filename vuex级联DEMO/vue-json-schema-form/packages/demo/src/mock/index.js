import Mock from 'mockjs'
Mock.mock('/api/getTradeType', 'post', (res) => {
    return {
        msg: 'success',
        data: [
            { value: 'ftr', label: '期货'},
            { value: 'opt', label: '期权'}
        ]
    }
})


Mock.mock('/api/getVariety', 'post', (res) => {
    console.log('123')
    if (JSON.parse(res.body + '') === null) {
        return {
            msg: 'success',
            data: []
        };
    }
    const r = JSON.parse(res.body + '');
    if (r.tradeType === 'opt') {
        return {
            msg: 'success',
            data: [
                { value: 'j', label: '焦煤'},
                { value: 'jd', label: '鸡蛋'}
            ]
        }
    } else {
        return {
            msg: 'success',
            data: [
                { value: 'c', label: '玉米'},
                { value: 'a', label: '豆一'}
            ]
        }
    }
})

Mock.mock('/api/getVariety', 'post', (res) => {
    console.log('123')
    if (JSON.parse(res.body + '') === null) {
        return {
            msg: 'success',
            data: []
        };
    }
    const r = JSON.parse(res.body + '');
    if (r.tradeType === 'opt') {
        return {
            msg: 'success',
            data: [
                { value: 'j', label: '焦煤'},
                { value: 'jd', label: '鸡蛋'}
            ]
        }
    } else {
        return {
            msg: 'success',
            data: [
                { value: 'c', label: '玉米'},
                { value: 'a', label: '豆一'}
            ]
        }
    }
})

Mock.mock('/api/getSeries', 'post', (res) => {
    if (JSON.parse(res.body + '') === null) {
        return {
            msg: 'success',
            data: []
        };
    }
    const r = JSON.parse(res.body + '');
    
    if (r.tradeType === 'opt') {
        if (r.variety === 'j') {
            return {
                msg: 'success',
                data: [
                    { value: 'j1903', label: 'j1903'},
                    { value: 'j1907', label: 'j1907'}
                ]
            }
        } else if (r.variety === 'jd') {
            return {
                msg: 'success',
                data: [
                    {value: 'jd1903', label: 'jd1903'},
                    {value: 'jd1907', label: 'jd1907'}
                ]
            }
        }
    } else {
        return {
            msg: 'success',
            data: []
        }
    }
})

Mock.mock('/api/getContract', 'post', (res) => {
    if (JSON.parse(res.body + '') === null) {
        return {
            msg: 'success',
            data: []
        };
    }
    const r = JSON.parse(res.body + '');
    
    if (r.tradeType === 'opt') {
        if (r.series === 'j1903') {
            return {
                msg: 'success',
                data: [
                    { value: 'j1903-P-3050', label: 'j1903-P-3050'},
                    { value: 'j1903-C-3050', label: 'j1903-C-3050'}
                ]
            }
        } else if (r.series === 'j1907') {
            return {
                msg: 'success',
                data: [
                    { value: 'j1907-P-3050', label: 'j1907-P-3050'},
                    { value: 'j1907-C-3050', label: 'j1907-C-3050'}
                ]
            }
        } else if (r.series === 'jd1903') {
            return {
                msg: 'success',
                data: [
                    { value: 'jd1903-P-3050', label: 'jd1903-P-3050'},
                    { value: 'jd1903-C-3050', label: 'jd1903-C-3050'}
                ]
            }
        } else if (r.series === 'jd1907') {
            return {
                msg: 'success',
                data: [
                    { value: 'jd1907-P-3050', label: 'jd1907-P-3050'},
                    { value: 'jd1907-C-3050', label: 'jd1907-C-3050'}
                ]
            }
        } else {
            return {
                msg: 'success',
                data: []
            }
        }
    } else {
        if (r.variety === 'c') {
            return {
                msg: 'success',
                data: [
                    { value: 'c1903', label: 'c1903'},
                    { value: 'c1907', label: 'c1907'}
                ]
            }
        } else if (r.variety === 'a') {
            return {
                msg: 'success',
                data: [
                    { value: 'a1903', label: 'a1903'},
                    { value: 'a1907', label: 'a1907'}
                ]
            }
        } else {
            return {
                msg: 'success',
                data: []
            }
        }
    }
})

/**
 * created by MXY on 2020/11/08
 */
const files = require.context('.', true, /\.js$/);

const modules = files.keys().reduce((preVal, curKey) => {
    if (curKey !== './index.js') {
        preVal[curKey.replace(/(\.\/\d+\.|\/index\.js)/g, '')] = files(curKey).default;
    }
    return preVal;
}, {});

export default modules;

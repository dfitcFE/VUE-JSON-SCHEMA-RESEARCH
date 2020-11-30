/**
 * Created by Liu.Jun on 2020/4/21 9:24.
 */

import vueProps from '../props';
import { getWidgetConfig, isSelect, optionsList } from '../../common/formUtils';
import Widget from '../../fieldComponents/Widget';
import WIDGET_MAP from '../../config/WIDGET_MAP';

export default {
    name: 'StringField',
    props: vueProps,
    functional: true,
    render(h, context) {
        const { schema, uiSchema } = context.props;

        // 可能是枚举数据使用select组件，否则使用 input
        const enumOptions = isSelect(schema) && optionsList(schema, uiSchema);

        const widgetConfig = getWidgetConfig({
            schema,
            uiSchema
        }, () => {
            const isNumber = schema.type === 'number' || schema.type === 'integer';

            return {
                widget: enumOptions
                    ? WIDGET_MAP.common.select
                    : WIDGET_MAP.formats[schema.format]
                    || (isNumber ? WIDGET_MAP.types.number : WIDGET_MAP.types.string)
            };
        });

        // 存在枚举数据列表 传入 enumOptions
        if (enumOptions) {
            widgetConfig.uiProps.enumOptions = enumOptions;
        }

        return h(
            Widget,
            {
                ...context.data,
                props: {
                    ...context.props,
                    ...widgetConfig
                }
            }
        );
    }
};

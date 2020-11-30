import vueProps from '../props';
import { getWidgetConfig } from '../../common/formUtils';
import WIDGET_MAP from '../../config/WIDGET_MAP';
import Widget from '../../fieldComponents/Widget';

export default {
    name: 'TestSelectFiled',
    props: vueProps,
    functional: true,
    render(h, context) {
        const { schema, uiSchema } = context.props;
        const widgetConfig = getWidgetConfig({
            schema,
            uiSchema
        }, () => {

            const n = schema.type;
            console.log(n);
            return {
                widget: WIDGET_MAP.common.testSelect
            };
        });
        widgetConfig.uiProps.config = schema.config;
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

<template>
    <div>
        <vue-element-form
            v-model="formData"
            :schema="schema"
            :ui-schema="uiSchema"
            :error-schema="errorSchema"
            @on-change="handleDataChange"
            @on-cancel="handleCancel"
            @on-submit="handleSubmit"
        ></vue-element-form>
    </div>
</template>

<script>
    import VueElementForm from '@lljj/vue-json-schema-form';
    import schemaTypes from './schemaTypes2';

    export default {
        name: 'Index2',
        components: {
            VueElementForm,
            schemaTypes
        },
        data() {
            return {
                ...this.getDefaultSchemaMap()
            };
        },
        created() {
            this.initData();
        },
        methods: {
            getDefaultSchemaMap() {
                return {
                    schema: {},
                    uiSchema: {},
                    formData: {},
                    errorSchema: {}
                };
            },
            initData() {
                Object.assign(this, schemaTypes.MXY);
            },
            handleDataChange() {
                console.log('Data1 change');
            },
            handleSubmit() {
                console.log('Submit');
            },
            handleCancel() {
                console.log('Cancel');
            }
        }
    };
</script>

<style scoped>

</style>

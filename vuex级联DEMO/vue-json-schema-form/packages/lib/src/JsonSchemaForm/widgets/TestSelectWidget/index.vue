<template>
    <el-select v-model="selectList" v-bind="$attrs">
        <el-option v-for="(item, index) in enumOptions" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
</template>

<script>
    export default {
        name: 'TestSelectWidget',
        props: {
            value: {
                default: null,
                type: null
            },
            config: {
                type: Object,
                default: () => {
                    return {
                        url: '',
                        method: 'GET',
                        valueName: 'value',
                        labelName: 'label',
                        params: '',
                        tri: []
                    };
                }
            }
        },
        data() {
            return {
                enumOptions: []
            };
        },
        computed: {
            selectList: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                }
            },
            configChange() {
                return this.config.params
            }
        },
        watch: {
            configChange: {
                handler(n, o) {
                    this.getRemoteOptions()
                },
                deep: true
            }
        },
        methods: {
            getRemoteOptions() {
                this.$axios({
                    method: this.config.method,
                    url: this.config.url,
                    data: this.config.params
                }).then((res) => {
                    // debugger
                    // this.selectList = ''
                    if (res.data.msg === 'success') {
                        this.enumOptions = res.data.data.map((curValue) => {
                            const valueName = this.config.valueName;
                            const labelName = this.config.labelName;
                            return {
                                value: curValue[valueName],
                                label: curValue[labelName]
                            };
                        });
                    }
                }).catch((error) => {
                    console.log(error); // 请求失败返回的数据
                });
            }
        },
        mounted() {
            this.getRemoteOptions()
        }
    };
</script>

<style scoped>

</style>

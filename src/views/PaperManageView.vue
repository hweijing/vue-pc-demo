<template>
    <div class="layout">
        <Layout>
            <Sider class="sider">
                <img class="logo" src="../assets/abt.png">
                <Menu accordion width="200px" theme="dark">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-analytics" />
                            拓客素材管理
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header class="header">
                    <div class="flex content-header-container">
                        <div class="flex">
                            <Icon type="md-menu" size="32" style="margin-right: 20px;"></Icon>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Icon type="ios-home-outline"></Icon>
                                    首页
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Icon type="logo-buffer"></Icon>
                                    客经管理
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Icon type="ios-cafe"></Icon>
                                    展业海报
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div class="flex">
                            <Breadcrumb style="margin-right: 10px;">
                                <BreadcrumbItem>河南总公司</BreadcrumbItem>
                                <BreadcrumbItem>测试测试</BreadcrumbItem>
                                <BreadcrumbItem>CESH001</BreadcrumbItem>
                            </Breadcrumb>
                            <Icon type="md-expand" size="32" style="margin-right: 10px;"></Icon>
                            <Icon type="md-notifications" size="32" style="margin-right: 10px;"></Icon>
                            <span>测试号一</span>
                        </div>
                    </div>
                </Header>
                <Content>
                    <div class="flex card-container">
                        <Card class="small-card" dis-hover>
                            <div class="flex">
                                <Badge color="#eee"></Badge>
                                <p>首页</p>
                            </div>
                        </Card>
                        <Card class="small-card" dis-hover>
                            <div class="flex">
                                <Badge color="blue"></Badge>
                                <p>展业海报</p>
                            </div>
                        </Card>
                    </div>
                    <Card dis-hover class="card">
                        <div slot="title" class="flex content-title-container">
                            <div class="flex">
                                <Select style="width:200px;margin-right: 20px;" placeholder="请选择海报分类">
                                    <Option value="New York" label="New York">
                                        <span>New York</span>
                                    </Option>
                                    <Option value="London" label="London">
                                        <span>London</span>
                                    </Option>
                                    <Option value="Sydney" label="Sydney">
                                        <span>Sydney</span>
                                    </Option>
                                </Select>
                                <Button type="primary" icon="ios-search">搜索</Button>
                            </div>
                            <div class="flex">
                                <Button type="success" @click="modal = true">海报上传</Button>
                                <Modal v-model="modal" width=1200>
                                    <div slot="header">
                                        <p>海报上传</p>
                                    </div>
                                    <Form :model="uploadModal" :label-width="100" class="flex"
                                        style="align-items: baseline;">
                                        <div style="flex:1">
                                            <FormItem label="分类：" required>
                                                <Select style="width: 400px" v-model="uploadModal.select"
                                                    placeholder="请选择分类" clearable filterable>
                                                    <Option value="beijing">New York</Option>
                                                    <Option value="shanghai">London</Option>
                                                    <Option value="shenzhen">Sydney</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="发布时间：" required>
                                                <DatePicker style="width: 400px" v-model="uploadModal.date"
                                                    type="datetime" placeholder="请选择时间"></DatePicker>
                                            </FormItem>
                                        </div>
                                        <div style="flex:1">
                                            <FormItem label="上传图片：" required>
                                                <Upload action="//jsonplaceholder.typicode.com/posts/">
                                                    <Button icon="ios-camera"></Button>
                                                </Upload>
                                                <div class="picture-border"></div>
                                            </FormItem>

                                            <FormItem label="名字颜色：" required>
                                                <ColorPicker v-model="nameColor" />
                                            </FormItem>

                                            <FormItem label="电话颜色：" required>
                                                <ColorPicker v-model="phoneColor" />
                                            </FormItem>
                                        </div>
                                    </Form>

                                    <div slot="footer">
                                        <Button @click="modal = false">取消</Button>
                                        <Button type="primary" :loading="loading" @click="submit">提交</Button>
                                    </div>
                                </Modal>
                                <Button style="margin-left: 20px;" icon="md-refresh">刷新</Button>
                            </div>
                        </div>
                        <div class="content-container">
                            <Page :total="100" show-sizer></Page>
                        </div>
                    </Card>
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        </Layout>
    </div>
</template>

<script>
// import PaperManageHeader from '../components/PaperManageHeader.vue';
// import PaperManageSider from '../components/PaperManageSider.vue';
// import PaperManageContent from '../components/PaperManageContent.vue';

export default {
    name: 'PaperManageView',
    data() {
        return {
            modal: false,
            loading: false,
            uploadModal: {
                select: ''

            },
            nameColor: '',
            phoneColor: ''
        }
    },
    components: {
        // PaperManageSider,
        // PaperManageHeader,
        // PaperManageContent
    },
    methods: {
        submit() {
            this.loading = true;
            setTimeout(() => {
                this.modal = false;
                this.loading = false;
            }, 2000);
        }
    },
    computed: {
    },
}
</script>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
}

.layout {
    width: 1920px;
    height: 919px;

    .sider {
        height: 919px;
        background-color: #090f29;

        .logo {
            width: 200px;
            margin: 10px 0;
        }
    }

    .header {
        background-color: #fff;

        .content-header-container {
            justify-content: space-between;
        }
    }
}

.card {
    margin: 20px 30px;

    .content-container {
        height: 600px;
    }
}

.card-container {
    margin: 20px 30px;

    .small-card {
        .flex;

        width: 100px;
        max-width: 100px;
        height: 30px;
        overflow: hidden;
        margin: 0 5px;
    }
}

.content-title-container {
    justify-content: space-between;
}

/deep/.ivu-card-body {
    padding: 0;
    margin-left: 5px;
}

/deep/.ivu-badge-status-blue {
    width: 8px;
    height: 8px;
}

.picture-border {
    width: 300px;
    height: 400px;
    border: 2px solid #000;
}
</style>
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
                    <div class="flex" style="justify-content: space-between;">
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
                    <div class="tag-container">
                        <Tag type="dot" closable color="default">首页</Tag>
                        <Tag type="dot" closable color="primary">展业海报</Tag>
                    </div>
                    <Card dis-hover class="card">
                        <div slot="title" class="flex" style="justify-content: space-between;">
                            <div class="flex">
                                <Select style="width:200px;margin-right: 20px;" placeholder="请选择海报分类">
                                    <Option value="节日" label="节日">
                                        <span>节日</span>
                                    </Option>
                                    <Option value="正能量" label="正能量">
                                        <span>正能量</span>
                                    </Option>
                                    <Option value="理念" label="理念">
                                        <span>理念</span>
                                    </Option>
                                    <Option value="抗疫" label="抗疫">
                                        <span>抗疫</span>
                                    </Option>
                                </Select>
                                <Button type="primary" icon="ios-search">搜索</Button>
                            </div>
                            <div class="flex">
                                <Button type="success" @click="modal = true">海报上传</Button>
                                <Modal v-model="modal" :fullscreen="isFullScreen" width="1200" :mask-closable="false"
                                    :closable="false">
                                    <div slot="header">
                                        <p>海报上传</p>
                                    </div>
                                    <Form :model="uploadModal" :label-width="140" class="flex"
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
                                                    type="datetime" placeholder="请选择时间">
                                                </DatePicker>
                                            </FormItem>
                                        </div>
                                        <div style="flex:1" class="flex">
                                            <div style="flex:1">
                                                <FormItem label="上传图片：" required>
                                                    <Upload action="">
                                                        <Button icon="ios-camera"></Button>
                                                    </Upload>
                                                    <div class="picture-border"></div>
                                                </FormItem>

                                                <FormItem label="名字颜色：" required>
                                                    <ColorPicker v-model="uploadModal.nameColor" />
                                                </FormItem>

                                                <FormItem label="电话颜色：" required>
                                                    <ColorPicker v-model="uploadModal.phoneColor" />
                                                </FormItem>
                                                <FormItem>
                                                    <p style="color:cornflowerblue; cursor:pointer"
                                                        @click="onSeniorSet">
                                                        高级{{ isFullScreen ? ' <' : ' >' }} </p>
                                                </FormItem>
                                            </div>
                                            <div style="flex:1" v-if="isFullScreen">
                                                <FormItem label="名字位置X：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.nameSiteX">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="名字位置Y：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.nameSiteY">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="名字大小：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.nameSize">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="电话位置X：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.phoneSiteX">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="电话位置Y：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.phoneSiteY">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="电话字体大小：" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.phoneSize">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="二维码位置X" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.barcodeSiteX">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="二维码位置Y" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.barcodeSiteY">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="二维码大小" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.barcodeSize">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="公司logoX" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.logoX">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="公司logoY" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.logoY">
                                                    </InputNumber>
                                                </FormItem>
                                                <FormItem label="公司logo大小" required>
                                                    <InputNumber style="width: 120px;"
                                                        v-model="uploadModal.seniorSet.logoSize">
                                                    </InputNumber>
                                                </FormItem>
                                            </div>
                                        </div>
                                    </Form>
                                    <div slot="footer">
                                        <Button @click="onCancel">取消</Button>
                                        <Button type="primary" :loading="loading" @click="onSubmit">提交</Button>
                                    </div>
                                </Modal>
                                <Button style="margin-left: 20px;" icon="md-refresh">刷新</Button>
                            </div>
                        </div>
                        <div class="content-container">
                            <div class="paper-container">
                                <Row :gutter="10">
                                    <Col span="3">
                                    <Card>
                                        <div class="cover">
                                            <div>1</div>
                                            <div>2</div>
                                            <!-- <img src="../assets/bglogin.68ca2f48.jpg"> -->
                                        </div>
                                        <div class="operate">
                                            <p>{{ Date.now() }}</p>
                                            <div class="button-group">
                                                <Button icon="md-create" type="primary"></Button>
                                                <Button icon="md-trash" type="error"></Button>
                                            </div>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>2</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>3</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>4</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>5</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>6</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>7</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                    <Col span="3">
                                    <Card>
                                        <div>
                                            <h3>8</h3>
                                        </div>
                                    </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div class="flex" style="margin-top: 15px;">
                                <Page :total="100" show-sizer></Page>
                            </div>
                        </div>
                    </Card>
                </Content>
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
                select: '',
                nameColor: '',
                phoneColor: '',
                seniorSet: {
                    nameSiteX: 0,
                    nameSiteY: 0,
                    nameSize: 0,
                    phoneSiteX: 0,
                    phoneSiteY: 0,
                    phoneSize: 0,
                    barcodeSiteX: 0,
                    barcodeSiteY: 0,
                    barcodeSize: 0,
                    logoX: 0,
                    logoY: 0,
                    logoSize: 0,
                }
            },
            isFullScreen: false
        }
    },
    components: {
        // PaperManageSider,
        // PaperManageHeader,
        // PaperManageContent
    },
    methods: {
        onSubmit() {
            this.loading = true;
            setTimeout(() => {
                this.modal = false;
                this.loading = false;
                this.isFullScreen = false;
            }, 2000);
        },
        onSeniorSet() {
            this.isFullScreen = !this.isFullScreen;
        },
        onCancel() {
            this.modal = false;
            this.isFullScreen = false;
        }
    }
}
</script>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
}

.card {
    margin: 20px 30px;

    .content-container {
        height: 600px;

        .paper-container {
            height: 550px;
            max-height: 550px;
            overflow-y: auto;
            overflow-x: hidden;

            /deep/.ivu-card-body {
                height: 300px;
                .flex;
                flex-direction: column;
                align-items: baseline;
            }

            .cover {
                height: 200px;
                width: 100%;
            }

            .operate {
                width: 100%;
                flex: 1;

                display: flex;

                .button-group {

                }
            }
        }
    }
}

.tag-container {
    margin: 20px 30px;
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
<template>
    <div>
        <Breadcrumb :style="{ margin: '20px 0px 20px 20px' }">
            <BreadcrumbItem>
                <Icon type="ios-home-outline"></Icon>
                首页
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon type="logo-buffer"></Icon>
                寝室管理员
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon type="ios-cafe"></Icon>
                展业海报
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'PaperManageContent',
}
</script>

<style></style>
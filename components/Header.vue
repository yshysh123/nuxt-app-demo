<template>
  <header class="v-header">
    <div class="headerContent">
      <el-menu :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3"
          disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me"
            target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>
      <div class="language">
        <el-dropdown trigger="click"
          class='international'
          @command="handleSetLanguage">
          <span>
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
            <el-dropdown-item command="fr">法语</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VHeader",
  data() {
    return {
      maxClientWidth: 980,
      activeIndex: "1",
      activeIndex2: "1",
      language: ""
    };
  },
  computed: {},
  mounted() {
    const _lang = localStorage.getItem("lang") || "zh";
    this.getLanguage(_lang);
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
    getLanguage(val) {
      if (val === "zh") {
        this.language = "中文";
      }
      if (val === "en") {
        this.language = "English";
      }
      if (val === "fr") {
        this.language = "法语";
      }
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
      this.getLanguage(lang);
    }
  }
};
</script>

<style lang="less" stopted>
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  height: 5rem;
  text-align: center;
  background: #fff;
  color: #909090;
  border-bottom: 1px solid #f1f1f1;
  .headerContent {
    overflow: hidden;
    margin: auto;
    max-width: 1280px;
    .el-menu-demo {
      height: 100%;
      float: left;
      display: flex;
      align-items: center;
      position: relative;
      .el-menu-item,
      .el-submenu__title {
        height: 100%;
        line-height: 5rem;
      }
    }
    .language {
      float: right;
      font-size: 16px;
      line-height: 5rem;
      color: #fff;
      .el-dropdown-link {
        position: relative;
        display: inline-block;
        width: 110px;
        vertical-align: middle;
        color: #fff;
        cursor: pointer;
      }
      .el-icon-arrow-down {
        font-size: 14px;
      }
      .international-icon {
        font-size: 20px;
        vertical-align: -5px !important;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 1280px) {
  .v-header {
    width: 96%;
  }
}
</style>

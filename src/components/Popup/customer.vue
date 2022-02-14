<template>
  <div class="customer-view">
    <div class="title">联系客服</div>
    <div class="img">
      <imageUrl
        :src="static + 'zhongzheng/images/detection_code.png'"
        type="staticOrigin"
        height="169px"
        width="169px"
      />
    </div>
    <div class="desc">手机号/微信号:</div>
    <div class="phone">
      <p class="text">18924039904</p>
      <div class="copy">
        <p
          @click="handleCopy('18924039904')"
          class="iconfont icon-icon_copy"
        ></p>
        <p>复制</p>
      </div>
    </div>
    <div class="desc desc2">扫码或复制微信号联系客服</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import imageUrl from '@/components/Image/ImageUrl.vue'
import useClipboard from 'vue-clipboard3'
import { Toast } from 'vant'
export default defineComponent({
  components: {
    imageUrl
  },
  inheritAttrs: false,
  emits: ['click'],
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  setup() {
    const { toClipboard } = useClipboard()
    const handleCopy = async (content: string) => {
      try {
        await toClipboard(content)
        Toast('复制成功')
      } catch (e) {
        // console.error(e)
      }
    }
    return {
      static: process.env.VUE_APP_STATIC_ORIGIN,
      handleCopy
    }
  }
})
</script>

<style scoped lang="less">
.customer-view {
  width: 335px;
  padding: 0 0 16px 0;
  .title {
    font-size: 19px;
    font-weight: 500;
    color: #333333;
    line-height: 26px;
    padding: 24px 0 20px 0;
    text-align: center;
  }
  .img {
    display: flex;
    justify-content: center;
  }
  .phone {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0 0 0;
    .text {
      font-size: 15px;
      font-weight: 400;
      color: #333333;
    }
    .copy {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f2f2f2;
      border-radius: 12px;
      margin: 0 0 0 8px;
      width: 55px;
      height: 24px;
      color: #0078ff;
      font-size: 13px;
    }
  }
  .desc {
    font-size: 13px;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
    padding: 8px 0 0 0;
    text-align: center;
  }
  .desc2 {
    padding: 30px 0 0 0;
  }
}
</style>

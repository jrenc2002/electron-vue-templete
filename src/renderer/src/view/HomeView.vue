<template>
  <div
    class="w-full h-screen rounded-3xl flex absolute z-10 bg-gradient-to-r from-[#C9D6FF] via-[#E2E2E2] to-[#E9E4F0]"
    style="background: linear-gradient(90deg, #C9D6FF 0%, #E9E4F0 100%), radial-gradient(85.89% 47.61% at 442.62% 78.80%, rgba(89.85, 125.68, 217.81, 0.50) 0%, rgba(81, 253, 211.72, 0) 100%); border-radius: 28px">


  <div class=" w-full right-side  h-full relative flex flex-col justify-start items-start pl-[0.3rem] pt-[0.3rem] transition-all duration-300 ease-in-out ">

      <div :style="{ width: 'calc(100% - 0.3rem)', height: 'calc(100% - 0.3rem)' }"
           class="box-border shadow bg-white bg-opacity-80 rounded-3xl flex flex-col justify-center items-center gap-6 inline-flex transform-origin: left">
<!--        <router-view v-slot="{ Component }">-->
<!--          <transition mode="out-in" name="move">-->
<!--            <keep-alive>-->
<!--              <component :is="Component"></component>-->
<!--            </keep-alive>-->
<!--          </transition>-->
<!--        </router-view>-->

      </div>
    </div>
    <div class="absolute w-full  bottom-7 items-center flex justify-center">
      <div class="py-1 px-3 rounded-3xl flex    relative  inline-block bg-white border-[0.5px] border-[#f5efeb]/40"  style="box-shadow: 0px 56px 64px -16px rgba(140,133,131,0.56), 0px 64px 64px -32px rgba(133,124,124,0.56);">
        <NavigationView></NavigationView>
      </div>
    </div>

  </div>

</template>
<script lang="js" setup>
import {onMounted, onUnmounted} from 'vue';
import NavigationView from '@/components/NavigationView.vue';






// 在组件销毁时，确保停止所有监听器


// 使用 Vue3 的生命周期钩子函数 onMounted，在组件挂载完成后添加窗口大小变化的监听事件
onMounted(() => {


});



// 使用 Vue3 的生命周期钩子函数 onUnmounted，在组件卸载之前移除窗口大小变化的监听事件
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);

});


</script>

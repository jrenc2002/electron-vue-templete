<template>

        <!-- 导航部分 -->
        <nav>
                    <!-- 用户信息部分 -->
          <ul class="flex  ">
                    <!-- 主导航列表，遍历导航项数据 -->
            <template  v-for="item in navigation" :key="item.name" >
              <li class=" px-1">

                <router-link
                  :class="['bg-[#242220]/5 group flex  rounded-md p-3 text-sm leading-6 font-semibold']"
                  :to="item.href"
                  active-class="bg-white text-green-600 rounded-xl shadow">

                  <!-- 导航名称 -->
                  {{ item.name }}
                </router-link>
              </li>
            </template>

          </ul>
        </nav>

</template>

<script lang="js" setup>
import {useRoute} from 'vue-router'
import {computed, onMounted, ref, watch} from 'vue'
import {useAppGlobal} from '@/store/AppGlobal'


const route = useRoute()
const AppGlobal = useAppGlobal()
const updateName = ref('')
const navigation = computed(() => [
    {
        name: '导航页',
        href: '/overview',

        current: route.path === '/overview'
    },
    {
        name: '学习页',
        href: '/processview',

        current: route.path === '/processview'
    },
    {
        name: '设置页',
        href: '/curvecompare',

        current: route.path === '/curvecompare'
    }
])



</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.fade-enter-from {
    transform-origin: left bottom;
    transform: scale(0.5);
    opacity: 0;
}

.fade-leave-to {
    transform-origin: left bottom;
    transform: scale(0.5);
    opacity: 0;
}

/* 初始状态 */
.faderight-enter-from {
    transform-origin: center center;
    transform: scale(0.5);
    opacity: 0;
}

.faderight-enter, .faderight-leave-to /* .faderight-leave-active in <2.1.8 */
{
    opacity: 0;
    transform-origin: center center;
    transform: scale(0.5);

}

/* 过渡状态 */
.faderight-enter-active, .faderight-leave-active {
    transition: opacity 0.5s, transform 0.2s;

}

/* 结束状态 */
.faderight-enter-to /* .faderight-enter-active in <2.1.8 */, .faderight-leave {
    opacity: 1;


}


</style>

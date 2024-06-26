<template>
  <!-- 整体样式 -->
  <div class="w-full h-screen rounded-3xl items-start inline-flex absolute z-10"
       style="background: linear-gradient(90deg, #C9D6FF 0%, #E9E4F0 100%), radial-gradient(85.89% 47.61% at 442.62% 78.80%, rgba(89.85, 125.68, 217.81, 0.50) 0%, rgba(81, 253, 211.72, 0) 100%); border-radius: 28px">

    <!-- 左侧样式 -->
    <div class="w-2/3 h-full relative rounded-3xl  items-center place-self-center pl-[0.3rem] pt-[0.3rem] pb-[0.3rem]">
      <!-- 左侧背景图片样式 -->
      <img class=" rounded-3xl bg-cover absolute	 shadow"
        :style="{ width: 'calc(100% - 0.3rem)', height: 'calc(100% - 0.6rem)' }"
        src="../assets/image/login-background.png" />

      <!-- 左侧文字内容样式 -->
      <div class="w-[99%] h-[99%] absolute left-[0.5%] top-[0.5%]   rounded-3xl">
        <!-- 左上侧logo+名称样式 -->
        <div class="h-[2vh]  justify-start items-center gap-1.5 inline-flex relative left-10 top-10">
          <img src="../assets/image/login-logo.png" class=" h-[1.25rem]   bg-cover ">
          <div class="text-white text-base font-medium leading-normal font-wz subpixel-antialiased text-1xl">
            <svg width="68" height="163" viewBox="0 0 483 163" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.772 98.792C20.7 98.792 17.5427 98.2373 14.3 97.128C11.0573 96.104 8.58267 94.7813 6.876 93.16C6.96133 91.1973 7.47333 89.32 8.412 87.528C9.35067 85.736 10.5453 84.4133 11.996 83.56C15.9213 86.376 19.7187 87.784 23.388 87.784C29.3613 87.784 34.0547 85.1387 37.468 79.848C40.1987 75.8373 41.564 71.144 41.564 65.768C41.564 62.0987 40.8813 58.7707 39.516 55.784C38.236 52.712 36.4867 50.28 34.268 48.488C32.1347 46.696 29.7027 45.8 26.972 45.8C23.3027 45.8 20.1027 46.9947 17.372 49.384C14.7267 51.7733 12.1667 55.0587 9.692 59.24C7.388 58.8133 5.468 58.216 3.932 57.448C2.48133 56.68 1.244 55.3147 0.22 53.352C3.71867 47.2933 7.60133 42.6853 11.868 39.528C16.22 36.3707 21.3827 34.792 27.356 34.792H27.484C31.58 34.792 35.3347 35.8587 38.748 37.992C42.1613 40.04 45.02 42.856 47.324 46.44C49.628 42.856 52.5293 40.04 56.028 37.992C59.5267 35.8587 63.452 34.792 67.804 34.792C70.4493 34.792 73.0947 35.1333 75.74 35.816C78.3853 36.4987 80.5187 37.3947 82.14 38.504C82.14 40.1253 81.756 41.9173 80.988 43.88C80.3053 45.7573 79.4947 47.1653 78.556 48.104C76.508 47.336 74.6733 46.7813 73.052 46.44C71.4307 46.0133 69.8947 45.8 68.444 45.8C63.9213 45.8 60.252 47.592 57.436 51.176C54.62 54.76 53.212 59.4107 53.212 65.128C53.212 69.5653 53.98 73.4907 55.516 76.904C57.052 80.3173 59.1427 83.0053 61.788 84.968C64.5187 86.9307 67.6333 87.912 71.132 87.912C76.4227 87.912 80.988 86.4187 84.828 83.432C86.2787 84.2853 87.4733 85.5227 88.412 87.144C89.3507 88.7653 89.82 90.4293 89.82 92.136C88.3693 93.7573 85.8947 95.2933 82.396 96.744C78.9827 98.1093 75.0147 98.792 70.492 98.792H70.236C64.86 98.792 60.1667 97.6827 56.156 95.464C52.1453 93.2453 48.988 90.0453 46.684 85.864C43.9533 89.7893 40.5827 92.9467 36.572 95.336C32.6467 97.64 28.38 98.792 23.772 98.792ZM128.786 71.144C134.333 65.512 139.751 59.6667 145.042 53.608C150.418 47.464 155.41 41.32 160.018 35.176C161.298 35.0053 162.919 35.0053 164.882 35.176C166.93 35.3467 168.637 35.816 170.002 36.584V132.84C170.002 152.808 162.706 162.792 148.114 162.792C141.373 162.792 136.082 160.787 132.242 156.776C128.487 152.765 126.61 147.261 126.61 140.264C126.61 124.733 137.191 110.184 158.354 96.616V56.936C155.709 59.9227 153.021 62.9093 150.29 65.896C147.645 68.7973 145.085 71.4427 142.61 73.832C140.221 76.2213 138.173 78.184 136.466 79.72C134.503 78.7813 132.839 77.6293 131.474 76.264C130.109 74.8987 129.213 73.192 128.786 71.144ZM138.13 140.008C138.13 143.677 138.983 146.536 140.69 148.584C142.397 150.717 144.743 151.784 147.73 151.784C154.983 151.784 158.61 145.469 158.61 132.84V109.928C144.957 119.571 138.13 129.597 138.13 140.008ZM165.01 18.152C162.621 18.152 160.573 17.2987 158.866 15.592C157.159 13.8853 156.306 11.8373 156.306 9.448C156.306 6.888 157.117 4.79733 158.738 3.17599C160.445 1.55466 162.535 0.743996 165.01 0.743996C167.57 0.743996 169.661 1.55466 171.282 3.17599C172.903 4.79733 173.714 6.888 173.714 9.448C173.714 11.9227 172.861 14.0133 171.154 15.72C169.533 17.3413 167.485 18.152 165.01 18.152ZM170.119 105.064C169.18 105.747 168.54 106.088 168.199 106.088C166.919 106.088 165.724 105.107 164.615 103.144C163.42 101.267 162.823 99.3893 162.823 97.512C162.823 96.8293 163.036 96.3173 163.463 95.976C163.804 95.5493 164.53 94.952 165.639 94.184C172.807 89.4053 178.951 84.2853 184.071 78.824C189.191 73.2773 193.116 67.6453 195.847 61.928C198.578 56.1253 199.9 50.5787 199.815 45.288C198.876 44.008 197.938 42.5147 196.999 40.808C196.146 39.016 195.42 37.224 194.823 35.432C194.311 33.64 194.055 32.1467 194.055 30.952C195.506 29.5867 197.682 28.4773 200.583 27.624C203.484 26.7707 206.087 26.4293 208.391 26.6C209.5 29.3307 210.311 32.872 210.823 37.224C212.103 36.968 213.511 36.6693 215.047 36.328C217.778 35.7307 219.954 35.3467 221.575 35.176C223.282 34.92 224.732 34.792 225.927 34.792C230.535 34.792 234.162 36.5413 236.807 40.04C239.452 43.4533 240.775 48.104 240.775 53.992V74.6C240.775 79.2933 241.372 82.664 242.567 84.712C243.847 86.76 245.852 87.784 248.583 87.784C249.778 87.784 250.674 88.296 251.271 89.32C251.954 90.344 252.295 91.7093 252.295 93.416C252.295 94.7813 251.911 96.0187 251.143 97.128C250.46 98.2373 249.308 98.792 247.687 98.792C235.314 98.792 229.127 91.1973 229.127 76.008V56.168C229.127 52.328 228.7 49.64 227.847 48.104C226.994 46.568 225.458 45.8 223.239 45.8C222.471 45.8 221.618 45.8853 220.679 46.056C219.74 46.2267 218.076 46.568 215.687 47.08C213.81 47.5067 212.188 47.8053 210.823 47.976C209.97 58.8987 206.087 69.1387 199.175 78.696C192.263 88.168 182.578 96.9573 170.119 105.064ZM247.726 98.792C246.617 98.792 245.721 98.28 245.038 97.256C244.355 96.232 244.014 94.9093 244.014 93.288C244.014 89.6187 245.55 87.784 248.622 87.784C251.097 87.784 253.614 87.4 256.174 86.632C258.734 85.7787 261.721 84.3707 265.134 82.408C261.806 76.6053 260.142 69.7787 260.142 61.928C260.142 56.6373 261.123 51.9867 263.086 47.976C265.049 43.88 267.779 40.68 271.278 38.376C274.777 35.9867 278.745 34.792 283.182 34.792C286.937 34.792 290.265 35.688 293.166 37.48C296.067 39.1867 298.329 41.576 299.95 44.648C301.571 47.72 302.382 51.2613 302.382 55.272C302.382 60.7333 300.761 65.7253 297.518 70.248C294.361 74.7707 288.985 79.6773 281.39 84.968C284.121 86.9307 287.79 87.912 292.398 87.912C293.593 87.912 294.531 88.424 295.214 89.448C295.897 90.472 296.238 91.8373 296.238 93.544C296.238 95.1653 295.854 96.4453 295.086 97.384C294.318 98.3227 293.209 98.792 291.758 98.792C287.662 98.792 283.822 98.1093 280.238 96.744C276.654 95.3787 273.667 93.5013 271.278 91.112C263.086 96.232 255.235 98.792 247.726 98.792ZM271.278 60.904C271.278 67.6453 272.473 73.0213 274.862 77.032C280.409 73.192 284.505 69.4373 287.15 65.768C289.881 62.0987 291.246 58.6 291.246 55.272C291.246 52.2 290.478 49.8107 288.942 48.104C287.491 46.312 285.443 45.416 282.798 45.416C279.47 45.416 276.697 46.9093 274.478 49.896C272.345 52.8827 271.278 56.552 271.278 60.904ZM291.679 98.792C290.57 98.792 289.674 98.28 288.991 97.256C288.308 96.232 287.967 94.9093 287.967 93.288C287.967 91.5813 288.394 90.2587 289.247 89.32C290.015 88.3813 291.082 87.912 292.447 87.912C297.652 87.912 302.09 86.3333 305.759 83.176C309.514 80.0187 313.354 74.5573 317.279 66.792L324.447 52.84C327.946 46.0133 331.274 41.32 334.431 38.76C337.588 36.1147 341.258 34.792 345.439 34.792C349.279 34.792 352.522 35.944 355.167 38.248C357.812 40.4667 359.647 43.496 360.671 47.336C363.06 43.3253 366.132 40.2533 369.887 38.12C373.642 35.9013 377.823 34.792 382.431 34.792C389.087 34.792 394.207 36.968 397.791 41.32C401.46 45.672 403.295 51.7733 403.295 59.624V74.6C403.295 79.2933 403.892 82.664 405.087 84.712C406.367 86.76 408.372 87.784 411.103 87.784C412.298 87.784 413.194 88.296 413.791 89.32C414.474 90.344 414.815 91.7093 414.815 93.416C414.815 94.7813 414.431 96.0187 413.663 97.128C412.98 98.2373 411.828 98.792 410.207 98.792C397.834 98.792 391.647 91.1973 391.647 76.008V59.624C391.647 50.408 388.02 45.8 380.767 45.8C377.012 45.8 373.684 47.2933 370.783 50.28C367.967 53.2667 365.748 57.4053 364.127 62.696C362.591 67.9867 361.823 74.1307 361.823 81.128V97C360.97 97.256 360.031 97.4693 359.007 97.64C357.983 97.8107 357.002 97.896 356.063 97.896C354.015 97.896 352.095 97.5973 350.303 97V56.168C350.303 52.84 349.876 50.28 349.023 48.488C348.17 46.696 346.634 45.8 344.415 45.8C342.708 45.8 341.087 46.8667 339.551 49C338.1 51.048 336.266 54.248 334.047 58.6L325.215 75.624C321.119 83.4747 316.34 89.32 310.879 93.16C305.503 96.9147 299.103 98.792 291.679 98.792ZM411.122 87.784C413.853 87.784 416.541 86.4613 419.186 83.816C421.917 81.1707 424.221 77.6293 426.098 73.192C425.842 71.4 425.714 69.5227 425.714 67.56C425.714 61.3307 426.909 55.784 429.298 50.92C431.687 45.9707 434.973 42.0453 439.154 39.144C443.421 36.2427 448.327 34.792 453.874 34.792C457.97 34.792 461.725 35.6453 465.138 37.352C468.637 38.9733 471.325 41.192 473.202 44.008C472.69 45.8853 471.751 47.464 470.386 48.744C469.021 50.024 467.485 50.9627 465.778 51.56C463.133 47.72 459.25 45.8 454.13 45.8C449.181 45.8 445.17 47.7627 442.098 51.688C439.111 55.528 437.618 60.6053 437.618 66.92C437.618 73.4053 439.282 78.5253 442.61 82.28C445.938 85.9493 450.503 87.784 456.306 87.784C463.047 87.784 469.362 84.6693 475.25 78.44C477.895 79.976 480.37 82.3227 482.674 85.48C476.018 94.3547 467.058 98.792 455.794 98.792C450.333 98.792 445.469 97.7253 441.202 95.592C437.021 93.4587 433.65 90.472 431.09 86.632C425.799 94.7387 418.845 98.792 410.226 98.792C409.117 98.792 408.221 98.28 407.538 97.256C406.855 96.232 406.514 94.9093 406.514 93.288C406.514 89.6187 408.05 87.784 411.122 87.784Z" fill="white"/>
            </svg>

          </div>
        </div>
        <!-- 左下标题样式 -->
        <div class="h-[14vh] absolute bottom-10 left-10 gap-6  flex justify-center items-center  ">
          <div class=" h-full gap-1 flex flex-col justify-center items-left ">
            <div
              class="font-bt leading-normal text-white text-[2.3vw] subpixel-antialiased font-semibold tracking-wide  ">
              归家望月
            </div>
            <div class="w-[34vw] text-white text-wz font-normal text-[1.12vw] leading-normal subpixel-antialiased  ">
              归家望月（青岛）是一家致力于用新技术改变世界💻的一人公司，我们的理想是<span class="font-bold">用最新最先进的技术去优雅的解决人类的烦恼</span>，让您的生活变得更幸福也更便利🥰。</div>
          </div>
        </div>

      </div>
    </div>
    <!-- 右侧样式 -->
    <div class="w-1/3 h-full relative  flex-col justify-start items-start flex pl-[0.3rem] pt-[0.3rem] ">
      <!-- 右侧白底 -->
      <div :style="{ width: 'calc(100% - 0.3rem)', height: 'calc(100% - 0.3rem)' }"
        class=" box-border  shadow bg-white rounded-3xl   absoluteflex-col justify-center items-center gap-6 inline-flex">

        <!-- 登录成功悬浮栏样式 -->
        <div v-if="loginStatus === 'success'" class="rounded-md bg-green-50 p-4 absolute z-40 top-[10vh]">
          <div class="flex">
            <div class="flex-shrink-0">
              <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">登录成功₍ᐢ..ᐢ₎♡</p>
            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button type="button"
                  class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                  <span class="sr-only">Dismiss</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" @click="close" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 登录失败悬浮栏样式 -->
        <div v-if="loginStatus === 'failure'" class="rounded-md bg-red-50 p-4 absolute z-40 top-[10vh]">
          <div class="flex">
            <div class="flex-shrink-0">
              <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">登录失败๑ᵒᯅᵒ๑</h3>


            </div>
            <div class="ml-auto pl-3">
              <div class="-mx-1.5 -my-1.5">
                <button type="button"
                  class="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                  <span class="sr-only">Dismiss</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" @click="close" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 核心功能框 -->
        <div class="flex flex-col justify-center items-start gap-6 w-[70%] mix-w">
          <!-- 文字展示区 -->
          <div class="self-stretch h-[58px] flex-col justify-start items-start flex ">
            <div class="self-stretch text-zinc-900 text-3xl font-medium leading-[3rem]">登录</div>
            <div class="self-stretch text-zinc-600 text-sm font-normal leading-tight tracking-tight">
              请输入您的账号与密码
            </div>
          </div>
          <!-- 账号密码区-->
          <div class="self-stretch h-[138px] flex-col justify-start items-start gap-3.5 flex">
            <!-- 账号输入框 -->
            <div class="self-stretch h-12 flex-col justify-start items-start flex">
              <div class="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                <input v-model="param.username" placeholder="账号" name="account" type="text" autocomplete="account"
                  class="self-stretch h-12 px-3 py-1.5 bg-white rounded-lg border border-gray-200 justify-start items-center gap-2 inline-flex" />

              </div>
            </div>
            <!-- 密码输入框&忘记密码/记住密码功能 -->
            <div class="self-stretch h-[76px] flex-col justify-start items-start gap-2 flex">
              <div class="self-stretch h-12 flex-col justify-start items-start flex">
                <div class="self-stretch h-12 flex-col justify-start items-start gap-1 flex">
                  <input v-model="param.password" name="password" type="password" autocomplete="current-password"
                    placeholder="密码"
                    class=" rounded-md shadow-sm  py-1.5 self-stretch h-12 px-3  bg-white border border-gray-200  gap-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " />
                </div>
              </div>

              <!-- 忘记密码/记住密码 -->
              <div class="self-stretch justify-between items-center gap-1 inline-flex">

                <div class="form-control justify-start items-start gap-1.5 flex">
                  <label class="label cursor-pointer flex justify-center items-center inline-flex gap-2">

                    <span class="text-zinc-900 text-sm font-normal  tracking-tight">记住密码</span>

                    <input type="checkbox" class="toggle toggle-sm " v-model="rememberPassword" checked />

                  </label>
                </div>
                <div class="justify-start items-center gap-1.5 flex">
                  <div class="tooltip" data-tip=" 请联系管理员或厂家找回">
                    <button
                      class="  text-center text-zinc-900 text-sm font-normal  tracking-tight">忘记密码</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <!-- 登录按钮 -->
          <div class="self-stretch h-12 px-4 py-3.5 bg-[#4EA67D] rounded-[40px] justify-center items-center gap-2
                    inline-flex hover:bg-[#83ba9b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                      focus-visible:bg-[#83ba9b]" @click="submitForm">
            <div class="text-white text-sm font-normal leading-tight tracking-tight">登录</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M9.5 3L8.785 3.6965L12.575 7.5H2.5V8.5H12.575L8.785 12.2865L9.5 13L14.5 8L9.5 3Z" fill="white" />
            </svg>
          </div>
          <!-- 注册下划区 -->
          <div class="self-stretch justify-center items-center gap-2 inline-flex">
            <div class="grow shrink basis-0 h-px bg-neutral-200" />
            <div class="text-zinc-900 text-sm font-normal leading-tight tracking-tight">注册</div>
            <div class="grow shrink basis-0 h-px bg-neutral-200" />
          </div>
          <!-- 手机号按钮 -->
          <div
            class="self-stretch h-12 px-4 py-3.5 bg-white rounded-[40px] border border-gray-200 justify-center items-center gap-2 inline-flex">
            <div class="text-zinc-900 text-sm font-normal leading-tight tracking-tight">请联系管理员注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue';

import { useRouter } from 'vue-router';
import { CheckCircleIcon, XMarkIcon,XCircleIcon } from '@heroicons/vue/20/solid'
// import { UserLogin } from "../api/index";
interface LoginInfo {
  username: string;
  password: string;
}
// 这里定义了一个响应式的对象 param，它有两个属性 username 和 password，它们的默认值分别为 'admin' 和 '123123'。这个对象会在组件中被用于双向绑定和表单验证。
const router = useRouter();
const param = reactive<LoginInfo>({
  username: '',
  password: ''
});
const loginStatus=ref()

const rememberPassword = ref(false);
onMounted(() => {
  const remember = localStorage.getItem('rememberPassword');
  rememberPassword.value = remember === 'true';
});

const submitForm = () => {
  if (param.username === 'root' && param.password === '123456') {
    loginStatus.value = 'success';
    localStorage.setItem('username', param.username);

    console.log(rememberPassword.value)
    if (rememberPassword.value) {

      localStorage.setItem('password', param.password);
      localStorage.setItem('rememberPassword', JSON.stringify(rememberPassword.value));
    } else {
      localStorage.removeItem('password');
    }
    router.push({ name: "HomeView" });
  }
  else{
    loginStatus.value = 'failure';
    param.password = '';
    // 登录失败后5秒后，loginStatus设置为空
    setTimeout(() => {
      loginStatus.value = '';
    }, 3000);
  }
}
// 当组件加载时，检查localStorage中是否有用户名和密码，如果有则自动填充
onMounted(() => {

  const remember = localStorage.getItem('rememberPassword');
  rememberPassword.value = remember ? JSON.parse(remember) : false;
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');


  if (remember && storedUsername && storedPassword) {
    // 只有当复选框被选中时，才自动填充密码
    param.username = storedUsername;
    param.password = storedPassword;
  }
});

// 关闭弹窗的函数
const close = () => {
  console.log(loginStatus.value);
  loginStatus.value = '';
}


</script>

<style ></style>

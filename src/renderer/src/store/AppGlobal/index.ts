import { defineStore } from 'pinia'
// import { useRoute } from 'vue-router'

// 给开发人员使用的debug
// const debug = false
//
// const route = useRoute()

interface AppGlobal {
  pageChance: number
}
const state = (): AppGlobal => {
  return {
    // 分页选择项
    pageChance: 0
  }
}

/**
 * 提供可视窗口的公共状态
 */
export const useAppGlobal = defineStore('AppGlobal', {
  state,
  actions: {
    updatePageChance(newpageChance: number) {
      this.pageChance = newpageChance
    }
  }
})

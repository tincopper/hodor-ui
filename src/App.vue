

<template>
  <router-view id="app" @login="loginDirect"></router-view>
</template>

<script>

import { defineComponent, ref, watch } from 'vue'
import { session } from '@/assets/util.js'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'app',
  setup () {
    const router = useRouter();
    const newPath = ref('');
    const loginDirect = (newPath) => {
      let userInfo = session('userInfo')
      if (userInfo && userInfo != '') {
        console.log('tag', newPath)
      } else {
        router.replace('/login')
      }
    }
    watch(
      () => router,
      (newValue, oldValue) => {
        newPath.value = newValue.currentRoute.value;
      },
      { immediate: true }
    );
    // setup相当于created  直接调用即可
    loginDirect(newPath.value);
    return {
      loginDirect
    }
  }

})
</script>

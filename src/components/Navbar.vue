<script setup>
    import logo from '@/assets/logo.png'
    import {RouterLink, useRoute} from 'vue-router'

    const isActive=(path)=>{
      const router=useRoute()
      return path === router.path
    }
</script>

<template>
      <nav class="bg-green-700 border-b border-green-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <a class="flex flex-shrink-0 items-center mr-4" href="/">
              <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Jobs</span
              >
            </a>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                to="/"
                  :class="[isActive('/')?'bg-green-900':'hover:bg-green-900 ','text-white','rounded-md','px-3','py-2']"
                >Home</RouterLink>
                  
                <RouterLink
                to="/jobs"
                :class="[isActive('/jobs')?'bg-green-900':'hover:bg-green-900 ','text-white','rounded-md','px-3','py-2']"
                >Jobs</RouterLink>  
                <RouterLink
                  to="/add-job"
                  :class="[isActive('/add-job')?'bg-green-900':'hover:bg-green-900 ','text-white','rounded-md','px-3','py-2']"
                 >Add Job</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
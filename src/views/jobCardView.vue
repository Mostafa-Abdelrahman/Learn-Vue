<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import {onMounted,reactive} from 'vue';
import axios from 'axios';
import router from '@/router';
import {useRoute,RouterLink} from 'vue-router';

const route=useRoute()
const jobID=route.params.id
const state=reactive({
  job:{},
  isLoading:true
})

onMounted(async()=>{
  try{
    const response=await axios.get(`/api/jobs/${jobID}`)
    state.job=response.data
  }catch(error){
    console.log("error fetching job data",error)
  }finally{
    state.isLoading=false
  }
})

const handleDelete=async()=>{
  try{
    await axios.delete(`/api/jobs/${jobID}`)
    router.push('/jobs')
  }catch(error){
    console.log("error deleting job",error)
  }
}
</script>

<template>
    <!-- Go Back -->
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/jobs"
          class="text-green-500 hover:text-green-600 flex items-center"
        >
          <i class="pi pi-arrow-left mr-2"></i> Back to The Job List
        </RouterLink>
      </div>
    </section>

    <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
      <PulseLoader color="gray" />
    </div>

    <section v-else class="bg-green-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
          <main class="col-span-2">
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
              <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <p class="text-orange-700">{{ state.job.location }}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
               {{ state.job.description }}
              </p>

              <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{state.job.salary}} / Year</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside class="col-span-1">
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{ state.job.company.name }}</h2>

              <p class="my-2">
                {{ state.job.company.description }}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">
                {{ state.job.company.contactEmail }}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/edit-job/${state.job.id}`"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</RouterLink>
              <button @click="handleDelete"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

</template>
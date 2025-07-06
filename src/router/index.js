import {createRouter,createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import AddJobView from '@/views/AddJobView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobCardView from '@/views/jobCardView.vue'
import EditJobView from '@/views/EditJobView.vue'
console.log("fuck")
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/add-job',
            name:'add-job',
            component:AddJobView
        },
        {
            path:'/jobs/:id',
            name:'job-card',
            component:JobCardView
        },
        {
            path:'/edit-job/:id',
            name:'edit-job',
            component:EditJobView
        },
        {
            path:'/:catchAll(.*)*',
            name:'not-found',
            component:NotFoundView
        }
    ]
})

export default router
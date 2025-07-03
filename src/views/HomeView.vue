<script setup>
import Hero from '@/components/Hero.vue'
import HomeCard from '@/components/HomeCard.vue'
import JobList from '@/components/JobList.vue'
</script>

<template>
    <Hero title="Welcome To a Dev Jobs" description="Find the  job that fits your skills and needs"/>
    <HomeCard />
     <JobList :limit="3" :showMore="true"/>
</template>
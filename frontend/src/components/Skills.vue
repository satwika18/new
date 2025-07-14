<script setup>
import SectionTitle from './SectionTitle.vue'

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Pemula' },
  { name: 'Tailwind CSS', level: 'Pemula' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Pemula' },
  { name: 'PostgreSQL', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Pemula' },
]
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center
          hover:shadow-xl hover:scale-105 hover:border-blue-400 transition-all duration-300"
        >
          <!-- Icon dihapus -->
          <h3 class="text-lg font-semibold text-gray-800">{{ skill.name }}</h3>
          <p
            class="text-sm mt-1"
            :class="{
              'text-green-600 font-medium': skill.level === 'Mahir',
              'text-yellow-600': skill.level === 'Menengah',
              'text-blue-500': skill.level === 'Pemula'
            }"
          >
            {{ skill.level }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-6xl font-bold text-gray-600 mb-4 animate-slide-in-left" :style="{ 'animation-delay': '200ms' }">
        Halo, Saya <span class="text-red-600">Putu Satwika Dewi Adnyani</span>
      </h1>
      <p class="text-2xl text-gray-600 mb-8 animate-slide-in-left" :style="{ 'animation-delay': '400ms' }">
        Mahasiswa Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
      </p>
      <a href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left"
        :style="{ 'animation-delay': '600ms' }">
        Hubungi Saya
      </a>
    </div>
    <div class="md:w-1/2 flex justify-center md:justify-end animate-slide-in-right">
      <img src="../assets/image/FotoProfil1.jpg"
        alt="Foto Profil"
        class="w-96 h-96 rounded-full object-cover shadow-lg md:ml-12">
    </div>
  </section>
</template>

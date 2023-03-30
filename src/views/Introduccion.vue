<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-8
        p Estimado aprendiz, en este recurso educativo sobre la estructura comercial turística se presenta el significado de un portafolio y su importancia, además, se detallan sus componentes, estructura y las técnicas a considerar para su correcta interpretación. También se describe en qué consiste la comercialización del portafolio turístico, incluyendo los procesos, técnicas y actividades relacionadas con la gestión de servicios turísticos. Con la revisión de este componente el aprendiz aprenderá sobre la necesidad de lograr una comunicación asertiva, dada la importancia que esta contempla en la estructura comercial y su incidencia en la gestión de mercados de productos y servicios turísticos.
        p En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. #[b ¡Muchos éxitos en este proceso de aprendizaje!]
      
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5elBqaEJMQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

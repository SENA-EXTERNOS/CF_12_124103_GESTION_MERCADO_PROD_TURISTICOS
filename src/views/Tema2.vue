<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comercialización del portafolio turístico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mt-3 La comercialización de los portafolios turísticos es la razón fundamental por la que estos son creados, ya que representa la venta o salida de los diferentes productos y servicios ofertados dentro del portafolio. Este proceso de comercialización se encarga de la distribución del producto o servicio mediante procesos comerciales que son determinados desde la gestión de productos. 

        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Es fundamental recordar que la comercialización de portafolios turísticos es un proceso que tiene como finalidad entregar los productos y servicios ofrecidos al cliente (turista); dependiendo de la clase de servicios o el tipo de producto, se puede realizar un tipo particular de desplazamiento, desde el lugar en el cual son producidos hasta el lugar en donde se encuentra el contratante del servicio, esto con el propósito de que sea entregado de manera eficaz. 

      .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img1.svg", alt="alt").img400.m-auto

    .row.mt-5
      p En los procesos de comercialización se hace necesario identificar los canales de distribución, que pueden determinar el nivel que se puede alcanzar a la hora de efectuar dicha distribución; estos canales y niveles pueden ser cambiantes, dependiendo de los productos y servicios ofrecidos dentro del portafolio.

      p Los canales de distribución se generan dependiendo de las necesidades del portafolio de servicios, pero por lo general se pueden clasificar así:

      p #[b Ejemplo de canales de distribución]

    .row.justify-content-center.align-items-center.mb-5.mt-3
      .col-lg-8
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="10%" y="0%" numero="1")
            .h5.mb-2 Canales directos
            p También son considerados como marketing directo. Estos se fundamentan en que los productores o proveedores de productos y servicios se encargan directamente de la venta con el cliente o turista que lo necesite. Por lo general, esto se evidencia en los servicios turísticos básicos, tales como el de la alimentación, el alojamiento y el transporte.

          .tarjeta.color-acento-botones.p-3(x="15%" y="50%" numero="2")
            .h5.mb-2 Canales cortos
            p Estos, a diferencia de los canales directos, cuentan con un máximo de dos intermediarios para la comercialización, desde el productor o proveedor de productos y servicios hasta el cliente o turista que los necesite. Como esto lo indica, por lo general puede existir un productor o proveedor, o bien un mayorista o minorista, que serían los intermediarios en un intercambio donde el consumidor final es el turista.

          .tarjeta.color-acento-botones.p-3(x="90%" y="5%" numero="3")
            .h5.mb-2 Canales largos
            p Estos también son conocidos como canales completos y complejos, ya que cuentan con más de dos intermediarios para la comercialización de sus productos y servicios.


    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Procesos      
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img3.svg", alt="alt")

      .col-lg-8
        p.mt-3 A continuación, se detallan los procesos de comercialización y los tipos de estrategias que se pueden estructurar para lograr una distribución de productos según su naturaleza y enfoque de entrega.

    .row.mt-5
      p Los procesos mediante los cuales se lleva a cabo la comercialización de un portafolio de servicios turísticos hacen referencia al conjunto de técnicas ideales para el desarrollo comercial de los portafolios de servicio. Se componen de las fases mediante las que se desarrollará el proceso de venta y entrega final de los servicios y productos incluidos en el portafolio para el turista.


    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Procesos de comercialización")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img4.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Los procesos de comercialización son característicos y acordes a cada empresa u organización turística que se encargue de la distribución comercial de los servicios y productos que incluye el portafolio.    

      .py-3.py-md-4(titulo="Estrategias selectivas")
        .row
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img5.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Para la generación de estrategias de distribución se debe tener en cuenta la intensidad que se pretenda, como también el grado de cobertura que se intente acaparar; también es necesario identificar un mercado objetivo que pueda cumplir con los niveles de la estrategia de distribución. 


    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            


    separador

    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Técnicas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img6.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la siguiente infografía se explica en qué consisten las diferentes técnicas para la comercialización de servicios turísticos, al igual que se establecen los pasos a seguir para lograr los objetivos de las ventas de los portafolios.
        br
        br
        | Las técnicas para la comercialización de portafolios de servicios turísticos son el conjunto de habilidades y destrezas utilizadas para la gestión comercial de los mismos; puede establecer los pasos a seguir para lograr alcanzar y solventar los objetivos de las ventas de los portafolios, para lo cual se hace necesario establecer y cumplir algunos de los siguientes lineamientos.

    .row.mt-5
      p Aspectos por considerar para el logro de los objetivos de las ventas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img7.svg", alt="alt")

    separador

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.3 Gestión de servicios turísticos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Cuando se habla de la gestión de productos turísticos, es correcto relacionarla como una función organizacional, la cual le permite a los prestadores y planificadores turísticos determinar las etapas y las clases de servicios que se tendrán en cuenta dentro de un portafolio de servicios turísticos. En esta gestión se puede determinar tanto el desarrollo de productos, actividades y servicios, como también la fijación y estandarización de precios, teniendo como punto de partida los productos y los clientes potenciales, con el propósito de generar un portafolio de servicio adecuado. 

        p La gestión de productos turísticos se puede determinar como un proceso de estandarización en los diferentes productos y servicios ofrecidos en la industria turística, cuya finalidad está basada en las ventas puntuales de los productos de las organizaciones turísticas. 
        
      .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img8.svg", alt="alt")   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para realizar la gestión de productos turísticos con éxito, se deben considerar los siguientes aspectos:

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Gestión de productos turísticos]  

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="13%" y="0%" numero="1")
            .h5.mb-2 Identificar los problemas 
            p Identificar los problemas o dificultades que puedan llegar a tener las personas, y convertirlos en oportunidades y estrategias que la organización turística o el portafolio de servicios turísticos pueda suplir.

          .tarjeta.color-acento-botones.p-3(x="38%" y="0%" numero="2")
            .h5.mb-2 Justificar la inversión
            p Se debe justificar la inversión a realizar en productos, servicios o portafolios; allí se debe demostrar por qué se haría la inversión económica, teniendo en cuenta la capacidad de dirección.

          .tarjeta.color-acento-botones.p-3(x="62%" y="0%" numero="3")
            .h5.mb-2 Investigación de mercados
            p Se debe realizar una investigación de mercados para indagar sobre la necesidad, ya que la idea o plan de negocio debe procurar un bien común.

          .tarjeta.color-acento-botones.p-3(x="86%" y="0%" numero="4")
            .h5.mb-2 Producto o portafolio 
            p El producto o portafolio de servicio debe ser afín a sus tiempos, por lo que tiene que estar actualizándose constantemente debido a que las necesidades también van cambiando y evolucionando.

            

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

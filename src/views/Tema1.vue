<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Portafolio de servicios

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las creaciones de portafolios de servicios turísticos abarcan una amplia serie de lineamientos necesarios para brindar u ofrecer buenos productos turísticos; estos portafolios son creados con la necesidad de dar a conocer, de manera específica, una organización o empresa turística y los servicios que puede llegar a aportar a las diferentes personas que adquieran el portafolio de servicios, o que simplemente se encuentren interesadas en conocer un poco más a la empresa u organización. 

    .tarjeta.tarjeta--azul.p-4.mt-5.bgr1-tema1
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Portafolio de servicios]
            p p Un portafolio de servicios es un documento, archivo, carpeta o página web que se encuentra contemplado para dar información básica y específica sobre los servicios que son ofrecidos por la empresa turística. Este cuenta con diferentes lineamientos que son establecidos previamente por la organización, al igual que los servicios que pretenden brindar mediante el portafolio. 
      

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Estrategia comercial ]
            p Esta estrategia comercial puede garantizar al cliente la confiabilidad de sus servicios, y puede ser determinante al momento de tomar una decisión.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Documentos como herramientas]
            p Los portafolios de servicios no solo son utilizados por grandes empresas u organizaciones turísticas, pues estos también son elaborados por prestadores de servicio o personas naturales que brindan servicios dentro del entorno turístico. Un ejemplo de estos son los intérpretes ambientales y culturales, quienes pueden utilizar estos documentos como herramienta para ofrecer y brindar su servicio.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p #[b Entidades públicas]
            p Las entidades públicas o gubernamentales, como el Ministerio de Comercio, Industria y Turismo, también utilizan portafolios de servicio para la organización del gremio.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Componentes

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen').banner-principal-decorativo-5

      .col-lg-8
        p.mt-5 La función principal de los portafolios de servicio es servir como carta de presentación, ya sea de una empresa, organización o persona natural que pretende dar a conocer todos sus servicios a clientes potenciales, proveedores, socios y posibles socios. 

    .row.mt-5
      p Dependiendo del enfoque de los servicios ofertados por el ente turístico, se hace necesario definir e identificar elementos o componentes que actúen a favor del planificador turístico, es decir, la persona encargada de planear y realizar estos portafolios de servicios, quien tiene la libertad de agregar los componentes que considere necesarios para la ejecución del portafolio. Algunos de estos componentes son:

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Componentes de un portafolio]   

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Fecha")
              .col-12
                p.mb-0 Este elemento, como su nombre lo indica, tiene la funcionalidad de añadir la fecha al portafolio de servicios, que puede ser la fecha en la que el portafolio fue publicado, la fecha de actualización del portafolio o una fecha estándar predeterminada. En la estructura de portafolios de servicios digitales esta fecha puede ser actualizada diariamente, mientras que en los portafolios de servicios físicos no es muy utilizado este elemento debido a su constante desactualización.

            .row(titulo="Nombre")
              .col-12
                p.mb-0 En este elemento se ubica el nombre de la empresa, al igual que su razón social y eslogan publicitario; en caso de que se trate del portafolio de servicios de una persona, se debe colocar su nombre completo, su profesión y profundizar sobre qué se especializa.

            .row(titulo="Objetivos")
              .col-12
                p.mb-0 En este componente se plantean los objetivos generales y específicos de la empresa, organización o individuo, los cuales ya han sido desarrollados con anterioridad para la conformación de la empresa o para el posicionamiento del nombre de una persona como marca personal.

            .row(titulo="Historia ")
              .col-12
                p.mb-0 Este elemento es utilizado mayormente por empresas u organizaciones turísticas de renombre, pues ya tienen un buen posicionamiento en el mercado y cuentan con antecedentes históricos con relación a los servicios brindados. La historia también es utilizada en caso de que se haya cambiado el nombre de la organización, marca o la razón social.

            .row(titulo="Misión")
              .col-12
                p.mb-0 Esta determina el propósito de la empresa o de la persona que ofrece los productos y servicios turísticos, que serán plasmados dentro del portafolio de servicios para que las personas que lo miren tengan un referente de la empresa o persona de la que desean adquirir los servicios.

            .row(titulo="Visión")
              .col-12
                p.mb-0 Este elemento define lo que pretende alcanzar la organización o persona que realice el portafolio; por lo general, se relaciona con la misión de la organización y trata de sintetizar de forma clara y concisa los objetivos de la empresa.

        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img7.png", alt="alt").img400.m-auto


    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img8.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Certificaciones")
              .col-12
                p.mb-0 Este es uno de los componentes que más resaltan y muestran las personas y las empresas turísticas que tienen certificaciones de calidad o certificaciones con relación a otros aspectos, lo cual cumple con aspectos diferenciadores con respecto a otras empresas que adquieren valor al momento de elegir un portafolio.

            .row(titulo="Proveedores")
              .col-12
                p.mb-0 Este elemento es utilizado para demostrar la calidad de los productos o servicios ofrecidos; con esto se le garantiza al cliente definir las principales características y cualidades de la organización turística.

            .row(titulo="Sociedades")
              .col-12
                p.mb-0 Existe una gran cantidad de empresas turísticas que no cuentan con la solvencia económica para llevar a cabo una organización, también existe la posibilidad de que no cuenten con los contactos y proveedores suficientes, y es allí donde aparecen las sociedades estratégicas, con el fin de generar confianza y demostrar las asociaciones con las que cuenta la organización dentro del portafolio. Por lo general, las alianzas se desarrollan con personas y organizaciones con gran experiencia en el sector, las cuales puedan brindar confianza al momento de adquirir un portafolio de servicios.

            .row(titulo="Clientes")
              .col-12
                p.mb-0 Estos juegan un papel fundamental para muchas empresas y organizaciones, debido a que demuestran la trayectoria que tiene la empresa en el gremio turístico, aportando credibilidad y experiencia; una buena parte de las organizaciones turísticas aprovechan este elemento para exponer a los clientes importantes de su empresa, normalmente marcas reconocidas, famosos y celebridades, para con ello atraer a otro tipo de público.

            .row(titulo="Servicios")
              .col-12
                p.mb-0 Es el elemento principal de un portafolio, el cual se debe incluir en las diferentes estructuras existentes en los portafolios de servicios turísticos. En esta sección se muestran los servicios que se pretende brindar a las personas que contacten la organización, permitiendo que se ofrezcan o brinden servicios propios de la empresa o de los socios con los que se tenga una especie de outsourcing (tercerización de servicios para evitar gastos y responsabilidades directas con la empresa).

            .row(titulo="Proyectos")
              .col-12
                p.mb-0 Los portafolios de servicio pueden tener la particularidad de presentar proyectos o características relacionadas con ellos, los cuales se pueden presentar como un elemento más del portafolio, como también pueden ser el elemento central de la organización, y por ende del portafolio.


    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Estructura

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p Teniendo en cuenta que el turismo se puede denominar como un sistema complejo, de acuerdo a la teoría general de los sistemas, es posible vislumbrar que se encuentra conformado por un conjunto de infinitos componentes y conceptos que confluyen en una elaborada práctica dentro del área del servicio, la recreación y el entretenimiento.
        
        p.mt-3 Así mismo, es posible definir la compleja estructura del portafolio turístico, la cual se puede denominar como el sistema que abarca los elementos o componentes necesarios del portafolio de servicios, que ya han sido mencionados. Ahora bien, la estructura con la que se plantea un portafolio de servicios turísticos se define dependiendo de las necesidades de cada persona u organización turística, considerando también los diferentes tipos de portafolios de servicios, como lo son:

      .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img9.png", alt="alt").img400.m-auto

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Portafolios físicos]  

      p Como su nombre lo indica, son todos aquellos portafolios que se encuentran estructurados por medios físicos, es decir, que pueden ser vistos y palpados por los interesados. En la actualidad, estos son desarrollados por medio de herramientas tecnológicas, las cuales facilitan la elaboración y configuración de los diseños, que luego son impresos para su comercialización. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Al momento de la impresión se trata de abarcar la información precisa y concisa acerca de los elementos a incluir, la cual será presentada de manera tríptica (documento que se divide en tres partes) o díptica (documentos que se divide en dos partes) para captar la atención de la persona que lo adquiera. 

        p Otra forma de desarrollar los portafolios de servicios físicos es mediante manuales publicitarios, en donde se muestran detalladamente todos y cada uno de sus componentes.

    .row.mt-3
      ul.lista-ul--color
        li 
          i.fas.fa-square
          p.mb-0 #[b Portafolios digitales]  

      p Los portafolios de servicios digitales emplean las páginas web como portafolio de servicio, las cuales ofertan de manera actualizada sus productos, proyectos y servicios.

      p #[b Ejemplo de portafolios digitales]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt")

    .row.mt-3
      p Al igual que los demás portafolios, se encuentran diseñados con herramientas tecnológicas, pero a diferencia de los portafolios físicos, estos no son impresos de manera física, pues se restringen a los medios digitales y tecnológicos, como computadores, celulares, tabletas y demás dispositivos electrónicos, mediante herramientas y aplicativos digitales utilizados por los desarrolladores y programadores de sistemas.

    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Técnicas de interpretación y manejo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt")

      .col-lg-8
        p.mt-3 Los portafolios de servicios muestran información de productos y servicios para un público en particular; en el turismo estos portafolios cumplen una función importante porque dan a conocer los datos que el turista o viajero debe conocer de primera mano sobre el lugar a visitar, además de los servicios que este ofrece.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
           p La mayoría de los portafolios de servicios deben permitir una correcta interpretación para la persona que lo requiera; esta interpretación le facilita al gestor o planificador determinar el enfoque que se debe tener con relación al turista en particular.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p #[b Ejemplo de ficha técnica]
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt")    


    .row.mt-3
      p El #[b diseñador del portafolio de servicios] tiene la labor de diseñar técnicas para la correcta interpretación de sus servicios o de sus productos, estas técnicas pueden centrarse en realizar, de manera dinámica, fichas técnicas que le permitan al lector del portafolio el fácil procesamiento de la información. Dichas fichas técnicas deben contener elementos similares a los de un portafolio tradicional, como por ejemplo la información sobre la organización, requerimientos, datos estadísticos (en caso de ser necesarios), precios y especificaciones sobre los productos y servicios. 

      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

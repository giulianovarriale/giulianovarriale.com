<template>
  <Layout class="container mx-auto mt-10 lg:mt-20 px-4 lg:px-32">
    <div class="flex items-center">
      <img
        src="@/assets/profile.jpg"
        alt="Foto de Giuliano Varriale"
        class="w-32 md:w-auto"
      >

      <h1 class="font-bold text-lg md:text-2xl lg:text-3xl pl-4 lg:pl-10">
        Hi, I’m Giuliano Varriale, 30 years old, front-end developer
      </h1>
    </div>

    <ul class="list-reset my-10 lg:my-20 mx-10 lg:mx-20">
      <li class="mb-4">
        <a href="https://github.com/giulianovarriale" target="_blank" class="font-bold">
          github.com/giulianovarriale
        </a>
      </li>

      <li class="mb-4">
        <a href="https://linkedin.com/in/giuliano-varriale-33983571/" class="font-bold">
          linkedin.com/in/giuliano-varriale-33983571
        </a>
      </li>

      <li class="mb-4">
        <a href="mailto:giuliano.oca@gmail.com" class="font-bold">
          giuliano.oca@gmail.com
        </a>
      </li>
    </ul>

    <div class="text-grey-darker leading-loose index-about">
      <p class="mb-5">
        I started to work with the internet as a web designer, designing and developing websites for
        digital agencies. During this time, I have learned the frontend development foundations like
        HTML and CSS and a little bit of javascript - mostly, jQuery plugins initializations.

        The main challenges in this time were related to the layouts and its creative navigations and
        interactions, since agencies love creating innovative user experiences.
      </p>

      <p class="mb-5">
        As time went by, the web became more dynamic and interactive. In order to build a better user
        experience, things like route handling, views rendering and business logic became frontend
        responsibilities, all of it, provided by javascript and its hundreds frameworks and libraries.
        Besides that, nodejs came out, bringing with it, an entire new ecosystem with amazing tools.
      </p>

      <p class="mb-5">
        I really wanted to work with this new whole environment, so I decided to look for a new job
        where I could use it in my daily basis. I started to work for a software boutique company
        called Codeminer where I have learned software design concepts, best practices and, of course,
        javascript. There, I also had my first experience working in a large code base, which turned
        completely my thoughts about how to build an web application.
      </p>

      <p class="mb-5">
        Since then, I’ve been learning everyday, developing and improving features for known companies
        such as
        <a target="_blank" href="https://www.leroymerlin.com.br/">Leroy Merlin</a>,
        <a target="_blank" href="https://www.enjoei.com.br/">Enjoei</a> and
        <a target="_blank" href="https://www.consultaremedios.com.br/">Consulta Remédios</a>,
        which is the company I currently work for remotely.
      </p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Giuliano Varriale',
    titleTemplate: '%s'
  }
}
</script>

<style scoped>
  @media (min-width: 768px) {
    .index-about {
      column-count: 2;
      column-gap: 60px;
    }
  }

  @media (min-width: 992px) {
    .index-about {
      column-gap: 90px;
    }
  }
</style>

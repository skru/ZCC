<template>
  <div id="app" class="container">

    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item logo-brand" >
          <img src="./assets/img/logo.png">
        </router-link>
        </a>
      </div>
    </nav>

    <router-view/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Copyright 2020 all rights reserved
        </p>
      </div>
    </footer>

  </div>
</template>

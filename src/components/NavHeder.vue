<template>  
  <header class="header_section bg">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <!-- <a class="navbar-brand" href="index.html"> -->
        <router-link class="navbar-brand" to="/">
          <span>
            Finexo
          </span>
        </router-link>
        <!-- </a> -->

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <!-- <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> -->
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about' }">
              <!-- <a class="nav-link" href="about.html"> About</a> -->
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/service' }">
              <!-- <a class="nav-link" href="service.html">Services</a> -->
              <router-link class="nav-link" to="/service">Services</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/why-us' }">
              <!-- <a class="nav-link" href="why.html">Why Us</a> -->
              <router-link class="nav-link" to="/why-us">Why Us</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/team' }">
              <!-- <a class="nav-link" href="team.html">Team</a> -->
              <router-link class="nav-link" to="/team">Team</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
            </li>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scope>
  .bg{
    background-color: #1c126d;
  }
</style>

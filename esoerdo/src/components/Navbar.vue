<script setup>
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top modern-navbar">
      <div class="container-fluid">

        <router-link to="/" class="navbar-brand d-flex align-items-center justify-content-center" href="#">
          <img class="logo" src="../assets/mainpage/leaf.png" alt="logo" title="logo" />
          <span class="brand-text bebas-neue-regular" aria-current="page">Esőerdő</span>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex align-items-center bebas-neue-regular">
            <li class="nav-item">
              <a class="nav-link" href="#">Map</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Plants&Animals</a>
            </li>
            <li class="nav-item">
              <router-link to="/quiz" class="nav-link" href="#">Quiz</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tips</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>

  <main>
  </main>

  <footer>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&display=swap');

.brand-text {
  text-transform: uppercase;
}

.modern-navbar {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(50px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  transition: background-color 0.3s ease;
  padding: 6px;
  z-index: 1050;
}

.modern-navbar .logo {
  height: 36px;
  margin-right: 12px;
  filter: drop-shadow(0 0 3px #27ae60);
  transition: transform 0.3s ease;
}

.modern-navbar .logo:hover {
  transform: scale(1.5) rotate(5deg);
}

.modern-navbar .nav-link {
  color: #537c57;
  font-weight: 600;
  margin: 0 0.8rem;
  position: relative;
  transition: color 0.3s ease;
  font-size: 25px;
}

.modern-navbar .nav-link::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #0b3b1f;
    transition: width 0.3s ease;
}

.modern-navbar .nav-link:hover,
.modern-navbar .nav-link.active {
  color: #000000;
}

.modern-navbar .nav-link:hover::after,
.modern-navbar .nav-link.active::after {
  width: 100%;
}

main {
  background-color: #efefef;
}

.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-size: 50px;
}

@media (max-width: 768px) {
  .modern-navbar .logo {
    height: 30px;
  }

  .bebas-neue-regular {
    font-size: 30px;
  }

  .modern-navbar .nav-link {
    font-size: 18px;
    margin: 0 0.5rem;
  }
}

@media (min-width: 768px) {
  .modern-navbar .logo {
    height: 50px;
  }

  .bebas-neue-regular {
    font-size: 45px;
  }
}

</style>

<script setup>



</script>

<template>
  <header>
  </header>
  <main>
  </main>
  <footer class="modern-footer text-light py-5">
  <div class="container">
    <div class="row gy-4">
      
      <!-- Márka + leírás -->
      <div class="col-md-4">
        <h4 class="footer-brand mb-3">
          <img src="../assets/mainpage/leaf.png" alt="logo" class="footer-logo" />
          Esőerdő
        </h4>
        <p>A symbol of our commitment to sustainability and nature conservation.</p>
      </div>

      <!-- Gyors linkek -->
      <div class="col-md-4">
        <h5>Gyors linkek</h5>
        <ul class="list-unstyled footer-links">
          <li><a href="#">Map</a></li>
          <li><a href="#">Plants&Animals</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">Tips</a></li>
        </ul>
      </div>

      <!-- Közösségi média -->
      <div class="col-md-4">
        <h5>Kövesd minket</h5>
        <div class="social-icons mt-3">
          <a href="#" aria-label="Facebook" class="me-3"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="Twitter" class="me-3"><i class="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="Instagram" class="me-3"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="LinkedIn" class="me-3"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

    </div>
    
    <hr class="my-4" />
    <p class="text-center mb-0">&copy; 2025 Rainforest. All rights reserved.</p>
  </div>
</footer>


</template>

<style scoped>

/* Footer alapok */
.modern-footer {
  background: linear-gradient(135deg, #588157, #344e41);
  position: relative;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3);
}

/* Lábjegyzet márka */
.footer-brand {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.8rem;
  color: #27ae60;
  user-select: none;
}

.footer-logo {
  height: 36px;
  margin-right: 12px;
  filter: drop-shadow(0 0 3px #27ae60);
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: rotate(15deg) scale(1.1);
}

/* Gyors linkek */
.footer-links a {
  color: #b0b8bf;
  text-decoration: none;
  display: block;
  padding: 6px 0;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #27ae60;
}

/* Közösségi ikonok */
.social-icons a {
  color: #b0b8bf;
  font-size: 50px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #27ae60;
  transform: scale(1.2);
}

/* Vízszintes vonal */
.modern-footer hr {
  border-color: rgba(39, 174, 96, 0.3);
}


</style>

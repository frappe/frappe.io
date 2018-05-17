<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
            <img class="brand-logo mr-2" src="/img/frappe-logo-white.svg" alt="Frappe Logo">
            <span class="brand-name">Frappe</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/team">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">GitHub</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<style scoped>
.brand-logo {
    max-height: 1.5rem;
}
</style>

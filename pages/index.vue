<template>
  <section class="container">
    <frappe-hero>
      <h1>Framework + Apps</h1>
      <p class="lead text-muted">Frappe is a software engineering company that builds open source<br> frameworks, applications and libraries.</p>
    </frappe-hero>

    <div class="projects mb-5">
      <div class="card-deck">
        <project-card
          title="ERPNext"
          body="Open Source ERP built for the web"
          :badges="['App', 'Python', 'JS']"
          href="https://erpnext.com"
        />
        <project-card
          title="Frappe"
          body="A superhero web framework"
          :badges="['Framework', 'Python', 'JS']"
          href="/docs/frappe"
        />
        <project-card
          title="Bench"
          body="Multi-tenant platform to install and manage Frappe / ERPNext"
          :badges="['CLI', 'Python']"
          href="https://frappe.io"
        />
      </div>
      <div class="card-deck">
        <project-card
          title="Gantt"
          body="A simple, modern and interactive gantt chart for the web"
          :badges="['Library', 'JS']"
          href="https://erpnext.com"
        />
        <project-card
          title="Charts"
          body="GitHub-inspired simple and modern SVG charts for the web with zero dependencies."
          :badges="['Library', 'JS']"
          href="https://frappe.io"
        />
        <project-card
          title="Datatable"
          body="A simple, modern and interactive datatable for the web"
          :badges="['Library', 'JS']"
          href="/docs/datatable"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FrappeHero from "~/components/Hero.vue";
import ProjectCard from "~/components/ProjectCard.vue";

export default {
    components: {
        FrappeHero,
        ProjectCard
    }
};
</script>

<style lang="scss">
.projects .card {
  margin-bottom: 2rem;
}
</style>

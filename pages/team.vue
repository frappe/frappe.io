<template>
  <section class="container">
    <frappe-hero>
        <h4>We love to build things and break them apart, and build them again.</h4>
        <p class="lead text-muted">Established in 2008, Frappe is an internet company based out of Mumbai, India.<br>Its flagship product ERPNext is an award-winning ERP loved by businesses worldwide.</p>
        <p>
          <button class="btn btn-dark btn-sm mt-4">Read the full story</button>
        </p>
        <p>
          <a class="text-muted" href="inspiration">What Inspires Us?</a>
          <br>
          <a  class="text-muted" href="blog">Blog</a>
        </p>
    </frappe-hero>
    <hr>
    <section class="my-5 d-flex justify-content-between flex-wrap">
      <team-person fullname="Rushabh Mehta" image-link="/img/team/rushabh.jpg" position="Founder and CEO" social="rushabh_mehta"/>
      <team-person fullname="Nabin Hait" image-link="/img/team/nabin.jpg" position="Chief Operations Officer" social="nabinhait"/>
      <team-person fullname="Umair Sayed" image-link="/img/team/umair.jpg" position="Chief Customer Officer" social="umairsTWT"/>
      <team-person fullname="Prakash Hodage" image-link="/img/team/prakash.jpg" position="Admin and Accounts" social="phodage"/>
      <team-person fullname="Saurabh Palande" image-link="/img/team/saurabh.jpg" position="Developer" social="saurabh6790"/>
      <team-person fullname="Rohit Waghchaure" image-link="/img/team/rohit.jpg" position="Developer" social="rohitw1991"/>
      <team-person fullname="Faris Ansari" image-link="/img/team/faris.jpg" position="Developer" social="netchampfaris"/>
      <team-person fullname="Prateeksha Singh" image-link="/img/team/prateeksha.jpg" position="Developer" social="pratu16x7"/>
      <team-person fullname="Manas Solanki" image-link="/img/team/manas.jpg" position="Developer" social="manas"/>
      <team-person fullname="Shreya Shah" image-link="/img/team/shreya.jpg" position="Developer" social="shreya"/>
      <team-person fullname="Zarrar Shaikh" image-link="/img/team/zarrar.jpg" position="Developer" social="zarrar"/>
      <team-person fullname="Ameya Shenoy" image-link="/img/team/ameya.jpg" position="Developer" social="ameya"/>
      <team-person fullname="Kenneth Sequiera" image-link="/img/team/kenneth.jpg" position="Marketing Engineer" social="kenneth"/>
      <team-person fullname="Suraj Shetty" image-link="/img/team/suraj.jpg" position="Developer" social="suraj"/>
      <team-person fullname="" image-link="" />
      <team-person fullname="" image-link="" />
    </section>
  </section>
</template>

<script>
import FrappeHero from '~/components/Hero.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import TeamPerson from '~/components/TeamPerson.vue'

export default {
    components: {
        FrappeHero,
        ProjectCard,
        TeamPerson
    }
}
</script>

<style lang="scss">
.team-person {
  margin-bottom: 3rem;
}
</style>

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
    <section class="py-5 my-5 d-flex justify-content-between flex-wrap">
      <person-card fullname="Rushabh Mehta" image-link="/img/team/rushabh.jpg" position="Founder and CEO" social="rushabh_mehta"/>
      <person-card fullname="Nabin Hait" image-link="/img/team/nabin.jpg" position="Chief Operations Officer" social="nabinhait"/>
      <person-card fullname="Umair Sayed" image-link="/img/team/umair.jpg" position="Chief Customer Officer" social="umairsTWT"/>
      <person-card fullname="Prakash Hodage" image-link="/img/team/prakash.jpg" position="Admin and Accounts" social="phodage"/>
      <person-card fullname="Saurabh Palande" image-link="/img/team/saurabh.jpg" position="Developer" social="saurabh6790"/>
      <person-card fullname="Rohit Waghchaure" image-link="/img/team/rohit.jpg" position="Developer" social="rohitw1991"/>
      <person-card fullname="Faris Ansari" image-link="/img/team/faris.jpg" position="Developer" social="netchampfaris"/>
      <person-card fullname="Prateeksha Singh" image-link="/img/team/prateeksha.jpg" position="Developer" social="pratu16x7"/>
      <person-card fullname="Manas Solanki" image-link="/img/team/manas.jpg" position="Developer" social="manas"/>
      <person-card fullname="Shreya Shah" image-link="/img/team/shreya.jpg" position="Developer" social="shreya"/>
      <person-card fullname="Zarrar Shaikh" image-link="/img/team/zarrar.jpg" position="Developer" social="zarrar"/>
      <person-card fullname="Ameya Shenoy" image-link="/img/team/ameya.jpg" position="Developer" social="ameya"/>
      <person-card fullname="Kenneth Sequiera" image-link="/img/team/kenneth.jpg" position="Marketing Engineer" social="kenneth"/>
      <person-card fullname="Suraj Shetty" image-link="/img/team/suraj.jpg" position="Developer" social="suraj"/>
      <person-card fullname="" image-link="" />
      <person-card fullname="" image-link="" />
    </section>
    <hr>
    <frappe-hero>
      <h4>Join us in making awesome open source software for the world</h4>
      <p class="lead text-muted">
        At Frappe, we work like an open source community, except the fact that you get paid for it.<br>
        We have very high standards from our team and we strive to achieve them every year.<br>
        By Working at Frappe, we guarantee you will have an opportunity<br> to make a meaningful impact in the society.
      </p>
      <p><button class="btn btn-dark btn-sm mt-4">See Open Positions</button></p>
    </frappe-hero>
    <hr>
    <section class="row py-5 my-5">
      <div class="col-sm-6">
        <h4>Write to us</h4>
        <p>Have a question or comment? Write in, we would love to hear from you. We’ll write back as soon as we can.</p>
        <p class="input-label">Subject</p>
        <input class="form-control" type="text" name="subject">
        <p class="input-label">Your email</p>
        <input class="form-control" type="text" name="email">
        <p class="input-label">Message</p>
        <textarea class="form-control" name="message" style="height: 200px;"></textarea>
        <a href=# id="send" class="btn btn-dark btn-send form-control mt-4">Send</a>
      </div>
      <div class="mt-5 mt-sm-0 col-sm-6">
        <h4>Visit our office</h4>
        <p>D/324 Neelkanth Business Park,<br> Vidyavihar West,<br> Mumbai,<br> Maharashtra - 400086,<br> India</p>
        <p>Skype: <b>erpnext</b></p>
        <p>Phone: <a href="tel:080-339-23819">080-339-23819</a></p>
        <!-- <img class="frappe-hero mx-5 mt-5" src="/assets/frappe_theme/img/office-map.svg" class="office-map"> -->
        <h4 class="mt-5">Social</h4>
        <p>Twitter: <a href="https://twitter.com/erpnext" target="_blank"><b>@erpnext</b></a></p>
        <p>Medium: <a href="https://medium.com/frapp%C3%A9-thoughts" target="_blank"><b>Frappe Thoughts</b></a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/company/frappe-erpnext/" target="_blank"><b>Frappe Technologies Private Limited</b></a></p>
        <p>Facebook: <a href="https://www.facebook.com/ERPNext/" target="_blank"><b>facebook.com/ERPNext</b></a></p>
      </div>
    </section>
  </section>
</template>

<script>
import FrappeHero from '~/components/Hero.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import PersonCard from '~/components/PersonCard.vue'

export default {
    components: {
        FrappeHero,
        ProjectCard,
        PersonCard
    }
}
</script>

<style lang="scss">
.team-person:not(:nth-last-child(-n+4)) {
  margin-bottom: 3rem;
}
</style>

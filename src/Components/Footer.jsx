import React from 'react'

const Footer = () => {
  return (
  <> <footer>
  <div class="container footer__container">
    <div class="footer__1">
      <a href="index.html" class="footer__logo">
        <h4>AlgoSage</h4>
      </a>
      <p>
        Empowering Tomorrow's Tech, One Algorithm at a Time. © 2023
        Algosage. All rights reserved. | Privacy Policy | Terms of
        Service | Crafted with ❤️ in Code.{" "}
      </p>
    </div>

    <div class="footer__2">
      <h4>Permalinks</h4>
      <ul class="permalinks">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="courses.html">Courses</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>

    <div class="footer__3">
      <h4>Privacy</h4>
      <ul class="privacy">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Refund Policy</a>
        </li>
      </ul>
    </div>

    <div class="footer__4">
      <h4>Contact Us</h4>
      <div>
        <p>+91 9305366856</p>
        <p>dydevansh@gmail.com</p>
      </div>

      <ul class="footer__socials">
        <li>
          <a href="#">
            <i class="uil uil-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="uil uil-instagram-alt"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="uil uil-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer__copyright">
    <small>Copyright &copy; AlgoSage Software</small>
  </div>
</footer></>
  )
}

export default Footer
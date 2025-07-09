// Minimal, modern ezreports footer
const footerHTML = `
  <footer class="footer-modern" style="background: #101024; color: #fff; padding-top: 3.5rem; padding-bottom: 2rem;">
    <div class="container">
      <div class="row gy-5 align-items-start flex-wrap">
        <!-- Contact Block -->
        <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <div class="footer-contact-block mb-4">
            <div class="footer-contact-label mb-2">CONTACT US</div>
            <h2 class="footer-contact-title mb-4">Let’s Discuss Your Vision.<br>With Us</h2>
            <a href="contact.html" class="footer-cta-btn mb-3">Schedule a call now <span class="footer-cta-arrow">&rarr;</span></a>
            <div class="footer-contact-or mb-2">OR EMAIL US AT</div>
            <div class="footer-email-row">
              <span class="footer-email" id="footerEmail">support@ezreports.com</span>
              <button class="footer-copy-btn" aria-label="Copy email" onclick="navigator.clipboard.writeText('support@ezreports.com')"><i class="bi bi-clipboard"></i></button>
            </div>
          </div>
        </div>
        <!-- Links Block -->
        <div class="col-lg-7 col-md-6 d-flex flex-wrap justify-content-lg-end">
          <div class="footer-links-col me-5 mb-4 mb-md-0">
            <div class="footer-links-label">QUICK LINKS</div>
            <ul class="footer-links-list">
              <li><a href="index.html">Home</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-links-col">
            <div class="footer-links-label">INFORMATION</div>
            <ul class="footer-links-list">
              <li><a href="terms-and-services.html">Terms of Service</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="footer-divider my-4">
      <div class="footer-bottom-row d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div class="footer-copyright mb-2 mb-md-0">&copy; ezreports 2025. ALL RIGHTS RESERVED.</div>
        <div class="footer-socials">
          <a href="#" class="footer-social"><i class="bi bi-twitter"></i></a>
          <a href="#" class="footer-social"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="footer-social"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
    <style>
      .footer-modern { font-family: 'Inter', 'Poppins', Arial, sans-serif; font-size: 1.08rem; }
      .footer-contact-label, .footer-links-label { color: #a78bfa; font-size: 1rem; font-weight: 600; letter-spacing: 1px; margin-bottom: 0.5rem; }
      .footer-contact-title { font-size: 2.1rem; font-weight: 700; color: #fff; line-height: 1.15; }
      .footer-cta-btn { display: inline-block; background: #fff; color: #101024; font-weight: 600; border-radius: 2em; padding: 0.7em 2.2em; font-size: 1.1rem; text-decoration: none; box-shadow: 0 2px 12px #a78bfa22; transition: background 0.2s, color 0.2s; }
      .footer-cta-btn:hover, .footer-cta-btn:focus { background: #a78bfa; color: #fff; }
      .footer-cta-arrow { font-size: 1.2em; margin-left: 0.5em; }
      .footer-contact-or { color: #b6bed5; font-size: 0.98rem; font-weight: 500; margin-bottom: 0.5rem; }
      .footer-email-row { display: flex; align-items: center; background: #23233a; border-radius: 2em; padding: 0.5em 1.2em; width: fit-content; }
      .footer-email { color: #fff; font-size: 1.05rem; font-family: 'Inter', monospace; margin-right: 0.7em; }
      .footer-copy-btn { background: none; border: none; color: #a78bfa; font-size: 1.2em; cursor: pointer; padding: 0 0.2em; transition: color 0.2s; }
      .footer-copy-btn:hover, .footer-copy-btn:focus { color: #fff; }
      .footer-links-col { min-width: 150px; margin-right: 2.5rem; }
      .footer-links-list { list-style: none; padding: 0; margin: 0; }
      .footer-links-list li { margin-bottom: 0.7em; }
      .footer-links-list a { color: #fff; text-decoration: none; font-weight: 500; opacity: 0.92; transition: color 0.2s, opacity 0.2s; }
      .footer-links-list a:hover, .footer-links-list a:focus { color: #a78bfa; opacity: 1; text-decoration: underline; }
      .footer-divider { border: none; border-top: 1px solid #23233a; opacity: 0.18; }
      .footer-bottom-row { font-size: 0.98rem; color: #b6bed5; }
      .footer-socials { display: flex; gap: 1.2em; }
      .footer-social { color: #b6bed5; font-size: 1.35rem; opacity: 0.8; transition: color 0.2s, opacity 0.2s; }
      .footer-social:hover, .footer-social:focus { color: #a78bfa; opacity: 1; }
      @media (max-width: 991px) {
        .footer-contact-title { font-size: 1.5rem; }
        .footer-links-col { margin-right: 1.2rem; }
      }
      @media (max-width: 767px) {
        .footer-modern { padding-top: 2rem; padding-bottom: 1.2rem; }
        .footer-contact-title { font-size: 1.1rem; }
        .footer-links-col { margin-right: 0.7rem; min-width: 120px; }
        .footer-bottom-row { flex-direction: column; gap: 0.7em; text-align: center; }
      }
    </style>
  </footer>
`;

document.addEventListener('DOMContentLoaded', function() {
  const footerDiv = document.getElementById('footer');
  if (footerDiv) footerDiv.innerHTML = footerHTML;
});

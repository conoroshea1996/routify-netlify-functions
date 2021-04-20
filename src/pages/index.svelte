<div class="hero">
  <h1>Routify blog example</h1>
  <code>npx @roxi/routify init --branch blog</code>

  <ul class="checks">
    <li>☑ Markdown with mdsvex</li>
    <li>☑ PostCSS</li>
    <li>☑ Auto generated navigation</li>
    <li>☑ Auto generated page titles</li>
    <li>☑ 100% Lighthouse score</li>
  </ul>
</div>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->

<form name="contact" method="POST" data-netlify="true">
  <label>Your Name: <input type="text" name="name" /></label>
  <label>Your Email: <input type="email" name="email" /></label>
  <input type="hidden" name="form-name" value="contact" />
  <button type="submit">Send</button>
</form>

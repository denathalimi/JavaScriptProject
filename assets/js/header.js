export function Header () {
    return `
    <div class="navbar-background">
    <div class="content-container-navbar container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" width="auto" height="40"></a>
        <button class="navbar-toggler third-button" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent22" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar first-bar"></span>
          <span class="icon-bar second-bar"></span>
          <span class="icon-bar third-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mr-auto ml-auto">
            <a class="nav-link navbar-text navbar-undertext-hover" href="#">
              Home
            </a>
            <a class="nav-link navbar-text navbar-undertext-hover" href="#">
              Hosting
            </a>
            <a class="nav-link navbar-text navbar-undertext-hover cart-badge" href="cart.html">
              Cart <span class="badge badge-light">0</span>
            </a>
            <a class="nav-link navbar-text navbar-undertext-hover" href="#">
              Domains
            </a>
            <a class="nav-link navbar-text navbar-undertext-hover" href="#">
              Resources
            </a>
            <a class="nav-link navbar-text navbar-undertext-hover" href="#">
              Afilitates
            </a>
          </ul>
          <ul class="navbar-nav mr-auto">
            <a class="nav-link navbar-text navbar-text-hover" href="#">
              Sign-Up
            </a>
            <button type="button" class="nav-link btn btn-login">Log-in</button>
          </ul>
        </div>
      </nav>
    </div>
  </div>
    `
}
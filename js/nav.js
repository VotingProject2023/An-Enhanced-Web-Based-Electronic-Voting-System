document.write(
  `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container text-center">
      <a class="navbar-brand" href="index.html">
        <img src="imgs/logo.png" alt="LOGO" />
      </a>
      <button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#main"
        aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item p-2">
            <a class="nav-link" href="pages/voting_history/voting_history.html">Voting History</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="pages/personal_info/personal_info.html">Personal Info</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link" href="pages/elections/elections.html">Elections</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link font-src" href="pages/login/login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `
)

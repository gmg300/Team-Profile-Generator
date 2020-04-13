function generateHTML(manager, engineers, interns) {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="../../Assets/css/style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <!-- HEADER -->
        <header>
            <div class="container-fluid bg-danger">
                <h1 class="text-center text-light display-4 py-4">My Team</h1>
            </div>
        </header>
        <main class="container">
            <!-- CARDS VIEW -->
            <div id="cards-view" class="row justify-content-center">
                <div class="card-deck justify-content-center">
                    ${manager}
                    ${engineers}
                    ${interns}
                </div>
            </div>
        </main>
        <!-- FOOTER -->
        <footer class="page-footer">
            <div class="container-fluid bg-danger mt-2">
                <p class="text-center text-light mb-0 py-3">© 2020</p>
            </div>
        </footer>
        <!-- SCRIPT LINKS -->
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}

module.exports = generateHTML;
import serialize from 'serialize-javascript';

const template = (title = "", initialState = {}, content) => {
    let scripts = "";
    if (content) {
        scripts = `<script>window.__STATE__ = ${serialize(initialState)}</script>
                    <script src="client.bundle.js"></script>`
    } else {
        scripts = ` <script src="bundle.bundle.js"></script> `;
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>${title}</title>
                    <link href="style.css" type="text/css" rel="stylesheet" />
                </head>
                <body>
                    <div id="app">${content}</div>
                    ${scripts}
                </body>
                </html>`;
    return page;
};

export default template;

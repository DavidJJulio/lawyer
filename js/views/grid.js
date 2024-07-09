export class grid extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML += /*html*/`
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            main {
                display: block;
                width: 100%;
                height: 100vh;
                background-color: black;
            }
            .nav_header{
                width: 100%;
                height: 20vh;
                background-color: blue;
            }
            .nav_links{
                width: 100%;
                height: 10vh;
                background-color: antiquewhite;
            }

        </style>
        <main>
            <section class ="Hitch">
                <header>
                    <nav class ="nav_links"></nav>
                    <nav class ="nav_header"></nav>
                </header>
                <div class ="img_Container">
                
                </div>

            </section>

            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </main>
        `
    }
}
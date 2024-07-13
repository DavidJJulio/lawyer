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
            main{
                display: flex;
                background-color: gainsboro;
                flex-direction: column;
                height: 500vh;
                width: 100%;
            }

            .hitch {
                display: grid;
                width: 100%;
                height: 85vh;
                background-color: blue;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 2fr 12fr;
                grid-template-areas: 
                "links"
                "header"
                "container"
                ;   
            }

            .nav_links {
                grid-area: links;
                background-color: antiquewhite;
            }

            .nav_header {
                grid-area: header;
                background-color: aqua;
            }

            .img_Container {
                grid-area: container;
                background-color: rebeccapurple;
            }
            .about {
                width: 100%;
                height: 45vh;
                display: flex;
            }

            .about_me {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 50%;
                height: 100%;
                background-color: brown;
            }
            .my_commitment {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 50%;
                height: 100%;
                background-color: bisque;
            }
            .practice_areas {
                display: flex;
                width: 100%;
                height: 50vh;
                justify-content: center;
                align-items: center;
                background-color: blueviolet;
            }

            .practice_container {
                display: flex;
                width: 65%;
                padding: 1%;
                height: 100%;
                gap: 10px;
                flex-direction: column;
                background-color: aquamarine;
            }
            .practice_header {
                width: 100%;
                height: 38%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: bisque;
            }
            .practice_cards {
                width: 100%;
                height: 62%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: azure;
            }
        </style>
        <main>
            <section class ="hitch">
                <nav class ="nav_links"></nav>
                <nav class ="nav_header"></nav>
                <div class ="img_container">
                
                </div>

            </section>

            <section class ="about">
            <div class ="about_me">
                
            </div>
            <div class ="my_commitment">
            
            </div>
            </section>
            <section class ="practice_areas">
            <div class ="practice_container">
                <div class ="practice_header">
                <h1></h1>
                <p></p>
                </div>
                <div class ="practice_cards">
                
                </div>
            </div>
            </section>
            <section></section>
            <section></section>
        </main>
        `
    }
}
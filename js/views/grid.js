export class grid extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML += /*html*/`
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
            }
            main{
                display: flex;
                background-color: gainsboro;
                flex-direction: column;
                height: auto;
                width: 100%;
            }

            .hitch {
                display: grid;
                width: 100%;
                height: 85vh;
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
                display: flex;
                gap: 20px;
                justify-content: flex-end;
                padding-right: 20%;
                padding-left: 20%;
                background-color: #ebebeb;
            }

            .nav_header {
                grid-area: header;
                background-color: azure;
                display: flex;
                flex-direction: row;
                position: sticky;
            }

            .img_container {
                grid-area: container;
                display: flex;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 0.7;
                background-color: #792b4e; 
                background-image: url(../../storage/img/7.jpg);
            }
            .img_container::after {
                background-color: #792b4e17;
                content: '';
                width: 100%;
                height: 100%;
            }
            
            .about {
                width: 100%;
                height: 47vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: azure;
            }

            .about_me {
                display: flex;
                justify-content: start;
                align-items: end;
                flex-direction: column;
                width: 50%;
                padding: 4%;
                padding-left: 8%;
                gap: 8%;
                height: 100%;
                background-color: azure;
            }

            .about_me p {
                width: 75%;
                height: 100%;
                display: flex;
                color: #525252;
                font-size: .9em;
                justify-content: end;
                align-items: start;
                line-height: 1.7;
                color: #2e2e2e;
            }

            .about_me div {
                width: 75%;
                height: 5%;
                display: flex;
                justify-content: start;
                align-items: start;
            }
            .about_me div div {
                width: 20%;
                height: 4px;
                background-color: #792b4e;
            }

            .about_me h1 {
                width: 75%;
                height: 50%;
                display: flex;
                justify-content: start;
                align-items: end;
                font-size: 2.2em;
                font-weight: 100;
                color: #000000;
            }

            .my_commitment p {
                width: 50%;
                height: 100%;
                display: flex;
                color: #525252;
                font-size: .9em;
                justify-content: start;
                align-items: start;
                line-height: 1.7;
                color: #2e2e2e;
            }

            .my_commitment div {
                width: 75%;
                height: 5%;
                display: flex;
                justify-content: start;
                align-items: start;
            }
            .my_commitment div div {
                width: 20%;
                height: 4px;
                background-color: #792b4e;
            }

            .my_commitment h1 {
                width: 50%;
                height: 50%;
                display: flex;
                justify-content: start;
                align-items: end;
                font-size: 2.2em;
                font-weight: 100;
                color: #000000;
            }

            .my_commitment {
                display: flex;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                width: 45%;
                padding: 4%;
                gap: 8%;
                height: 100%;
                background-color: azure;
            }
            .practice_areas {
                display: flex;
                width: 100%;
                height: 50vh;
                justify-content: center;
                align-items: center;
                background-color: #ebebeb;
            }

            .practice_container {
                display: flex;
                width: 65%;
                padding: 1%;
                height: 100%;
                gap: 10px;
                flex-direction: column;
                background-color: #ebebeb;
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
            .form {
                width: 100%;
                height: 60vh;
                display: flex;
                padding: 1%;
                justify-content: flex-end;
                background-color: coral;
            }

            .form_container {
                width: 50%;
                height: 100%;
                background-color: darkgreen;
                display: flex;
            }

            .footer {
                width: 100%;
                height: 40vh;
                gap: 5%;
                display: flex;
                justify-content: center;
                background-color: chocolate;
            }

            .footer_hitch {
                width: 30%;
                height: 100%;
                background-color: black;
            }

            .footer_container {
                display: flex;
                width: 30%;
                height: 100%;
                background-color: black;
            }

            li {
                list-style: none;
                display: flex;
                flex-direction: row;
                gap: 3px;
                justify-content: center;
                align-items: center;
            }

            a {
                text-decoration: none;
            }

            .nav_links i {
                color: #949494;
            }

            .nav_links a {
                font-size: 85%;
                color: #792b4e;
            }

            .nav_links p {
                font-size: 85%;
                color: #949494;
            }

            .nav_links a:hover {
                color: #c7608e;
            }

            .nav_links i:hover {
                color: #792b4e;
            }

            .li_socia_media {
                display: flex;
                gap: 7px;
            }

            .a_social_media {
                border-radius: 100%;
                width: 30px;
                height: 30px;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .a_social_media i {
                font-size: 1.4em;
                width: 100%;
                height: 100%;
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .a_social_media:hover {
                background-color: #792b4e;
            }
            .a_social_media i:hover {
                color: white;
            }

            .header_links {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 1%;
            }

            .logo {
                width: 50%;
                height: 100%;
            }

            .header_links li {
                width: 13%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
            }

            .header_links a {
                color: #792b4e;
                font-size: 95%;
                font-weight: bold;
                border-radius: 5px;
                width: 100%;
                height: 45%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .header_links a:hover {
                color: white;
                background-color: #792b4e;
                transition: 0.25s;
                font-weight: bolder;
            }

        </style>
        <main>
            <section class ="hitch">
                <nav class ="nav_links">
                <li>
                    <i class='bx bx-current-location'></i>
                    <p>Bucaramanga</p>
                </li>
                <li>
                    <i class='bx bxs-envelope'></i>
                    <a>pepealcachofa.example@gmail.com</a>
                </li>
                <li>
                    <i class='bx bxs-phone' ></i>
                    <a>+57 310 3103 310</a>
                </li>
                <li class ="li_socia_media">
                <a class ="a_social_media"><i class='bx bxl-facebook' ></i></a>
                <a class ="a_social_media"><i class='bx bxl-instagram-alt'></i></a>
                </li>
                </nav>
                <nav class ="nav_header">
                <div class ="logo"></div>
                <div class ="header_links">
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                    <a>Acerca de mi</a>
                </li>
                <li>
                    <a>Valores</a>
                </li>
                <li>
                    <a>Contacto</a>
                </li>
                </div>
                </nav>
                <div class ="img_container">
                   
                </div>
            </section>

            <section class ="about">
                <div class ="about_me">
                    <h1>Acerca de mi</h1>
                    <div>
                    <div></div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quos dolorum quaerat? Odit eaque, voluptas non corporis magni unde corrupti. Ducimus dolore consequatur eligendi iusto pariatur excepturi fugiat maxime nesciunt.</p>
                </div>
                <div class ="my_commitment">
                <h1>Mi compromiso</h1>
                    <div>
                    <div></div>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quos dolorum quaerat? Odit eaque, voluptas non corporis magni unde corrupti. Ducimus dolore consequatur eligendi iusto pariatur excepturi fugiat maxime nesciunt.</p>
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

            <section class ="form">
                <div class ="form_container">

                </div>
            </section>

            <section class ="footer">
                <div class ="footer_hitch"></div>
                <div class ="footer_container">
                    <div class ="footer_address"></div>
                    <div class ="footer_contact"></div>
                </div>
            </section>
        </main>
        `
    }
}
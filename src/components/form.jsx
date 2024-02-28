import '../index.css'
import ejemplo1 from '../img/ejemplo1.jpg'
import ejemplo2 from '../img/ejemplo2.jpg'

function Form(){
    return(
        <body className='cuerpo'>
            <section className='form'>
                <p>Please, let your link code and feedback challenge <a className='form-here' href="https://docs.google.com/forms/d/e/1FAIpQLSeaNZkq9T_xYF_3VtTsAuUttQdKbW4JgEHbM7kkj0hoK_wn6g/viewform">here</a></p>
            </section>
            <section className='section-challenge'>
                <p>
                <b>Challenge:</b> We want you to have fun building this SPA (Single Page Application) where you can show the quotes of the most famous characters from this TV series.
                </p>

                <p>The goal is to build the current pages:</p>

                <li>Home</li>
                <li>Quotes view</li>
                <li>Error page</li>
                
                <aside className='aside'>
                    <img src={ejemplo1} alt="Ejemplo 1" className='ejemplo'/>
                    <img src={ejemplo2} alt="Ejemplo 2" className='ejemplo'/>
                </aside>

                <section>
                <div className="dropdown">
                    <button className="dropbtn">Goals basic level</button>
                    <div className="dropdown-content">
                        <a href="#"><ul>
                            <ol>User Story: Home page view</ol><br />
                            <ol>User Story: Show a quote randomly for the first time (by default)</ol><br />
                            <ol>User Story: Offer an input search, in which the name of any character can be written, as well as the number of quotes to show.</ol><br />
                            <ol>User Story:</ol><br />
                            </ul>
                        </a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Goals advanced level</button>
                    <div className="dropdown-content">
                    <a href="#"><ul>
                                <ol><b>**Include the basic level user stories</b></ol><br />
                                <ol>User Story: Add audio with the Simpsons song</ol><br />
                                <ol>User Story: Add Desktop version</ol><br />
                            </ul>
                        </a>
                    </div>
                </div>
                <p className='tools'>
                    <b>Tools:</b> You can use the next tools to develop this challenge:</p>
                    <ul className='lista'>
                        <li className=''>Mockup: https://www.figma.com/file/R3RrsUHYYAKmm9EyxNocMj/Simpsons?type=design&node-id=0%3A1&mode=design&t=FeKkyP1NNvKtRm5m-1</li><br />
                        <li>API: <a href="http://thesimpsonsquoteapi.glitch.me/">http://thesimpsonsquoteapi.glitch.me/</a></li>
                    </ul>
                <p>
                    <b>Github Repo:</b> 
                </p>

                </section>

                

            </section>        
        </body>
    
    )
}

export default Form;
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import './home.css';

import Fog from '../../assets/img/mist.png';
import Setup from '../../assets/img/installation.jpeg';
import Keeping from '../../assets/img/keeping.jpeg';


function Home() {
    return (
        <>
            <section className="main">

            <Player 
                    src="https://assets10.lottiefiles.com/packages/lf20_cXGQV1blDX.json"      
                    loop
                    autoplay
                    style={{ height: '200px'}}
                    
            />

                <div className='content-main'>

                    <h1 className='tittle-main'>JI</h1>

                    <p className='subtittle'>Ar condicionado</p>
                    
                    <p className='description-main'>Instalação, manutenção, vendas e infraestrutura.</p>

                    <button className='button-main'>
                        <Link to={"https://wa.me/5532999320310?text=Ol%C3%A1+JI+ar+condicionado..."} className='link-main' target='_blank'>
                                (32) 99932-0310
                        </Link>
                    </button>

                </div>
               
               <div className='neblina'>
                    <img src={Fog} alt='neblina' className='smoke' />
               </div>

            </section>

            <section className='installation-section'>

                <h2 className='tittle-installation'>Instalação e Manutenção</h2>

                <div className='installation-div'>
                    <img src={Setup} alt='instalação' className='setupimg' />
                    <p className='description-setup'>
                        A instalação é feita com o máximo de eficiência, deixando o ambiente com uma estética bonita e com o acabamento de primeira, utilizando-se das melhores ferramentas do mercado fazendo-se assim uma instalação segura e organizada.
                    </p>
                </div>

                <div className='keeping-div'>
                    <img src={Keeping} alt='manutenção imagem' className='keeping-img' />
                    <p className='description-keeping'>
                        O serviço de manutenção é realizado por profissionais qualificados que possuem todas as ferramentas necessárias para deixar seu aparelho com o aspecto de novo novamente. Realizamos a limpeza completa no aparelho limpando toda a poeira/sujeira que podem vir a atrapalhar a perfomance do ar.
                    </p>
                </div>

            </section>

            <section className='infra-section'>

                    <h2 className='tittle-infra'>
                        Infraestrutura
                    </h2>

                    

                    <Player 
                    src="https://assets5.lottiefiles.com/packages/lf20_GbabwrUY2k.json"      
                    loop
                    autoplay
                    style={{ height: '200px'}}
                    
                    />



                    <p className='description-infra'>
                        A infraestrutura é realizada de maneira segura pelos nossos profissionais, deixando o ambiente o mais organizado possível, para melhorar a perfomance do profissional na hora que fizer a instalação do aparelho.
                    </p>

            </section>

            <section className='footer'>
                <Link to={"https://www.linkedin.com/in/vinicius-soaresdev"} className='footer-text' target='_blank'>
                    Desenvolvido por Vinicius Soares
                </Link>
            </section>
        </>
    )
}

export default Home;
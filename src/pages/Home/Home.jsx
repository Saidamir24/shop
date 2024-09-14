import React from 'react'
import '@/pages/Home/Home.scss'
import { Link } from 'react-router-dom'
import { FacebookIcon, Github, GithubIcon, Linkedin, Mail } from 'lucide-react'

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="info">
         <h2 className="info__title">Добро Пожаловать в наш интернет-магазин</h2>
         <p className="info__descr">Перейдите в раздел <Link to='/products' className="info__link">SHOP.UZ</Link>, там Вы сможете выбрать любые необходимые продукты как для Вас так и  для ваших знакомых</p>
      </div>
      <div className="contacts">
        <h3 className="contacts__title">Вы можете связаться с нами здесь:</h3> 
          <div className="contacts__info">
            <ul className="contacts__info-list">
            <li>
                            <a href="https://www.facebook.com/profile.php?id=61564003730294" target='https://www.facebook.com/profile.php?id=61564003730294'>
                            
                            <FacebookIcon className='contacts__info-link'></FacebookIcon>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/Saidamir24" target='https://github.com/Saidamir24'>
                            <GithubIcon className='contacts__info-link'></GithubIcon> 
                            </a>
                        </li>

                        <li>
                           <a href="https://www.linkedin.com/in/saidamir-saipov-2b6776320/" target='https://www.linkedin.com/in/saidamir-saipov-2b6776320/'>
                           <Linkedin className='contacts__info-link'></Linkedin>
                           </a>
                        </li>

            </ul>
  
          </div>
      </div>
    </div>
    </>
  )
}

export default Home
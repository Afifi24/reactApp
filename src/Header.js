import React from 'react'
export default function Header(props){
    return(
        <div className="header">
          <nav>
            <h4>Films</h4>
                 <ul>
                     <li><a href="#connexion">Connexion</a></li>
                     <li><a href="#">Rejoindre</a></li>
                     <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                     
                 </ul>
          </nav>

        </div>
    )
}
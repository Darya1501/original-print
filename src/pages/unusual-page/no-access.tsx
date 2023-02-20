import React from 'react'
import { Link } from 'react-router-dom'

export const NoAccess = () => (
  <div>
    <h2>У Вас нет доступа к данной категории товаров</h2>
    <p>Вы можете перейти <Link to='/catalog'>в каталог</Link> и подобрать что-нибудь подходящее в других категориях</p>
  </div>
)

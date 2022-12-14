import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'

import './styles/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Post />} /> */}
        <Route path='/posts' element={<Post />}>
          <Route path=':id' element={<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis odit praesentium id, quisquam maxime, a nobis quasi perspiciatis veritatis alias ipsum earum voluptatem ipsam tempore labore soluta. Doloribus, delectus!</div>} />
        </Route>
        <Route path='/posts' element={<Post />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

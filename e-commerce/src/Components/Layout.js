import React from 'react'
import { Link , Outlet } from 'react-router-dom';
import NavItems from './NavItems';
import Search from './Search';




const Layout = ({categories}) => {
    console.log(categories);
    const renderCategories = () => {
        
        const Categories =  categories.data.map((cat) => 
          <li key = {cat.id}><Link to = {`/categories/${cat.id}`}>{cat.title}</Link></li>
        );
        return Categories;
      }
  return (
    <>
    <header>
      <h2 id='site-name'>
      E - Commerce Website
      </h2>
      <Search />
      {
        NavItems
      }
    </header>



    <section>

    <aside>
      {
        categories.errormessage && <div>Error : {categories.errormessage}</div>
      }
      <ul>
      {
        categories.data && renderCategories()
      }
      </ul>
    </aside>

    <main>
      
      <Outlet />
    </main>
    </section>

    <footer>Footer</footer>
    </>
  )
}

export default Layout
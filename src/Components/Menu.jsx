import React, { useState } from 'react'
import MenuItem from './MenuItem'
import Notes from './Notes'
import Etudiants from './Etudiants'
import Matieres from './Matieres'
import APropos from './APropos'
import Classe from './Classe'
import Professeurs from './Professeurs'

const menuItems = [
    { name: "Notes", component: <Notes /> },
    { name: "Etudiants", component: <Etudiants /> },
    { name: "Matières", component: <Matieres /> },
    { name: "Classes", component: <Classe /> },
    { name: "Professeurs", component: <Professeurs /> },
    { name: "A propos", component: <APropos /> },
]

const Menu = () => {
    const [activeItem, setActiveItem] = useState("Notes")

    const selectedComponent = menuItems.find(item => item.name === activeItem)?.component

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            {/* Menu en haut */}
            <nav style={{
                width: '100%',
                background: '#f0f0f0',
                padding: '10px 20px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0, margin: 0 }}>
                    {menuItems.map(item => (
                        <MenuItem
                            key={item.name}
                            name={item.name}
                            active={item.name === activeItem}
                            onClick={() => setActiveItem(item.name)}
                        />
                    ))}
                </ul>
            </nav>

            {/* Contenu principal */}
            <main style={{ flex: 1, padding: '20px' }}>
                {selectedComponent}
            </main>

        </div>
    )
}

export default Menu

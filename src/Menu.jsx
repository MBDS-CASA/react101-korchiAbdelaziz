import React from 'react'

const Menu = () => {
    const menuItems = ["Notes", "Etudiants", "Matières", "A propos"]

    const handleClick = (item) => {
        alert(`Vous avez cliqué sur : ${item}`)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            {/* Menu en haut */}
            <nav style={{
                width: '100%',
                background: '#5d5858ff',
                padding: '10px 20px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '20px'
            }}>
                {menuItems.map((item, index) => (
                    <div key={index}
                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={() => handleClick(item)}>
                        {item}
                    </div>
                ))}
            </nav>

            {/* Contenu principal */}
            <main style={{ flex: 1, padding: '20px' }}>
                <h1>Bienvenue</h1>
                <p>Cliquez sur un élément du menu pour voir une alerte.</p>
            </main>

        </div>
    )
}

export default Menu

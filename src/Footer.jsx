import React from 'react'

const Footer = () => {
    const annee = new Date().getFullYear()

    return (
        <footer style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
            padding: '10px 0'
        }}>
            © {annee} - Korchi.Abdellaziz, Tous droits réservés.
        </footer>
    )
}

export default Footer

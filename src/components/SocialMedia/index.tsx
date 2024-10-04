export const SocialMedia = () => {
    return (
        <div style={{
            display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around', padding: '0.5rem', backgroundColor: 'rgba(17, 17, 17, 0.5)', backdropFilter: 'blur(10px)', borderRadius: '10px'
        }}>
            <a href="https://www.linkedin.com/in/nemesioveloso/" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" height="35" alt="LinkedIn logo" />
            </a>
            <a href="https://www.instagram.com/netovelosonog" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" height="35" alt="Instagram logo" />
            </a>
            <a href="https://wa.me/86999546225" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" height="35" alt="WhatsApp logo" />
            </a>
            <a href="https://github.com/nemesioveloso" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="35" alt="Github logo" style={{ filter: 'invert(100%)' }} />
            </a>
            <a href="mailto:nemesio.veloso.neto@gmail.com">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" height="35" alt="Gmail logo" />
            </a>
        </div>
    )
}
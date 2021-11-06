function About({ dataImage = "https://via.placeholder.com/215", dataAbout }) {
    return (
        <aside>
            <img src={dataImage} alt='blog logo' />
            <p>{dataAbout}</p>
        </aside>
    )
}

export default About;
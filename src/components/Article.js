function Article({ dataTitle, dataDate = "January 1, 1970", dataPreview, dataMinutes }) {
    let emoji = '';
    if (dataMinutes < 30) {
        let numEmojis = Math.ceil(dataMinutes / 5)
        let count = 0;
        while (count < numEmojis) {
            emoji += '☕️'
            count++
        }

    } else {
        let numEmojis = Math.ceil(dataMinutes / 10)
        let count = 0;
        while (count < numEmojis) {
            emoji += '🍱'
            count++
        }
    }

    return (
        <article>
            <h3>{dataTitle}</h3>
            <small>{dataDate} • {emoji} {dataMinutes} min read</small>
            <p>{dataPreview}</p>
        </article>
    )
}

export default Article;
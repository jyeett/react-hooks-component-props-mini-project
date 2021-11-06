import Article from "./Article";

function ArticleList({ dataPosts }) {
    console.log(dataPosts)
    const articleComps = dataPosts.map(postObj => <Article key={postObj.id} dataTitle={postObj.title} dataDate={postObj.date} dataPreview={postObj.preview} dataMinutes={postObj.minutes}/>)
    return (
        <main>
            { articleComps }
        </main>
    )
}

export default ArticleList;
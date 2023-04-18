import { useEffect, useState } from "react";
import NewsItem from '../components/NewsItem'

const NewsList = () => {
    const [article, setArticles] = useState([]);
    const [search, setSearch] = useState(false)
    const [input, setInput] = useState("");
    const [inputLanguage, setLanguage] = useState([]);


    useEffect(() => {
        if (!input) {
            return
        }

        fetch(`https://newsapi.org/v2/everything?q=${input ? input : "bitcoin"}&language=${inputLanguage}&apiKey=38697655d1cf4f7f8b1c7be5df1d5bcd`
        )
            .then(res => res.json())
            .then(json => {
                setArticles(json.articles)
            })
    })
    // console.log(input);
    console.log(article);

    return (
        <section>
            <form action="" >
                <div>
                    <input type="text" placeholder="Type to search..." value={input} className="input_field" onChange={(event) => setInput(event.target.value)} />
                    <input type="button" value="Search" onClick={() => setSearch(!search)} className="searchbar" />
                </div>
                <select name="languages" className="languages" onChange={(event) => setLanguage(event.target.value)}>
                    <option value="">Select your language</option>
                    <option value="ar">Arabian</option>
                    <option value="de">German</option>
                    <option value="en">Englisch</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="he">Hebrew</option>
                    <option value="it">Italian</option>
                    <option value="nl">Dutch</option>
                    <option value="no">Norwegian</option>
                    <option value="pt">Portugese</option>
                    <option value="ru">Russian</option>
                    <option value="sv">Swedish</option>
                    <option value="ud">Udmurt</option>
                    <option value="zh">Chinese</option>
                </select>
            </form>
            {article.map((elt, i) => {
                return (
                    <NewsItem
                        key={i}
                        image={elt.urlToImage}
                        title={elt.title}
                        description={elt.description}
                        id={i}
                        allarticles={elt}

                    />
                )
            })}

        </section >
    );
}

export default NewsList;
import React,{useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';


const News=(props)=> {
   /*  articles = [
        {
          "source": { "id": null, "name": "The Philadelphia Inquirer" },
          "author": "Rob Tornoe, Jeff McLane, EJ Smith, Josh Tolentino and Matt Mullin",
          "title": "Eagles-Giants predictions, odds, injury news, rumors, NFL playoff schedule - The Philadelphia Inquirer",
          "description": "The Eagles have won nine straight games at the Linc against the New York Giants.",
          "url": "https://www.inquirer.com/eagles/live/eagles-giants-game-fl-playoffs-divisional-round-news-injuries-live-updates-20230121.html",
          "urlToImage": "https://www.inquirer.com/resizer/j60bP0jTdklECYvgtU_0n2pWoQE=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/TR2SQGMQ55EJ7IFIQST7YRJE7U.jpg",
          "publishedAt": "2023-01-21T16:15:05Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "PEOPLE" },
          "author": "https://www.facebook.com/peoplemag",
          "title": "Jeremy Renner Says His '30 Plus Broken Bones' Will 'Mend' and 'Grow Stronger' After Snowplow Accident - Yahoo Entertainment",
          "description": "Jeremy Renner shared a post on Instagram Saturday morning, when he wrote that his '30 plus broken bones will mend' and 'grow stronger' after his snowplow accident",
          "url": "https://people.com/movies/jeremy-renner-says-30-plus-broken-bones-will-mend-after-snowplow-accident/",
          "urlToImage": "https://people.com/thmb/JOmjSliygMUmqrAP4-CmTiPrne8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x412:961x414)/jeremy-renner-hospitalized-010223-5748b1f844624289917fdb85a59ceb2d.jpg",
          "publishedAt": "2023-01-21T15:36:08Z",
          "content": "Jeremy Renner is on the mend and looking forward with a positive outlook after his snowplow accident.\r\nThe actor, 52, shared a post on Instagram Saturday morning of himself in a bed receiving what ap… [+2828 chars]"
        },
        {
          "source": { "id": null, "name": "The Guardian" },
          "author": "Benjamin Lee",
          "title": "‘I hope this triggers outrage’: surprise Brett Kavanaugh documentary premieres at Sundance - The Guardian",
          "description": "Covertly-made Justice, from director Doug Liman, shows to sold-out audience and shines new light on allegations of sexual assault",
          "url": "https://www.theguardian.com/film/2023/jan/21/brett-kavanaugh-documentary-sundance-film-festival",
          "urlToImage": "https://i.guim.co.uk/img/media/a9c24d89ecee19b890992f80caebbc5a865aff17/0_202_4998_2999/master/4998.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6c7efbb0cd75cf36c18b32dd465d1a0f",
          "publishedAt": "2023-01-21T14:11:00Z",
          "content": "A secretly made documentary expanding on allegations of sexual assault against supreme court justice Brett Kavanaugh has premiered at this years Sundance film festival.\r\nJustice, a last-minute additi… [+6286 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "Prisco's NFL divisional round playoff picks: Cowboys shock 49ers; Eagles, Chiefs and Bills get scares - CBS Sports",
          "description": "Pete Prisco says 'dogs will rule the weekend in the divisional round, but only one advances",
          "url": "https://www.cbssports.com/nfl/news/priscos-nfl-divisional-round-playoff-picks-cowboys-shock-49ers-eagles-chiefs-and-bills-get-scares/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/05/09/7ef002b4-18b6-4842-9441-d0dcce47204e/thumbnail/1200x675/8015fd5765d0811768a3aded38f5cfc7/dak-prescott-cowboys-getty.jpg",
          "publishedAt": "2023-01-21T14:07:00Z",
          "content": "What a way to open the NFL playoffs for me last week. It was Super Wild Card Weekend and I was super with my picks. I went 4-0 with my Best Bets as part of the Pick Six Podcast, went 4-2 with my ATS … [+4069 chars]"
        },
        {
          "source": { "id": null, "name": "BBC News" },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Ukraine war: Zelensky adviser says West’s 'indecision' is killing Ukrainians - BBC",
          "description": "Zelensky adviser tells West to \"think faster\" as pressure grows on countries to send tanks to Ukraine.",
          "url": "https://www.bbc.com/news/world-europe-64355839",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/700E/production/_128368682_mediaitem128368680.jpg",
          "publishedAt": "2023-01-21T14:02:57Z",
          "content": "An adviser to President Volodymyr Zelensky has said that the West's \"indecision\" over sending extra weapons to Ukraine is \"killing more of our people\".\r\n\"Every day of delay is the death of Ukrainians… [+4913 chars]"
        }
        
      ]
    
     
    constructor(){
        super();
        console.log('');
        state = {
        articles : articles,
        loading : false
        } */
    
     const [articles, setarticles] = useState([ ])
     const [loading, setloading] = useState(false)
     const [page, setpage] = useState(1)
     const [totalResults, settotalResults] = useState(0)
     
     
  

   const updateNews = async()=>{
    props.setProgress(10)
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize= ${props.pageSize}`;
     setloading(true)
      let data =  await fetch(url) ;
      props.setProgress(30)
      let parsedData = await data.json();
      props.setProgress(50)
      setloading(false)
      //console.log(2);
      
      setarticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      
      props.setProgress(100)
   }
   
   useEffect(() => {
    updateNews();
    document.title = 'NewsMonkey-'+capitalize(props.category);
   }, [])
   

   /*const handleNextClick = async ()=>{
   
      setpage(page+1)
      updateNews();
  }
    const handlePreviousClick = async ()=>{
      
        setpage(page-1)
        updateNews();
   
  }
*/
   
  const capitalize = (str)=>{
     return str = str.charAt(0).toUpperCase() + str.slice(1);
  }

  const fetchMoreData = async() => {
   
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize= ${props.pageSize}`;
    
    setpage(page+1);
     let data =  await fetch(url) ;
     let parsedData = await data.json();
     
     //console.log(2);

     setarticles(articles.concat(parsedData.articles))
     settotalResults(articles.concat(parsedData.articles))
    
  };
  

 
    return (
     <>
       
            
          
            <h2 className="text-center" style={{marginTop:'90px'}}> NewsMonkey-{capitalize(props.category)}-Top HeadLines</h2>
            {/*{console.log(1)}*/}
            {loading && <Spinner/>} 
            <InfiniteScroll
            dataLength={articles.length} 
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            
            >
            <div className = 'container'>
            <div className="row">
             {articles && articles.map((elements)=>{
                        return <div className="col-md-4" key={elements.index}>
                            <NewsItem title={elements.title?elements.title.slice(0,45):""} description= {elements.description?elements.description.slice(0,88):" "} imageUrl = {elements.urlToImage?elements.urlToImage:"https://s.yimg.com/ny/api/res/1.2/kQ6TiHoUkBC6NSiCVr_dNg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/fox_news_text_979/014de07fa26c3be7ee82f2dffde5f106"} className="card-img-top" alt="..."
                            newsUrl = {elements.url} source = {elements.source.name} author = {elements.author} publishedAt = {elements.publishedAt}/>
                        </div>
                        
                    })}
            </div>
            </div>
        </InfiniteScroll>
        
       
        
       {/* <button disabled={page<=1} type="button" onClick={handlePreviousClick} className="btn btn-dark">&larr; Previous</button>
        <button disabled={page+1 > Math.ceil(totalResults/props.pageSize)}type="button" onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
                  */}
        
        </>
    )
  }


  News.defaultProps = {
    country : 'in',
    category : 'general',
    pageSize : 8
  }
   News.propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    pageSize : PropTypes.number
  }
export default News
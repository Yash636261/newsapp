import React, { Component } from 'react';
import Subnews from './Subnews';

export class NewsSec extends Component {
  articles= [
    {
      "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
      "author": "Adam Langenberg",
      "title": "From easybeats to finalists: The rise of Tasmania's intellectual disability cricket team",
      "description": "Not that long ago, Tasmania's intellectual disability cricket side was open to whoever wanted to join. However, after surging up the ladder, selection is tough.",
      "url": "http://www.abc.net.au/news/2023-02-14/inclusion-cricket-intellectual-disability-tasmania/101967224",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/f6c03ba6b2400be5f026b06355410bd0?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=521&width=862&height=485",
      "publishedAt": "2023-02-13T18:37:10Z",
      "content": "The cricket field has always been James Colhoun's happy place.\r\nKey points:\r\n<ul><li>Tasmania's intellectual disability cricket side made it to the finals of a national competition</li><li>The player… [+5348 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor()
  {
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>this is the news section</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"key={element.url} >
                      <Subnews title={element.title.slice(0,88)} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
          })
          }
        </div>
      </div>
    )
  }
}

export default NewsSec
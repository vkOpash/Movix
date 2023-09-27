import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
// import Carousel from '../../../components/carousel/Carousel'
// import useFetch from '../../../hooks/useFetch';
// import Movies from '../../../components/movies/Movies';
import Movies from "../../../components/movies/Movies"
import axios from "axios"


const Mdata = [
    {
        "adult": false,
        "backdrop_path": "/zYlgqIpqJ1VAbvFhRhktAzIybVs.jpg",
        "id": 820609,
        "title": "No One Will Save You",
        "original_language": "en",
        "original_title": "No One Will Save You",
        "overview": "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.",
        "poster_path": "/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            878,
            53
        ],
        "popularity": 242.173,
        "release_date": "2023-09-22",
        "video": false,
        "vote_average": 6.944,
        "vote_count": 151
    },
    {
        "adult": false,
        "backdrop_path": "/kkDcYhD2FFu8dAZPm5YlMTVTn3G.jpg",
        "id": 790493,
        "title": "Spy Kids: Armageddon",
        "original_language": "en",
        "original_title": "Spy Kids: Armageddon",
        "overview": "When the children of the world’s greatest secret agents unwittingly help a powerful game developer unleash a computer virus that gives him control of all technology, they must become spies themselves to save their parents and the world.",
        "poster_path": "/vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg",
        "media_type": "movie",
        "genre_ids": [
            10751,
            35,
            28,
            12
        ],
        "popularity": 136.905,
        "release_date": "2023-09-22",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 24
    },
    {
        "adult": false,
        "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
        "id": 565770,
        "title": "Blue Beetle",
        "original_language": "en",
        "original_title": "Blue Beetle",
        "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            878,
            12
        ],
        "popularity": 3868.894,
        "release_date": "2023-08-16",
        "video": false,
        "vote_average": 7.134,
        "vote_count": 791
    },
    {
        "adult": false,
        "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
        "id": 346698,
        "title": "Barbie",
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            12,
            14
        ],
        "popularity": 2173.73,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 7.29,
        "vote_count": 4928
    },
    {
        "adult": false,
        "backdrop_path": "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "id": 299054,
        "title": "Expend4bles",
        "original_language": "en",
        "original_title": "Expend4bles",
        "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
        "poster_path": "/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            12,
            53
        ],
        "popularity": 459.223,
        "release_date": "2023-09-15",
        "video": false,
        "vote_average": 6.76,
        "vote_count": 50
    },
    {
        "adult": false,
        "backdrop_path": "/A8paSZwFPs5EmMGE2hbNGKqBfC5.jpg",
        "id": 856289,
        "title": "Creation of the Gods I: Kingdom of Storms",
        "original_language": "zh",
        "original_title": "封神第一部：朝歌风云",
        "overview": "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
        "poster_path": "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            14,
            10752
        ],
        "popularity": 403.768,
        "release_date": "2023-07-20",
        "video": false,
        "vote_average": 7.603,
        "vote_count": 78
    },
    {
        "adult": false,
        "backdrop_path": "/9WxqnP9c29wXd03sALSpxpTx8fk.jpg",
        "id": 1172009,
        "title": "The Black Book",
        "original_language": "en",
        "original_title": "The Black Book",
        "overview": "After his son is wrongly accused of kidnapping, a deacon who has just lost his wife takes matters into his own hands and fights a crooked police gang to clear him.",
        "poster_path": "/wUvUcLTxc83k4l8psyO2pDYHHB3.jpg",
        "media_type": "movie",
        "genre_ids": [
            9648,
            53,
            28
        ],
        "popularity": 76.867,
        "release_date": "2023-09-22",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 8
    },
    {
        "adult": false,
        "backdrop_path": "/1yhQqbi1rZg9EJiOI22i8Xg7vW.jpg",
        "id": 814776,
        "title": "Bottoms",
        "original_language": "en",
        "original_title": "Bottoms",
        "overview": "Unpopular best friends PJ and Josie start a high school self-defense club to meet girls and lose their virginity. They soon find themselves in over their heads when the most popular students start beating each other up in the name of self-defense.",
        "poster_path": "/jeyTQrNEpyE1LZIgVlswYh3sc34.jpg",
        "media_type": "movie",
        "genre_ids": [
            35
        ],
        "popularity": 85.758,
        "release_date": "2023-08-25",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 30
    },
    {
        "adult": false,
        "backdrop_path": "/aUulyDX6dXnmQGvM3v0qlZkxkh2.jpg",
        "id": 950071,
        "title": "Jaane Jaan",
        "original_language": "hi",
        "original_title": "जाने जां",
        "overview": "When a single mother her teenage daughter becomes ensnared in a deadly crime,  find an unexpected ally in their neighbor, a simple, doting but genius teacher math teacher comes to aid, while a tenacious cop digs into the case.",
        "poster_path": "/vactnK5CM9adZf7jyFNfi3GWcKQ.jpg",
        "media_type": "movie",
        "genre_ids": [
            80,
            53
        ],
        "popularity": 126.024,
        "release_date": "2023-09-21",
        "video": false,
        "vote_average": 7.167,
        "vote_count": 21
    },
    {
        "adult": false,
        "backdrop_path": "/436mzGC6sSM1YsHxdtHD6jVtGxX.jpg",
        "id": 866346,
        "title": "The Retirement Plan",
        "original_language": "en",
        "original_title": "The Retirement Plan",
        "overview": "When Ashley and her young daughter Sarah get caught up in a criminal enterprise that puts their lives at risk, she turns to the only person who can help: her estranged father Matt, currently living the life of a retired beach bum in the Cayman Islands. Their reunion is fleeting as they are soon tracked down on the island by crime boss Donnie and his lieutenant Bobo. As Ashley, Sarah, and Matt become entangled in an increasingly dangerous web, Ashley quickly learns her father had a secret past that she knew nothing about and that there is more to her father than meets the eye.",
        "poster_path": "/kv4n3xgRWtkldaD4kyy1FvpW6bO.jpg",
        "media_type": "movie",
        "genre_ids": [
            35,
            28
        ],
        "popularity": 52.317,
        "release_date": "2023-08-24",
        "video": false,
        "vote_average": 7.143,
        "vote_count": 7
    },
    {
        "adult": false,
        "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
        "id": 1008042,
        "title": "Talk to Me",
        "original_language": "en",
        "original_title": "Talk to Me",
        "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
        "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            53
        ],
        "popularity": 2836.112,
        "release_date": "2023-07-26",
        "video": false,
        "vote_average": 7.204,
        "vote_count": 805
    },
    {
        "adult": false,
        "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        "id": 569094,
        "title": "Spider-Man: Across the Spider-Verse",
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            28,
            12
        ],
        "popularity": 836.618,
        "release_date": "2023-05-31",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 4312
    },
    {
        "adult": false,
        "backdrop_path": "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
        "id": 976573,
        "title": "Elemental",
        "original_language": "en",
        "original_title": "Elemental",
        "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            10749
        ],
        "popularity": 1284.846,
        "release_date": "2023-06-14",
        "video": false,
        "vote_average": 7.764,
        "vote_count": 2323
    },
    {
        "adult": false,
        "backdrop_path": "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
        "id": 968051,
        "title": "The Nun II",
        "original_language": "en",
        "original_title": "The Nun II",
        "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        "media_type": "movie",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "popularity": 1934.723,
        "release_date": "2023-09-06",
        "video": false,
        "vote_average": 6.619,
        "vote_count": 293
    },
    {
        "adult": false,
        "backdrop_path": "/yQYGlpRCyeHBIwZyLldZwYVwDZc.jpg",
        "id": 729120,
        "title": "Cassandro",
        "original_language": "es",
        "original_title": "Cassandro",
        "overview": "The true story of Saúl Armendáriz, a gay amateur wrestler from El Paso that rises to international stardom after he creates the character Cassandro, the “Liberace of Lucha Libre.” In the process, he upends not just the macho wrestling world but also his own life.",
        "poster_path": "/hWHwWsKVr5GkmOI1hWgHZBYkRwi.jpg",
        "media_type": "movie",
        "genre_ids": [
            18
        ],
        "popularity": 82.271,
        "release_date": "2023-09-14",
        "video": false,
        "vote_average": 6.375,
        "vote_count": 36
    },
    {
        "adult": false,
        "backdrop_path": "/23HvwdsAQeL0MxN9fm3d8m1NaPw.jpg",
        "id": 1002185,
        "title": "A Million Miles Away",
        "original_language": "en",
        "original_title": "A Million Miles Away",
        "overview": "A migrant farmworker, José Hernández, defies all odds to fulfill his lifelong dream of becoming a NASA astronaut and going to space.",
        "poster_path": "/kMI3tgxLAZbzGOVlorUBva0kriS.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            36
        ],
        "popularity": 405.614,
        "release_date": "2023-09-08",
        "video": false,
        "vote_average": 8.104,
        "vote_count": 135
    },
    {
        "adult": false,
        "backdrop_path": "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
        "id": 614930,
        "title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        "original_language": "en",
        "original_title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        "overview": "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
        "poster_path": "/ueO9MYIOHO7M1PiMUeX74uf8fB9.jpg",
        "media_type": "movie",
        "genre_ids": [
            16,
            35,
            28
        ],
        "popularity": 770.729,
        "release_date": "2023-07-31",
        "video": false,
        "vote_average": 7.339,
        "vote_count": 595
    },
    {
        "adult": false,
        "backdrop_path": "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
        "id": 615656,
        "title": "Meg 2: The Trench",
        "original_language": "en",
        "original_title": "Meg 2: The Trench",
        "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            878,
            27
        ],
        "popularity": 2837.94,
        "release_date": "2023-08-02",
        "video": false,
        "vote_average": 6.965,
        "vote_count": 1901
    },
    {
        "adult": false,
        "backdrop_path": "/i3OTGmLNOZIo4SRQLVfLjeWegB6.jpg",
        "id": 603692,
        "title": "John Wick: Chapter 4",
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "media_type": "movie",
        "genre_ids": [
            28,
            53,
            80
        ],
        "popularity": 713.641,
        "release_date": "2023-03-22",
        "video": false,
        "vote_average": 7.814,
        "vote_count": 4579
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "id": 872585,
        "title": "Oppenheimer",
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "media_type": "movie",
        "genre_ids": [
            18,
            36
        ],
        "popularity": 582.152,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3681
    }
  ]

const Latest = () => {
    const [movies, setMovies] = useState()
    // const [endpoint, setEndpoint] = useState("day");
    // const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
    // const onChangeTab = (tab) => {
    //     setEndpoint(tab === "Day" ? "day" : "week");
    //   };


    // console.log(movies,"OOOOOOOOOO");


    useEffect(()=>{
        console.log("useEffect");
        axios.get("http://localhost:8080/getMovies").then(data=>{
            setMovies(data.data.data)
            console.log(data.data.data,"<------:::");
        }).catch(err=>{
            console.log(err);
        })
    },[])
  return (
    
      <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Latest</span>
        {/* <SwitchTabs data={["Movies", "Tv Shows"]} onChangeTab={onChangeTab} /> */}
      </ContentWrapper>
      <Movies data={movies} />
    
    </div>
  )
}

export default Latest

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from '../Components/primaryButton';
import SectionHeader from '../Components/sectionHeader';
import NormalCard from '../Components/normalCard';
import ThumbnailCard from '../Components/thumbnailCard';
import ProgramCard from '../Components/programCard';
import ArtistCollection from '../Components/artistDefault';
import SponsorDetail from '../Components/sponsorDetail';
import { CardObject } from '../Helpers/NormalCardImageMap';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
// import { HomeArtistObject } from '../Helpers/homeArtistMap';
import { SponsorCollection } from '../Helpers/sponsorMap';
import '../Assets/Styles/home.css';
import { getLengthOfLongestArray } from '../Helpers/arrayHelpers';

import Picture from '../Assets/Images/Artists/eva_alkula.png';

function Home(props) {
  const {
    language,
   } = props;

  const [highestLength, setHighestLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  /**
   * Get information from backend (All artists)
   */
   const [artists, setArtists] = React.useState([]);
   const changeState2 = (prop) => { setArtists(prop); };
   if (artists.length === 0) {
     axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist`).then((res) => { const val = res.data; changeState2(val); });
   }
  useEffect(() => {
    const cb = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', cb);

    return () => {
      window.removeEventListener('resize', cb);
    };
  });

  // Content of the page by language
  let content = {
    english: {
      title: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      p1: 'Tampere Flute Fest 2022 will bring an eclectic program of icy sonic wonder this April 22nd-24th!',
      p2: 'Inspired by the wonders of nature, this year’s edition titled “JÄÄ • ICE”, will deliver a diverse range of in-person, and live-streamed events where innovation and the flute meet.',
      tickets: 'buy tickets',
      performing: 'Artists performing',
      highlights: 'Programme highlights',
      events: 'Program',
      previous: 'Highlights from previous years',
    },
    finnish: {
      title: 'Tampere Flute Fest (Finnish)',
      hall: 'Tampere Hall (Finnish)',
      p1: 'Tampere Flute Fest 2022 will bring an eclectic program of icy sonic wonder this April 22nd-24th! (Finnish)',
      p2: 'Inspired by the wonders of nature, this year’s edition titled “JÄÄ • ICE”, will deliver a diverse range of in-person, and live-streamed events where innovation and the flute meet. (Finnish)',
      tickets: 'buy tickets (Finnish)',
      performing: 'Artists performing (Finnish)',
      highlights: 'Programme highlights (Finnish)',
      events: 'Program (Finnish)',
      previous: 'Highlights from previous years (Finnish)',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  useEffect(() => {
    if (windowWidth >= 490) {
      const lengthToSet = getLengthOfLongestArray(artists, ProgramCardObject);
      setHighestLength(lengthToSet);
    } else {
      setHighestLength(4);
    }
  }, [windowWidth]);

  return (
    <>
      <div className="dashboard-banner">
        <div className="dashboard-content">
          <span className="top-text">{content.title}</span>
          <h1>ICE · JÄÄ</h1>
          <span className="meta-text">
            22.-24.4.2022 @
            {content.hall}
          </span>
        </div>
      </div>
      <main>
        <div className="promo-holder">
          <div className="container">
            <div className="promo-link">
              <iframe
                width="900"
                height="470"
                src="https://www.youtube.com/embed/Q_0dzMVJ07w?autoplay=1&mute=1"
                title="TFF Promo video"
                frameBorder="0"
                allow="accelerometer; autoplay;
                  clipboard-write; encrypted-media;
                  gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="info-text-holder">
          <div className="container">
            <div className="info-text-block">
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <div className="button-wrap">
                <PrimaryButton
                  buttonText={content.tickets}
                  showIcon
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="artist-section">
            <SectionHeader
              sectionTitle={content.performing}
              showAll
              pageLink="artists"
              language={language}
            />
            <div className="artist-row">
              {artists.slice(0, 5).map((artistObj) => (
                <ArtistCollection
                  artistId={artistObj.artistid}
                  artistImage={Picture}
                />
            ))}
            </div>
          </div>
          <div className="program-highlight-section">
            <SectionHeader
              sectionTitle={content.highlights}
              showAll
              pageLink="programme"
              language={language}
            />
            <div className="program-card-row">
              {ProgramCardObject.slice(0, highestLength).map((cardObj) => (
                <ProgramCard
                  key={cardObj.id}
                  cardImage={cardObj.programImage}
                  cardName={cardObj.programName}
                  cardTitle={cardObj.programTitle}
                  language={language}
                />
            ))}
            </div>
          </div>
          <div className="events-section">
            <SectionHeader
              sectionTitle={content.events}
              showAll={false}
            />
            <div className="card-row">
              { CardObject.map((cardObj) => (
                <NormalCard
                  key={cardObj.id}
                  cardTitle={cardObj.eventTitle}
                  cardImage={cardObj.eventImage}
                  cardLink={cardObj.eventUrl}
                />
           ))}
            </div>
          </div>
          <div className="button-wrap">
            <PrimaryButton
              buttonText={content.tickets}
              showIcon
            />
          </div>
          <div className="highlight-section">
            <SectionHeader
              sectionTitle={content.previous}
              showAll={false}
            />
            <div className="thumbnail-row">
              {ThumbnailCardObject.slice(0, 8).map((cardObj) => (
                <ThumbnailCard
                  key={cardObj.id}
                  cardImage={cardObj.thumbnailImage}
                  videoId={cardObj.videoId}
                />
            ))}
            </div>
          </div>
          <div className="sponsor-section">
            <SectionHeader
              sectionTitle="Sponsors"
              showAll={false}
            />
            <ul className="sponsors-list">
              {SponsorCollection.map((sponsorObj) => (
                <SponsorDetail
                  key={sponsorObj.id}
                  sponsorImage={sponsorObj.sponsorImage}
                  sponsorLink={sponsorObj.sponsorLink}
                />
            ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

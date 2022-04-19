import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PrimaryButton from '../Components/primaryButton';
import SectionHeader from '../Components/sectionHeader';
import NormalCard from '../Components/normalCard';
import ThumbnailCard from '../Components/thumbnailCard';
import ProgramCard from '../Components/programCard';
import ArtistCollection from '../Components/artistDefault';
import ProgramCollection from '../Components/programDefault';
import SponsorDetail from '../Components/sponsorDetail';
import { CardObject } from '../Helpers/NormalCardImageMap';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
import DefaultButton from '../Components/defaultButton';
import { SponsorCollection } from '../Helpers/sponsorMap';
import '../Assets/Styles/home.css';
import { getLengthOfLongestArray } from '../Helpers/arrayHelpers';
import ShowHideNav from '../Helpers/showHideNav';

function Home(props) {
  const {
    language, handleSetLanguage, artists,
   } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [highestLength, setHighestLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
      performing: 'Artists performing',
      highlights: 'Programme highlights',
      events: 'Program',
      previous: 'Highlights from previous years',
      ticketLink: 'https://www.lippu.fi/en/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
    },
    finnish: {
      title: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      p1: 'Tampere Flute Fest 2022 vie matkalle halki lumen ja jään 22.-24. huhtikuuta!',
      p2: 'Tämän vuoden teema “JÄÄ//ICE” saa inspiraationsa luonnon ihmeistä ja luvassa on musiikillisesti monipuolinen valikoima tapahtumia, joissa voit kokea huilun uusilla tavoilla, paikan päällä tai verkon välityksellä osallistuen.',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
      performing: 'Artistit',
      highlights: 'Poimintoja ohjelmistosta',
      events: 'Tapahtumat',
      previous: 'Kohokohtia aikaisemmilta vuosilta',
      ticketLink: 'https://www.lippu.fi/artist/tampere-flute-fest/',
      streamLink: 'https://www.lippu.fi/eventseries/tampere-flute-fest-2022-livestriimi-3116312/',
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
      <ShowHideNav
        language={language}
        handleSetLanguage={handleSetLanguage}
      />
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
              <ul className="btn-groups">
                <li>
                  <PrimaryButton
                    url={content.ticketLink}
                    buttonText={content.buyTickets}
                    showIcon
                  />
                </li>
                <li>
                  <DefaultButton
                    url={content.streamLink}
                    buttonText={content.buyStreaming}
                    showIcon
                  />
                </li>
              </ul>
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
                  artists={artists}
                />
            ))}
            </div>
          </div>
          <div className="program-section">
            <SectionHeader
              sectionTitle={content.highlights}
              showAll
              pageLink="programme"
              language={language}
            />
            <div className="program-row">
              {[...Array(9).keys()].map((id) => (
                <ProgramCollection
                  programId={id}
                  language={language}
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
          <ul className="btn-groups">
            <li>
              <PrimaryButton
                url={content.ticketLink}
                buttonText={content.buyTickets}
                showIcon
              />
            </li>
            <li>
              <DefaultButton
                url={content.streamLink}
                buttonText={content.buyStreaming}
                showIcon
              />
            </li>
          </ul>
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

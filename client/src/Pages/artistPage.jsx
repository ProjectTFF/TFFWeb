import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PrimaryButton from '../Components/primaryButton';
import ThumbnailCard from '../Components/thumbnailCard';
import ArtistCollection from '../Components/artistDefault';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import SectionHeader from '../Components/sectionHeader';
import { ArtistPictureMap } from '../Helpers/ArtistPictureMap';
import DefaultButton from '../Components/defaultButton';
import Banner from '../Components/banner';

import '../Assets/Styles/artistPage.css';

function ArtistPage(props) {
  const {
    language, handleSetLanguage,
   } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('src');
      if (element) {
        element.scrollIntoView();
        if (window.innerWidth >= 1024) {
          window.scrollBy(0, -70);
        } else {
          window.scrollBy(0, -5);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname]);

  const { artistSlug } = useParams();

  useEffect(() => {
  }, [artistSlug]);

  /**
   * Get information from backend (This artist)
   */
  const [id, setId] = React.useState(artistSlug);

  const [artist, setArtist] = React.useState([]);
  const changeState = (prop) => { setArtist(prop); };
  const [links, setLinks] = React.useState([]);
  const changeLinks = (prop) => { setLinks(prop); };
  if (artist.length === 0 || id !== artistSlug) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/${artistSlug}`).then((res) => { const val = res.data; changeState(val); setId(artistSlug); });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist/links/${artistSlug}`).then((res) => { const val = res.data; changeLinks(val); });
  }

  /**
   * Get information from backend (All artists)
   */
  const [artists, setArtists] = React.useState([]);
  const changeState2 = (prop) => { setArtists(prop); };
  if (artists.length === 0) {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/artist`).then((res) => { const val = res.data; changeState2(val); });
  }

  // Content of the page by language
  let content = {
    english: {
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      exit: ' Back to artists',
      website: 'Website',
      biography: artist.biography_eng,
      performing: `See what ${artist.firstname} ${artist.lastname} will be performing in 2022`,
      previous: `Watch ${artist.firstname} ${artist.lastname}'s previous work`,
      all: 'See all artists',
      // tickets: 'buy tickets',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
    },
    finnish: {
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      exit: ' Näytä kaikki artistit',
      website: 'Websivu',
      biography: artist.biography_fin,
      performing: `Näytä missä ${artist.firstname} ${artist.lastname} esiintyy tämän vuoden festivaaleilla`,
      previous: 'Katso artistin edellisiä esiintymisiä',
      all: 'Näytä kaikki artistit',
      // tickets: 'osta liput',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  return (
    <>
      <Banner
        bannerTitle={content.bannerTitle}
        bannerHall={content.hall}
        language={language}
        handleSetLanguage={handleSetLanguage}
      />
      <div className="artist">
        <div className="container">
          <div className="artist-banner">
            <NavLink className="all-artists-top" to="/artists">
              &#8592;
              {content.exit}
            </NavLink>
            <div id="src" className="maininfos">
              <div className="box">
                <img src={ArtistPictureMap[id - 1].programImage} alt={` ${artist.firstname} ${artist.lastname}`} />
              </div>
              <div className="artist-intro">
                <h1>
                  {` ${artist.firstname} ${artist.lastname}`}
                </h1>
                <ul className="artist-info-list">
                  {links.website == null
                  ? null
                  : (
                    <li>
                      <a href={links.website}>
                        {content.website}
                      </a>
                    </li>
                  ) }
                  {links.youtube == null
                  ? null
                  : (
                    <li>
                      <a href={links.youtube}>
                        Youtube
                      </a>
                    </li>
                  ) }
                  {links.facebook == null
                  ? null
                  : (
                    <li>
                      <a href={links.facebook}>
                        Facebook
                      </a>
                    </li>
                  ) }
                  {links.instagram == null
                  ? null
                  : (
                    <li>
                      <a href={links.instagram}>
                        Instagram
                      </a>
                    </li>
                  ) }
                  {links.spotify == null
                  ? null
                  : (
                    <li>
                      <a href={links.spotify}>
                        Spotify
                      </a>
                    </li>
                  ) }
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            {content.biography}
            <br />
            <br />
            <NavLink className="nav-link" to="/">
              {content.performing}
              <KeyboardDoubleArrowRightIcon />
            </NavLink>
          </div>
          <div className="previous-work">
            <SectionHeader
              sectionTitle={content.previous}
            />
            <div className="thumbnail-row">
              {ThumbnailCardObject.slice(0, 4).map((cardObj) => (
                <ThumbnailCard
                  key={cardObj.id}
                  cardImage={cardObj.thumbnailImage}
                />
          ))}
            </div>
          </div>
          <div className="all-artists-bottom">
            <SectionHeader
              sectionTitle={content.all}
              language={language}
              showAll
              pageLink="artists"
            />
            <div className="artist-row">
              {id < artists.length - 5
                ? artists.slice(id, parseInt(id, 10) + 5).map((artistObj) => (
                  <ArtistCollection
                    artistId={artistObj.artistid}
                  />
              )) : artists.slice(id, artists.length).map((artistObj) => (
                <ArtistCollection
                  artistId={artistObj.artistid}
                />
              ))}
              {id < artists.length - 5 ? null
                : artists.slice(0, parseInt(id, 10) - artists.length + 5).map((artistObj) => (
                  <ArtistCollection
                    artistId={artistObj.artistid}
                  />
              ))}
            </div>
            <ul className="btn-groups">
              <li>
                <PrimaryButton
                  buttonText={content.buyTickets}
                  showIcon
                />
              </li>
              <li>
                <DefaultButton
                  url="https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/"
                  buttonText={content.buyStreaming}
                  showIcon
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistPage;

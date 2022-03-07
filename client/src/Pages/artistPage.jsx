import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import iconMap from '../Helpers/iconMap';
import artistsMap from '../Helpers/artistsMap';
import Arrow from '../Assets/Images/Arrow.svg';

import '../Assets/Styles/artistPage.css';

function ArtistPage() {
  const { artistSlug } = useParams();

  useEffect(() => {
  }, [artistSlug]);

  return (
    <div className="artistinfos">
      <NavLink className="allartists" to="/artists">
        &#8592; Back to artists
      </NavLink>

      <div className="maininfos">
        <div className="box">
          <img src={artistsMap.Alexis} alt={` ${artistSlug}`} />
          <h1>
            {` ${artistSlug}`}
          </h1>
        </div>
        <ul>
          <li>
            <a href="https://twitter.com/">
              <img src={iconMap.TikTok} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/">
              <img src={iconMap.Instagram} alt="TikTok" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <img src={iconMap.TikTok} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <img src={iconMap.Instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src={iconMap.TikTok} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="bottom">
        <h2>See all artists</h2>
        <NavLink className="allartistsbis" to="/artists">
          See All
          <span> &gt;&gt;</span>
        </NavLink>
        <hr />
      </div>

      <div className="bottom-gradient">
        <NavLink className="nav-link" to="/tickets_and_streaming">
          Buy tickets
          <img className="arrow" src={Arrow} alt=">" />
        </NavLink>
      </div>
    </div>
  );
}

export default ArtistPage;

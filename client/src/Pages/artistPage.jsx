import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ArtistPage() {
  const { artistSlug } = useParams();

  useEffect(() => {
  }, [artistSlug]);

  return (
    <div className="artist">
      <h6 className="mb-5">
        The artist name is
        {` ${artistSlug}`}
      </h6>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <Link to="/artists">
        Return to main
      </Link>
    </div>
  );
}

export default ArtistPage;

import React from 'react';
import { Link } from 'react-router-dom';
import linksData from '../../data';

const LinkList = () => {
  return (
    <div style={{marginTop: 24}}>
      {linksData.map(link => (
        <div key={link.name} style={{margin: 8}}>
          <Link to={`/link/${link.name}`}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default LinkList;

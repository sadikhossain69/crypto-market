import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to,}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ margin: '5px', textDecoration: match ? "underline" : "none", color: match ? 'cyan' : 'black' }}
          to={to}
          
        >
          {children}
        </Link>
      </div>
    );
  }

  export default CustomLink
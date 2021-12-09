import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../../utilities/projects-api';

export default function ProjectDetailPage() {
  const [projects, setProjects] = useState([]);
  
  useEffect(function(){
    (async ()=> setProjects(await getAll(projects)))();
  },[]);

  return (
    <>
      <h1>DashboardPage</h1> 
      <div className="row row-cols-1 row-cols-md-3 g-4">
       { 
        projects.map((p) => (
          <Link to={`/projects/${p._id}`}>
           <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text">{p.description}</p>
            </div>
          </div>
        </div>
        </Link>
        ))
      }
      </div>

      <p> Intake Form Incomplete</p>
    </>
  );
}
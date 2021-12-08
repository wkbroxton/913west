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
      <div class="row row-cols-1 row-cols-md-3 g-4">
       { 
        projects.map((p) => (
          <Link to={`/projects/${p._id}`}>
           <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{p.name}</h5>
              <p class="card-text">{p.description}</p>
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
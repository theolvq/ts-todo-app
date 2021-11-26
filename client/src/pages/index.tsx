import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Project } from '../types';
import projectService from '../services/project';

const SERVER_URL = 'http://localhost:3001';

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await projectService.getProjects();
      setProjects(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        {projects.map((project: Project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

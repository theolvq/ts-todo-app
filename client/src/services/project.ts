import axios from 'axios';
import { Project } from '../types';

const SERVER_URL = process.env.SERVER_URL;

// Get all projects
export const getProjects = async () => {
  const { data } = await axios.get(`/api/projects`);
  return data;
};

// Get a project by id
export const getProjectById = async (id: string) => {
  const { data } = await axios.get(`/api/projects/${id}`);
  return data;
};

// Create a new project
export const createProject = async (project: Project) => {
  const { data } = await axios.post(`/api/projects`, project);
  return data;
};

// Update a project
export const updateProject = async (project: Project) => {
  const { data } = await axios.put(`/api/projects/${project.id}`, project);
  return data;
};

// Delete a project
export const deleteProject = async (id: string) => {
  await axios.delete(`${SERVER_URL}/api/projects/${id}`);
};

const projectService = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

export default projectService;

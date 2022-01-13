import axios from 'axios'
import { getToken } from '../lib/auth'
import { baseUrl }  from  '../../config'

export function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllProjects() {
  return axios.get(`${baseUrl}/projects`)
}

export function getSingleProject(projectId) {
  return axios.get(`/api/projects/${projectId}`)
}

export function createProject(formData) {
  return axios.post('/api/projects', formData, headers())
}

export function deleteProject(projectId) {
  return axios.delete(`/api/projects/${projectId}`, headers())
}

export function register(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function login(formData) {
  return axios.post(`${baseUrl}/login`, formData) 
}
import axios from "axios";


const BASE_URL = "https://ems-backend-xqur.onrender.com"; 
const DEPARTMENT_REST_API_BASE_URL = `${BASE_URL}/api/departments`;

export const getAllDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_URL);

export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL, department);

export const getDepartmentById = (departmentId) => axios.get(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`);

export const updateDepartment = (departmentId, department) => axios.put(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`, department);

export const deleteDepartment = (departmentId) => axios.delete(`${DEPARTMENT_REST_API_BASE_URL}/${departmentId}`);

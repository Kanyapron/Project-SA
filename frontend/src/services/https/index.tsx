import { MemberInterface } from "../../interfaces/Member";

import { LoginInterface } from "../../interfaces/Login";

import axios from "axios";

const apiUrl = "http://localhost:8000";

const Authorization = localStorage.getItem("token");

const Bearer = localStorage.getItem("token_type");


const requestOptions = {

  headers: {

    "Content-Type": "application/json",

    Authorization: `${Bearer} ${Authorization}`,

  },

};


async function Login(data: LoginInterface) {

  return await axios

    .post(`${apiUrl}/signin`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


async function GetMember() {

  return await axios

    .get(`${apiUrl}/users`, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


async function GetMemberById(id: string) {

  return await axios

    .get(`${apiUrl}/user/${id}`, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


async function UpdateMemberById(id: string, data: MemberInterface) {

  return await axios

    .put(`${apiUrl}/user/${id}`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


async function DeleteMemberById(id: string) {

  return await axios

    .delete(`${apiUrl}/user/${id}`, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


async function CreateMember(data: MemberInterface) {

  return await axios

    .post(`${apiUrl}/signup`, data, requestOptions)

    .then((res) => res)

    .catch((e) => e.response);

}


export {
  Login,

  GetMember,

  GetMemberById,

  UpdateMemberById,

  DeleteMemberById,

  CreateMember,

};
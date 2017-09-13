/*
  Exports action name and function for sample action
*/
import axios from 'axios';
import {SERVER_URL} from '../../config';
// Action name
export const REGISTER="REGISTER";

// Action Function
export function register(data){
  let config =  config = {
      url: SERVER_URL+'/subscribe',
      method: 'POST',
      data : data,
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Api-Key": "kPxXeiN5ON7VPIzuY0tjE5dFzpLkq4rJ1ff7VIsF"
      }
  }

  return {
    type : REGISTER,
    payload : axios.request(config)
  }
}

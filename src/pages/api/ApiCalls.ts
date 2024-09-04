import { Api } from "./Api";


const get = async (url: any) => {
  var data;
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  //console.log('test data',Api + 'dashboard')
  await fetch(Api + url, {
    method: 'GET',
    headers: header,
    //Request Type
  })
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson)
      data = responseJson;
    })
    .catch((error) => console.error(error));
  return data
}

const post = async (url: any, formdata: any) => {
  var data;
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await fetch(Api + url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(formdata)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      data = responseJson
    })
    .catch((error) => console.error(error));
  return data
}

const fetchData = async (url: any, formdata: any) => {
  var data;
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  await fetch(Api + url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(formdata)
  })
    .then((response) => response.blob())
    .then((responseJson) => {
      data = responseJson
    })
    .catch((error) => console.error(error));
  return data
}


const postimage = async (url: any, formdata: any) => {
  var data;
  let header = {
    // Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
  await fetch(Api + url, {
    method: 'POST',
    headers: header,
    body: formdata,
  })
    .then((response) => response.json())
    .then((responseJson) => {
      data = responseJson
    })
    .catch((error) => console.error(error));
  return data
}
export { get, post, postimage, fetchData }
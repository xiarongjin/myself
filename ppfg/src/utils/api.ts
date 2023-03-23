const baseURL = 'http://webxrj.top:3839'
import type { Record } from '@/store'
export async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(baseURL + url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  return response.json() // parses JSON response into native JavaScript objects
}

export async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(baseURL + url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
  return response.json() // parses JSON response into native JavaScript objects
}

export const getTeams = async () => {
  try {
    const res = await getData('/teams/search')
    return res.data
  } catch (error) {
    console.log(error)

    return ''
  }
}

export const getMembers = async () => {
  try {
    const res = await getData('/members/search')
    return res.data
  } catch (error) {
    console.log(error)

    return ''
  }
}

export const getRecords = async () => {
  try {
    const res = await getData('/records/search')
    return res.data
  } catch (error) {
    console.log(error)

    return ''
  }
}

export const postRecord = async ({
  team1,
  catch1,
  team2,
  match,
  point,
  memberId,
  niceD,
  assist,
  fault
}: Record) => {
  try {
    const res = await postData('/records/insert', {
      team1,
      catch1,
      team2,
      match,
      point,
      memberId,
      niceD,
      assist,
      fault
    })
    return res.data
  } catch (error) {
    console.log(error)

    return ''
  }
}

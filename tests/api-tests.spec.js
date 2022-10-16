import { test, expect } from '@playwright/test'
test.describe.serial('API TEST CASES', () => {
  let authToken
  let responseData
  const strContains = (str) => {
    return str.includes('http://10.0.0.113:82/')
  }
  const appVersionKeys = ['apiVersion', 'iosVersion', 'webVersion']
  test('Login API', async({ request }) => {
    const response = await request.post('http://10.0.0.113:8084/api/v1/auth/formlogin', {
      data: {
        userName: 'auto.sa',
        password: 'Ex3lon',
      }
    })
    expect(response.status()).toBe(200)
    authToken = JSON.parse(await response.text())['accessToken']
    // console.log(authToken)
  })

  test('User Info on Site API', async({ request }) => {
    const response = await request.get('http://10.0.0.113:8084/api/v1/user/info', {
      headers : {
        ApiAuthorization: authToken
      }
    })
    expect(response.status()).toBe(200)
    responseData = JSON.parse(await response.text())['result']['isSuperAdmin']
    // console.log(responseData)
    expect(responseData).toBeTruthy()
  })

  test('Total Functional Areas on Site', async({ request }) => {
    const response = await request.get('http://10.0.0.113:8084/api/v1/functionalarea', {
      headers : {
        ApiAuthorization: authToken
      }
    })
    expect(response.status()).toBe(200)
    responseData = JSON.parse(await response.text())['result']
    // console.log(responseData.length)
    expect(responseData.length).toEqual(180)
  })

  test('Verify Filepaths', async({ request }) => {
    const response = await request.get('http://10.0.0.113:8084/api/v1//file/filepath', {
      headers : {
        ApiAuthorization: authToken
      }
    })
    expect(response.status()).toBe(200)
    responseData = JSON.parse(await response.text())['result'].map(fileUrls => fileUrls.value)
    // console.log(responseData)
    expect(responseData.every(strContains)).toBeTruthy()
  })

  test('Verify appinfo', async({ request }) => {
    const response = await request.get('http://10.0.0.113:8084/api/v1/appinfo', {
      headers : {
        ApiAuthorization: authToken
      }
    })
    expect(response.status()).toBe(200)
    responseData = JSON.parse(await response.text())['result']
    // console.log(responseData)
    expect(appVersionKeys.every(element => responseData.hasOwnProperty(element))).toBeTruthy()
  })
})
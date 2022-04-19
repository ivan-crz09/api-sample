 const request =  require('../superTestRequest')

test('gets hello message', async () => {
    const response = await request.get('/hello')
    expect(response.status).toEqual(200)
    expect(response.text).toEqual("Hello World")
})


test('get default results when not send any limit', async () => {
    const response = await request.get('/pokemon')
    expect(response.status).toEqual(200)
    expect(response.body.results.length).toEqual(20)
})

test('get 30 results when send a limit', async () => {
    const response = await request.get('/pokemon?limit=30')
    expect(response.status).toEqual(200)
    expect(response.body.results.length).toEqual(30)
})
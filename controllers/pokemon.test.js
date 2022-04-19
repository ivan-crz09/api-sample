 const request =  require('../superTestRequest')

test('gets hello message', async () => {
    const response = await request.get('/hello')
    expect(response.status).toEqual(200)
    expect(response.text).toEqual("Hello World")
})


test('get 20 results when not send any param', async () => {
    const response = await request.get('/pokemon')
    expect(response.status).toEqual(200)
    expect(response.body.results.length).toEqual(20)
})
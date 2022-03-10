import request from 'supertest'


import app from '../app'

const requestHeaders = {
    Authorization: `Token ${process.env.GITHUB_ACCESS_KEY}`,
    Accept: 'application/json'
}
// success
describe('GET /', () => {
    it('Should throw error for required parameter search' , (done) =>{
        request(app)
            .get('/?page=1&order=desc&per_page=5&sort=stars')
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
    it('Should throw error for invalid order value' , (done) =>{
        request(app)
            .get('/?page=1&order=dsc&per_page=5&sort=stars')
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })

    it('Should return repos list', (done) => {
        request(app)
            .get(
                '/?page=1&order=desc&search=mongodb://localhost:27017+in:file&per_page=5&sort=stars'
            )
            .set(requestHeaders)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
})

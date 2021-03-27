//Imports
const axios = require('axios');
const {expect } = require('chai');
const {
   BOOKS_FIELDS,
   BASE_URL
} = require('../../utils//utils')

//Global variables
let response;

//Tests
describe("When the user wants to list all the books ", () =>{
    before(async () =>{
       response =   await axios.get(BASE_URL)
    });

   it("Then it returns status code 200", () =>{
         expect(response.status).eql(200)
      });

   it("Then it returns json content", () =>{
         expect(response.headers['content-type']).to.contain('application/json')
      });

      it("Then it returns that each of the books contains the id property", () =>{
         response.data.forEach(book =>
            expect(book).to.have.property(BOOKS_FIELDS[0])
         )
      });

   it("Then it returns that each of the books contains the name property", () =>{
         response.data.forEach(book =>
            expect(book).to.have.property(BOOKS_FIELDS[1])
         )
      });

   it("Then it returns that each of the books contains the author property", () =>{
         response.data.forEach(book =>
            expect(book).to.have.property(BOOKS_FIELDS[2])
         )
      });

   it("Then it returns that a book contains 3 properties", () =>{
         expect(response.data.length).to.be.greaterThan(0);
         const book = response.data[0];
         BOOKS_FIELDS.forEach(field =>
            expect(book).to.have.property(field)
         )
      });  
});
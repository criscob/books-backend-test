//Imports
const axios = require('axios');
const {expect } = require('chai');
const {
   BASE_URL
} = require('../../utils//utils')
const {random } = require('faker');

//Global variables
let response;
let response_update;

const book_test = {
   name: `The ${random.words(2)}`,
   author: `Mr. ${random.words(1)}`
 }
 const book_update = {
   name: `The ${random.words(2)}`,
   author: `Mr. ${random.words(1)}`
}
//Tests
describe("The user creates a new book in the app ", () =>{
    
  before(async () => {
      response = await axios.post(BASE_URL, book_test);
      book_id= response.data.id;

  });

  after(async () => {
        deleteResponse = await axios.delete(`${BASE_URL}/${book_id}`);
  });

    it("Then it return status code 200", () =>{
        expect(response.status).eql(200)
      });

    it("Then it return application/json as content type", () => {
        expect(response.headers['content-type']).to.contain('application/json');
      });

    describe("When the user wants to update a book ", () =>{

      before(async () => {
         response_update = await axios.put(`${BASE_URL}/${book_id}`, book_update);
      });


      it("Then returns that the book was updated with the new name", () =>{
        expect(response_update.data.name).eql(book_update.name)
      
      });

      it("hen returns that the book was updated with the new author", () =>{
        expect(response_update.data.author).eql(book_update.author)
      
      });
      it("Then it return status code 200", () =>{
        expect(response_update.status).eql(200)

     });

      it("Then it return application/json as content type", () => {
          expect(response.headers['content-type']).to.contain('application/json');
      });

  });
     
});
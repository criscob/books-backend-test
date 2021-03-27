//Imports
const axios = require('axios');
const {expect } = require('chai');
const {
   BASE_URL,
} = require('../../utils//utils')
const {random } = require('faker');

//Global variables
let response;
const book_test = {
   name: `The ${random.words(2)}`,
   author: `Mr. ${random.words(1)}`
 }

 //Tests
describe("When the user wants to create a new book in the app", () =>{
   
   before(async () => {
      books_list = await axios.get(BASE_URL);
      response = await axios.post(BASE_URL, book_test);
      id_book = response.data.id;
      newBooks = await axios.get(BASE_URL);
  });

  after(async () => {
      deleteResponse = await axios.delete(`${BASE_URL}/${id_book}`);
  });

      it("Then it returns a response with code 200", () => {
            expect(response.status).eql(200);
         });

      it("So the list increments by one", () => {
            expect(newBooks.data.length).eql(books_list.data.length + 1);
         });


      it("Then it returns a book with the id property", () => {
            bookCreated = response.data;
            expect(bookCreated).to.have.property('id');
         });

      it("Then it returns a book with the name property", () => {
            bookCreated = response.data;
            expect(bookCreated).to.have.property('name');
         });

      it("Then it returns a book with the author property", () => {
            bookCreated = response.data;
            expect(bookCreated).to.have.property('author');
         });

      it("Then it returns application/json as content type", () => {
            expect(response.headers['content-type']).to.contain('application/json');
         });

});
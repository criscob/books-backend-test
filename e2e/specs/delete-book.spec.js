//Imports
const axios = require('axios');
const {expect } = require('chai');
const {
   BASE_URL
} = require('../../utils//utils')
const {random } = require('faker');
 
//Global variables
let response;
const book_test = {
   name: `The ${random.words(2)}`,
   author: `Mr. ${random.words(1)}`
 }

 //Tests
describe("The user creates a new book in the app", () => {

   before(async () => {
       response = await axios.post(BASE_URL, book_test);
       book_id = response.data.id;
   });

   describe("When the user wants to delete a book from the app", () => {
       before(async () => {
           book_list = await axios.get(BASE_URL);
           response = await axios.delete(`${BASE_URL}/${book_id}`);
           book_list_current= await axios.get(BASE_URL);
       });

       it("Then it returns a response with code 200", () => {
            expect(response.status).eql(200);
         });

       it("Then the deleted book should not be in the current list of books", () =>{
            const book_deleted = book_list_current.data.find(book => book.id === book_id);
            expect(book_deleted).eql(undefined);
        });

       it("So the list decreases by one", () => {
           expect(book_list_current.data.length).eql(book_list.data.length-1);
        });

      
   })
});
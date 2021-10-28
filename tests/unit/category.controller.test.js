const categoryController = require('../../src/controllers/categoryController');
const categoryService = require('../../src/service/categoryService');

categoryService.createNewCategory = jest.fn();

getMockedResponse = () => {
    const res = {}
    res.status = () => res;
    res.json = () => res;

    return res;
}

getMockedRequest = () => {
    const req = {
        body: {
            name: "Household",
            description: "Household items"
        }
    }  

    return req;
}

describe("categoryController.createCategory", () => {

  
    it("Should have a createCategory function", () => {
        expect(typeof categoryController.createCategory).toBe("function");
    });
    
    it("Should call categoryService.createNewCategory", async () => {

        const req = getMockedRequest();
        const res = getMockedResponse();

        await categoryController.createCategory(req, res);
        expect(categoryService.createNewCategory).toBeCalled();
    }, 5000);
})
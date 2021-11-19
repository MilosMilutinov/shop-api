const categoryController = require("../../src/controllers/categoryController");
const categoryService = require("../../src/service/categoryService");
const categoryModel = require("../../src/model/category");
const httpMocks = require("node-mocks-http");
const Utils = require("../utils/util.service");
const mockDataCategories = require("./categories.json");
const mockDataCategory = require("./category.json");
const id = "someid123";

jest.mock("../../src/model/category.js");

const myResponse = Utils.myResponse;

Utils.myResponse = jest.fn();

describe("Category has and can use CreateNewCategory function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should see if function exists", () => {
    expect(typeof categoryService.createNewCategory).toBe("function");
  });
  /*   it("Should call CreateNewCategory function", async () => {
    await categoryService.createNewCategory(mockDataCategory); error
    expect(categoryModel).toBeCalledWith(mockDataCategory);
  }); */
});

describe("Category has and can use findAllCategories", () => {
  it("Should see if function exists", () => {
    expect(typeof categoryService.findAllCategories).toBe("function");
  });
  it("Should call findAllCategories", async () => {
    await categoryService.findAllCategories();
    expect(categoryModel.find).toBeCalled();
  });
  /*  it('Should return status and all categories', async() => {
        Utils.myResponse = myResponse;
        categoryModel.find.mockReturnValue(mockDataCategories);
        const result = await categoryService.findAllCategories();
        expect(result.status).toBe(200);
        // expect(Array.isArray(result.bod)).toBeTruthy(); error
    })*/
});

describe("categoryService.findCategoryByName", () => {
  beforeEach(() => {
    Utils.myResponse = jest.fn();
  });
  it("Should have findCategoryByName function", () => {
    expect(typeof categoryService.findCategoryByName).toBe("function");
  });
  it("Should call FindCategoryByName function", async () => {
    await categoryService.findCategoryByName(id);
    expect(categoryModel.findOne).toBeCalledWith({ name: id });
  });
  /*     it('Should throw an error if not found', async() => {
        categoryModel.findById.mockReturnValue(null);
        await categoryService.findCategoryById(id);
        expect(Utils.myResponse).toBeCalledWith(404, { 
            message: "Nothing found!"
        }); 
    }) */
});

describe("categoryService.findCategoryByID", () => {
  beforeEach(() => {
    Utils.myResponse = jest.fn();
  });
  it("Should have findCategoryByID function", () => {
    expect(typeof categoryService.findCategoryById).toBe("function");
  });
  it("Should call findCategoryByID function", async () => {
    await categoryService.findCategoryById(id);
    expect(categoryModel.findOne).toBeCalledWith({ _id: id });
  });
});

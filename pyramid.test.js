const { pyramidTraverse, createPyramid, makePyramidArray, Tree } = require('./pyramidTraverse');
const validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const invalidArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result;

describe('Make Pyramid Array', () => {
  test('Should return an array if a valid array is inputted', () => {
    result = makePyramidArray(validArray);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result[0]).toEqual([1]);
    expect(result[1]).toEqual([2, 3])
  });

  test('Should return null if an invalid array is inputted', () => {
    result = makePyramidArray(invalidArray);
    expect(result).toBeNull();
  });
});

describe('Create Pyramid', () => {
  const nested = makePyramidArray(validArray);
  const pyramid = createPyramid(nested);

  test("Should return a value that's an instance of a Tree", () => {
    expect(pyramid).toBeInstanceOf(Tree);
    expect(pyramid.left).toBeInstanceOf(Tree);
  });

  test('Should return a node with left and right values being instances of a Tree', () => {
    expect(pyramid.left).toBeInstanceOf(Tree);
    expect(pyramid.right).toBeInstanceOf(Tree);
  });

  test('Should return a balanced pyramid where a nodes may share the same child node', () => {
    expect(pyramid.left.right).toBe(pyramid.right.left);
  })
});

describe('Pyramid Traverse', () => {
  test('Should return null if an invalid array is passed in', () => {
    result = pyramidTraverse(invalidArray, 20);
    expect(result).toBeNull();
  });

  test('Should return null if no path is found for the current target', () => {
    result = pyramidTraverse(validArray, 40);
    expect(result).toBeNull();
  });

  test('Should return a string if a path is found', () => {
    result = pyramidTraverse(validArray, 56);
    expect(result).toEqual(expect.any(String));
  });

  test('Should return the proper path for the target', () => {
    expect(result).toHaveLength(3);
    expect(result).toBe('LLL');
  });

  test('Should traverse the entire tree if last path is the targeted path', () => {
    result = pyramidTraverse(validArray, 180);
    expect(result).toBe('RRR');
  })
});
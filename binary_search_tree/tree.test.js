import Tree from "./tree"

let testTree

afterEach(() => {
    testTree = null
})

test('initialize tree with 1 value', () => {
    testTree = Tree([1])
    expect(testTree.root.value).toBe(1)
});

test('initialize with more complex tree', () => {
    testTree = Tree([15,10,8,12, 18,25,20])
    expect(testTree.root.value).toBe(15)
});

test('initialize tree with more  values', () => {
    testTree = Tree([1, 3, 2])
    expect(testTree.root.value).toBe(2)
});


test('buildTree ordered', () => {
    testTree = Tree(null)
    expect(testTree.buildTree([1,2,3,4,5]).value).toBe(3)

    
});

test('buildTree not ordered', () => {
    testTree = Tree(null)
    expect(testTree.buildTree([5,3,2,1,4]).value).toBe(3)

    
});

test('insert value on empty tree', () => {
    testTree = Tree([])
    testTree.insert(11)
    expect(testTree.root.value).toBe(11)
    
});

test('insert value on non-empty tree', () => {
    testTree = Tree([1, 5, 9])
    testTree.insert(11)
    expect(testTree.root.right.right.value).toBe(11)
    testTree.insert(2)
    expect(testTree.root.left.right.value).toBe(2)
    
});

test('delete existing (leaf) value from tree', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15, 18])
    testTree.remove(1)
    expect(testTree.root.left.left).toBe(null)
    testTree.remove(14)
    expect(testTree.root.right.right).toBe(null)    
});

test('delete existing (non-leaf) value from tree - only 1 child', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15])
    testTree.delete(15)
    expect(testTree.root.right.value).toBe(14)
});

test('delete existing (non-leaf) value from tree - both children', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15])
    testTree.delete(5)
    expect(testTree.root.right.value).toBe(14)
    // TODO: complete this test case
});

test('delete non-existing value from tree', () => {
    testTree = Tree([1, 5, 6, 9, 14, 15, 18])
    testTree.remove(20)
    expect(testTree.root.right.right.value).toBe(18)
    expect(testTree.root.left.left.value).toBe(1)
    expect(testTree.root.value).toBe(9)
});
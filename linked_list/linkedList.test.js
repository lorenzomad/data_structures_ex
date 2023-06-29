import Node from "./node";
import LinkedList from "./linkedList"


let testList

beforeEach(() => {  
    testList = LinkedList()
})
afterEach(() => {
    testList = null
})

test('append a first node', () => {
    
    testList.append(4)
    expect(testList.listHead.value).toBe(4)
});

test('append second node check first 2 values', () => {
    
    
    testList.listHead = Node(4)
    testList.append(2)
    expect(testList.listHead.value).toBe(4)
    expect(testList.listHead.nextNode.value).toBe(2)
        
});

test('prepend when there is no node', () => {    
    testList.prepend(4)
    expect(testList.listHead.value).toBe(4)
});

test('prepend when first node already exists', () => {
    testList.listHead = Node(4)
    testList.prepend(2)
    expect(testList.listHead.value).toBe(2)
    expect(testList.listHead.nextNode.value).toBe(4)
        
});

test('check size of list with no nodes', () => {
    expect(testList.size()).toBe(0)
});

test('check size of list with 2 nodes', () => {
    testList.listHead = Node(1)
    testList.listHead.nextNode = Node(2)
    expect(testList.size()).toBe(2)
    
});

test('head of empty list', () => {
    expect(testList.head()).toBe(null)
});

test('head of non-empty list ', () => {
    
    const node1 = Node(1)
    testList.listHead = node1
    expect(testList.head()).toBe(node1)
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    expect(testList.head()).toBe(node1)
    
});

test('tail of empty list', () => {
    expect(testList.tail()).toBe(null)
});

test('tail of non-empty list', () => {
    const node1 = Node(1)
    testList.listHead = node1
    expect(testList.tail()).toBe(node1)
    const node2 = Node(2)
    testList.listHead.nextNode = node2
    expect(testList.tail()).toBe(node2)
});